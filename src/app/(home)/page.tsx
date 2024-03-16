import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div className="">
      <Image
        width={0}
        height={0}
        alt="Até 55% de desconto esse mês!"
        src="/banner-home-01.png"
        sizes="100vh"
        className="h-auto w-full px-5"
        priority={true}
      />
      <div className="mt-6 px-5">
        <Categories />
      </div>

      <div className="mt-6">
        <p className="mb-3 pl-5 font-bold uppercase"> Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        width={0}
        height={0}
        alt="Até 55% de desconto em mouses!"
        src="/banner-home-02.png"
        sizes="100vh"
        className="h-auto w-full px-5"
        priority={true}
      />
    </div>
  );
}
