import Menu from "./Menu";
import SearchInput from "./SearchInput";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav
      className="border-t-2 bg-white px-4 py-3 dark:bg-secondary sm:px-6"
      role="navigation"
    >
      <div className="mx-auto flex flex-nowrap items-center justify-between gap-4">
        <Menu />
        <SearchInput />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
