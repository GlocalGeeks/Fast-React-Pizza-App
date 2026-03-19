// Test ID: IIDSAT
import { useLoaderData } from 'react-router-dom';
import { getOrder, getMenu } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useEffect, useState } from 'react';

const Order = () => {
  const order = useLoaderData(); 
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  // Local state for menu data (ingredients)
  const [menuData, setMenuData] = useState([]);
  const [loadingMenu, setLoadingMenu] = useState(true);

  useEffect(() => {
    getMenu()
      .then(data => setMenuData(data))
      .finally(() => setLoadingMenu(false));
  }, []);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold tracking-wide text-red-50 uppercase">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold tracking-wide text-red-50 uppercase">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map(item => {
          const pizza = menuData.find(p => p.id === item.pizzaId);
          return (
            <OrderItem
              key={item.pizzaId}
              item={item}
              ingredients={pizza?.ingredients ?? []}
              isLoadingIngredients={loadingMenu}
            />
          );
        })}
      </ul>

      <div className="space-y-2 bg-stone-200 py-5 px-6">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + (priorityPrice || 0))}
        </p>
      </div>
    </div>
  );
};

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
