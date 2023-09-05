import { createClient } from "../butterCMS/client.ts";
import type { Context } from "deco-sites/std/packs/vtex/accounts/vtex.ts";

interface Props {
  email: string;
}

const newsletterRegister = async (
  props: Props,
  req: Request,
  ctx: Context,
) => {
  console.log(req);
  //   console.log(ctx.state.global);
  //@ts-ignore <>
  const { global: { configButterCMS } } = ctx.state;
  const client = createClient(configButterCMS);
  const { data } = await client.newsletterRegister(
    props.email,
  );

  return {
    data,
  };
};

export default newsletterRegister;
