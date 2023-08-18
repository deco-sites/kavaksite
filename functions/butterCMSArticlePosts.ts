import type { LoaderFunction } from "$live/types.ts";
import { createClient } from "../butterCMS/client.ts";
import { toPostsPreview } from "../butterCMS/transform.ts";
import type {
  BlogPostList,
  StateButterCMS,
} from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  /**
   * @description Used to declare the size of results
   */
  pageSize: number;
}

/**
 * @title [Local]-Butter CMS Article Posts Loader
 * @description Useful for paginated galleries.
 */
const postsLoader: LoaderFunction<Props,BlogPostList,StateButterCMS> = async (
  req,
  ctx,
  { pageSize = 3 },
) => {
  const { global: { configButterCMS } } = ctx.state;
  const client = createClient(configButterCMS);
  const url = new URL(req.url);
  const page = Number(url.searchParams.get("page")) || 1;

  const  dataArticle  = await client.post(ctx.params.slug);

  const { data, meta } = await client.article(
    page,
    pageSize,
    true,
    dataArticle.data.tags[0].slug,
  );

  return {
    data: {
      posts: toPostsPreview(data),
      pagination: {
        currentPage: page,
        nextPage: meta.next_page,
        previousPage: meta.previous_page,
        count: meta.count,
        pageSize,
      },
    },
  };
};

export default postsLoader;
