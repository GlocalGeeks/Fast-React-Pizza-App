import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

const EmptyCart = ()=> {
  return (
    <div className='py-3 px-4'>
      <Link to="/menu">&larr; Back to menu</Link>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='mt-7 font-semibold'> Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
