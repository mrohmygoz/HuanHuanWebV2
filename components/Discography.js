import Image from 'next/image'
import Link from 'next/link'

export default function Discography({title, coverImg, url}) {
    return (
        <div className='flex w-full'>
            <div className='relative aspect-square w-[40%]'>
                <Image
                    src={coverImg} 
                    layout='fill'
                    objectFit='contain'
                    alt='/' 
                /> 
            </div>

            <div className='w-[5%]'></div>

            <div className='md:p-1 relative flex flex-col w-[55%]'>
                <div className='h-[45%]'>
                    <span className='tracking-wider lg:text-3xl md:text-xl text-lg font-bold'>
                        {title}
                    </span>
                </div>
                <div className='h-[5%]'></div>
                <div className='h-[50%] flex flex-col justify-around'>
                    <span className='tracking-wider font-semibold lg:text-lg md:text-base text-sm'>
                        now available
                    </span>
                    <div className='flex'>
                        <Link href={url}>
                            <button className=''>listen</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}