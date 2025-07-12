import Image from 'next/image'
import SingleMerch from './SingleMerch'
import Bg from '../public/_winds-pic.jpg'
import Cup1 from '../public/merch-cup1.jpg'
import Cup2 from '../public/merch-cup2.jpg'
import Water1 from '../public/merch-water1.jpg'
import Water2 from '../public/merch-water2.jpg'
import CoinBag from '../public/coin-bag.jpeg'
import Stickers from '../public/stickers.jpeg'
import Winds1 from '../public/winds-merch1.jpeg'
import Winds2 from '../public/winds-merch2.jpeg'

export default function Merch() {
    const linkShop = 'https://www.inuteromusic.com/pages/huanhuan';

    return (
        <div id='merch' className='w-full relative'>
            <Image 
                className='z-[-100]'
                objectFit='cover'
                objectPosition='center'
                layout='fill'
                src={Bg} 
            />
            <div className='z-0 absolute inset-0 bg-[#000000e7] md:opacity-10 opacity-20' />
            <div className='z-40 grid md:grid-cols-5 grid-cols-1 
                            lg:px-20 md:px-14 px-8 
                            lg:py-20 md:py-14 py-0 
                            lg:gap-10 md:gap-8 gap-0'>
                <div className='z-40 md:hidden block text-center'>
                    <h1>merch</h1>
                </div>
                <div className='z-40 md:col-span-3 col-span-1 grid grid-cols-2 md:px-4 px-0'>
                    <SingleMerch img={CoinBag} />
                    <SingleMerch img={Stickers} />
                    <SingleMerch img={Winds2} />
                    <SingleMerch img={Water2} />
                </div>
                <div className='z-40 md:col-span-2 col-span-1 flex flex-col items-center justify-center md:pb-4 py-8'>
                    <h1 className='z-40 md:block hidden'>
                        Merch
                    </h1>
                    <p className='italic pb-4'>
                        CDs, coin bags, stickers now available
                    </p>
                    <button>
                        <a href={linkShop} target="_blank" rel="noopener noreferrer">visit the shop →</a>
                    </button>
                </div>
            </div>
        </div>
    );
}