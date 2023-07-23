import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";
import Icon from "deco-sites/kavaksite/components/Icon.tsx";

export interface Props {
  post: BlogPostPreview;
}

function TestimonialCard({ post }: Props) {
  return (
    <article class="snap-center shadow-card rounded-lg md:w-[352px] 2lg:w-[368px]">
      <div>
        <Picture
          preload
          class="col-start-1 col-span-1 row-start-1 row-span-1"
        >
          <Source
            src={post.image}
            width={368}
            height={195}
            media="(max-width: 1200px)"
          />
          <Source
            src={post.image}
            width={368}
            height={220}
            media="(min-width: 1201px)"
          />
          <img
            width="100%"
            height="100%"
            src={post.image}
            alt={post.imageAlt}
            class={`w-auto rounded-t-lg h-[195px] object-cover md:h-[210px] 2lg:h-[220px]`}
          />
        </Picture>
      </div>
      <div class={`p-4`}>
        <p class={`mb-4 leading-[1.5] text-[#5b5b5b]`}>{post.summary}</p>
        <div class={`flex gap-1`}>
          <Icon
            size={16}
            id="Pin"
            class="text-[#3374db]"
          />
          <span class={`font-black`}>
            {post.category.name} {post.category.slug}
          </span>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
