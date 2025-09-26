import Image from "next/image";
import logo from "@public/logo.svg"
import Link from "next/link";
export const Logo = () => (
    <Link href={"/"} className="cursor-pointer">
        <Image src={logo} width={50} height={50} alt="logo" />
    </Link>
)