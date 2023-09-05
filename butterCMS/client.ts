import { Account } from "$live/blocks/account.ts";
import { fetchAPI } from "deco-sites/std/utils/fetch.ts";
import { CategoriesData, Page, PostData, PostsData } from "./types.ts";

// const gql = (x: TemplateStringsArray) => x.toString().trim();

export interface Locale {
  /**
   * @title Locale
   */
  label: string;
  authToken: string;
}

export interface ConfigButterCMS extends Account {
  locales: Locale[];
  /**
   * @description Default value: en-us
   * @default en-us
   */
  defaultLocale: string;
  /**
   * @description Default value: v2
   * @default v2
   */
  apiVersion?: string;
}

export type ClientOCC = ReturnType<typeof createClient>;

const BASE_URL = `https://api.buttercms.com`;

export const createClient = (
  { locales = [], apiVersion = "v2", defaultLocale = "en-us" }: Partial<
    ConfigButterCMS
  > = {},
) => {
  const authToken =
    locales.find((locale) => locale.label === defaultLocale)?.authToken ?? "";

  const categories = () => {
    const params = new URLSearchParams({
      auth_token: authToken,
    });

    const url = new URL(
      `/${apiVersion}/categories?${params.toString()}`,
      BASE_URL,
    );

    return fetchAPI<CategoriesData>(url);
  };

  const post = (slug: string) => {
    const params = new URLSearchParams({
      auth_token: authToken,
    });

    const url = new URL(
      `/${apiVersion}/posts/${slug}?${params.toString()}`,
      BASE_URL,
    );

    return fetchAPI<PostData>(url);
  };

  const posts = (
    page: number,
    pageSize: number,
    excludeBody = true,
    tagSlug?: string,
    categorySlug?: string,
  ) => {
    const params = new URLSearchParams({
      auth_token: authToken,
      page: page.toString(),
      page_size: pageSize.toString(),
      exclude_body: excludeBody.toString(),
      category_slug: categorySlug ?? "",
      tag_slug: tagSlug ?? "",
    });

    const url = new URL(
      `/${apiVersion}/posts?${params.toString()}`,
      BASE_URL,
    );

    return fetchAPI<PostsData>(url);
  };

  const search = (
    page: number,
    pageSize: number,
    query: string,
  ) => {
    let params = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
      query: query ?? "",
      auth_token: authToken,
    });
    if (query == "") {
      params = new URLSearchParams({
        page: page.toString(),
        page_size: pageSize.toString(),
        auth_token: authToken,
      });
    }

    const url = new URL(
      `/${apiVersion}/search?${
        decodeURIComponent(params.toString()).replaceAll("+", "%20")
      }`,
      BASE_URL,
    );

    return fetchAPI<PostsData>(url);
  };

  const article = (
    page: number,
    pageSize: number,
    excludeBody = true,
    tagSlug?: string,
  ) => {
    const params = new URLSearchParams({
      auth_token: authToken,
      page: page.toString(),
      page_size: pageSize.toString(),
      exclude_body: excludeBody.toString(),
      tag_slug: tagSlug ?? "",
    });

    const url = new URL(
      `/${apiVersion}/posts?${params.toString()}`,
      BASE_URL,
    );

    return fetchAPI<PostsData>(url);
  };

  const pages = (locale = defaultLocale) => {
    const params = new URLSearchParams({
      auth_token: authToken,
      /**
       * @todo after add locales logic there is no use of defaultLocale
       */
      locale,
    });

    const url = new URL(
      `/${apiVersion}/pages/*/blog-v2?${params.toString()}`,
      BASE_URL,
    );

    return fetchAPI<Page>(url);
  };

  const fetchGraphQL = async <T>(
    variables: Record<string, unknown> = {},
  ) => {
    const { data, errors } = await fetchAPI<{ data?: T; errors: unknown[] }>(
      `https://olimpo.kavak.services/`,
      {
        method: "POST",
        body: JSON.stringify({
          operationName: "subscribeBlog",
          query:
            "mutation subscribeBlog($email:String!$path:String){subscribeBlog(email:$email path:$path){id userEmail articlePath}}",
          variables,
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbm9ueW1vdXMiOnRydWUsInVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTUuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImlwQWRkcmVzcyI6IjEzMS4yNTUuMjAzLjQzIiwidXNlcklkIjpudWxsLCJ1c2VyRW1haWwiOm51bGwsInVzZXJVbmlxdWVJZCI6bnVsbCwiYWxsb3dVc2VyU3Vic3RpdHV0aW9uIjpmYWxzZSwiZXBvY2giOjE2OTIyMzk2NTYzMDAsImp0aSI6IjdjMmIxOWMxLTkyZjUtNDRmNC04YjZhLTk0Y2NmY2Q0ZTk5OCIsImlhdCI6MTY5MjIzOTY1NiwiZXhwIjoxNjk0ODMxNjU2LCJpc3MiOiJrYXZhay5jb20ifQ.aPx82ZgIYAwpjsJZXJ8h_oIFVnz6UueRocurV9ymey8",
        },
      },
    );

    if (Array.isArray(errors) && errors.length > 0) {
      console.error(Deno.inspect(errors, { depth: 100, colors: true }));

      throw new Error(
        `Error while running query:\n${JSON.stringify(variables)}`,
      );
    }

    return data;
  };

  const newsletterRegister = (email: string) => {
    console.log(email);
    fetchGraphQL(
      {
        email: email,
        path: "https://www.kavak.com/mx/blog",
      },
    );

    return {
      data: "Test",
    };
  };

  return {
    categories,
    posts,
    post,
    pages,
    search,
    article,
    newsletterRegister,
  };
};
