import Icon, { AvailableIcons } from "deco-sites/kavaksite/components/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  links: Array<
    { label: string; icon?: string; href?: string; openNewTab?: boolean }
  >;
  socialLinks: Array<
    { icon: AvailableIcons; href: string; openNewTab?: boolean }
  >;
  mobileStoreLinks: Array<
    {
      imageUrl: LiveImage;
      imageTitle: string;
      href: string;
      openNewTab?: boolean;
    }
  >;
  copyLinks: Array<{ label: string; href?: string; openNewTab?: boolean }>;
  address: string;
}

export default function Footer(props: Props) {
  const { links, copyLinks, address, socialLinks, mobileStoreLinks } = props;

  return (
    <footer class="leading-4 text-white bg-black w-full p-0 pt-8">
      <div class="w-full text-white max-w-[1340px] p-4 m-auto">
        <div class="flex flex-wrap -m-4 sm:flex-nowrap">
          <div class="relative w-full lg: p-4 pb-6 sm:w-[200px]">
            <a href="/" alt="Kavak" title="Kavak" class="hidden lg:block">
              <Icon id="LogoWhite" width={112} height={30} />
            </a>

            <a href="/" alt="Kavak" title="Kavak" class="block lg:hidden">
              <Icon id="LogoWhite" width={99} height={26} />
            </a>
          </div>

          <div class="relative w-full lg: p-4">
            <ul class="flex flex-col flex-wrap content-between text-sm font-light leading-3 sm:max-h-80 sm:content-around md:max-h-44 lg:text-sm">
              {links.map((link, index) => {
                return (
                  <>
                    {index == links.length - 1
                      ? (
                        <li
                          class="mb-6"
                          onClick={() => {
                            document.getElementById("popupCountry")?.click();
                          }}
                        >
                          {link.icon &&
                            <span class={`mr-1`}>{link.icon}</span>}
                          <a
                            href={link.href}
                            class="font-medium hover:text-underline leading-[1]"
                          >
                            {link.label}
                          </a>
                        </li>
                      )
                      : (
                        <li class="mb-6">
                          <a
                            href={link.href}
                            class="font-medium hover:text-underline leading-[1]"
                          >
                            {link.label}
                          </a>
                        </li>
                      )}
                  </>
                );
              })}
            </ul>
          </div>
        </div>

        <div class="flex flex-wrap -m-4 mb-[68px]">
          <div class="flex items-center flex-row flex-wrap mx-4 my-4 gap-4">
            {socialLinks.map(({ href, icon, openNewTab }) => (
              <a
                href={href}
                title={icon}
                class="flex justify-center items-center bg-white w-8 h-8 rounded-full"
                target={openNewTab ? "_blank" : ""}
              >
                <Icon id={icon} width={18} height={18} class="text-black" />
              </a>
            ))}
          </div>
          <div class="flex items-center flex-row  flex-wrap mx-4 my-4 gap-5">
            {mobileStoreLinks?.map((
              { imageUrl, imageTitle, href, openNewTab },
            ) => (
              <a
                href={href}
                class="flex justify-center items-center rounded-[8px]"
                target={openNewTab ? "_blank" : ""}
              >
                <Image
                  class={`h-[35px] w-fit lg:min-w-[110px]`}
                  src={imageUrl}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  width={imageTitle != "Profeco" ? 120 : 290}
                  title={imageTitle}
                  alt={imageTitle}
                  height={35}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  preload
                />
              </a>
            ))}
          </div>
        </div>

        <div class="text-sm font-light border-t border-white border-solid lg:text-sm pt-6 pb-[48px] px-2">
          <ul class="mt-0 mb-4 not-italic leading-8 flex flex-col md:flex-row gap-2 md:gap-6">
            {copyLinks.map((copyLink, index) => (
              <li
                class={`max-w-[200px] lg:max-w-none leading-[1.8] ${
                  index == 0 ? "mb-4" : ""
                }`}
              >
                {copyLink.href
                  ? (
                    <a
                      class="hover:text-underline"
                      href={copyLink.href}
                      target={copyLink.openNewTab ? "_blank" : ""}
                    >
                      {copyLink.label}
                    </a>
                  )
                  : copyLink.label}
              </li>
            ))}
          </ul>

          <div class="flex flex-col leading-8">
            <address class="not-italic leading-[1.9]">
              {address}
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
