import { BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsSpotify, BsApple } from 'react-icons/bs';
import { FaBandcamp } from 'react-icons/fa';
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='fixed w-full h-20 z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2'>
                <ul className='flex'>
                    <Link href='/'><li className='ml-5 text-sm uppercase'>HOME</li></Link>
                    <Link href='/'><li className='ml-5 text-sm uppercase'>ABOUT</li></Link>
                    <Link href='/music'><li className='ml-5 text-sm uppercase'>MUSIC</li></Link>
                    <Link href='/'><li className='ml-5 text-sm uppercase'>VIDEOS</li></Link>
                    <Link href='/'><li className='ml-5 text-sm uppercase'>SHOWS</li></Link>
                    <Link href='/'><li className='ml-5 text-sm uppercase'>SHOP</li></Link>
                </ul>
                <ul className='flex'>
                    <li className='mr-5'><BsFacebook /></li>
                    <li className='mr-5'><BsTwitter /></li>
                    <li className='mr-5'><BsInstagram /></li>
                    <li className='mr-5'><BsYoutube /></li>
                    <li className='mr-5'><BsSpotify /></li>
                    <li className='mr-5'><BsApple /></li>
                    <li className='mr-5'><FaBandcamp /></li>
                </ul>
        </div>
        </div>
    );
}