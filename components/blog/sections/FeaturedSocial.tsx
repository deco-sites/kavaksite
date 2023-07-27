import { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";
import type { JSX } from "preact";
import SocialCard from "../post-card/SocialCard.tsx";

export interface Props {
  posts: BlogPostPreview[];
  direction?: "row" | "column";
}

function FeaturedSocial({ posts }: Props) {
  return (
    <section
      class={`flex flex-row flex-wrap justify-between gap-6 pl-10 pb-4 mt-4 mb-6 2lg:justify-center`}
    >
      {posts.map<JSX.Element>(
        (post, index) => <SocialCard key={index} post={post} />,
      )}
    </section>
  );
}

export default FeaturedSocial;
