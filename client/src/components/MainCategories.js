import '../styles/imageCategories.css';
import { useEffect, useRef, useState } from 'react';
import ImageVideo from './imageVideo';
import VideosImages from '../assets/constants/index.js'

const MainCategories = () => {

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
                VideosImages.map(function iterateImageVideos(item, iterator){
                    return(
                        <ImageVideo key={iterator} imageAndVideo = {item} videoElement = {videoElement} iterator = {iterator} />
                    )
                })
            }
        </div>
    )
}

export default MainCategories;