import Image from 'next/image'
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../../slices/cartSlice';

const TopHeader = () => {
    const [session] = useSession()
    const router = useRouter()
    const totalItems = useSelector(selectTotalItems)

    return (
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                    onClick={() => router.push('/')}
                    src='https://links.papareact.com/f90'
                    width={150}
                    height={40}
                    objectFit='contain'
                    className='cursor-pointer'
                />
            </div>

            {/* SEARCH */}
            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow
            bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
                <input 
                    className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md 
                    focus:outline-none' 
                    type="text"
                />
                <SearchIcon className='h-12 p-4' />
            </div>

            {/* RIGHT SECTION */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 
            whitespace-nowrap'>
                <div 
                    onClick={!session ? signIn : signOut} 
                    className='link'
                    title={!session ? 'Sign In' : 'Sign Out'}
                >
                    <p>
                        { session ? `Hello, ${session.user.name}` : 'Sign In' }
                    </p>
                    <p className='font-extrabold md:text-sm'>Account & List</p>
                </div>
                <div className='link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>

                <div 
                    onClick={() => router.push('/checkout')}
                    className='link relative flex items-center'
                >
                    <span className='absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center 
                    rounded-full text-black font-bold'>
                        {totalItems}
                    </span>
                    <ShoppingCartIcon className='h-10' />
                    <p className='hidden md:inline mt-2 font-extrabold md:text-sm'>
                        Cart
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
