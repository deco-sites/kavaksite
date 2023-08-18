import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Icon from "./Icon.tsx";

export interface Props {
  clippedText: string;
  withDomain?: boolean;
}

function ShareLinkButton(
  { clippedText, withDomain }: Props,
) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen == true) {
      setTimeout(() => {
        setModalOpen(false);
      }, 2000);
    }
  }, [modalOpen]);

  const handleClick = () => {
    if (IS_BROWSER) {
      const copyDeprecated = (content: string) => {
        const input = document.createElement("input");
        document.body.appendChild(input);

        input.value = content;
        input.select();

        document.execCommand("copy", false);

        input.remove();
      };

      const text = withDomain
        ? `${document.location.origin}${clippedText}`
        : clippedText;

      // deno-lint-ignore no-explicit-any
      navigator.permissions.query({ name: "clipboard-write" } as any).then(
        (result) => {
          if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(text);
          } else {
            copyDeprecated(text);
          }
        },
      ).catch(() => {
        copyDeprecated(text);
      });

      setModalOpen(true);
    }
  };

  return (
    <>
      <button onClick={() => handleClick()}>
        <div class="flex flex-nowrap items-center gap-2">
          <span>Compartir</span>
          <Icon id="Share" strokeWidth={1} size={24} />
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
              Copiado al portapapeles
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
      </button>
    </>
  );
}

export default ShareLinkButton;
