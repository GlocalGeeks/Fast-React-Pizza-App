import { useNavigate } from 'react-router-dom';
import React from 'react'

const Error = () => {
  function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>%MESSAGE%</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}}

export default Error;
