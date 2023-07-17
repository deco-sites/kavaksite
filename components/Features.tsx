import { useId } from "preact/hooks";
import Icon from "deco-sites/kavaksite/components/Icon.tsx";
import Button from "deco-sites/kavaksite/components/Button.tsx";
import Slider from "deco-sites/kavaksite/components/ui/Slider.tsx";
import SliderJS from "deco-sites/kavaksite/islands/SliderJS.tsx";
import SliderControllerJS from "deco-sites/kavaksite/islands/SliderJS.tsx";

import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  cards: Array<{
    image: LiveImage;
    title: HTML;
    description: HTML;
  }>;
  action: {
    label: string;
    href: string;
  };
}

export default function Features(props: Props) {
  const { title, cards, action } = props;
  const id = useId();

  return (
    <div class="flex flex-col w-full justify-center items-center">
      <div class="w-full max-w-[1340px] flex flex-col py-10 px-0 sm:px-5 gap-12">
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          class="text-3xl font-title text-center px-4 lg:px-8"
        >
        </div>

        <div
          id={id}
          class="container flex px-0 relative"
        >
          <div class="hidden items-center justify-center py-6 h-auto sm:flex z-10 relative">
            <div class="flex items-center bg-black opacity-60 h-[100%] bg-interactive-inverse  border-default border-0 shadow-arrow transition-all absolute">
              <button
                data-slide="prev"
                aria-label="Previous item"
                class="w-[48px] h-[100%] flex justify-center items-center"
              >
                <Icon
                  size={22}
                  id="ChevronLeft"
                  class="text-white"
                  strokeWidth={3}
                />
              </button>
            </div>
          </div>

          <Slider
            class="col-span-full row-span-full gap-5 overflow-y-hidden scrollbar-none px-5 py-6 lg: py-0 lg:(snap-mandatory-none px-0)"
            snap="snap-center sm:snap-start block last:mr-6 sm:last:mr-0 h-[-webkit-fill-available]"
            id="slider-container"
          >
            {cards.map((card, index) => {
              return (
                <div class="flex flex-1 w-[325px] h-full lg:min-w-[350px] lg:max-w-[350px] overflow-hidden rounded-lg shadow-md">
                  <div class="flex flex-col gap-2 h-full">
                    <img
                      width={300}
                      height={235}
                      loading="eager"
                      alt={card.title}
                      src={card.image}
                      class="object-cover w-[325px] lg:w-[350px] h-[235px] block"
                    />

                    <div class="p-4 flex flex-col gap-4 h-full">
                      <div
                        class="text-2xl font-semibold"
                        dangerouslySetInnerHTML={{ __html: card.title }}
                      >
                      </div>
                      <div
                        class="text-lg mt-auto"
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>

          <div class="hidden items-center justify-center py-6 h-auto sm:flex z-10 relative">
            <div class="flex items-center bg-black opacity-60 h-[100%] bg-interactive-inverse  border-default border-0 shadow-arrow transition-all absolute">
              <button
                data-slide="next"
                aria-label="Next item"
                class="w-[48px] h-[100%] flex justify-center items-center"
              >
                <Icon
                  size={22}
                  id="ChevronRight"
                  class="text-white"
                  strokeWidth={3}
                />
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-1 justify-center px-8">
          <Button style="w-full md:w-auto" type="primary" href={action.href}>
            {action.label}
          </Button>
        </div>

        <SliderJS rootId={id} />
      </div>
    </div>
  );
}
