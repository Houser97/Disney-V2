import '../styles/ImageVideo.css';

const ImageVideo = ({imageAndVideo, videoElement, iterator}) => {
    const image = imageAndVideo.image;
    const video = imageAndVideo.video;

    return(
    <div className='image-category'>
        <img src={image} alt = "sectionView" className='image-png disney'></img>
        <video ref={(element => videoElement.current[iterator]=element)} src={video} loop mute="true" className='video-tag'></video>
    </div>
    )
}

export default ImageVideo;
