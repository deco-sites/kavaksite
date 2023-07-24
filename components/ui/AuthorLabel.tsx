export interface IAuthorLabelProps {
  author: string;
  publishedDate: string;
}

export function AuthorLabel({ author, publishedDate }: IAuthorLabelProps) {
  return (
    <p class="text-xs leading-[1] mb-4 text-primary">
      {author}, {new Date(publishedDate).toLocaleString("pt-br", {
        dateStyle: "medium",
      })}
    </p>
  );
}
