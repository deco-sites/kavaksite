import { BlogPostPreview } from "../../../std/commerce/butterCMS/types.ts";
import type { JSX } from "preact";
import AdCard from "../post-card/AdCard.tsx";

export interface Props {
  posts: BlogPostPreview[];
  direction?: "row" | "column";
}

function FeaturedAds({ posts, direction = "row" }: Props) {
  const directionClasses = direction === "column"
    ? "lg:(flex-col overflow-visible) md:(flex-row overflow-auto) flex-col override:children:lg:(max-w-full w-full)"
    : "md:(flex-row overflow-auto) flex-col";

  return (
    <section
      class={`${directionClasses} flex overflow-visible gap-5 flex-nowrap w-full pb-4`}
    >
      {posts.map<JSX.Element>(
        (post, index) => <AdCard key={index} post={post} />,
      )}
    </section>
  );
}

export default FeaturedAds;
