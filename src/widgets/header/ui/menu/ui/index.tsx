import Link from "next/link"
import { items } from "../config"

export const Menu = () => (
    <nav className="flex max-lg:hidden">
        <ul className="flex items-center list-none gap-5">
            {items.map((item) => (
                <Link key={item.path} href={item.path} className="hover:text-gold transition-colors">{item.text}</Link>
            ))}
        </ul>
    </nav>
)