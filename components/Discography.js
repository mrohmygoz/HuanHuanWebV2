import Image from 'next/image'
import Link from 'next/link'

export default function Discography2({ coverImg, url }) {
    return (
        <div className='w-full flex justify-center items-center'>
            <Link href={url} passHref>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className='relative aspect-square w-full group overflow-hidden rounded-2xl shadow-md transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer'
                >
                    {/* 圖片本體 */}
                    <Image
                        src={coverImg}
                        layout='fill'
                        objectFit='cover'
                        alt='discography cover'
                        priority={true}
                        className='transition-all duration-300'
                    />

                    {/* 遮罩層：hover 時圖片變暗 */}
                    <div className='absolute inset-0 bg-[#000000e7] bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    {/* Listen 字樣 */}
                    <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='lg:text-3xl md:text-2xl text-xl tracking-widest font-extrabold lowercase'>Listen →</span>
                    </div>
                </a>
            </Link>
        </div>
    );
}
