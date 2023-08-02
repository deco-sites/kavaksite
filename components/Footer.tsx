import Icon, { AvailableIcons } from "deco-sites/kavaksite/components/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  links: Array<{ label: string; href: string; openNewTab?: boolean }>;
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
    <footer class="leading-4 text-white bg-black w-full p-8">
      <div class="w-full text-white max-w-[1340px] p-4 m-auto">
        <div class="flex flex-wrap -m-4 sm:flex-nowrap">
          <div class="relative w-full lg: p-4 sm:w-[200px]">
            <a href="/" alt="Kavak" title="Kavak" class="hidden lg:block">
              <Icon id="Logo" width={112} height={30} />
            </a>

            <a href="/" alt="Kavak" title="Kavak" class="block lg:hidden">
              <Icon id="Logo" width={76} height={20} />
            </a>
          </div>

          <div class="relative w-full lg: p-4">
            <ul class="flex flex-col flex-wrap content-between text-sm font-light leading-3 sm:max-h-80 sm:content-around md:max-h-44 lg:text-sm">
              {links.map(({ href, label }) => {
                return (
                  <li class="mb-6">
                    <a href={href} class="font-medium hover:text-underline">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div class="flex flex-wrap -m-4 mb-6">
          <div class="flex items-center flex-row flex-wrap mx-4 my-4 gap-5">
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

        <div class="text-sm font-light border-t border-white border-solid lg:text-sm py-6">
          <ul class="mt-0 mb-4 not-italic leading-8 flex flex-col md:flex-row gap-4 md:gap-6">
            {copyLinks.map(({ label, href, openNewTab }) => (
              <li>
                {href
                  ? (
                    <a
                      class="hover:text-underline"
                      href={href}
                      target={openNewTab ? "_blank" : ""}
                    >
                      {label}
                    </a>
                  )
                  : label}
              </li>
            ))}
          </ul>

          <div class="flex flex-col leading-8">
            <address class="not-italic">
              {address}
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
