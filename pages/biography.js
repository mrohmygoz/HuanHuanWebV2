import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/_TRU4884.jpeg'
import BioBg from '../public/_TRU4696.jpeg'

export default function Biography() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full md:h-[70vh] h-[30vh] relative'>
                <Image
                    className='z-0'
                    src={BioBg}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='50% 61%'
                    priority='true'
                    quality='100'
                />
            </div>

            <p className='pt-6 tracking-wide'>( English below )</p>

            <div className='lg:px-20 md:px-14 px-8'>
                <p>「陪伴系樂團」— 緩緩 Huan Huan</p>

                <p>緩緩 Huan Huan 是成立於台北的另類流行樂團，由主唱 Coco、鼓手一珍、貝斯手石頭、吉他手包子所組成。歌曲大多不快偏慢，以民謠與搖滾為基底，搭配主唱 Coco 透明療癒的歌聲。創作語言豐富，涵蓋中文、英文、台語，能與不同國界的聽眾產生共感。第二張創作專輯《瀏海被風吹得整個飛起來》，更嘗試融合 Motown、Soul 等類型音樂元素，並首次挑戰台語詞作〈彼日的下晡〉。整張專輯擁有金黃色的溫暖聽感，明亮又柔和，像是安靜的朋友，陪你行經每一個日常。2025年更進一步、發行台語單曲《心內話講袂出喙》、華語單曲《害怕》、跨界合作單曲《缺口——寄W》三首作品，延續柔軟的內核，向外拓展邊界。</p>

                <p>緩緩自 2015 年創立以來，便以獨特的音樂風格在華語音樂圈嶄露頭角。2017年發表首張單曲《緩緩 Huan Huan》。2019 年推出 EP《Charlie》後，受到海內外樂評矚目，並於貴人散步音樂節演出後獲得國外策展人青睞，進而受邀參與荷蘭 Motel Mozaique 及葡萄牙 MIL 音樂節。2020 年發行首張專輯《水可以去任何地方》，曲風不同於後搖滾、瞪鞋為主的兩張EP作品，開始轉向民謠搖滾融合夢幻流行的療癒風格。其中〈I'd Better Be On Time〉被收錄為Disney+《正義的算法》影集插曲。2021年也與Sony合作拍攝該單曲之live session。此專輯不僅獲得日本廠牌 Inpartmaint Record 提出實體發行邀約，更受邀至日本 TBS radio 進行越洋直播訪問。專輯發行後，緩緩入圍 2021 年金音獎「最佳新人獎」，並陸續參與西班牙 Primavera Pro、泰國 Bangkok Music City 等國際音樂節的線上演出。</p>

                <p>隨著疫情解封，緩緩的國際版圖持續擴展。2022 年發行 EP《藍色的房間橘色的人》，在編制上加入古典吉他與合成器貝斯，開拓更豐富的聲響，也成功受邀至馬來西亞 CITY Plus 電台專訪，以及新加坡 ASEAN Music Festival 演出。2023 年與製作人王昱辰（老王）合作推出第二張專輯《瀏海被風吹得整個飛起來》，輕盈清新的台語聽感⼤受聽眾喜愛，佳評如潮。其中〈不哭不哭〉更獲選為 Netflix 影集《此時此刻》片尾曲。同年底，緩緩首次登上日本舞台，在沖繩 Music Power 2023 活動中與當地觀眾同歡共舞，獲得熱烈迴響。</p>

                <p>2024 年，緩緩發起〈緩緩到你家〉系列巡演，透過走入歌迷家中的深度互動，更加理解音樂對聽眾的意義。在這些近距離的交流中，緩緩深刻體會到自身音樂如同心靈庇護所般的陪伴價值。2025年4月，緩緩帶著全新發行的兩首單曲〈害怕〉、〈心內話講袂出喙〉，以台灣代表之姿登上日本知名音樂祭 SYNCHRONICITY，並參與關西FM802、Asian Breeze…等電台專訪，獲得媒體與樂迷一致好評。5月份啟動首次中國巡迴、遍及南京、杭州、上海、武漢、廣州，流暢且真摯的專場演出讓口碑與票房持續發酵。7月份發行與台灣女性詩人零雨跨界合作單曲《缺口——寄W》，也計劃將這些作品持續帶往國際，開啟嶄新的篇章。</p>

                <div className='w-full flex justify-center items-center p-8'>
                    <div className='w-full h-[1px] bg-[#f8f8f8ed]' />
                </div>

                <div className='md:float-right float-none md:w-[40%] w-full lg:px-7 md:px-5'>
                    <Image src={AboutImg} />
                </div>

                <p>"The Sound of Comfort" — Huan Huan</p>

                <p>Huan Huan is an alternative pop band based in Taipei, consisting of vocalist Coco, drummer Yi Jen, bassist Stone, and guitarist Myles. Their music leans towards the slower side, blending folk and rock influences with Coco's transparent and soothing vocals. Their diverse lyrics span Mandarin, English, and Taiwanese, allowing them to connect with audiences across different cultures. Their second album, “When The Wind Came Across”, incorporates elements of Motown and Soul while also experimenting with Taiwanese lyrics for the first time in the song That Afternoon. The album delivers a golden, warm listening experience—bright yet gentle, like a quiet friend accompanying you through everyday moments. In 2025, further progress was made with the release of three singles: the Taiwanese Hokkien track “Words Unsaid”, the Mandarin single “Afraid”, and the cross-artform collaboration “Fracture — To W”. These works continue to embody a gentle core while reaching outward to explore new boundaries.</p>

                <p>Since their formation in 2015, Huan Huan has stood out in the Mandarin music scene with their distinctive sound. In 2017, they released their debut single, “Huan Huan”. Following the release of their 2019 EP, “Charlie”, they gained attention from both domestic and international critics. Their performance at the LUCfest music festival caught the eye of overseas curators, leading to invitations to play at Motel Mozaïque in the Netherlands and MIL Festival in Portugal.</p>

                <p>In 2020, Huan Huan released their debut album, “Water Can Go Anywhere”, marking a shift from the post-rock and shoegaze influences of their previous EPs toward a folk-rock and dream-pop-infused healing sound. The track “I'd Better Be On Time” was featured in the Disney+ series “Small & Mighty”, and they collaborated with Sony for a live session of the song. The album also led to a physical release offer from Japan’s Inpartmaint Records and a live broadcast interview on Japan's TBS Radio. Following its release, Huan Huan was nominated for "Best New Artist" at the 2021 Golden Indie Music Awards and performed virtually at international festivals such as Primavera Pro in Spain and Bangkok Music City in Thailand.</p>

                <p>With the easing of pandemic restrictions, Huan Huan continued expanding their international presence. Their 2022 EP, “Blue Room Orange Man”, introduced classical guitar and synth bass, enriching their sound. They were invited for an exclusive interview on Malaysia’s CITY Plus Radio and performed at Singapore’s ASEAN Music Festival. In 2023, they collaborated with producer Yuchain Wang to release their second album,  “When The Wind Came Across”. The album’s fresh and airy Taiwanese lyrics resonated with listeners and received widespread acclaim. Notably, the song “No Tears” was selected as the ending theme for the Netflix series “At This Moment”. Later that year, Huan Huan made their debut on the Japanese stage at Music Power 2023 in Okinawa, where they received an enthusiastic response from the local audience.</p>

                <p>In 2024, Huan Huan launched the “Huan Huan to Your Home” tour, engaging in intimate house concerts to deepen their connection with fans and explore the emotional impact of their music. Through these close interactions, they gained a profound understanding of how their music serves as a sanctuary for listeners. In April 2025, Huan Huan brought her newly released singles “Afraid” and “Words Unsaid” to the stage of Japan’s renowned music festival SYNCHRONICITY, representing Taiwan. The band also appeared on prominent radio programs such as FM802 and Asian Breeze, receiving unanimous praise from both media and listeners. May marked their first tour in China, with stops in Nanjing, Hangzhou, Shanghai, Wuhan, and Guangzhou. The heartfelt and seamless performances garnered strong word-of-mouth and growing ticket sales. In July, Huan Huan released “Fracture — To W”, a collaboration between music and literature featuring Taiwanese poet Ling Yu. The band now plans to bring these works to international stages, opening a bold new chapter.</p>
            </div>
            <div className='w-full lg:py-20 md:py-14 py-8 flex justify-center'>
                <Link href='/#about'>
                    <button>back to home →</button>
                </Link>
            </div>
        </div>
    );
}
