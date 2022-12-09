import '../styles/OptionDropdownMenu.css'

const OptionDropdownMenu = ({option, optionRef, spanRef, index}) => {
    return(
        <div ref={element => optionRef.current[index] = element} className='option'>
            <span ref={element => spanRef.current[index] = element} className='span-effect-option'></span>
            <div className='option-name'>{option}</div>   
        </div>   
    )
}

export default OptionDropdownMenu