// src/components/Navbar.tsx
'use client'
import { useState } from "react";
import Link from "next/link";
import "./index.scss";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Navbar() {

  return (
    <div>
      <nav className="navbar relative">
        <Link href="/" className="page-title">
          <h1>Busplay</h1>
        </Link>

        {/* Centralized Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link href="/movies">Filmes</Link>
          </li>
          <li>
            <Link href="/series">Séries</Link>
          </li>
          <li>
            <Link href="/music">Músicas</Link>
          </li>
          <li>
            <Link href="/podcast">Podcast</Link>
          </li>
        </ul>

        {/* Avatar */}
        <div className="avatar relative">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </div>
  );
}
