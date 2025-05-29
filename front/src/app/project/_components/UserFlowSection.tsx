import Image from "next/image";

type UserFlowSectionProps = {
  title?: string;
  images: { src: string; alt: string }[];
};

const UserFlowSection = ({
  title = "🚶‍♂️‍➡️유저 플로우",
  images,
}: UserFlowSectionProps) => {
  return (
    <div className="mt-10 ml-10">
      <h3 className="text-[17px] font-bold mb-4">{title}</h3>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt}
            width={300}
            height={300}
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default UserFlowSection;
