import { useCallback, useEffect, useState } from "preact/hooks";
import Icon from "deco-sites/kavaksite/components/Icon.tsx";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Runtime } from "../../runtime.ts";

export interface Props {
  title: HTML;
  inputPlaceholder: string;
  textButton: string;
  backgroundColor?: string;
  registerSuccessText?: string;
}

const subscribe = Runtime.create(
  "deco-sites/kavaksite/actions/subscribe.ts",
);

function BlogNewsletter(
  { title, inputPlaceholder, textButton, backgroundColor, registerSuccessText }:
    Props,
) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen == true) {
      setTimeout(() => {
        setModalOpen(false);
      }, 2000);
    }
  }, [modalOpen]);

  function getValueEmail() {
    const inputElement = document.getElementById(
      "input-email",
    ) as HTMLInputElement;

    const valorDoInput = inputElement ? inputElement.value : "";
    console.log(valorDoInput);
    newsletterPost(valorDoInput);
  }

  const newsletterPost = useCallback(async (email: string) => {
    console.log(email);
    const data = await subscribe({ email: email });
  }, []);

  return (
    <Container class={` mb-6 mt-7`}>
      <div
        class={`w-full flex flex-col justify-center items-center p-4 gap-2 ${
          backgroundColor ? `bg-[${backgroundColor}]` : "bg-primary"
        } lg:flex-row`}
      >
        <div class={`w-full lg:max-w-[35%]`}>
          <div dangerouslySetInnerHTML={{ __html: title }} class={`text-white`}>
          </div>
        </div>
        <div class={`w-full flex justify-center items-center`}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // setModalOpen(true);
              getValueEmail();
            }}
            class={`w-full flex flex-col justify-center items-center gap-2 lg:flex-row`}
          >
            <input
              type="email"
              id="input-email"
              placeholder={inputPlaceholder}
              class={`w-full h-[46px] p-4 rounded-[8px] lg:min-w-[400px]`}
            />
            <input
              type="submit"
              value={textButton}
              class={`w-full h-[46px] bg-black rounded-[8px] text-white lg:w-[160px] hover:bg-white hover:text-black hover:border-black hover:border hover:cursor-pointer`}
            />
          </form>
        </div>
      </div>
      <div
        class={`w-[100vw] h-[60px] justify-center items-center fixed top-[10vh] left-0 z-10 ${
          modalOpen ? "flex" : "hidden"
        }`}
      >
        <div
          class={`w-[80vw] max-w-[960px] min-h-[60px] flex flex-col justify-center items-center py-2 px-4 bg-white rounded-lg shadow-card relative lg:flex-row`}
        >
          <Icon
            size={50}
            id="SuccessIcon"
            strokeWidth={3}
          />
          <p
            class={`text-base text-start font-semibold lg:text-center`}
          >
            {registerSuccessText}
          </p>
          <Icon
            class={`absolute top-2 right-2`}
            onClick={() => setModalOpen(false)}
            size={16}
            id="XIcon"
            strokeWidth={3}
          />
        </div>
      </div>
    </Container>
  );
}

export default BlogNewsletter;
