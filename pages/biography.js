import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/about.jpg'
import BioBg from '../public/bio-bg.jpg'

export default function Biography() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full md:h-[50vh] h-[30vh] relative'>
                <Image
                    className='z-0'
                    src={BioBg}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='50% 35%'
                    priority='true'
                    quality='100'
                />
            </div>

            <p className='pt-6 tracking-wide'>
                ( English below )
            </p>

            <div className='lg:px-20 md:px-14 px-8'>
            <p>
                    成立於 2016 年的台北，緩緩目前由主唱兼吉他手 Coco、吉他手包子、貝斯手阿柏以及鼓手一珍所組成。團名「緩緩」的柔軟意味除了與團員個性連結，也代表著樂團的溫柔風格，用療癒的聲響述說著人生的眾多樣貌。從 2017 到 2022 年間的作品目前常被定位為 Shoegaze、Dream Pop 與 Folk Rock 等風格。
                </p>

                <p>
                    從 2017 年的同名 EP 的初試啼聲就得到許多關注，到 2019 年的第二張 EP《Charlie》更是將兩極的溫暖聲線與瞪靴聲響揉合成了獨特的風格。A-side 單曲〈Charlie〉用這樣極端的組合營造出遼闊夢境，B-side 單曲〈Indiepop〉則以復古動聽的吉他旋律貫穿全曲，也讓聽眾真切見識到緩緩多元的音樂野心。這張 EP 的發片演出由樂團獨立籌備，在台灣大學的教堂雅頌坊舉辦，也特別號召了攝影團隊將當晚的感動記錄下來。
                </p>

                <p>
                    在 2020 年的十月，緩緩終於推出首張專輯《水可以去任何地方》，並在開始在台灣各地巡迴。在這張專輯樂團返樸歸真地更走向聽眾的內心，使用了木吉他、合成器、以及更多打擊樂器，更多樣的樂器聲響卻更濃縮了團員對生活的體驗，也揭露了緩緩 Indie Folk 與 Dream Pop 風格的一面。首要首腦 Coco 在同名主打〈水可以去任何地方〉用動聽的詞曲表達了即使人生無常，我們永遠可以跨出藩籬，走出真正的自由。同時另一首主打〈I‘d better be on time〉也獲得影劇圈的青睞，被選為台劇《正義的算法》的劇中插曲。在普遍受到肯定及更多關注之後，緩緩也以這張專輯獲得 2021 年的金音創作獎最佳新人提名，以及 Freshmusic Awards 最佳新團體提名。
                </p>

                <p>
                    儘管 2020 年及 2021 年的全球疫情嚴峻，緩緩的音樂依然跨越語言及國籍，透過線上參演的方式參與了許多線上音樂節像是西班牙的 Primavera Pro, 泰國的 Bangkok Music City 以及日本的 exPop!!!!。
                </p>

                <p>
                    2022年八月緩緩發行了最新 EP《藍色的房間橘色的人》，延續上張專輯純淨民謠風格，在編曲上也採用了古典吉他、合成貝斯，乘載著更溫暖深刻的旋律，也生動描繪了團員在疫情之下的內心狀態：孤獨、沈悶但也同時擁有一些小確幸和希望。這張作品也讓緩緩首次跨出海外，於 2022 年九月疫情趨緩之時，受邀前往新加坡的 ASEAN Music Festival 演出並得到廣大迴響。
                </p>

                <p>
                    隨著緩慢而沈著的腳步，緩緩計劃於 2023 年推出第二張創作專輯。彼時的緩緩，將會帶來更多柔軟而堅定的作品流向更多地方，療癒每個城市中的靈魂。
                </p>

                <div className='w-full flex justify-center items-center p-8'>
                    <div
                        className='w-full h-[1px] bg-[#f8f8f8ed]'
                    />
                </div>

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
                    This EP has also brought Huan Huan abroad for the first time. In September 2022,
                    Huan Huan was invited to ASEAN Music Festival in Singapore and had gained lots of positive feedbacks.
                </p>

                <p>
                    With their slow but rather firm pace, Huan Huan is planning to release their second album in 2023.
                    At that time, Huan Huan will visit more places with their unique sounds and heal more cities for sure.
                </p>

            </div>
            <div className='w-full lg:py-20 md:py-14 py-8 flex justify-center'>
                <Link href='/#about'>
                    <button>
                        back to home →
                    </button>
                </Link>
            </div>
        </div>
    );
}