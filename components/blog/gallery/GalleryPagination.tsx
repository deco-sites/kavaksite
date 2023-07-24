import { IS_BROWSER } from "$fresh/runtime.ts";
import Icon from "../../../components/Icon.tsx";
import { Pagination } from "deco-sites/kavaksite/butterCMS/types.ts";

import { useLayoutEffect } from "preact/compat";

export interface Props {
  pagination: Pagination;
  containerId: string;
}

export default function GalleryPagination({ pagination, containerId }: Props) {
  const lastPage = Math.ceil(pagination.count / pagination.pageSize);

  useLayoutEffect(() => {
    if (IS_BROWSER && window.location.hash) {
      const element = document.getElementById(containerId);
      element?.scrollIntoView();
    }
  }, []);

  const disablePreviousBtn = !pagination.previousPage;
  const disableNextBtn = !pagination.nextPage;

  const btnClasses =
    `relative w-10 h-10 flex justify-center items-center cursor-pointer`;
  const blackBtnClasses = `bg-black rounded text-white`;

  const iconsClasses = `absolute left-[0.15rem]`;
  const iconsParams = {
    size: 24,
    strokeWidth: 2,
  };

  return (
    <nav class="flex flex-row flex-nowrap justify-end nav-container mt-11">
      <a
        class={btnClasses}
        disabled={disablePreviousBtn}
        href={`?page=1#${containerId}`}
        aria-label="Primeira página"
      >
        <Icon id="ChevronLeft" {...iconsParams} />
        <Icon id="ChevronLeft" {...iconsParams} class={`${iconsClasses}`} />
      </a>
      <a
        class={`${btnClasses} ${blackBtnClasses}`}
        disabled={disablePreviousBtn}
        href={`?page=${pagination.previousPage}#${containerId}`}
        aria-label="Página anterior"
      >
        <Icon id="ChevronLeft" {...iconsParams} />
      </a>
      <p class="px-4 my-2 text-black font-black">
        {pagination.currentPage} de {lastPage}
      </p>
      <a
        class={`${btnClasses} ${blackBtnClasses}`}
        href={`?page=${pagination.nextPage}#${containerId}`}
        aria-label="Próxima página"
        disabled={disableNextBtn}
      >
        <Icon id="ChevronRight" {...iconsParams} />
      </a>
      <a
        class={btnClasses}
        disabled={disableNextBtn}
        href={`?page=${lastPage}#${containerId}`}
        aria-label="Última página"
      >
        <Icon id="ChevronRight" {...iconsParams} />
        <Icon id="ChevronRight" {...iconsParams} class={`${iconsClasses}`} />
      </a>
    </nav>
  );
}
