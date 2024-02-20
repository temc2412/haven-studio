import Logo from "./logo";
import Nav from "./nav";
import SearchLogin from "./search-login";
import clsx from "clsx";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <SearchLogin />
      <Logo />
      <Nav />
    </div>
  );
}
