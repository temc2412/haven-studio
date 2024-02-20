import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBox() {
  return (
    <div className="flex flex-row bg-white rounded-2xl w-60 px-4 py-2 items-center cursor-pointer text-gray-500">
      <MagnifyingGlassIcon width="25" />
      <p className="px-2">Buscar</p>
    </div>
  );
}
