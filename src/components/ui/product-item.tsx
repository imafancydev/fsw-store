import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="flex h-[170px] w-[156px] justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vh"
          className="h-auto max-h-[80%] w-auto max-w-[70%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
      </div>
      <div>
        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
