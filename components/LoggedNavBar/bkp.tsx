'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"; // Importando useRouter
import "./index.scss";

export default function LoggedNav() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const router = useRouter(); // Instância do router

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("userMenu");
      const avatar = document.getElementById("userAvatar");

      if (
        menu &&
        avatar &&
        !menu.contains(event.target as Node) &&
        !avatar.contains(event.target as Node)
      ) {
        setIsMenuActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  // Função para navegar para outra página com base no gênero
  const handleGenero = (genero: string) => {
    router.push(`?pagina=1&genero=${genero.toLowerCase()}`); // Atualiza a URL dinamicamente
  };

  const handleLogout = () => {
    Cookies.remove("authToken", { path: "/" });
    Cookies.remove("sessionID", { path: "/" });

    console.log("Cookies removidos: ", Cookies.get("authToken"), Cookies.get("sessionID"));
    window.location.href = "/";
  };

  return (
    <header className="navbar-custom">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-rose-600 dark:text-red-300" href="#">
              <span className="sr-only">Home</span>
              <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424..."
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {["Ação", "Aventura", "Terror", "Suspense", "Comédia", "Crime"].map((genero) => (
                  <li key={genero}>
                    {/* Botão que chama handleGenero ao clicar */}
                    <button
                      onClick={() => handleGenero(genero)}
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    >
                      {genero}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="relative hidden md:block">
              <button
                id="userAvatar"
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
                onClick={toggleMenu}
              >
                <span className="sr-only">Toggle dashboard menu</span>
                <img
                  src="https://github.com/u37-Luth1er.png"
                  alt=""
                  className="size-10 object-cover"
                />
              </button>

              <div
                id="userMenu"
                className={`absolute end-0 z-10 mt-0.5 w-56 rounded-md border user-menu shadow-lg ${
                  isMenuActive ? "block" : "hidden"
                }`}
                role="menu"
              >
                <div className="p-2">
                  <Link href="/profile" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" role="menuitem">
                    My profile
                  </Link>
                  <Link href="/settings" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" role="menuitem">
                    My data
                  </Link>
                  <form method="POST" action="/">
                    <button
                      onClick={handleLogout}
                      type="submit"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                      </svg>
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
