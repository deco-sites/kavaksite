import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import Icon from "deco-sites/kavaksite/components/Icon.tsx";
import type { AvailableIcons } from "deco-sites/kavaksite/components/Icon.tsx";

export interface Link {
  href?: string;
  label?: string;
  icon: AvailableIcons;
  /**@description Emoji flag */
  emojiIcon?: string;
  /**@default false */
  borderBottom?: boolean;
  /**@default false */
  hiddenMobile?: boolean;
  children?: { href: string; label: string }[];
}

export interface Country {
  icon?: string;
  label?: string;
  href?: string;
}
export interface Props {
  /**
   * @description Logo
   * @default Logo
   */
  logo: {
    icon: AvailableIcons;
    href: string;
    /**@default false */
    openNewTab?: boolean;
  };
  /** @description label or icon must be declared */
  links: Link[];
  popupIdiomas: {
    titlePopup: string;
    Countries: Country[];
    labelButton: string;
    /**@default false */
    abrirEmNovaAba?: boolean;
  };
}

export default function Header(props: Props) {
  const [linkHref, setLinkHref] = useState("#");
  const [checkValidate, setCheckValidate] = useState("México");
  const [menuChildren, setMenuChildren] = useState(false);

  const isMenuOpen = useSignal(false);
  const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);

  useEffect(() => {
    const scroll = isMenuOpen.value ? "hidden" : "auto";
    document.body.style.overflow = scroll;
  }, [isMenuOpen.value]);

  const isPopupOpen = useSignal(true);
  const togglePopup = () => (isPopupOpen.value = !isPopupOpen.value);

  useEffect(() => {
    const scroll = isPopupOpen.value ? "auto" : "hidden";
    document.body.style.overflow = scroll;
  }, [isPopupOpen.value]);

  return (
    <>
      <div
        class={`${
          isPopupOpen.value ? "hidden" : "flex z-50"
        } fixed bg-[#00000096] items-end w-full h-[100vh] md:items-center md:justify-center`}
        onClick={togglePopup}
      >
        <div class="flex w-full h-[60vh] max-h-[400px] bg-white rounded-t-2xl md:w-[464px] md:rounded-lg md:max-h-[425px]">
          <div class="flex p-4 pt-6 flex-col md:py-6 md:px-6 md:justify-evenly">
            <h2 class="font-body font-black text-base-light text-[calc(1.2975rem+0.57vw)] text-center md:leading-[1.31] xl:text-[1.725rem]">
              {props.popupIdiomas?.titlePopup}
            </h2>
            <ul
              class={`h-[210px] overflow-y-scroll flex flex-col px-4 mt-[22px] mb-[14px] scrollbar-none hover:scrollbar-display`}
            >
              {props.popupIdiomas?.Countries.map((Country) => (
                <li
                  class="items-center h-[52px] flex gap-2 border-b border-gray relative cursor-pointer"
                  onClick={setHref}
                >
                  {Country.icon && <span>{Country.icon}</span>}
                  <span
                    data-href={Country.href}
                    class={`w-full py-4 flex items-center mb-[-5px] text-base-light`}
                  >
                    {Country.label}
                  </span>
                  <div
                    class={`text-primary absolute right-0 top-4 ${
                      Country.label == checkValidate ? "" : "hidden"
                    }`}
                  >
                    <Icon id="Check" width={16} height={16} />
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={linkHref}
              target={`${props.popupIdiomas?.abrirEmNovaAba ? "_blank" : ""}`}
              class={`flex items-center justify-center h-[46px] py-2 bg-black text-white rounded-lg`}
            >
              <span>
                {props.popupIdiomas?.labelButton}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="h-[56px] lg:h-[84px] mx-auto flex justify-center bg-primary-light w-full shadow-card">
        <div class="w-full flex flex-row items-center justify-between 1.5xl:max-w-[1320px] 2lg:max-w-[1180px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] px-4">
          <a
            href={props.logo.href}
            target={props.logo.openNewTab ? "_blank" : ""}
            alt="Kavak"
            title="Kavak"
            class="hidden lg:block"
          >
            <Icon id={props.logo.icon} width={112} height={30} />
          </a>

          <a
            href={props.logo.href}
            target={props.logo.openNewTab ? "_blank" : ""}
            alt="Kavak"
            title="Kavak"
            class="block lg:hidden"
          >
            <Icon id={props.logo.icon} width={76} height={20} />
          </a>

          {/** DESKTOP MENU */}
          <ul class="hidden lg:flex flex-row gap-8">
            {props.links.map((link, index) => (
              <li
                class={`flex flex-row gap-2 items-center 2lg:last:ml-4 ${
                  link.children?.length ? "group" : ""
                } hover:text-black relative ${
                  index != props.links.length - 2 ? "svg-none" : ""
                }`}
              >
                {index == props.links.length - 2 && (
                  <a
                    href={link.href}
                    onClick={togglePopup}
                    class="flex flex-row gap-2 items-center cursor-pointer opacity-90"
                  >
                    {link.emojiIcon && <span>{link.emojiIcon}</span>}
                  </a>
                )}
                {index != props.links.length - 2 && (
                  <a
                    href={link.href}
                    class="flex flex-row gap-2 items-center opacity-90"
                  >
                    {link.icon && (
                      <Icon
                        width={20}
                        height={20}
                        id={link.icon}
                      />
                    )}

                    {link.label}
                  </a>
                )}

                {link.children?.length
                  ? (
                    <Icon
                      width={16}
                      height={16}
                      strokeWidth={3}
                      id="ChevronDown"
                      class="text-primary group-hover:rotate-180"
                    />
                  )
                  : <></>}

                {link.children && (
                  <ul class="hidden group-hover:block absolute top-[100%] right-0 z-50 bg-primary-light p-3 rounded-lg shadow-md">
                    {link.children.map((child) => (
                      <li>
                        <a
                          href={child.href}
                          class="block px-2 py-1 whitespace-nowrap hover:bg-primary hover:text-white rounded-lg"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/** MOBILE MENU */}
          <Icon
            width={24}
            height={24}
            onClick={toggleMenu}
            id={isMenuOpen.value ? "XMark" : "Bars3"}
            strokeWidth={isMenuOpen.value ? 3 : 0.1}
            class="block lg:hidden text-primary cursor-pointer"
          />
        </div>

        {isMenuOpen.value && (
          <div class="block lg:hidden h-[calc(100vh-56px)] bg-white w-full fixed z-30 bottom-0">
            <ul class="flex flex-col gap-7 p-4">
              {props.links.map((link, index) => (
                <li
                  class={`${
                    link.hiddenMobile ? "hidden" : ""
                  } flex flex-row flex-wrap gap-2 items-center justify-between text-dark-brown relative ${
                    link.borderBottom ? "border-b border-gray pb-4" : ""
                  }`}
                  onClick={() => {
                    link.children?.length
                      ? menuChildren
                        ? setMenuChildren(false)
                        : setMenuChildren(true)
                      : "";
                  }}
                >
                  {index == props.links.length - 2 && (
                    <a
                      href={link.href}
                      onClick={() => {
                        if (isMenuOpen) {
                          toggleMenu();
                          togglePopup();
                        }
                      }}
                      class={`flex flex-row-reverse justify-between gap-2 items-center text-red ${
                        link.href == "" ? "pointer-events-none" : ""
                      } ${index == props.links.length - 2 ? "w-full" : ""}`}
                    >
                      {link.emojiIcon != "NoIcon" && (
                        <span>{link.emojiIcon}</span>
                      )}
                      {link.label}
                    </a>
                  )}
                  {index != props.links.length - 2 && (
                    <a
                      href={link.href}
                      class="flex flex-row gap-2 items-center opacity-90"
                    >
                      {link.icon != "NoIcon" && (
                        <Icon
                          width={24}
                          height={24}
                          id={link.icon}
                          class={"text-dark-brown"}
                        />
                      )}

                      {link.label}
                    </a>
                  )}

                  {link.children?.length
                    ? (
                      <Icon
                        width={16}
                        height={16}
                        strokeWidth={3}
                        id="ChevronDown"
                        class={`${
                          menuChildren ? "rotate-180" : ""
                        } text-primary`}
                        onClick={() => {
                          menuChildren
                            ? setMenuChildren(false)
                            : setMenuChildren(true);
                        }}
                      />
                    )
                    : <></>}

                  {link.children && link.children.length > 0 && (
                    <ul
                      class={`${
                        menuChildren ? "flex flex-col w-full " : "hidden"
                      } lg:group-hover:block lg:absolute top-[100%] right-0 z-20 bg-primary-light p-3 rounded-lg lg:shadow-md`}
                    >
                      {link.children.map((child) => (
                        <li class={"last:text-primary last:font-black"}>
                          <a
                            href={child.href}
                            class="block px-2 py-1 whitespace-nowrap hover:bg-primary hover:text-primary-light rounded-lg"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
  function setHref(event: Event) {
    event.stopPropagation();
    const href = (event?.target as HTMLAnchorElement).getAttribute("data-href");

    if (href) {
      setLinkHref(href);
    }
    setCheckValidate((event?.target as HTMLElement).innerText);
  }
}
