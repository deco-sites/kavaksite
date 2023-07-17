import Header from "deco-sites/kavaksite/components/ui/SectionHeader.tsx";
import Icon, { AvailableIcons } from "deco-sites/kavaksite/components/Icon.tsx";

export interface Question {
  question: string;
  /** @format html */
  answer: string;
}
export interface Props {
  title?: string;
  questions?: Question[];
  layout?: {
    variation?: "Compact" | "Full" | "Side to side";
    headerAlignment?: "center" | "left";
  };
}

const DEFAULT_PROPS = {
  title: "",
  description: "",
  questions: [
    {
      question: "Como faço para acompanhar o meu pedido?",
      answer:
        "Acompanhar o seu pedido é fácil! Assim que o seu pedido for enviado, enviaremos um e-mail de confirmação com um número de rastreamento. Basta clicar no número de rastreamento ou visitar o nosso site e inserir o número de rastreamento na seção designada para obter atualizações em tempo real sobre a localização e o status de entrega do seu pedido.",
    },
    {
      question: "Qual é a política de devolução?",
      answer:
        "Oferecemos uma política de devolução sem complicações. Se você não estiver completamente satisfeito(a) com a sua compra, pode devolver o item em até 30 dias após a entrega para obter um reembolso total ou troca. Certifique-se de que o item esteja sem uso, na embalagem original e acompanhado do recibo. Entre em contato com a nossa equipe de atendimento ao cliente e eles o(a) orientarão pelo processo de devolução.",
    },
  ],
};

function Question({ question, answer }: Question) {
  return (
    <details
      id="changeChevron"
      class="relative border-b border-base-200"
    >
      <summary
        id="summary-content"
        class="text-[calc(1.325rem + .9vw)] text-base-light py-5 px-3"
      >
        {question}
        <Icon
          class={"absolute top-5 right-2 text-primary"}
          width={20}
          height={20}
          id={"ChevronDown"}
        />
      </summary>
      <div
        id="container-faq"
        class="px-3 text-base-lighter"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}
export default function FAQ(props: Props) {
  const {
    questions = [],
    title,
    layout,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <>
      {(!layout?.variation || layout?.variation === "Compact") && (
        <div class="w-full max-w-[1320px] my-0 mx-auto px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-10 2xl:py-14">
          <div class="flex flex-col gap-8 lg:gap-10 lg:max-w-[960px] lg:my-0 lg:mx-auto xl:max-w-[1180px] 2xl:max-w-[1320px]">
            <Header
              title={title || ""}
              alignment={layout?.headerAlignment || "left"}
            />
            <div class="join join-vertical w-full">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>
        </div>
      )}

      {layout?.variation === "Full" && (
        <div class="w-full container px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-10 lg:px-0">
          <div class="flex flex-col gap-8 lg:gap-10">
            <Header
              title={title || ""}
              alignment={layout?.headerAlignment || "center"}
            />
            <div class="join join-vertical w-full">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>
        </div>
      )}

      {layout?.variation === "Side to side" && (
        <div class="w-full container px-4 py-8 grid gap-8 grid-flow-row grid-cols-1 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 lg:py-10 lg:px-0">
          <div class="order-1 lg:order-1">
            <Header
              title={title || ""}
              alignment={layout?.headerAlignment || "center"}
            />
          </div>
          <div class="order-2 lg:order-3 lg:row-span-2">
            <div class="join join-vertical">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
