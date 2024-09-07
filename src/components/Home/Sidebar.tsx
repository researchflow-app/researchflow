import {
  Home,
  ListTodo,
  Settings,
  SquareLibrary,
  SquareSquare,
} from "lucide-react";

import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block bg-white ">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <SquareSquare className="h-6 w-6" />
            <span className="">Research Flow</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className="bg-muted flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <SquareLibrary className="h-4 w-4" />
              Reviews
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <ListTodo className="h-4 w-4" />
              Task List
            </Link>
          </nav>
        </div>

        <div className="mt-auto p-4">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
