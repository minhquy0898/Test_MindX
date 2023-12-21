import userImg from '../../../src/assets/circle-user.png'
import searchImg from '../../../src/assets/search .png'
import shoppingBagImg from '../../../src/assets/shopping-bag-add.png'
import { NavLink } from 'react-router-dom'


function TopBar() {
    return (
        <div className='flex w-[1300px] min-h-[88px] items-center justify-between flex-row'>

            <div>
                <NavLink to="/">
                    <img
                        src="https://kinhmatanna.com/wp-content/uploads/2022/06/logo-anna.svg"
                        alt="logo"
                        width={65}
                        height={65}
                    />

                </NavLink>
            </div>
            <div className='flex gap-4 pt-3'>
                <NavLink to="/" className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>TRANG CHỦ</NavLink>
                <NavLink to="/" className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>HÀNH TRÌNH TỬ TẾ</NavLink>
                <NavLink to="/products" className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>SẢN PHẨM</NavLink>
                <NavLink to="/" className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>VỀ ANNA</NavLink>
                <NavLink to="/blog" className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>BLOG</NavLink>
                <NavLink to="/" className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>HỆ THỐNG CỬA HÀNG</NavLink>
                <NavLink to="/contact" className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>LIÊN HỆ</NavLink>
            </div>
            <div className='pt-3 w-[15%] flex justify-between'>
                <NavLink to="/login">
                    <img src={userImg}
                        alt="user icon"
                        width={30}
                        height={30} />
                </NavLink>
                <button>
                    <img src={searchImg}
                        alt="search icon"
                        width={30}
                        height={30} />
                </button>
                <NavLink to="/cart">
                    <img src={shoppingBagImg}
                        alt="shopping bag add icon"
                        width={30}
                        height={30} />
                </NavLink>

            </div>
        </div>
    )
}

export default TopBar
