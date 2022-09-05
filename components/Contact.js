import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/favicon.ico'

export default function Contact() {
    const email = 'huanhuantw@gmail.com';
    const linkEmail = 'mailto:' + email;

    return (
        <div id='contact' className='w-full'>
            <div className='lg:p-20 md:p-14 p-8 flex md:flex-row flex-col justify-around items-center'>
                <h1 className='py-0 md:pb-0 pb-4'>
                    contact
                </h1>
                <div className='md:col-span-2 col-span-1 flex flex-col justify-center md:items-start items-center
                                md:text-lg text-sm md:leading-relaxed tracking-wide
                                md:pb-0 pb-6'>
                    <span>Please contact us via:</span>
                    <Link href={linkEmail}>
                        <span className='underline cursor-pointer text-[#c4c2c2ed] hover:text-[#c4c2c293]'>
                            {email}
                        </span>
                    </Link>
                </div>
                <div className='relative md:w-[7vw] w-[15vw] flex justify-center items-center md:pb-0 pb-4'>
                    <Image 
                        src={Logo} 
                    />
                </div>
            </div>
        </div>
    );
}