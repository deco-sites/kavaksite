import { IS_BROWSER } from "$fresh/runtime.ts";
import Icon from "./Icon.tsx";

export interface Props {
  clippedText: string;
  withDomain?: boolean;
}

function ShareLinkButton(
  { clippedText, withDomain }: Props,
) {
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
    }
  };

  return (
    <button onClick={() => handleClick()}>
      <div class="flex flex-nowrap items-center gap-2">
        <span>Compartilhar</span>
        <Icon id="Share" strokeWidth={1} size={24} />
      </div>
    </button>
  );
}

export default ShareLinkButton;
