import { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";
import type { JSX } from "preact";
import FeaturedCard from "../post-card/FeaturedCard.tsx";

export interface Props {
  posts: BlogPostPreview[];
}

function FeaturedPosts({ posts }: Props) {
  const [left, center, right] = posts.reduce<
    [JSX.Element[], JSX.Element[], JSX.Element[]]
  >(
    (initial, post, index) => {
      if (index < 2) {
        return [
          [...initial[0], <FeaturedCard key={index} post={post} />],
          initial[1],
          initial[2],
        ];
      }

      if (index > 2) {
        return [initial[0], initial[1], [
          ...initial[2],
          <FeaturedCard key={index} post={post} />,
        ]];
      }

      return [
        initial[0],
        [
          <FeaturedCard
            key={index}
            post={post}
            withSummary
            size="large"
          />,
        ],
        initial[2],
      ];
    },
    [[], [], []],
  );

  const sideClasses =
    `flex flex-row w-auto min-w-max gap-4 flex-nowrap lg:min-w-[200px] lg:flex-col`;

  return (
    <section class="flex gap-x-4 flex-nowrap w-full overflow-auto pb-4 lg:gap-x-6">
      <div class={`lg:w-[200px] 2lg:w-[251px] 1.5xl:w-[285px] ${sideClasses} `}>
        {left}
      </div>
      <div class="flex min-w-max lg:flex-1 lg:min-w-[45%]">{center}</div>
      <div class={`lg:w-[222px] 2lg:w-[275px] 1.5xl:w-[309px] ${sideClasses} `}>
        {right}
      </div>
    </section>
  );
}

export default FeaturedPosts;
