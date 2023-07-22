import type { LoaderFunction } from "$live/types.ts";
import { createClient } from "../butterCMS/client.ts";
import { toFeaturedPlaces } from "../butterCMS/transform.ts";
import type { BlogSectionPlaces, StateButterCMS } from "deco-sites/std/commerce/butterCMS/types.ts";

/**
 * @title [Local]-Butter CMS Featured Brands Loader
 * @description Useful for list featured blog's brands.
 */
const featuredBrandsLoader: LoaderFunction<
  null,
  BlogSectionPlaces,
  StateButterCMS
> = async (
  _req,
  ctx,
) => {
  const { global: { configButterCMS } } = ctx.state;
  const client = createClient(configButterCMS);

  const { data } = await client.pages();

  const section =
    data.fields.sections.find((section) => section.type === "featured_brands")!
      .fields;

  return { data: toFeaturedPlaces(section) as BlogSectionPlaces };
};

export default featuredBrandsLoader;
