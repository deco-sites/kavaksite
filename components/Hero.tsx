import Icon from "deco-sites/kavaksite/components/Icon.tsx";
import Button from "deco-sites/kavaksite/components/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { maxSatisfying } from "https://deno.land/std@0.181.0/semver/mod.ts";

export interface Props {
  title: HTML;
  description: HTML;
  fcp: boolean;
  /** @default false */
  hideDescriptionOnMobile?: boolean;
  /** @default blue */
  theme: "blue" | "white";
  button: {
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
    desktop: LiveImage;
    tablet: LiveImage;
    mobile: LiveImage;
    alt: string;
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
    /** @default false */
    desejaEncostarAImagemNoCanto?: boolean;
  };
}

export default function Hero(props: Props) {
  const {
    button,
    description,
    images,
    theme,
    title,
    fcp,
  } = props;

  return (
    <div class={generateContainerClasses(props)}>
      <div class={generateInnerContainerClasses(props)}>
        <div
          class={`w-full flex flex-col gap-6 md:max-w-[400px] lg:max-w-[600px] ${
            images.detailPositon?.desktop == "left"
              ? "lg:ml-[64px]"
              : "lg:mr-[64px]"
          }`}
        >
          <div
            class={generateTitleClasses(props)}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            class={generateDescriptionClasses(props)}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {button?.primary && (
            <div>
              <Button
                style="w-full md:w-auto text-center sm:mt-6 md:px-10 lg:px-12"
                href={button.primary.href}
                type={theme === "blue" ? "secondary" : "primary"}
              >
                {button.primary.label}
              </Button>
            </div>
          )}

          {button?.secondary && (
            <div class="flex flex-row items-center justify-center md:justify-start gap-1 hover:gap-3">
              <a class="text-sm md:text-lg" href={button.secondary.href}>
                {button.secondary.label}
              </a>

              <Icon
                width={20}
                height={20}
                strokeWidth={2}
                id="ChevronRight"
                class="hidden md:block"
              />
            </div>
          )}
        </div>

        {images && (
          <Picture preload={fcp} class={generateDetailClasses(props)}>
            <Source
              width={375}
              src={images.mobile}
              media="(max-width: 575px)"
            />
            <Source
              width={576}
              src={images.tablet}
              media="(min-width: 576px) and (max-width: 991px)"
            />
            <Source
              width={1440}
              src={images.desktop}
              media="(min-width: 992px)"
            />
            <img
              alt={images.alt}
              width="100%"
              height="100%"
              src={images.desktop}
              loading={fcp ? "eager" : "lazy"}
              class="w-full "
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
  let verificaPosicao = true;

  if (images.detailPositon?.tablet === "left") {
    verificaPosicao = false;
  } else {
    verificaPosicao = true;
  }

  const classes = [
    // paddings
    "pt-10",
    "px-4",
    "pb-0",
    images.desejaEncostarAImagemNoCanto
      ? verificaPosicao ? "sm:pr-0" : "sm:pl-0"
      : "",
    "xl:pt-0",
    // positioning
    "flex",
    "flex-col",
    "md:justify-center",
    isMobileDetailOnTop ? "justify-end" : "justify-start",
    "items-center",
    "relative",

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
    "2xl:max-w-[1320px]",
    "xl:max-w-[1180px]",
    "justify-between",
    "sm:gap-8",

    // positioning
    isTabletDetailOnRight ? "sm:flex-row" : "sm:flex-row-reverse",
    isDesktopDetailOnRight ? "lg:flex-row" : "lg:flex-row-reverse",
    isMobileDetailOnTop ? "flex-col-reverse" : "flex-col",
  ];

  return classes.join(" ");
}

function generateTitleClasses(props: Props) {
  const classes = [
    "text-left",
    "text-3xl",
    "font-title",
    "leading-[1.2]",
    "sm:text-[calc(1.4rem+1.8vw)]",
    "md:text-4xl",
    "md:text-left",
    "lg:leading-[1.2]",
    "lg:text-[calc(1.425rem+2.1vw)]",
    "2xl:text-[48px]",
  ];

  return classes.join(" ");
}

function generateDescriptionClasses(props: Props) {
  const classes = [
    "text-lg",
    "leading-[1.2]",
    "md:block",
    "xl:max-w-[480px]",
  ];

  return classes.join(" ");
}

function generateDetailClasses(props: Props) {
  const { images } = props;

  const classes = [
    "max-w-[250px]",
    "sm:max-w-[350px]",
    "lg:max-w-[470px]",
    "xl:max-w-[560px]",
    "mt-6",
    "md:mt-0",
    images.detailClasses,
  ];

  return classes.join(" ");
}
