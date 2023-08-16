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
      class="w-full h-[96px] mr-4 flex justify-center lg:h-[72px] 2lg:overflow-hidden 2lg:justify-start"
    >
      <div class="w-[30%] h-[96px] pl-4 pr-2.5 flex justify-center items-center bg-[#0a448a] relative sm:w-[35%] lg:w-[51%] sm:justify-end lg:h-[72px]">
        <p class="w-[140px] text-white text-base font-title leading-[1.25] font-semibold sm:text-xl sm:leading-[1.25] lg:leading-[1.25] lg:text-[26px] lg:w-[fit-content]">
          {text}
        </p>
        <div class="absolute right-[-25px] top-0 2lg:top-[-11px]">
          <Image
            src={arrowICon}
            width={25}
            height={96}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            class="lg:h-[72px] 2lg:h-[96px]"
            title={text}
            alt={text}
            preload
          />
        </div>
      </div>
      <div class="w-[50%] sm:w-[25%] lg:max-w-[150px] z-[-1] ">
        <Image
          src={imageMobile}
          width={150}
          height={96}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          class="flex h-full lg:hidden"
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
      <div class="w-[30%] flex items-center justify-center sm:w-[40%] lg:w-[36%] lg:justify-start">
        <button class="w-[106px] h-[46px] rounded-[8px] bg-black text-white text-sm font-semibold sm:w-[180px] md:mr-[100px] lg:text-base lg:w-[200px] 2lg:pt-[3px]
        hover:bg-white hover:text-black hover:border-black hover:border">
          {buttonText}
        </button>
      </div>
    </a>
  );
}

export default BlogTopBanner;
