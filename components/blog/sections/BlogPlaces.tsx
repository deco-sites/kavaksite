import { BlogSectionPlaces } from "deco-sites/kavaksite/butterCMS/types.ts";

export function BlogPlaces({ title, places }: BlogSectionPlaces) {
  return (
    <>
      <h2 class="text-xl text-black font-black leading-[1] mb-4 text-[calc(1.325rem+0.9vw)] text-base-light">
        {title}
      </h2>
      <ul class="flex flex-wrap gap-1">
        {places.map((place, index) => (
          <li class="" key={index}>
            <a
              href={place.slug.includes("https")
                ? place.slug
                : `/${place.slug}`}
              class="text-sm text-gray-light leading-[1] px-4 py-2 border rounded-md border-gray block hover:bg-primary hover:text-white duration-300 hover:duration-300 hover:border-primary empty:hidden"
            >
              {place.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
