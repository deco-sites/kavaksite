import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

interface Measure {
  width: number;
  height: number;
}

interface Sizes {
  desktop: Measure;
  mobile: Measure;
}

export interface Props {
  image: string;
  alt: string;
  sizes: Sizes;
}

export function CardImage({ image, alt, sizes: { mobile, desktop } }: Props) {
  return (
    <Picture
      preload
      class="col-start-1 col-span-1 row-start-1 row-span-1"
    >
      <Source
        src={image}
        width={mobile.width}
        height={mobile.height}
        media="(max-width: 992px)"
      />
      <Source
        src={image}
        width={desktop.width}
        height={desktop.height}
        media="(min-width: 992px)"
      />
      <img
        width="100%"
        height="100%"
        src={image}
        alt={alt}
        class={`lg:(h-[${desktop.height}px]) w-auto h-[${mobile.height}px] object-cover`}
      />
    </Picture>
  );
}
