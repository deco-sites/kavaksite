import type { LoaderReturnType } from "$live/types.ts";
import { useState } from "preact/hooks";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import Icon from "deco-sites/kavaksite/components/Icon.tsx";
import type {
  BlogPage,
  Category,
} from "deco-sites/std/commerce/butterCMS/types.ts";
import { BlogBreadcrumb } from "./BlogBreadcrumb.tsx";

export interface Props {
  categories: LoaderReturnType<Category[]>;
  page?: LoaderReturnType<BlogPage>;
  hideTitle?: boolean;
  searchPlaceholder: string;
}

function setURL(value: string) {
  let currentURL = window.location.href;

  currentURL = currentURL.split("?")[0];

  window.location.href = `${currentURL}?query=${value}`;
}

function getValueSearch() {
  const inputElement = document.getElementById(
    "search-bar",
  ) as HTMLInputElement;

  const valorDoInput = inputElement ? inputElement.value : "";

  setURL(valorDoInput);
}

// deno-lint-ignore no-explicit-any
const handleKeyPress = (event: any) => {
  if (event.key === "Enter") {
    getValueSearch();
  }
};

function BlogCategoryMenu(
  { categories, page, hideTitle, searchPlaceholder }: Props,
) {
  const categoriesList = [{ name: "Todo", slug: "" }, ...categories];

  const [searchOpen, setSearchOpen] = useState(false);
  const [closeSearch, setCloseSearch] = useState(false);
  const urlSearch = window?.location?.search;

  if (
    urlSearch?.split("=")[0].includes("?query") &&
    urlSearch?.split("=")[1] != "" && closeSearch == false
  ) {
    setSearchOpen(true);
  }

  return (
    <Container class="mb-6 mt-[56px] 2lg:mt-[46px] relative">
      <div class={`w-full flex flex-col justify-center items-center`}>
        <div class={`w-full flex justify-between items-center`}>
          {!hideTitle
            ? (
              <>
                <h1
                  class={`w-full text-dark-brown text-[calc(1.425rem+2.1vw)] 2lg:text-[3rem] font-title mb-4 text-base-light`}
                >
                  {page?.title}
                </h1>
                <div class={`w-full flex justify-end`}>
                  <Icon
                    size={24}
                    id="Search"
                    class={`text-[#5b5b5b] mb-4 cursor-pointer justify-self-end ${
                      searchOpen ? "hidden" : "block"
                    }`}
                    strokeWidth={3}
                    onClick={() => {
                      setSearchOpen(true);
                      setCloseSearch(false);
                    }}
                  />
                </div>
              </>
            )
            : (
              <div class={`w-full flex justify-end h-0 -mb-[33px]`}>
                <Icon
                  size={24}
                  id="Search"
                  class={`text-[#5b5b5b] mb-4 cursor-pointer justify-self-end ${
                    searchOpen ? "hidden" : "block"
                  }`}
                  strokeWidth={3}
                  onClick={() => {
                    setSearchOpen(true);
                    setCloseSearch(false);
                  }}
                />
              </div>
            )}
        </div>
        <div
          class={`w-full h-0 flex justify-end items-center gap-4 mb-4 px-1 overflow-hidden ${
            searchOpen ? "animate-open-search" : null
          }`}
        >
          <input
            type="text"
            name="search"
            placeholder={searchPlaceholder}
            class={`w-full h-[35px] px-4 border border-[#5b5b5b] rounded-lg`}
            id={"search-bar"}
            onKeyDown={handleKeyPress}
          />
          <Icon
            size={24}
            id="Search"
            class="text-[#5b5b5b] cursor-pointer"
            strokeWidth={3}
            onClick={() => {
              getValueSearch();
            }}
          />
          <Icon
            size={24}
            id="XMark"
            class="text-[#5b5b5b] cursor-pointer"
            strokeWidth={3}
            onClick={() => {
              setSearchOpen(false);
              setCloseSearch(true);
            }}
          />
        </div>
      </div>
      <nav class="mb-[50px] overflow-auto md:mb-4">
        <ul class="flex sm:flex-wrap gap-x-4 pb-2 md:gap-x-6 md:pb-[2px]">
          {categoriesList.map((category, index) => (
            <li key={index}>
              <a
                href={index === 0 ? "/blog" : `/blog-category/${category.slug}`}
                class={`${
                  page?.title === category.name ? "text-primary" : ""
                } py-1 block whitespace-nowrap text-gray-light hover:underline`}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <BlogBreadcrumb categories={page?.breadcrumbList} />
    </Container>
  );
}

export default BlogCategoryMenu;
