import '../styles/OptionDropdownMenu.css'

interface optionMenuProps {
    option: string,
    optionRef: React.RefObject<any>,
    spanRef: React.RefObject<any>,
    index: number
}

const OptionDropdownMenu = ({option, optionRef, spanRef, index}: optionMenuProps) => {
    return(
        <div ref={element => optionRef.current[index] = element} className='option'>
            <span ref={element => spanRef.current[index] = element} className='span-effect-option'></span>
            <div className='option-name'>{option}</div>   
        </div>   
    )
}

export default OptionDropdownMenu