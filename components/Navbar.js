import { BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsSpotify, BsApple } from 'react-icons/bs';
import { FaBandcamp } from 'react-icons/fa';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
    const linkFb = 'https://www.facebook.com/HuanHuanTW';
    const linkIg = 'https://www.instagram.com/huanhuantw/';
    const linkTwitter = 'https://twitter.com/huanhuantw';
    const linkYouTube = 'https://www.youtube.com/c/HuanHuan';
    const linkSpotify = 'https://open.spotify.com/artist/0JeQFUYo8H7c5K8VIICIIH';
    const linkApple = 'https://music.apple.com/tw/artist/%E7%B7%A9%E7%B7%A9/1276430061';
    const linkBandcamp = 'https://huanhuan.bandcamp.com/music';

    const [nav, setNav] = useState(false);
    const [bg, setBg] = useState(false);

    const handleNav = function () {
        setNav(!nav);
    };

    useEffect(() => {
        const handleBg = function () {
          if (window.scrollY >= 90) {
            setBg(true);
          } else {
            setBg(false);
          }
        };
        window.addEventListener('scroll', handleBg);
    });

    return (
        <div className={
            bg  ? ( nav 
                    ? 'fixed w-full md:h-10 h-0 z-[100] bg-[#2d2d2df3] ease-in-out duration-300'
                    : 'fixed w-full md:h-10 h-14 z-[100] bg-[#2d2d2df3] ease-in-out duration-300') 
                : ( nav 
                    ? 'fixed w-full md:h-20 h-0 z-[100] ease-in-out duration-300' 
                    : 'fixed w-full md:h-20 h-14 z-[100] ease-in-out duration-300' )}>
            
            {/* TOP NAV BAR */}
            <div className='flex md:justify-between justify-end items-center w-full h-full px-2'>
                <ul className='hidden md:flex'>
                    <Link href='/'><li className='ml-5 text-sm uppercase'>HOME</li></Link>
                    <Link href='/#music'><li className='ml-5 text-sm uppercase'>MUSIC</li></Link>
                    <Link href='/#videos'><li className='ml-5 text-sm uppercase'>VIDEOS</li></Link>
                    <Link href='/#about'><li className='ml-5 text-sm uppercase'>ABOUT</li></Link>
                    <Link href='/#merch'><li className='ml-5 text-sm uppercase'>SHOP</li></Link>
                    <Link href='/#contact'><li className='ml-5 text-sm uppercase'>CONTACT</li></Link>
                </ul>
                <ul className='hidden md:flex'>
                    <Link href={linkFb}><li className='mr-5'><BsFacebook /></li></Link>
                    <Link href={linkIg}><li className='mr-5'><BsInstagram /></li></Link>
                    <Link href={linkTwitter}><li className='mr-5'><BsTwitter /></li></Link>
                    <Link href={linkYouTube}><li className='mr-5'><BsYoutube /></li></Link>
                    <Link href={linkSpotify}><li className='mr-5'><BsSpotify /></li></Link>
                    <Link href={linkApple}><li className='mr-5'><BsApple /></li></Link>
                    <Link href={linkBandcamp}><li className='mr-5'><FaBandcamp /></li></Link>
                </ul>
                <div onClick={handleNav} class='md:hidden mr-1'>
                    <AiOutlineMenu className={
                        nav 
                        ? 'hidden ease-in-out duration-300' 
                        : 'ease-in-out duration-300'
                    } size={25} />
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={
                nav ? 'md:hidden fixed w-full h-screen bg-[#2d2d2df3] flex flex-col'
                    : 'hidden ease-in-out duration-300'}>
                <div className='w-full h-14 flex justify-end items-center'> 
                    <div onClick={handleNav} className='mr-2'>
                        <AiOutlineClose className={nav ? '' : 'hidden'} size={25} />
                    </div>
                </div>
                <div className='w-full h-screen flex-grow flex flex-col justify-center items-center ease-in-out duration-300'>
                    <ul onClick={handleNav} className='text-center'>
                        <Link href='/'><li className='mb-5 text-4xl uppercase'>HOME</li></Link>
                        <Link href='/#music'><li className='mb-5 text-4xl uppercase'>MUSIC</li></Link>
                        <Link href='/#videos'><li className='mb-5 text-4xl uppercase'>VIDEOS</li></Link>
                        <Link href='/#about'><li className='mb-5 text-4xl uppercase'>ABOUT</li></Link>
                        <Link href='/#merch'><li className='mb-5 text-4xl uppercase'>SHOP</li></Link>
                        <Link href='/#contact'><li className='mb-5 text-4xl uppercase'>CONTACT</li></Link>
                    </ul>
                    <ul className='flex py-5'>
                        <li className='mr-5'><BsFacebook size={25}/></li>
                        <li className='mr-5'><BsInstagram size={25}/></li>
                        <li className='mr-5'><BsTwitter size={25}/></li>
                        <li className='mr-5'><BsYoutube size={25}/></li>
                        <li className=''><BsSpotify size={25}/></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}