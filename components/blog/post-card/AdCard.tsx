import type { BlogPostPreview } from "../../../std/commerce/butterCMS/types.ts";
import { CardImage } from "./CardImage.tsx";

export interface Props {
  post: BlogPostPreview;
}

function AdCard({ post }: Props) {
  return (
    <article class="md:(max-w-[328px] first:ml-1 last:mr-1) lg:(flex-value-[auto] mx-0 max-w-[33%]) flex-value-[0_0_50%] overflow-hidden rounded-md shadow-base flex w-full">
      <div href={`/blog/${post.slug}`} class="flex flex-col">
        <div class="hidden md:flex items-center justify-center relative border-b-1 border-base-gray">
          <CardImage
            image={post.image}
            alt={post.imageAlt}
            sizes={{
              desktop: {
                width: 320,
                height: 129,
              },
              mobile: {
                width: 446,
                height: 165,
              },
            }}
          />
        </div>
        <div class="md:h-[17rem] flex flex-col justify-between p-4">
          <div class="flex flex-col justify-start h-full gap-2 flex-1">
            <p class="uppercase text-primary text-xs font-bold tracking-wider leading-3">
              {post.category.name}
            </p>
            <h3 class="text-xl leading-5 font-bold">{post.title}</h3>
            <p class="leading-4 line-clamp-5 text-base-lighter">
              {post.summary}
            </p>
          </div>
          {post.ctaText
            ? (
              <a
                href={`/${post.slug}`}
                class="mt-4 bg-black p-4 text-center text-white rounded"
              >
                {post.ctaText}
              </a>
            )
            : null}
        </div>
      </div>
    </article>
  );
}

export default AdCard;
