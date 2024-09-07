"use client";
import Link from "next/link";
import { useState } from "react";

import { Home, ListTodo, SquareLibrary } from "lucide-react";

const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex ">
      {/* Sidebar */}
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <Link
          href="#"
          className="bg-muted flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
      <div className="flex flex-col w-1/4 bg-white  border-gray-300">
        <button
          onClick={() => setActiveTab("profile")}
          className={`text-left px-4 py-2 ${
            activeTab === "profile" ? "bg-gray-200 font-semibold" : ""
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("account")}
          className={`text-left px-4 py-2 ${
            activeTab === "account" ? "bg-gray-200 font-semibold" : ""
          }`}
        >
          Account
        </button>
        <button
          onClick={() => setActiveTab("appearance")}
          className={`text-left px-4 py-2 ${
            activeTab === "appearance" ? "bg-gray-200 font-semibold" : ""
          }`}
        >
          Appearance
        </button>
      </div>

      {/* Content */}
      <div className="w-3/4 p-6">
        {activeTab === "profile" && (
          <div>
            <h2 className="text-lg font-semibold">Profile</h2>
            <p>This is where the Profile settings content will go.</p>
          </div>
        )}
        {activeTab === "account" && (
          <div>
            <h2 className="text-lg font-semibold">Account</h2>
            <p>This is where the Account settings content will go.</p>
          </div>
        )}
        {activeTab === "appearance" && (
          <div>
            <h2 className="text-lg font-semibold">Appearance</h2>
            <p>This is where the Appearance settings content will go.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsTabs;
