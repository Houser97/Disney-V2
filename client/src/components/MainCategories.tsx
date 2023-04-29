import '../styles/MainCategories.css';
import { useEffect, useRef } from 'react';
import ImageVideo from './ImageVideo';
import {VideosImages} from '../assets/constants/index.js'

const MainCategories = () => {

    const videoElement = useRef<HTMLVideoElement[] | []>([]);

    useEffect(() => {
        if(!videoElement.current) return undefined;
        videoElement.current.forEach(video => {
            video.addEventListener("mouseover", () => {
                video.play();
            })

            video.addEventListener("mouseleave", () => {
                video.pause();
            })
        })
    }, [videoElement.current])

    return(
        <div className='images-category-container'>
            {
                VideosImages.map(function iterateImageVideos(item, iterator){
                    return(
                        <ImageVideo key={`ImageVide-${iterator}`} imageAndVideo = {item} videoElement = {videoElement} iterator = {iterator} />
                    )
                })
            }
        </div>
    )
}

export default MainCategories;