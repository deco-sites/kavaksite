import type { LoaderFunction } from "$live/types.ts";
import { createClient } from "../butterCMS/client.ts";
import { toFeaturedPlaces } from "../butterCMS/transform.ts";
import type {
  BlogSectionPlaces,
  StateButterCMS,
} from "deco-sites/std/commerce/butterCMS/types.ts";

/**
 * @title [Local]-Butter CMS Featured Places Loader
 * @description Useful for listing places
 */
const featuredPlacesLoader: LoaderFunction<
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
    data.fields.sections.find((section) => section.type === "featured_places")!
      .fields;

  return { data: toFeaturedPlaces(section) as BlogSectionPlaces };
};

export default featuredPlacesLoader;
