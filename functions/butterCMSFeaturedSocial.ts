import type { LoaderFunction } from "$live/types.ts";
import { createClient } from "../butterCMS/client.ts";
import { toFeaturedSocial } from "../butterCMS/transform.ts";
import type {
  BlogSectionPosts,
  StateButterCMS,
} from "deco-sites/std/commerce/butterCMS/types.ts";

/**
 * @title [Local]-Butter CMS Featured Social Loader
 * @description Useful for shelves and static galleries.
 */
const featuredSocialLoader: LoaderFunction<
  null,
  BlogSectionPosts,
  StateButterCMS
> = async (
  _req,
  ctx,
) => {
  const { global: { configButterCMS } } = ctx.state;
  const client = createClient(configButterCMS);

  const { data } = await client.pages();

  const section =
    data.fields.sections.find((section) => section.type === "featured_social")!
      .fields;

  return { data: toFeaturedSocial(section) as BlogSectionPosts };
};

export default featuredSocialLoader;
