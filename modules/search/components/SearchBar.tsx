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
      className="text-lg"
    />
  );
}

export default SearchBar;