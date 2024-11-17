// src/components/Navbar.tsx
'use client'
import Link from "next/link";
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
