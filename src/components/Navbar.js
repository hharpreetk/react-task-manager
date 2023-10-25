import Menu from "./Menu";
import SearchInput from "./SearchInput";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav
      className="border-t-2 bg-white px-3 py-3 dark:border-transparent dark:bg-secondary md:px-6"
      role="navigation"
    >
      <div className="mx-auto flex flex-nowrap items-center justify-between gap-2">
        <Menu />
        <SearchInput />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
