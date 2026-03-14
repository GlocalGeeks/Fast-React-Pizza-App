import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className="border-b-2 border-stone-200 bg-yellow-500 px-3 py-4 uppercase sm:px-8 flex items-center justify-between">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder/>
      <Username />
    </header>
  );
};

export default Header;
