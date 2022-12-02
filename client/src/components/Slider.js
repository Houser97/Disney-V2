import '../styles/slider.css';

const SliderCreated = ({image}) => {

    return(
        <div className='slider' id='slider-created'>
            <div className='slider-effect-border'></div>
            <img id='poster' src={image} alt = "poster"></img>
        </div>
    )
}

export default SliderCreated;