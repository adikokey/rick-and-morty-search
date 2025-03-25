"use client";

import { DispatchState } from "@/shared/types/DispatchState";

type Props = {
  state: string;
  setState: DispatchState<string>;
  placeholder: string;
}

function SearchBar({ state, setState, placeholder }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.target.value)
  }

  return (
    <input 
      type="text" 
      placeholder={placeholder}
      value={state}
      onChange={handleChange}
      className="
        bg-white border-gray-600 text-black
        px-3 py-1.5 rounded-md transition-all border-2
        focus:outline-none focus:shadow-[0px_0px_36px_-5px_#1447e6] focus:border-blue-700
        hover:border-blue-700
      "
    />
  );
}

export default SearchBar;