import Image from 'next/image'
import Link from 'next/link'

export default function Discography2({title, coverImg, url}) {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='flex md:flex-row flex-col md:w-full w-[80%]'>
                <div className='relative aspect-square md:w-[35%]'>
                    <Image
                        src={coverImg} 
                        layout='fill'
                        objectFit='contain'
                        alt='/' 
                        priority='true'
                    /> 
                </div>

                <div className='flex flex-col md:w-[65%] justify-between md:p-1 md:pl-5 md:items-start items-center'>
                    <span className='tracking-wider lg:text-3xl md:text-xl text-lg font-bold md:py-0 py-2'>
                        {title}
                    </span>
                    <div className='md:pb-0 pb-3'>
                        <Link href={url}>
                            <button>listen →</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}