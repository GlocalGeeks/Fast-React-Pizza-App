import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return;
    navigate(`/order/${query}`)
    setQuery("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <input className="transition-all duration-300 sm:focus:w-72 focus:border-stone-800/20 rounded-full text-sm bg-yellow-100 placeholder:text-stone-400  border p-2 border-stone-800/30 focus:outline-none focus:ring focus:ring-yellow-500 sm:w-64" placeholder="Search order #" value={query} onChange={e=> setQuery(e.target.value)} />
    </form>
  );
};

export default SearchOrder;
