import Image from 'next/image'
import Link from 'next/link';
import Bg from '../public/videos-bg.jpg'
import SingleVideo from './SingleVideo';

export default function Videos() {
    const linkYoutube = 'https://www.youtube.com/c/HuanHuan';
    const linkWater = 'https://www.youtube.com/embed/oVtpxoFa89M';
    const linkLauren = 'https://www.youtube.com/embed/73TAip72II8';
    const linkIndiepop = 'https://www.youtube.com/embed/KRL_amjgYOE';
    const linkOnTimeLive = 'https://www.youtube.com/embed/tLqc6bf3inY';

    return(
        <div id='videos' className='w-full relative'>
            <Image 
                className='z-[-100]'
                objectFit='cover'
                objectPosition='center'
                layout='fill'
                src={Bg} 
            />
            <div className='flex flex-col justify-center items-center lg:px-20 md:px-14 px-8'>
                <h1 className='z-40'>
                    Videos
                </h1>
                <div className='z-40 lg:pb-20 pb-10 w-full grid md:grid-cols-4 grid-cols-1 lg:gap-10 md:gap-8 gap-6 items-center'>
                    <div className='md:col-span-3 col-span-1 w-full h-full'>
                        <SingleVideo videoUrl={linkWater} />
                    </div>
                    <div className='col-span-1 w-full h-full'>
                        <div className='grid grid-cols-1 lg:gap-10 md:gap-8 gap-6'>
                            <SingleVideo videoUrl={linkLauren} />
                            <SingleVideo videoUrl={linkIndiepop} />
                            <SingleVideo videoUrl={linkOnTimeLive} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='z-40 lg:pb-20 md:pb-14 pb-8 flex justify-center'>
                <button className='z-40'>
                    <a href={linkYoutube}>watch more on YouTube →</a>
                </button>
                
            </div>
        </div>
    );
}