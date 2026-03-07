"use client"
import Link from "next/link"

export function Navbar(){

    return (
        <div className="flex justify-center">
            <Link className="px-2" href="#how">How it Works</Link>
            <Link className="px-2"  href="#about">How it Works</Link>
            <Link className="px-2"  href="#pricing">How it Works</Link>

        </div>
    )
}