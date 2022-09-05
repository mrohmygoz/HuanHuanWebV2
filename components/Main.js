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
                priority='true'
                quality='100'
            />

            <div className='w-full h-full flex flex-col justify-end items-center p-6'>
                <span className='z-40 py-1 md:py-2 uppercase tracking-[0.2em] md:tracking-[0.4em] 
                                text-sm md:text-2xl font-bold text-[#f5b41aed]'>
                        Blue Room Orange Man
                </span>
                <span className='z-40 md:py-1 italic text-xs md:text-lg'>
                    out now
                </span>
            </div>
        </div>
    );
}