"use client"
import {
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
import { Logo } from "../ui/logo/index";
import { Menu } from "./menu/ui";
import { Profile } from "./profile";
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { RootState } from "@/store/store";
import Link from "next/link";
import { paths } from "@/shared/routing/paths";
import { LogOut } from "lucide-react";
import { userActions } from "@/store/user/user.slice";
import ProfileSidebar from "@/widgets/profileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

const Header = () => {

  const token = useSelector((state: RootState) => state.user.token)
  const payload = token ? JSON.parse(atob(token.split('.')[1])) : ""
  const dispatch = useDispatch()

  console.log(payload);

  return (
    <header className="w-full py-6 px-5 text-white font-base z-90 top-0">
      <div className="mx-auto max-w-[1240px] flex items-center justify-between">
        <Logo />
        <Menu />
        {payload ?
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Profile />
              </button>
            </SheetTrigger>
            <SheetContent className="text-white">
              <SheetHeader>
                <SheetTitle hidden className="text-2xl font-bold text-white">Profile</SheetTitle>
                <SheetDescription hidden className="text-gray-300 text-[14px">
                  Hi <span className="text-gold">KINGSMAN</span> 💈 Keep track of your appointments, explore your grooming history, and stay sharp with style made for kings.
                </SheetDescription>
              </SheetHeader>
              <ProfileSidebar />
              <SheetFooter className="mt-auto">
                <Button onClick={() => dispatch(userActions.logout())} variant="outline" className="flex items-center justify-center w-full cursor-pointer text-white">
                  <LogOut /> Logout
                </Button>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full cursor-pointer text-white">
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          :
          <Link href={paths.register}>
            <Button className="bg-accent text-base font-jockey cursor-pointer">Sign Up</Button>
          </Link>
        }
      </div>
    </header>
  );
};

export default Header;
