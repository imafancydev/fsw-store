"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 ">
      <Image
        width={0}
        height={0}
        alt="Até 55% de desconto esse mês!"
        src={"/banner-home-01.png"}
        sizes="100vh"
        className="h-auto w-full"
      />
    </div>
  );
}
