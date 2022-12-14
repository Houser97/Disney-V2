import '../styles/MainCategories.css';
import { useEffect, useRef } from 'react';
import ImageVideo from './ImageVideo';
import {VideosImages} from '../assets/constants/index.js'

const MainCategories = () => {

    const videoElement = useRef([]);

    useEffect(() => {
        const videoElementCleaner = [...videoElement.current];
        videoElement.current.forEach(video => {
            video.addEventListener("mouseover", () => {
                video.play();
            })

            video.addEventListener("mouseleave", () => {
                video.pause();
            })
        })
        /*
        return () => {
            if(videoElementCleaner.length > 0){
                videoElementCleaner.forEach(video => {
                    video.RemoveEventListener("mouseover", () => {
                        video.play();
                    })
        
                    video.RemoveEventListener("mouseleave", () => {
                        video.pause();
                    })
                }) 
            }
        }*/
    }, [])

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