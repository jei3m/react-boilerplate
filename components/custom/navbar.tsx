import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex items-center gap-4 p-4">
        <span className="font-semibold">Boilerplate</span>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? 'text-primary'
              : 'text-muted-foreground hover:text-foreground'
          }
        >
          Users
        </NavLink>
      </nav>
    </header>
  );
}
