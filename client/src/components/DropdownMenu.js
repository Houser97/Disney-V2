import '../styles/DropdownMenu.css';
import '../styles/OptionDropdownMenu.css';
import { useEffect, useRef, useState } from 'react';
/*import OptionDropdownMenu from './optionDropdownMenu';*/

const DropdownMenu = ({setFilter}) => {

    const [options] = useState(["ALL MOVIES A-Z",
                                "ANIMATED",
                                "KIDS"]);

    const optionsRef = useRef([]);
    const spansEffectRef = useRef([]);
    const dropdownMenu = useRef(null);

    const clearEffects = () => {
        spansEffectRef.current.forEach(span => span.classList.remove("span-effect-selected"));
        optionsRef.current.forEach(option => option.classList.remove("selected-option-dropdown"))
    }

    const toggleDropdown = () => {
        const dropdownDisplay = window.getComputedStyle(dropdownMenu.current).display;
        if(dropdownDisplay === "none") dropdownMenu.current.style.display = "flex";
        else if(dropdownDisplay === "flex") dropdownMenu.current.style.display = "none";
    }

    useEffect(() => {
        optionsRef.current.forEach(option => {
            /*Se coloca valor por defecto de Dropdown menu al montarse el componente*/
            if(option.textContent === "ALL MOVIES A-Z"){
                option.childNodes[0].classList.add("span-effect-selected");
                option.classList.add("selected-option-dropdown");
                option.parentNode.parentNode.childNodes[0].childNodes[0].textContent = "ALL MOVIES A-Z";
            }
        })

        optionsRef.current.forEach(option => 
            option.addEventListener("click", (e) => {
                clearEffects();
                const spanEffect = e.target.childNodes[0];
                spanEffect.classList.add("span-effect-selected")
    
                e.target.classList.add("selected-option-dropdown") 
                /* Se obtiene el DIV en donde se muestra el valor del filtro */
                const resultDiv = e.target.parentNode.parentNode.childNodes[0].childNodes[0];
                resultDiv.textContent = e.target.childNodes[1].textContent;
                
                dropdownMenu.current.style.display = "none";

                setFilter(resultDiv.textContent);
            }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return(
        <div className='drop-down-menu-section'>
        <div className='drop-down-menu'>
            <div onClick={toggleDropdown} className='icon-result'>
                <div className='result-dropmenu'>Here goes result</div>
                <div className='icon-arrow'>
                    <svg className='chevron-down' viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </div>
            </div>
            <div ref={dropdownMenu} className='options'>
                {options.map(function iterateOptions(option, iterator){
                    return(
                        <OptionDropdownMenu key={`${iterator}-option`} option={option}
                        index = {iterator} optionRef ={optionsRef} spanRef = {spansEffectRef}/>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default DropdownMenu;