import '../styles/imageCategories.css';
import { useEffect, useRef, useState } from 'react';
import ImageVideo from './imageVideo';

const MainCategories = () => {

    const [imagesVideos] = useState([{image: Disney, video: videoDisney},
                                     {image: Pixar, video: videoPixar},
                                     {image: Marvel, video: videoMarvel},
                                     {image: StarWars, video: videoStar},
                                     {image: National, video: videoNational}])

    const videoElement = useRef([]);

    useEffect(() => {
        videoElement.current.forEach(video => {
            video.addEventListener("mouseover", () => {
                video.play();
            })

            video.addEventListener("mouseleave", () => {
                video.pause();
            })
        })
        
    }, [])

    return(
        <div className='images-category-container'>
            {
                imagesVideos.map(function iterateImageVideos(item, iterator){
                    return(
                        <ImageVideo key={iterator} imageAndVideo = {item} videoElement = {videoElement} iterator = {iterator} />
                    )
                })
            }
        </div>
    )
}

export default MainCategories;