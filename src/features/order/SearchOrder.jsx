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
        <input className="border p-2 border-stone-800/80" placeholder="Search order #" value={query} onChange={e=> setQuery(e.target.value)} />
    </form>
  );
};

export default SearchOrder;
