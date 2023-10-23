import Image from "next/image";

export default function ButtonChooseSize() {
  return (
    <button className="relative flex gap-1">
      <button className="grid h-14 place-items-center bg-clrprimary px-4 font-semibold">
        Choose size
      </button>

      <span className=" grid h-14 place-items-center bg-clrprimary px-4">
        <Image
          src="/arrow-down.svg"
          alt="arrow icon"
          width={17.5}
          height={20}
        />
      </span>

      <div className={`absolute z-10 mt-12`}>
        <button className="hover:bg-gray-200 w-full px-2 py-1"></button>
      </div>
    </button>
  );
}
