import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type }) => {
  const base =
    'inline-block cursor-pointer rounded-full bg-yellow-400 font-semibold tracking-wide uppercase transition-colors duration-300 text-shadow-stone-800 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed text-sm';

  const styles = {
    primary: base + ' px-4 px-4 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondar:
      'inline-block cursor-pointer rounded-full border-2 border-stone-300  font-semibold tracking-wide uppercase transition-colors duration-300 text-shadow-stone-800 hover:bg-yellow-300 focus:ring focus:ring-stone-800 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 px-2.5 md:px-6 md:py-3.5 hover:border-yellow-300 border-2 border-stone-500 text-stone-600 text-sm',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button to={to} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
