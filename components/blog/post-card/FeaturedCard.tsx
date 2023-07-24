import type { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";

import { CardImage } from "./CardImage.tsx";

export interface Props {
  post: BlogPostPreview;
  withSummary?: boolean;
  size?: "small" | "normal" | "large";
}

function FeaturedCard({
  post,
  withSummary = false,
  size = "normal",
}: Props) {
  const imageSize = {
    normal: { height: 165, width: 446 },
    small: { height: 129, width: 320 },
    large: { height: 356, width: 962 },
  };

  return (
    <article
      class={`${
        size === "large" ? "lg:max-w-full lg:card-large" : ""
      } max-w-[310px] overflow-hidden rounded-md shadow-card flex w-full lg:h-webkit`}
    >
      <a href={`/blog/${post.slug}`} class="flex flex-col">
        <div class="items-center justify-center relative">
          <CardImage
            image={post.image}
            alt={post.imageAlt}
            sizes={{
              desktop: {
                width: imageSize[size].width,
                height: imageSize[size].height,
              },
              mobile: {
                width: imageSize.normal.width,
                height: imageSize.normal.height,
              },
            }}
          />
        </div>
        <div class="flex flex-col justify-center h-full p-4 gap-2 flex-1 lg:article-large">
          <p class="uppercase text-primary text-[0.7rem] font-bold tracking-wider leading-3">
            {post.category.name}
          </p>
          <h3 class="text-[1.17rem] text-black mb-2 leading-5 font-bold">
            {post.title}
          </h3>
          {withSummary
            ? (
              <p class="line-clamp-3 leading-4 text-base-lighter lg:block hidden">
                {post.summary}
              </p>
            )
            : null}
        </div>
      </a>
    </article>
  );
}

export default FeaturedCard;
