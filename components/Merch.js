import Image from 'next/image'
import Link from 'next/link'
import Bg from '../public/merch1.jpg'
import Cup1 from '../public/merch-cup1.jpg'
import Cup2 from '../public/merch-cup2.jpg'
import Water1 from '../public/merch-water1.jpg'
import Water2 from '../public/merch-water2.jpg'

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
            <div className='z-40 lg:p-20 md:p-14 p-8 grid md:grid-cols-5 grid-cols-1 lg:gap-10 md:gap-8 gap-6'>
                <div className='md:col-span-3 col-span-1 grid grid-cols-2 px-4'>
                    <div className='relative aspect-video'>
                        <Image 
                            objectFit='cover'
                            objectPosition='center'
                            layout='fill'
                            src={Water1} 
                        />
                    </div>
                    <div className='relative aspect-video'>
                        <Image 
                            objectFit='cover'
                            objectPosition='center'
                            layout='fill'
                            src={Water2} 
                        />
                    </div>
                    <div className='relative aspect-video'>
                        <Image 
                            objectFit='cover'
                            objectPosition='center'
                            layout='fill'
                            src={Cup1} 
                        />
                    </div>
                    <div className='relative aspect-video'>
                        <Image 
                            objectFit='cover'
                            objectPosition='center'
                            layout='fill'
                            src={Cup2} 
                        />
                    </div>
                </div>
                <div className='md:col-span-2 col-span-1 flex flex-col items-center justify-center pb-4'>
                    <h1>
                        Merch
                    </h1>
                    <p className='italic pb-4'>
                        CDs, vinly, cup sleeves now available
                    </p>
                    <button className='z-40'>
                        <a href={linkShop}>visit the shop</a>
                    </button>
                </div>
            </div>
        </div>
    );
}