import Button from "deco-sites/kavaksite/components/Button.tsx";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  store: Array<{
    image: LiveImage;
    name: HTML;
    address: string;
    action: string;
    href: string;
  }>;
  action: {
    label: string;
    href: string;
  };
}

export default function StoreCards(props: Props) {
  const { title, store, action } = props;

  return (
    <div class="flex flex-col items-center justify-center bg-primary-light text-primary-dark p-8 gap-12">
      <div
        class="text-3xl font-title lg:text-5xl"
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
        {store.map((store) => (
          <li class="w-full md:max-w-[300px] overflow-hidden rounded-lg shadow-lg">
            <div class="flex flex-col gap-2 h-full">
              <img
                width={300}
                height={168}
                loading="lazy"
                alt={store.name}
                src={store.image}
                class="object-cover w-full md:w-[300px] h-[168px] block"
              />

              <div class="p-4 flex flex-col gap-4 h-full">
                <div
                  class="text-xl font-semibold lg:text-2xl"
                  dangerouslySetInnerHTML={{ __html: store.name }}
                >
                </div>
                <span class="text-gray-500">{store.address}</span>

                <div class="flex justify-end md:flex-col md:items-end md:flex-1 mt-auto">
                  <Button
                    href={store.href}
                    type="tertiary"
                    style="w-[120px] h-[46px] flex justify-center items-center px-0 md:px-0"
                  >
                    {store.action}
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <Button type="primary" href={action.href}>
          {action.label}
        </Button>
      </div>
    </div>
  );
}
