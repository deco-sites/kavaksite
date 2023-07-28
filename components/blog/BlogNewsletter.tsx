import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  inputPlaceholder: string;
  textButton: string;
  backgroundColor?: string;
}

function BlogNewsletter(
  { title, inputPlaceholder, textButton, backgroundColor }: Props,
) {
  return (
    <Container class={` mb-6 mt-7`}>
      <div
        class={`w-full flex flex-col justify-center items-center p-4 gap-2 ${
          backgroundColor ? backgroundColor : "bg-primary"
        } lg:flex-row`}
      >
        <div class={`w-full`}>
          <div dangerouslySetInnerHTML={{ __html: title }} class={`text-white`}>
          </div>
        </div>
        <div class={`w-full flex justify-center items-center`}>
          <form action="" class={`w-full flex flex-col justify-center items-center gap-2 lg:flex-row`}>
            <input
              type="text"
              placeholder={inputPlaceholder}
              class={`w-full h-[46px] p-4 rounded-[8px] lg:min-w-[400px]`}
            />
            <input
              type="submit"
              value={textButton}
              class={`w-full h-[46px] bg-black rounded-[8px] text-white lg:min-w-[160px]`}
            />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default BlogNewsletter;
