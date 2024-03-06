"use client";

import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCart,
} from "lucide-react";
import { SheetContent, SheetTrigger, Sheet, SheetHeader } from "./sheet";
import { signIn } from "next-auth/react";

export const Header = (props: {}) => {
  const handleLoginClick = async () => {
    await signIn();
  };
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-2">
            <Button
              onClick={handleLoginClick}
              variant={"outline"}
              className="w-full justify-start gap-2"
            >
              <LogInIcon size={16} />
              Fazer Login
            </Button>

            <Button variant={"outline"} className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Início
            </Button>

            <Button variant={"outline"} className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant={"outline"} className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW </span>Store
      </h1>

      <Button size={"icon"} variant={"outline"}>
        <ShoppingCart />
      </Button>
    </Card>
  );
};
