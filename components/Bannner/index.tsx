'use client';

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

export default function LandingBanner() {
  const router = useRouter();

  useEffect(() => {
    const checkAuthToken = async () => {
      const token = Cookies.get("authToken");
      if (token) {
        try {
          // Verifique o token enviando uma requisição de validação
          const response = await axios.get('http://localhost:8080/profile/protected', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            // Token válido, redireciona para o dashboard
            router.push("/pages/dashboard");
          }
        } catch (error) {
          console.error("Token inválido ou expirado:", error);
          // O token não é válido, nenhuma ação é necessária
        }
      }
    };

    checkAuthToken();
  }, [router]);

  return (
    <section
      className="relative bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/BR-pt-20241111-TRIFECTA-perspective_1b6d896f-f960-4456-8070-9d4b4a68946d_large.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply"
    >
      <div
        className="absolute inset-0 bg-gray-900/70 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Assista sem anúncios grátis!
            <strong className="block font-extrabold text-rose-500"></strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Faça upload dos seus filmes favoritos e assista localmente!
            Tenha uma biblioteca de filmes privada e seu proprio serviço de streaming.
          </p>

          <center>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/pages/login"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Assista Agora!
              </a>

              <a
                href="/pages/register"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Planos
              </a>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
}
