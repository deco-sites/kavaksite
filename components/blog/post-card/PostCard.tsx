import { AuthorLabel } from "deco-sites/kavaksite/components/ui/AuthorLabel.tsx";
import type { BlogPostPreview } from "../../../std/commerce/butterCMS/types.ts";
import { CardImage } from "./CardImage.tsx";

export interface Props {
  post: BlogPostPreview;
}

function PostCard({ post }: Props) {
  return (
    <article class="lg:w-1/3 sm:w-1/2 overflow-hidden flex w-full px-4">
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
          <div class="flex flex-col justify-center h-full py-4 gap-2 flex-1">
            <p class="uppercase text-primary text-xs font-bold tracking-wider leading-3">
              {post.category.name}
            </p>
            <h3 class="text-2xl font-bold">{post.title}</h3>
            <AuthorLabel
              publishedDate={post.publishedAt}
              author={post.author}
            />
            <p class="line-clamp-5 leading-4 text-base-lighter pt-2">
              {post.summary}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}

export default PostCard;
