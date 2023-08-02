import { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";
import type { JSX } from "preact";
import SocialCard from "../post-card/SocialCard.tsx";

export interface Props {
  posts: BlogPostPreview[];
  arrangementType?: "flex" | "grid";
}

function FeaturedSocial({ posts, arrangementType = "flex" }: Props) {
  const arrangementTypeClasses = arrangementType === "grid"
    ? "grid grid-cols-2	gap-5 w-full mt-4 mb-6 sm:justify-items-center "
    : "flex flex-row flex-wrap justify-between gap-6 pl-10 pb-4 mt-4 mb-6 2lg:justify-center";
  return (
    <section
      class={arrangementTypeClasses}
    >
      {posts.map<JSX.Element>(
        (post, index) => (
          <SocialCard
            key={index}
            post={post}
            arrangementType={arrangementType}
          />
        ),
      )}
    </section>
  );
}

export default FeaturedSocial;
