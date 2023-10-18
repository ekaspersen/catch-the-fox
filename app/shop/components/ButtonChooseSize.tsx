import Image from "next/image";

export default function ButtonChooseSize() {
    return (
        <button className="flex gap-1 relative">
            <button className="h-14 px-4 grid place-items-center bg-clrprimary font-semibold">
                Choose size
            </button>

            <span className=" h-14 px-4 bg-clrprimary grid place-items-center">
                <Image
                    src="/arrow-down.svg"
                    alt="arrow icon"
                    width={17.5}
                    height={20}
                />
            </span>

            <div className={`absolute z-10 mt-12`}>
                <button className="w-full px-2 py-1 hover:bg-gray-200"></button>
            </div>
        </button>
    );
}
