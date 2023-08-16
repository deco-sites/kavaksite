import { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";

import type { JSX } from "preact";
import AdCard from "../post-card/AdCard.tsx";

export interface Props {
  posts: BlogPostPreview[];
  direction?: "row" | "column";
}

function FeaturedAds({ posts, direction = "row" }: Props) {
  const directionClasses = direction === "column"
    ? "flex flex-col overflow-visible gap-5 flex-nowrap w-full pb-4"
    : "flex flex-col overflow-visible gap-5 flex-nowrap w-full py-4 md:flex-row md:overflow-x-scroll lg:overflow-hidden";

  return (
    <section
      class={directionClasses}
    >
      {posts.map<JSX.Element>(
        (post, index) => <AdCard key={index} post={post} />,
      )}
    </section>
  );
}

export default FeaturedAds;
