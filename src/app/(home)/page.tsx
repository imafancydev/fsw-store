import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import SectionTile from "@/components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import ProductList from "@/components/ui/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        alt="Até 55% de desconto esse mês!"
        src="/banner-home-01.png"
        priority={true}
      />
      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTile>Ofertas</SectionTile>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        alt="Até 55% de desconto em mouses!"
        src="/banner-home-02.png"
        priority={true}
      />

      <div>
        <SectionTile>Teclados</SectionTile>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        alt="Até 55% de desconto em headsets!"
        src="/banner-home-03.png"
        priority={true}
      />

      <div>
        <SectionTile>Mouses</SectionTile>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
