'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Importando useRouter
import Cookies from "js-cookie"; 
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
    // Remover cookies com especificação de domínio e caminho, se necessário
    Cookies.remove("authToken", { path: "/" }); // Certifique-se de que o caminho está correto
    Cookies.remove("sessionID", { path: "/" });

    // Verifique a remoção (debug)
    console.log("Cookies removidos: ", Cookies.get("authToken"), Cookies.get("sessionID"));

    // Redirecionar para a página inicial
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
              d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
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
