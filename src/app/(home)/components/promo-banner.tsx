import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      alt={alt}
      sizes="100vh"
      className="h-auto w-full px-5"
      priority={true}
      {...props}
    />
  );
};

export default PromoBanner;
