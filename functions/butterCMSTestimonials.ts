import type { LoaderFunction } from "$live/types.ts";
import { createClient } from "../butterCMS/client.ts";
import { toFeaturedTestimonials } from "../butterCMS/transform.ts";
import type {
  BlogSectionPosts,
  StateButterCMS,
} from "deco-sites/std/commerce/butterCMS/types.ts";

/**
 * @title [Local]-Butter CMS Featured Testimonials Loader
 * @description Useful for shelves and static galleries.
 */
const featuredTestimonialsLoader: LoaderFunction<
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
    data.fields.sections.find((section) =>
      section.type === "featured_testimonials"
    )!
      .fields;

  return { data: toFeaturedTestimonials(section) as BlogSectionPosts };
};

export default featuredTestimonialsLoader;
