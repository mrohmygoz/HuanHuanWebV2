import Image from 'next/image'

export default function SingleMerch({img}) {
    return (
        <div className='relative aspect-video'>
            <Image 
                objectFit='cover'
                objectPosition='center'
                layout='fill'
                src={img} 
            />
        </div>
    );
}