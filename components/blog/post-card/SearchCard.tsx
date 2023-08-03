import { AuthorLabel } from "deco-sites/kavaksite/components/ui/AuthorLabel.tsx";
import type { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";

import { CardImage } from "./CardImage.tsx";

export interface Props {
  post: BlogPostPreview;
}

function PostCard({ post }: Props) {
  return (
    <article class="min-w-full xs:min-w-[450px] sm:min-w-[270px] md:min-w-[360px] lg:min-w-[320px] overflow-hidden flex w-full px-4 lg:w-1/3 sm:w-1/2">
      <a href={`/blog/${post.slug}`} class="flex flex-col">
        <div class="flex items-center justify-center relative bg-base-gray">
          <CardImage
            image={post.image}
            alt={post.imageAlt}
            sizes={{
              desktop: {
                width: 446,
                height: 165,
              },
              mobile: {
                width: 446,
                height: 165,
              },
            }}
          />
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col justify-center h-full py-4 flex-1">
            <p class="uppercase text-primary text-xs font-bold tracking-wider mb-4 leading-3">
              {post.category.name}
            </p>
            <h3 class="text-[calc(1.275rem+0.3vw)] leading-[1.25] font-bold mb-2 2lg:text-2xl">
              {post.title.substring(0, 55) + `...`}
            </h3>
            <AuthorLabel
              publishedDate={post.publishedAt}
              author={post.author}
            />
            <p class="line-clamp-5 leading-4 text-base-lighter text-gray-light lg:leading-[1.25]">
              {post.summary.substring(0, 125) + `...`}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}

export default PostCard;
