import Image from 'next/image'
import Link from 'next/link'
import EPCover from '../public/ep.png'

export default function Main() {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>

                    <Image 
                        width='450px'
                        height='450px'
                        src={EPCover} 
                    />

                    <p className='py-8 uppercase tracking-wider text-lg'>
                        Blue Room Orange Man - The New EP
                    </p>

                    <div className='flex justify-center items-center'>
                        <p className='p-4 uppercase text-lg tracking-widest border-solid border-2'>
                            Out Now
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}