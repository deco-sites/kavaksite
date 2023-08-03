import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "NoIcon"
  | "Search"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "ChevronDown"
  | "User"
  | "Bars3"
  | "XMark"
  | "Logo"
  | "Brasil"
  | "Facebook"
  | "Instagram"
  | "Youtube"
  | "Twitter"
  | "Linkedin"
  | "TikTok"
  | "Pinterest"
  | "Share"
  | "DoubleChevron"
  | "Pin"
  | "Check"
  | "Moeda"
  | "Carro"
  | "Sale"
  | "instagramIcon"
  | "facebookIcon"
  | "linkedinIcon"
  | "youtubeIcon"
  | "twitterIcon";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
  size?: number;
}

function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      stroke-width={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
