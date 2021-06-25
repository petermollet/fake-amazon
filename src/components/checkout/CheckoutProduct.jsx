import Image from "next/image"
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../../slices/cartSlice";

const CheckoutProduct = ({ product, product: { 
    id, 
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
    quantity,
    className
}}) => {

    const dispatch = useDispatch()

    const addItemToCart = () => {
        dispatch(addToCart(product))
    } 

    const removeItemFromCart = () => {
        dispatch(removeFromCart(product))
    }

    return (

        <div className='border-b pb-5'>

            <div className='grid grid-cols-6'>
                <Image src={image}  width={200} height={200} objectFit='contain' />   

                <div className='col-span-5 flex justify-between flex-col sm:flex-row'>

                    <div className='ml-5 xs:mr-5'>
                        <p className='sm:text-lg'>{title}</p>
                        <div className='flex'>
                            {Array(rating).fill().map((_, i) => (
                            <StarIcon key={i} className='h-5 text-yellow-500' />
                        ))}
                        </div>
                        <div className='flex space-x-1 xs:space-x-2 sm:space-x-3 text-xs sm:text-base md:text-lg xs:font-semibold'>
                            <div>
                                <Currency quantity={price} currency='EUR' decimal='.'/>
                            </div>
                            <p>-</p>
                            <p>{quantity} item{quantity>1&&'s'}</p>
                            <p>-</p>
                            <p className='flex'>
                                Total: 
                                <div className='ml-2'>
                                    <Currency quantity={price*quantity} currency='EUR' decimal='.'/>
                                </div>
                            </p>
                        </div>
                        <p className='mb-5 hidden xs:inline-flex xs:text-xs xs:mt-2 xs:line-clamp-3'>
                            {description}
                        </p>
                        {hasPrime && (
                            <div className='flex items-center space-x-2 sm:-mt-5'>
                                <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                                <p className='hidden xs:inline-flex xs:text-xs xs:text-gray-500'>FREE Next-day Delivery</p>
                            </div>
                        )}
                    </div>

                    <div className='mt-3 px-5 space-x-3 flex justify-center my-auto justify-self-end 
                    sm:flex-col sm:mt-0 sm:px-0 sm:space-x-0 sm:space-y-2'>
                        <button onClick={addItemToCart} className='flex-grow button p-1 xs:p-2'>
                            Add
                        </button>
                        <button onClick={removeItemFromCart} className='flex-grow button p-1 xs:p-2'>
                            Remove
                        </button>
                    </div>

                </div>   

                
                
            </div>
        </div>

        
    )
}

export default CheckoutProduct
