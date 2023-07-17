import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcTablet: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
}
export interface CallToAction {
  labelButton?: string;
  href?: string;
}

export interface Props {
  title: HTML;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  description: HTML;
  /** @default false*/
  hideDescriptionOnMobile?: boolean;
  colorTheme: "Blue" | "White";
  /** @maxItems 2*/
  button: CallToAction[];
  /** @default false*/
  /** @description Selecione caso queira priorizar o carregamento da imagem*/
  priorizarCarregamento: boolean;
  /** @default false*/
  banner: Banner;
}

const COLORTEXT = {
  "Blue": "text-white",
  "White": "text-black",
};
const COLOR_BUTTON_TEXT = {
  "Blue": "text-black",
  "White": "text-white",
};
const COLOR_BUTTON = {
  "Blue": "bg-white",
  "White": "bg-black",
};
export default function BannerInfo({
  title,
  description,
  hideDescriptionOnMobile,
  colorTheme,
  button = [],
  priorizarCarregamento,
  banner,
}: Props) {
  return (
    <section class="w-full relative lg:h-[500px] md:max-h-[500px]">
      <div class="flex w-full justify-center">
        <Picture class="w-full">
          <Source
            media="(max-width: 767px)"
            src={banner.srcMobile}
            width={767}
          />
          <Source
            media="(max-width: 1199px)"
            src={banner.srcTablet}
            width={768}
          />
          <Source
            media="(min-width: 1200px)"
            src={banner.srcDesktop ? banner.srcDesktop : banner.srcMobile}
            width={1440}
          />
          <Image
            width={1920}
            src={banner.srcMobile}
            alt={banner.alt}
            loading={`${priorizarCarregamento ? "eager" : "lazy"}`}
            decoding={`${priorizarCarregamento ? "sync" : "async"}`}
            fetchPriority={`${priorizarCarregamento ? "high" : "low"}`}
            class="w-full h-[calc(100vw * (482/375))] lg:h-[500px] md:object-cover"
          />
        </Picture>
        <div
          class={`absolute items-center h-full px-2 justify-end md:justify-center w-full flex flex-col md:items-start md:pl-5 lg:pt-8 md:px-4 lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1320px]`}
        >
          <div
            class={`${
              COLORTEXT[colorTheme ?? "Blue"]
            } text-center mb-6 text-[calc(1.415rem+1.98vw)] md:text-[1.75rem] font-title lg:text-4xl leading-[1.19] md:text-left md:mb-4 md:max-w-[430px] lg:max-w-[550px] xl:max-w-[600px]`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            class={`${COLORTEXT[colorTheme ?? "Blue"]} ${
              hideDescriptionOnMobile ? "hidden" : ""
            } md:flex md:text-lg lg:text-[22px] leading-[1.22] md:mb-10 md:max-w-[340px] lg:max-w-[480px] xl:max-w-[530px]`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {button.map(({ labelButton, href }) => (
            <a
              href={`${href}`}
              class={` h-[46px] w-[95%] md:w-[284px] flex justify-center items-center rounded-lg first:hover:bg-primary-dark first:hover:text-primary-light ${
                COLOR_BUTTON_TEXT[colorTheme ?? "Blue"]
              } ${COLOR_BUTTON[colorTheme ?? "Blue"]} ${
                button.length > 1
                  ? "last:bg-transparent last:m-[10px] text-base md:last:justify-start lg:last:mt-6 lg:last:text-lg last:font-black"
                  : ""
              } ${
                button.length > 1 && colorTheme == "Blue"
                  ? "first:text-black last:text-white"
                  : button.length > 1 && colorTheme == "White"
                  ? "first:text-white last:text-black"
                  : COLOR_BUTTON_TEXT[colorTheme ?? "Blue"]
              }`}
            >
              {labelButton}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
