import { BlogSectionPlaces } from "../../../std/commerce/butterCMS/types.ts";
import { SectionTitle } from "deco-sites/kavaksite/components/ui/SectionTitle.tsx";

export function BlogPlaces({ title, places }: BlogSectionPlaces) {
  return (
    <>
      <SectionTitle class="override:text-xl">{title}</SectionTitle>
      <ul class="flex flex-wrap gap-1">
        {places.map((place, index) => (
          <li key={index}>
            <a
              href={place.slug.includes("https")
                ? place.slug
                : `/${place.slug}`}
              class="px-4 py-2 border-1 rounded-md border-gray block"
            >
              {place.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
