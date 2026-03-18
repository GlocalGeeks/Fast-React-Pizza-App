import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearcart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';



const Cart = ()=> {
  
  const cart = useSelector(getCart)
  const username = useSelector(state => state.user.username)
  const dispatch = useDispatch()

  if(!cart.length) return <EmptyCart />;

  return (
    <div className='py-3 px-4'>
      <LinkButton to="/menu" className='text-sm text-blue-500 hover:text-blue-600 hover:underline'>&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <ul className='divide-y divide-stone-200 border-b border-stone-200 mt-3  '>
        {cart.map(item=> <CartItem item={item} key={item.id} CartItem/>)}
      </ul>
      <div className='mt-6 space-x-2'>
        <Button type="primary" to="/order/new">Order pizzas</Button>
        <Button type="secondar" onClick={()=> dispatch(clearcart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
