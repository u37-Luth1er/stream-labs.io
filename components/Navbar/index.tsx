// src/components/Navbar.tsx
'use client'
import Link from "next/link";
import React from "react";
import "./index.scss";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export default function Navbar() {
  const [label, setLabel] = React.useState("feature")
  return (
    <div>
      <nav className="navbar relative">
        <Link href="/" className="page-title">
          <h1>Busplay</h1>
        </Link>

        {/* Centralized Navigation Links */}
        <ul className="nav-links">
          {/* Nome series */}
          <li className="label-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link href="/filmes" className="filmes-link">
                  Filmes
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[200px]">
                <DropdownMenuItem onClick={() => setLabel("Tech")}>
                  Ação
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Business")}>
                  Comédia
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Lifestyle")}>
                  Terror
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Lifestyle")}>
                  Suspense
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Nome series */}
          <li className="label-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link href="/series" className="series-link">
                  Series
                </Link>
              </DropdownMenuTrigger>
              <span className="feature-label">{label}</span>
              <DropdownMenuContent align="start" className="w-[200px]">
                <DropdownMenuLabel>Musica Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setLabel("Tech")}>
                  Rock
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Business")}>
                  Eletronica
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Lifestyle")}>
                  Hip Hop
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

            {/* Nome Musica */}
            <li className="label-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link href="/musica" className="musica-link">
                  Musica
                </Link>
              </DropdownMenuTrigger>
              <span className="feature-label">{label}</span>
              <DropdownMenuContent align="start" className="w-[200px]">
                <DropdownMenuLabel>Musica Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setLabel("Tech")}>
                  Rock
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Business")}>
                  Eletronica
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Lifestyle")}>
                  Hip Hop
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          

          
            {/* Nome Podcast */}
          <li className="label-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link href="/podcast" className="podcast-link">
                  Podcast
                </Link>
              </DropdownMenuTrigger>
              <span className="feature-label">{label}</span>
              <DropdownMenuContent align="start" className="w-[200px]">
                <DropdownMenuLabel>Podcast Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setLabel("Tech")}>
                  Tech
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Business")}>
                  Business
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Lifestyle")}>
                  Lifestyle
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>



          {/* Nome Livros */}
          <li className="label-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link href="/livros" className="livros-link">
                  Livros
                </Link>
              </DropdownMenuTrigger>
              <span className="feature-label">{label}</span>
              <DropdownMenuContent align="start" className="w-[200px]">
                <DropdownMenuLabel>Livros Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setLabel("Tech")}>
                  Desenvolvimento Pessoal
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Business")}>
                  Tecnologia
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabel("Lifestyle")}>
                  Historia e Filosofia
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

        </ul>


{/* Avatar e Menu */}

    <div className="relative">
    <DropdownMenu>
    {/* Envolve o Avatar com DropdownMenuTrigger */}
    <DropdownMenuTrigger asChild>
      <div className="avatar cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </DropdownMenuTrigger>

    {/* Conteúdo do Dropdown */}
        <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
        </div>
        </nav>
    </div>
  );
}
