import Discography from '../components/Discography'
import Blue from '../public/ep.png'
import Water from '../public/water.jpeg'
import Charlie from '../public/charlie.jpeg'
import FisrtEp from '../public/first-ep.jpeg'

export default function Music() {
    return (
        <div className='flex flex-col justify-center items-center lg:px-20 md:px-14 px-10'>
            <h1>
                Music
            </h1>
            <div className='lg:pb-20 md:pb-14 pb-10 w-full grid md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-6'>
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