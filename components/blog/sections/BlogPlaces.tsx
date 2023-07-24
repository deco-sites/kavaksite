import { BlogSectionPlaces } from "deco-sites/kavaksite/butterCMS/types.ts";
import { SectionTitle } from "deco-sites/kavaksite/components/ui/SectionTitle.tsx";

export function BlogPlaces({ title, places }: BlogSectionPlaces) {
  return (
    <>
      <SectionTitle class="text-xl text-black leading-[1]">{title}</SectionTitle>
      <ul class="flex flex-wrap gap-1">
        {places.map((place, index) => (
          <li class="" key={index}>
            <a
              href={place.slug.includes("https")
                ? place.slug
                : `/${place.slug}`}
              class="text-sm text-gray-light leading-[1] px-4 py-2 border rounded-md border-gray block hover:bg-primary hover:text-white duration-300 hover:duration-300 hover:border-primary"
            >
              {place.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
