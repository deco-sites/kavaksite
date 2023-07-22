import type { LoaderFunction } from "$live/types.ts";

import { createClient } from "../butterCMS/client.ts";
import type { Category, StateButterCMS } from "deco-sites/std/commerce/butterCMS/types.ts";

/**
 * @title [Local]-Butter CMS Categories Loader
 * @description Useful for list blog's categories
 */
const categoriesLoader: LoaderFunction<
  null,
  Category[],
  StateButterCMS
> = async (
  _req,
  ctx,
) => {
  const { global: { configButterCMS } } = ctx.state;
  const client = createClient(configButterCMS);

  const { data } = await client.categories();
  console.log('teste')
  return { data };
};

export default categoriesLoader;
