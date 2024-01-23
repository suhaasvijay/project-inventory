import Image from "next/image";
// import { RubikDoodleShadow } from "next/font/google";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center py-2">
        <h1 className="text-white text-3xl font-RubikDoodle">Suhaas V</h1>
        <Image
          className="rounded-full z-5 border border-gray-700 p-[2px]"
          src="/profile.png"
          alt="Next.js Logo"
          width={70}
          height={10}
          priority
        />
      </div>
    </>
  )
}
