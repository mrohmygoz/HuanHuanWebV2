import Image from 'next/image'
import Logo from '../public/logo.png'

export default function Contact() {
    return (
        <div className='w-full'>
            <div className='lg:p-20 md:p-14 p-8 grid md:grid-cols-4 grid-cols-1 lg:gap-10 md:gap-8 gap-6'>
                <div className='col-span-1 flex justify-center items-center'>
                    <h1 className='py-0'>
                        contact
                    </h1>
                </div>
                <div className='md:col-span-2 col-span-1 flex flex-col justify-center md:items-start items-center md:pl-4
                                md:text-lg text-sm md:leading-relaxed leading-relaxed tracking-wide'>
                    <span>Please contact us via:</span>
                    <span>huanhuantw@gmail.com</span>
                </div>
                <div className='col-span-1 flex justify-center items-center'>
                    <div className='relative md:w-[15vw] w-[25vw] flex  justify-center items-center'>
                        <Image 
                            src={Logo} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}