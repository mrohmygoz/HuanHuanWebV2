import Discography from '../components/Discography'
import Blue from '../public/ep.jpg'
import Water from '../public/water.jpg'
import Charlie from '../public/charlie.jpeg'
import FisrtEp from '../public/first-ep.jpeg'
import Coeur from '../public/coeur-cover.jpeg'
import Winds from '../public/_winds-album-cover.jpg'
import Words from '../public/_words-single-cover.jpg'
import Afraid from '../public/_afraid-single-cover.jpg'

export default function Music() {
    const linkBlue = 'https://www.soundscape.net/a/28323';
    const linkWater = 'https://www.soundscape.net/a/26494';
    const linkCharlie = 'https://www.soundscape.net/a/26470';
    const linkHH = 'https://www.soundscape.net/a/26466';
    const linkCoeur = 'https://open.spotify.com/album/1Wnwt7wHqrZ5nHI9Xa6QyZ?si=Wzy9XxdLQpWBjbgnkhP2ZQ';
    const linkWinds = 'https://www.soundscape.net/a/47506';
    const linkWords = 'https://open.spotify.com/album/2XrlR2SLkqdgy6O7PBLWPq?si=Qy3NHulQRlORq33s8rfI9g';
    const linkAfraid = 'https://open.spotify.com/album/1JAENZmtbYKHxYOPoToRfV?si=L43pIP7UQQWIpHY3zBa40g';

    return (
        <div id='music' className='flex flex-col justify-center items-center lg:px-20 md:px-14 px-10'>
            <h1>
                Music
            </h1>
            <div className='lg:pb-20 md:pb-14 pb-10 w-full grid md:grid-cols-4 grid-cols-2 lg:gap-10 md:gap-8 gap-6'>
                <Discography coverImg={Afraid} url={linkAfraid} />
                <Discography coverImg={Words} url={linkWords} />
                <Discography coverImg={Winds} url={linkWinds} />
                <Discography coverImg={Blue} url={linkBlue} />
                <Discography coverImg={Coeur} url={linkCoeur} />
                <Discography coverImg={Water} url={linkWater} />
                <Discography coverImg={Charlie} url={linkCharlie} />
                <Discography coverImg={FisrtEp} url={linkHH}/>
            </div>
        </div>
    );
}