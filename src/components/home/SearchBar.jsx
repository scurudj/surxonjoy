import SearchInput from "./SearchInput";
import DistrictSelect from "./DistrictSelect";
import PriceSelect from "./PriceSelect";

export default function SearchBar() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-2xl">

      <div className="grid grid-cols-4 gap-4">

        <SearchInput />

        <DistrictSelect />

        <PriceSelect />

        <button
          className="
          rounded-xl
          bg-blue-600
          text-white
          font-semibold
          hover:bg-blue-700
          transition
        "
        >
          Qidirish
        </button>

      </div>

    </div>
  );
}