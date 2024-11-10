import { ReactNode } from "react";

type StepsWrapperProps = {
  children: ReactNode;
};

const StepsWrapper = ({ children }: StepsWrapperProps) => {
  return (
    <li className={`md:flex-1`}>
      <div
        className={`
                    flex
                    flex-col
                    space-y-2
                    border-l-4
                    border-zinc-300
                    py-2
                    pl-4
                    text-left
                    md:border-l-0
                    md:border-t-2
                    md:pb-0
                    md:pl-0
                    md:pt-4
                    `}
      >
        {children}
      </div>
    </li>
  );
};

export default function InfoSteps() {
  const stepsDataSet: { header: string; description: string }[] = [
    {
      header: "Sign up for an account",
      description: "Either start out with free plan or choose pro plan",
    },
    {
      header: "Upload your PDF file",
      description:
        "We'll process your file and make it ready for you to chat with",
    },
    {
      header: "Start asking questions",
      description:
        "It's easy! Give AskPDF a try today - it takes less that a minute.",
    },
  ];
  return (
    <div
      className={`
            mx-auto
            mt-32
            max-w-5xl
            sm:mt-56
            `}
    >
      <div className={`mb-12 px-6 lg:px-8`}>
        <div className={`mx-auto max-w-2xl sm:text-center`}>
          <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
            Start chatting in a minutes
          </h2>
          <p className={`mt-4 text-lg text-gray-600`}>
            Transform the way you interact with your PDF files effortlessly
            using AskPDF
          </p>
        </div>
      </div>

      <ol className={`my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0`}>
        {stepsDataSet.map(({ header, description }, index) => (
          <StepsWrapper key={index}>
            <span className={`text-sm font-medium text-green-600`}>
              Step {index + 1}
            </span>
            <span className={`text-xl font-semibold`}>{header}</span>
            <span className="mt-2 text-zinc-700">{description}</span>
          </StepsWrapper>
        ))}
      </ol>
    </div>
  );
}
