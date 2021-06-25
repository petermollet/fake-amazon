
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from './../../slices/cartSlice';
import CheckoutProduct from './CheckoutProduct';

const Cart = () => {
    const items = useSelector(selectItems)

    return (
        <div className='xs:m-5'>
            <Image
                src='https://links.papareact.com/ikj'
                width={1020}
                height={250}
                objectFit='contain'
            />

            <div className='shadow-sm flex flex-col pl-1 xs:p-5 space-y-5 lg:space-y-10 bg-white'>
                <h1 className='text-2xl sm:text-3xl border-b pb-4'>
                    {items.length === 0 
                        ? 'Your Amazon Cart is empty.' 
                        : 'Your Shopping Cart'}
                </h1>

                { items.map((item, i) => (
                    <CheckoutProduct 
                        key={`${item.i}_${i}`} 
                        product={item} 
                        className='border-b'
                    />
                )) }

            </div>
        </div>
    )
}

export default Cart
