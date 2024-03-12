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
    <div className="p-5">
      <Image
        width={0}
        height={0}
        alt="Até 55% de desconto esse mês!"
        src="/banner-home-01.png"
        sizes="100vh"
        className="h-auto w-full"
        priority={true}
      />
      <div className="mt-6">
        <Categories />
      </div>

      <div className="mt-6">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
