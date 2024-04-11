import { AiOutlineStar } from "react-icons/ai";

export const StarTheRepo = (): JSX.Element | null => {
  return (
    <div className={`hidden sm:flex items-center text-osGrey transition-opacity font-Inter`}>
      <a
        href="https://github.com/open-sauced/app"
        
        target="_blank"
      >
        <AiOutlineStar className="inline-block mr-2.5" />

        FOOLALA
        <span className="text-md font-light mr-2.5">
          Star us on GitHub
        </span>
      </a>
    </div>
  );
};