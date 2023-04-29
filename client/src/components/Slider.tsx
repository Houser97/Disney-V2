import '../styles/Slider.css';

interface SliderCreated {
    image: string
}

const SliderCreated = ({image}: SliderCreated) => {

    return(
        <div className='slider' id='slider-created'>
            <div className='slider-effect-border'></div>
            <img id='poster' src={image} alt = "poster"></img>
        </div>
    )
}

export default SliderCreated;