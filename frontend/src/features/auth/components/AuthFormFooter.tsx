import { NavLink } from "react-router";

type AuthFormFooterProps = {
  href: string;
  hrefText: string;
  text: string;
};

const AuthFormFooter = ({ href, hrefText, text }: AuthFormFooterProps) => {
  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-x-1 sm:flex-row">
      <span>{text}</span>
      <NavLink
        to={`/authentification/${href}`}
        className="text-blue-500 underline"
      >
        {hrefText}
      </NavLink>
    </div>
  );
};

export default AuthFormFooter;
