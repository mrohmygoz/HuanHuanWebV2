import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/about.jpg'
import React, { useEffect, useState } from 'react'

export default function About() {
    return (
        <div id='about' className='flex flex-col justify-center items-center lg:px-20 md:px-14 px-8'>
            <h1>
                About
            </h1>
            <div className='relative md:h-[40vh] h-[60vh] overflow-clip ease-in-out duration-300 text-transparent bg-clip-text bg-gradient-to-b from-[#f8f8f8ed] to-transparent'>    
                <div className='md:float-right float-none md:w-[40%] w-full lg:px-7 md:px-5'>
                    <Image
                        src={AboutImg}
                    />
                </div>
            
                <p>
                    <span className='font-bold'>緩緩 Huan Huan</span> is a Taiwanese band formed in Taipei, Taiwan in 2016.
                    The band consists of vocalist and guitarist Coco, guitarist Myles, bassist Paul and drummer Yi Jen.
                    Since "huan huan" means "slowly" in Mandarin, Huan Huan's music is soft yet resilient, 
                    trying to make sounds of healing and sings for the uncertainties of life.
                    Throughout their discographies from 2017 to 2022, their music is often described as 
                    shoegaze, dream-pop and folk-rock.
                </p>

                <p>
                    In September 2017, Huan Huan introduced themselves to the world with their debut self-titled EP 
                    and has gained attention ever since. Then in March 2019, Huan Huan returned with another two-song EP, "Charlie". 
                    Following the shoegaze musical style from their first EP, the A-side song "Charlie"
                    created a unique vibe by combining tender vocal lines with space-like guitar noise and strong beats.
                    On the other hand, the other song "Indiepop" in the second EP has a vintage indie tone 
                    with catchy guitar riffs and cute lyrics, giving the audience a hint of Huan Huan&#39;s diverse musical style
                    in their following journey. The release party of "Charlie" was held in a church in Taiwan National University
                    and the beautiful vibe was also well-filmed.
                </p>

                <p>
                    In October 2020, Huan Huan announced their debut album, "Water Can Go Anywhere", along with their first Taiwan tour in support.
                    In this album, Huan Huan has discovered a rather clean and pure sound by using instruments like acoustic guitar,
                    synthesizer and percussions, which was their first time revealing elements of indie-folk and dream-pop.
                    In the title track "Water Can Go Anywhere", with water being a metaphor of freedom, 
                    the vocalist and composer Coco expressed a complicated emotion: despite the fear and uncertainties we have in life,
                    we are still free and able to break through ourselves to go anywhere further.
                    Gaining even more attention and feedback since release, this album was nominated for Best New Artist by Golden Indie Music Awards 
                    and Best New Bands by Freshmusic Awards in 2021.
                </p>

                <p>
                    Although the pandemic had stopped artists from touring abroad during 2020 and 2021, Huan Huan&#39;s music still brought
                    attention to the world after their debut album release. In 2021, they attended several international festivals 
                    online such as Primavera Pro in Spain, Bangkok Music City in Thailand and exPop!!!! in Japan.
                </p>

                <p>
                    In August 2022, Huan Huan announced their new EP, "Blue Room Orange Man", along with their new member Myles.
                    According to vocalist and composer Coco, following their debut album, this EP had pushed further 
                    on exploring clean, indie and folk sounds by using classical guitar, synth bass and soft melodies.
                    Content-wise, this EP had also depicted the inner state of Coco during the pandemic: 
                    being lonely, stuffy, and powerless while being cozy, hopeful and self-enjoyed at the same time.
                    In September 2022, Huan Huan was invited to ASEAN Music Festival in Singapore and will do one more gig in 
                    Kuala Lumpur, Malaysia. With their running pace gradually found, Huan Huan will keep introducing their unique sounds 
                    in the future for sure.
                </p>
            </div>
            <div className='lg:py-20 md:py-14 py-8'>
                <Link href='/biography'>
                    <button>
                        read full bio →
                    </button>
                </Link>
            </div>
        </div>
    );
}