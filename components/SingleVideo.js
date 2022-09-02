export default function SingleVideo({videoUrl}) {
    return (
        <div className='w-full h-full relative aspect-video'>
            <iframe 
                width="100%"
                height="100%"
                src={videoUrl}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            >
            </iframe>
        </div>
        
    );
}