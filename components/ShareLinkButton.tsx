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
          <p
            class={`w-[80vw] max-w-[960px] h-[60px] flex justify-center items-center bg-white text-base text-center font-semibold rounded-lg shadow-card`}
          >
            Copiado al portapapeles
          </p>
        </div>
      </button>
    </>
  );
}

export default ShareLinkButton;
