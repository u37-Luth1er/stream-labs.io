'use client';

import { useState } from "react";
import Cookies from 'js-cookie'; // Instale a biblioteca: npm install js-cookie
import { useRouter } from 'next/navigation'; // Importe o useRouter
import "./index.scss";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Instancia o router

  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const payload = { username, password };

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Sucesso:', data);

        // Armazena o token nos cookies
        Cookies.set('authToken', data.token, { 
          expires: 7, // Expira em 7 dias
          secure: true, // Garante segurança (use apenas em HTTPS)
          sameSite: 'strict', // Protege contra CSRF
        });

        alert('Login realizado com sucesso!');

        // Redireciona para a página de dashboard após login
        router.push('/pages/dashboard');
        
      } else {
        const error = await response.json();
        console.error('Erro:', error);
        alert('Falha no login.');
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      alert('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-red-600 sm:text-3xl">Assista agora!</h1>

        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter username"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <a className="underline" href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
