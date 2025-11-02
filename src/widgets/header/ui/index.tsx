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
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { RootState } from "@/store/store";
import Link from "next/link";
import { paths } from "@/shared/routing/paths";
import { LogOut } from "lucide-react";
import { userActions } from "@/store/user/user.slice";
import AppointmentSidebar from "@/widgets/appointmentSidebar";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { ClickMeButton } from "@/shared/signUpButton/ui";

const Header = () => {
  const token = useSelector((state: RootState) => state.user.token)
  const payload = token ? JSON.parse(atob(token.split('.')[1])) : ""
  const dispatch = useDispatch()


  return (
    <header className="w-full py-6 px-5 text-white font-base z-90 top-0">
      <div className="mx-auto max-w-[1240px] flex items-center justify-between">
        <Logo />
        <Menu />
        {payload ?
          <Sheet modal={false}>
            <SheetTrigger asChild className="z-[600]">
              <button type="button" tabIndex={-1}>
                <ClickMeButton />
              </button>
            </SheetTrigger>
            <SheetContent className="text-white">
              <SheetHeader>
                <SheetTitle hidden className="text-2xl font-bold text-white">Profile</SheetTitle>
                <SheetDescription hidden className="text-gray-300 text-[14px">
                  Hi <span className="text-gold">KINGSMAN</span> 💈 Keep track of your appointments, explore your grooming history, and stay sharp with style made for kings.
                </SheetDescription>
              </SheetHeader>
              <AppointmentSidebar />
              <SheetFooter className="mt-auto">
                <Button type="button" onClick={() => dispatch(userActions.logout())} variant="outline" className="flex items-center justify-center w-full cursor-pointer text-white">
                  <LogOut /> Logout
                </Button>
                <SheetClose hidden asChild>
                  <Button onClick={(e) => {
                    console.log(document.activeElement)
                  }} variant="outline" type="button" className="w-full cursor-pointer text-white">
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
