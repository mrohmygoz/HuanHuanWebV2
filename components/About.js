import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/_TRU4884.jpeg'

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

                <p>Huan Huan is an alternative pop band based in Taipei, consisting of vocalist Coco, drummer Yi Jen, bassist Stone, and guitarist Myles. Their music leans towards the slower side, blending folk and rock influences with Coco's transparent and soothing vocals. Their diverse lyrics span Mandarin, English, and Taiwanese, allowing them to connect with audiences across different cultures. Their second album, “When The Wind Came Across”, incorporates elements of Motown and Soul while also experimenting with Taiwanese lyrics for the first time in the song That Afternoon. The album delivers a golden, warm listening experience—bright yet gentle, like a quiet friend accompanying you through everyday moments. In 2025, further progress was made with the release of three singles: the Taiwanese Hokkien track “Words Unsaid”, the Mandarin single “Afraid”, and the cross-artform collaboration “Fracture — To W”. These works continue to embody a gentle core while reaching outward to explore new boundaries.</p>

                <p>Since their formation in 2015, Huan Huan has stood out in the Mandarin music scene with their distinctive sound. In 2017, they released their debut single, “Huan Huan”. Following the release of their 2019 EP, “Charlie”, they gained attention from both domestic and international critics. Their performance at the LUCfest music festival caught the eye of overseas curators, leading to invitations to play at Motel Mozaïque in the Netherlands and MIL Festival in Portugal.</p>

                <p>In 2020, Huan Huan released their debut album, “Water Can Go Anywhere”, marking a shift from the post-rock and shoegaze influences of their previous EPs toward a folk-rock and dream-pop-infused healing sound. The track “I'd Better Be On Time” was featured in the Disney+ series “Small & Mighty”, and they collaborated with Sony for a live session of the song. The album also led to a physical release offer from Japan’s Inpartmaint Records and a live broadcast interview on Japan's TBS Radio. Following its release, Huan Huan was nominated for "Best New Artist" at the 2021 Golden Indie Music Awards and performed virtually at international festivals such as Primavera Pro in Spain and Bangkok Music City in Thailand.</p>

                <p>With the easing of pandemic restrictions, Huan Huan continued expanding their international presence. Their 2022 EP, “Blue Room Orange Man”, introduced classical guitar and synth bass, enriching their sound. They were invited for an exclusive interview on Malaysia’s CITY Plus Radio and performed at Singapore’s ASEAN Music Festival. In 2023, they collaborated with producer Yuchain Wang to release their second album,  “When The Wind Came Across”. The album’s fresh and airy Taiwanese lyrics resonated with listeners and received widespread acclaim. Notably, the song “No Tears” was selected as the ending theme for the Netflix series “At This Moment”. Later that year, Huan Huan made their debut on the Japanese stage at Music Power 2023 in Okinawa, where they received an enthusiastic response from the local audience.</p>

                <p>In 2024, Huan Huan launched the “Huan Huan to Your Home” tour, engaging in intimate house concerts to deepen their connection with fans and explore the emotional impact of their music. Through these close interactions, they gained a profound understanding of how their music serves as a sanctuary for listeners. In April 2025, Huan Huan brought her newly released singles “Afraid” and “Words Unsaid” to the stage of Japan’s renowned music festival SYNCHRONICITY, representing Taiwan. The band also appeared on prominent radio programs such as FM802 and Asian Breeze, receiving unanimous praise from both media and listeners. May marked their first tour in China, with stops in Nanjing, Hangzhou, Shanghai, Wuhan, and Guangzhou. The heartfelt and seamless performances garnered strong word-of-mouth and growing ticket sales. In July, Huan Huan released “Fracture — To W”, a collaboration between music and literature featuring Taiwanese poet Ling Yu. The band now plans to bring these works to international stages, opening a bold new chapter.</p>
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