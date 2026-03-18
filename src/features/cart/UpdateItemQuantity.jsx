import React from 'react'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from './cartSlice'

const UpdateItemQuantity = ({pizzaId, currentQuantity}) => {
    const dispatch = useDispatch()
    
  return (
    <div className='flex gap-1 items-center md:gap-3'>
        <Button type="round" onClick={()=> dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
        <span className='text-sm font-medium'>{currentQuantity}</span>
        <Button type="round" onClick={()=> dispatch(increaseItemQuantity(pizzaId))}>+</Button>

    </div>
  )
}

export default UpdateItemQuantity