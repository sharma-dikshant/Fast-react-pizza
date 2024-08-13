import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
      <Link className='text-blue-400 font-semibold hover:text-blue-300' to="/menu">&larr; Back to menu</Link>

      <p className='font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
