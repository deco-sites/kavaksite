import type { LoaderFunction } from "$live/types.ts";
import { createClient } from "../butterCMS/client.ts";
import { toBlogPost } from "../butterCMS/transform.ts";
import type { BlogPost, StateButterCMS } from "deco-sites/std/commerce/butterCMS/types.ts";

/**
 * @title [Local]-Butter CMS Post Detail Loader
 * @description Works on routes of type /blog/:slug
 */
const postDetailLoader: LoaderFunction<
  null,
  BlogPost,
  StateButterCMS
> = async (
  _req,
  ctx,
) => {
  const { state: { global: { configButterCMS } }, params: { slug } } = ctx;
  const client = createClient(configButterCMS);

  const { data } = await client.post(slug);

  return {
    data: toBlogPost(data),
  };
};

export default postDetailLoader;
