import Image from 'next/image'
import AboutImg from '../public/about.jpg'

export default function About() {
    return (
        <div className='flex flex-col justify-center items-center lg:px-20 md:px-14 px-8'>
            <h1>
                About
            </h1>
            <div className='lg:pb-20 md:pb-14 pb-8'>
                <div className='md:float-right float-none md:w-[40%] w-full lg:px-7 md:px-5'>
                    <Image
                        src={AboutImg}
                        style='fill'
                        objectFit='cover'
                    />
                </div>

                <p>
                    Established in 2016, Huan Huan is an indie band from Taipei, Taiwan.
                    Since Huan Huan means “slowly” in Mandarin, warm guitar noise and slow grooving developed the music style 
                    combined with Shoegaze, Post Rock, and Folk Rock elements. 
                    The first EP《Huan Huan》was released in 2017. 
                    With the releasing performance, acoustic tour, and several music festivals, 
                    the band received lots of positive feedbacks and attention. 
                    In 2019 the band released the second EP 《Charlie》. 
                    The A-side song〈Charlie〉created a unique space-like vibe with loud wall of overdrive guitar. 
                    On the other hand, 〈Indiepop〉was a 70s-like indie tune with a catchy riff and cute lyrics. 
                    The releasing performance was held in a church in NTU and nice feedbacks and beautiful vide were well filmed. 
                </p>

                <p>
                    2020 was an important and succeed year for the band. 
                    The debut album 《Water Can Go Anywhere》was released, 
                    which revealed the Indie Folk and Dream Pop sides of the band. 
                    The album has been stated as clean and pure sound with a sense of transparency. 
                    This album was nominated by 2021 Golden Indie Music Awards as “Best New Artist”, 
                    and 2021 Freshmusic Awards as “Best New Bands”. 
                </p>
                
                <p>
                    Although the COVID-19 pandemic made 2020~2021 a tough period for gigs oversea, 
                    Huan Huan&#39;s music still brought them to other countries by online festivals and live sessions like exPoP!!!! in Japan, 
                    Bangkok Music City in Thailand, Primavera Pro in Spain.
                </p>

                <p>
                    In 2022, as the guitarist Myles (also from Major in Body Bear) officially joined, 
                    they are releasing new EP 《Blue Room, Orange Man》, 
                    which interpreted life after pandemic, 
                    of how people spending more time in their own room and facing loneliness more directly. 
                    By adding in classical guitar and synth bass to cozy lyrics and melodies, 
                    Huan Huan will keep their unique sound flow to everyone&#39;s mind.  
                </p>
            </div>
        </div>
    );
}