import { useState } from "preact/hooks";
import Icon, { AvailableIcons } from "../Icon.tsx";

export interface Props {
  iconText: string;
  helpOptions: Array<{
    icon: AvailableIcons;
    text: string;
    href: string;
  }>;
}

function BlogHelp(
  { iconText, helpOptions }: Props,
) {
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div class="w-auto min-h-[40px] fixed bottom-7 right-4 z-50">
      {!helpOpen
        ? (
          <>
            <button
              class="w-[140px] h-[40px] px-4 flex justify-center items-center gap-2 rounded-3xl bg-black text-white shadow-card hover:bg-white hover:text-black"
              onClick={() => setHelpOpen(true)}
            >
              <Icon id="InfoIcon" width={22} height={22} />
              <span class="leading-[11px]">{iconText}</span>
            </button>
          </>
        )
        : (
          <>
            <div class="w-[270px] flex flex-col justify-center items-centera gap-2 p-4 bg-white rounded-lg shadow-card">
              <div class="w-full flex justify-end items-center">
                <Icon
                  id="XIcon"
                  width={21}
                  height={21}
                  onClick={() => setHelpOpen(false)}
                  style={{cursor: "pointer"}}
                />
              </div>
              <div class="w-full flex flex-col justify-center items-center gap-1">
                {helpOptions?.map(({ icon, text, href }, index) => (
                  <>
                    <a
                      href={href}
                      key={index}
                      class="w-full flex justify-start items-center gap-2 py-3 border-b border-[#c7c7c7]"
                    >
                      <Icon
                        id={icon}
                        width={20}
                        height={20}
                        style={{ color: "#3374db" }}
                      />
                      <span class="text-sm text-black">{text}</span>
                    </a>
                  </>
                ))}
              </div>
            </div>
          </>
        )}
    </div>
  );
}

export default BlogHelp;
