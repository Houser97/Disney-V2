import '../styles/ImageVideo.css';

interface imageAndVideoProp {
    image: string,
    video: string
}

interface ImageVideoProps {
    imageAndVideo: imageAndVideoProp,
    videoElement: React.RefObject<any>,
    iterator: number
}

const ImageVideo = ({imageAndVideo, videoElement, iterator}: ImageVideoProps) => {
    const image = imageAndVideo.image;
    const video = imageAndVideo.video;

    return(
    <div className='image-category'>
        <img src={image} alt = "sectionView" className='image-png disney'></img>
        <video ref={(element => videoElement.current[iterator]=element)} src={video} loop muted={true} className='video-tag'></video>
    </div>
    )
}

export default ImageVideo;
