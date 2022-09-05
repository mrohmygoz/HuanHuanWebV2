import Discography from '../components/Discography'
import Blue from '../public/ep.jpg'
import Water from '../public/water.jpg'
import Charlie from '../public/charlie.jpeg'
import FisrtEp from '../public/first-ep.jpeg'

export default function Music() {
    const linkBlue = 'https://www.soundscape.net/a/28323';
    const linkWater = 'https://www.soundscape.net/a/26494';
    const linkCharlie = 'https://www.soundscape.net/a/26470';
    const linkHH = 'https://www.soundscape.net/a/26466';

    return (
        <div id='music' className='flex flex-col justify-center items-center lg:px-20 md:px-14 px-10'>
            <h1>
                Music
            </h1>
            <div className='lg:pb-20 md:pb-14 pb-10 w-full grid md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-6'>
                <Discography
                    title='Blue Room Orange Man'
                    coverImg={Blue}
                    url={linkBlue}
                />
                <Discography
                    title='Water Can Go Anywhere'
                    coverImg={Water}
                    url={linkWater}
                />
                <Discography
                    title='Charlie'
                    coverImg={Charlie}
                    url={linkCharlie}
                />
                <Discography
                    title='Huan Huan'
                    coverImg={FisrtEp}
                    url={linkHH}
                />
            </div>
        </div>
    );
}