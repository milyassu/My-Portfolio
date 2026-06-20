import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ProjectImage({
  src,
  alt,
}: Props) {
  return (
    <div className="my-8">
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        className="
        rounded-lg
        shadow-md
        w-full
        h-auto
        "
        style={{ height: "auto" }}
      />
    </div>
  );
}