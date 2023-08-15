import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  text: string;
  buttonText: string;
  image: LiveImage;
  imageMobile: LiveImage;
  arrowICon: LiveImage;
}

function BlogTopBanner(
  { text, buttonText, image, imageMobile, arrowICon }: Props,
) {
  return (
    <a
      href="https://www.kavak.com/mx/venta-antiguedad-auto?utm_source=inbound&utm_medium=banner&utm_campaign=mx-all-purchase-leadgen-generic-blog_user-blog-es-top-top_banner&utm_content=Automation-Inboundteam-Static_img_only-generic-20220831"
      class="w-full h-[96px] flex justify-center lg:h-[72px]"
    >
      <div class="w-[30%] h-[96px] px-[17px] flex justify-center items-center bg-[#0a448a] relative sm:w-[50%] sm:justify-end lg:h-[72px]">
        <p class="w-[140px] text-white text-base font-semibold sm:text-xl lg:text-[26px] lg:w-[fit-content]">
          {text}
        </p>
        <div class="absolute right-[-25px] top-0">
          <Image
            src={arrowICon}
            width={25}
            height={96}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            class="lg:h-[72px]"
            title={text}
            alt={text}
            preload
          />
        </div>
      </div>
      <div class="w-[50%] sm:w-[25%] lg:max-w-[150px] z-[-1]">
        <Image
          src={imageMobile}
          width={150}
          height={96}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          class="flex lg:hidden"
          title={text}
          alt={text}
          preload
        />
        <Image
          src={image}
          width={130}
          height={72}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          class="hidden lg:flex"
          title={text}
          alt={text}
          preload
        />
      </div>
      <div class="w-[30%] flex items-center justify-center sm:w-[25%] lg:w-[50%] lg:justify-start">
        <button class="w-[106px] h-[46px] rounded-[8px] bg-black text-white text-sm font-semibold lg:w-[200px]">
          {buttonText}
        </button>
      </div>
    </a>
  );
}

export default BlogTopBanner;
