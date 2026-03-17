import { useState } from 'react';
import Button from '../../ui/Button';

const CreateUser = ()=>{
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='text-sm mb-4 md:text-base text-stone-600'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      className="md:px-6 md:py-3 mb-8 bg-white rounded-full border border-stone-200 px-4 py-2 text-sm tracking-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 "      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
 