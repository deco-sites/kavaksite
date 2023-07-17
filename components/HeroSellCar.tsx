import Icon from "deco-sites/kavaksite/components/Icon.tsx";
import Button from "deco-sites/kavaksite/components/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface TextDescription {
  descricao: string;
}

export interface Props {
  title: HTML;
  descriptionText: TextDescription[];
  fcp: boolean;
  /** @default false */
  hideDescriptionOnMobile?: boolean;
  /** @default blue */
  theme: "blue" | "white";
  actions: {
    primary?: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
  images: {
    image?: {
      desktop: LiveImage;
      tablet: LiveImage;
      mobile: LiveImage;
    };
    /** @description inject tailwind classes into detail image */
    detailClasses?: string;
    detailPositon?: {
      /** @default right */
      desktop: "right" | "left";
      /** @default bottom */
      tablet: "right" | "left";
      /** @default bottom */
      mobile: "top" | "bottom";
    };
  };
}

export default function Hero(props: Props) {
  const {
    actions,
    descriptionText = [],
    images,
    theme,
    title,
    fcp,
  } = props;

  return (
    <div class={generateContainerClasses(props)}>
      <div class={generateInnerContainerClasses(props)}>
        <div class="flex flex-col gap-4 md:gap-8 md:max-w-[400px] lg:max-w-[600px] xl:max-w-[50%] w-full">
          <div
            class={generateTitleClasses(props)}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div>
            {descriptionText.map(({ descricao }) => (
              <p class={generateDescriptionClasses(props)}>{descricao}</p>
            ))}
          </div>
          {actions.primary && (
            <div>
              <Button
                style="w-full md:w-auto text-center mt-6 xl:px-[5.85rem]"
                href={actions.primary.href}
                type={theme === "blue" ? "secondary" : "primary"}
              >
                {actions.primary.label}
              </Button>
            </div>
          )}
        </div>

        {images.image && (
          <Picture preload={fcp} class={generateDetailClasses(props)}>
            <Source
              width={375}
              src={images.image.mobile}
              media="(max-width: 767px)"
            />
            <Source
              width={768}
              src={images.image.tablet}
              media="(min-width: 768px) and (max-width: 1023px)"
            />
            <Source
              width={1440}
              src={images.image.desktop}
              media="(min-width: 1024px)"
            />
            <img
              alt={title}
              width="100%"
              height="100%"
              src={images.image.desktop}
              loading={fcp ? "eager" : "lazy"}
              class="w-full h-full object-contain"
            />
          </Picture>
        )}
      </div>
    </div>
  );
}

function generateContainerClasses(props: Props) {
  const { theme, images } = props;
  const isMobileDetailOnTop = images.detailPositon?.mobile === "top";

  const classes = [
    // paddings
    "px-4",
    "py-10",

    // positioning
    "flex",
    "flex-col",
    "md:justify-center",
    isMobileDetailOnTop ? "justify-end" : "justify-start",
    "items-center",
    "relative",
    "bg-[url('../static/sell-car-background.svg')]",
    "md:py-16",
    "lg:gap-4",

    // colors
    theme === "blue" ? "bg-primary" : "bg-white",
    theme === "blue" ? "text-white" : "text-primary-dark",
  ];

  return classes.join(" ");
}

function generateInnerContainerClasses(props: Props) {
  const { images } = props;
  const isTabletDetailOnRight = images.detailPositon?.tablet === "right";
  const isDesktopDetailOnRight = images.detailPositon?.desktop === "right";
  const isMobileDetailOnTop = images.detailPositon?.mobile === "top";

  const classes = [
    // base classes
    "flex",
    "z-10",
    "w-full",
    "relative",
    "items-center",
    "max-w-[1320px]",
    "justify-between",
    "lg:max-w-[960px]",
    "lg:px-4",
    "xl:max-w-[1180px]",
    "2xl:max-w-[1320px]",

    // positioning
    isTabletDetailOnRight ? "md:flex-row" : "md:flex-row-reverse",
    isDesktopDetailOnRight ? "lg:flex-row" : "lg:flex-row-reverse",
    isMobileDetailOnTop ? "flex-col-reverse" : "flex-col",
  ];

  return classes.join(" ");
}

function generateTitleClasses(props: Props) {
  const { hideDescriptionOnMobile } = props;

  const classes = [
    hideDescriptionOnMobile ? "text-center" : "text-left",
    hideDescriptionOnMobile ? "text-2xl" : "text-[1.917185rem]",
    "font-title",
    "leading-tight",
    "max-w-[14.375rem]",
    "md:text-[39px]",
    "md:text-left",
    "md:max-w-[100%]",
    "lg:text-[44px]",
    "xl:text-[48px]",
    "xl:leading-[1.08]",
  ];

  return classes.join(" ");
}

function generateDescriptionClasses(props: Props) {
  const { hideDescriptionOnMobile } = props;

  const classes = [
    hideDescriptionOnMobile ? "hidden" : "block",
    "md:block",
    "border-b",
    "border-white",
    "last:border-b-0",
    "last:pb-0",
    "last:mb-0",
    "pb-4",
    "mb-4",
    "xl:pb-6",
    "xl:mb-6",
    "text-base",
    "md:text-xl",
  ];

  return classes.join(" ");
}

function generateDetailClasses(props: Props) {
  const { images } = props;

  const classes = [
    "mt-6",
    "md:mt-0",
    "md:mx-0",
    "md:max-w-[308px]",
    "lg:max-w-[480px]",
    images.detailClasses,
  ];

  return classes.join(" ");
}
