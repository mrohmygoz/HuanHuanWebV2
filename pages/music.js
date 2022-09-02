import Image from 'next/image'
import Head from 'next/head'
import Photo from '../public/photo.jpg'
import Discography from '../components/Discography'
import Blue from '../public/ep.png'
import Water from '../public/water.jpeg'
import Charlie from '../public/charlie.jpeg'
import FisrtEp from '../public/first-ep.jpeg'

export default function Music() {
    return (
        <div className='w-full flex flex-col'>
            <Head>
                <title>緩緩 Huan Huan | Official Site</title>
                <meta name="description" content="Huan Huan an indie band from Taiwan." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='relative h-[40vh]'>
                <Image 
                    className='z-[-100]'
                    objectFit='cover'
                    objectPosition='center'
                    layout='fill'
                    src={Photo} 
                />
            </div>

            <div className='p-16 grid grid-cols-2 gap-10'>
                <Discography
                    title='Blue Room Orange Man'
                    coverImg={Blue}
                    url='/'
                />
                <Discography
                    title='Water Can Go Anywhere'
                    coverImg={Water}
                    url='/'
                />
                <Discography
                    title='Charlie'
                    coverImg={Charlie}
                    url='/'
                />
                <Discography
                    title='Huan Huan'
                    coverImg={FisrtEp}
                    url='/'
                />
            </div>
        </div>
    );
}