import { categories, filtersProps, prices } from "@/lib/data";
import React from "react";
import { Checkbox } from "../ui/checkbox";

interface Props {
  filters: filtersProps;
  setFilters: (filters: filtersProps) => void;
}
const Sidebar = ({ filters, setFilters }: Props) => {
  return (
    <div className="space-y-8">
      {/* category */}
      <div>
        <h3 className="font-semibold mb-4 uppercase">categories</h3>
        <ul>
          {categories.map((category, index: number) => (
            <li
              key={index}
              onClick={() =>
                setFilters({
                  ...filters,
                  type: category.name == "all" ? "" : category.name,
                })
              }
              className={`${
                filters.type == category.name
                  ? "font-bold text-yellow-500"
                  : "text-gray-500"
              } capitalize flex justify-between items-center`}
            >
              <span className="hover:text-yellow-400 cursor-pointer">
                {category.name}
              </span>
              <span>({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* price filters  */}
      <div>
        <h3 className="font-semibold mb-4 uppercase">price</h3>
        <ul>
          {prices.map((price, index: number) => (
            <li key={index} className="flex items-center space-x-2">
              <Checkbox
                id={`price-${price}`}
                checked={filters.price == price}
                onCheckedChange={(val) => {
                  if (val) {
                    setFilters({ ...filters, price });
                  } else {
                    setFilters({ ...filters, price: "" });
                  }
                }}
              />
              <label
                htmlFor={`price-${price}`}
                className="text-gray-400 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Less than and equal to{" "}
                <span className="text-xl font-bol">${price}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Advertisement */}
      <div className="relative aspect-[4/5] bg-black rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <div className="text-2xl font-bold mb-2">FLIPS SURF</div>
          <div className="text-sm">
            ALSO AVAILABLE
            <br />
            ONLINE ONLY
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;