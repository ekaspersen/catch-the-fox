"use client";
import { useState } from "react";

type SizeDropdownProps = {
  sizes: { id: BigInt; name: string }[];
  onSelectSize: (size: string) => void;
};

const SizeDropdown: React.FC<SizeDropdownProps> = ({ sizes, onSelectSize }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Choose size");

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setShowDropdown(false);
    onSelectSize(size);
  };

  return (
    <div className="relative flex w-fit flex-col">
      <button
        className="flex w-max items-center gap-10 bg-clrwhite p-2 text-clrdark"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="font-medium">{selectedSize}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#121212"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      {showDropdown && (
        <div className="bg-clrprimarydark z-40 flex flex-wrap  gap-x-8 gap-y-4 p-4">
          {sizes.map((size) => (
            <button
              className="w-28 bg-clrprimary p-2 font-bold"
              key={Number(size.id)}
              onClick={() => handleSizeSelect(size.name)}
            >
              {size.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizeDropdown;
