import Image from 'next/image'
import Link from 'next/link'
import Photo from '../public/photo.jpg'

export default function Main2() {
    return (
        <div className='w-full relative text-center md:h-screen h-[60vh] flex flex-col'>
            <Image 
                className='z-[-100]'
                objectFit='cover'
                objectPosition='center'
                layout='fill'
                src={Photo} 
            />

            <div className='w-full h-20'></div>

            <div className='flex-grow flex flex-col'>
                <div className='w-full h-[65%]'></div>
                <div className='flex flex-col justify-center items-center flex-grow'>
                    <span className='z-40 py-1 md:py-2 uppercase tracking-[0.2em] md:tracking-[0.4em] text-sm md:text-2xl font-bold text-[#f5b41aed]'>
                        Blue Room Orange Man
                    </span>
                    <span className='z-40 md:py-1 font-light italic text-xs md:text-base'>
                        out now
                    </span>
                    <Link href='/'>
                        <button className='z-40 mt-2 hover:text-[#100404ed] hover:bg-[#ffffffed]'>
                            listen
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}