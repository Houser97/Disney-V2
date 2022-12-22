import '../styles/DropdownMenu.css';
import '../styles/OptionDropdownMenu.css';
import { useEffect, useRef, useState } from 'react';
import OptionDropdownMenu from './OptionDropdownMenu';

const DropdownMenu = ({setFilter}) => {
    const options = ["ALL MOVIES A-Z", "ANIMATED", "KIDS"];

    const optionsRef = useRef([]);
    const spansEffectRef = useRef([]); 
    const dropdownMenu = useRef(null); 
    const resultDropdown = useRef(null);

    const clearEffects = () => {
        spansEffectRef.current.forEach(span => span.classList.remove("span-effect-selected"));
        optionsRef.current.forEach(option => option.classList.remove("selected-option-dropdown"))
    }

    const toggleDropdown = () => {
        const dropdownDisplay = window.getComputedStyle(dropdownMenu.current).display;
        if(dropdownDisplay === "none") dropdownMenu.current.style.display = "flex";
        else if(dropdownDisplay === "flex") dropdownMenu.current.style.display = "none";
    }

    const initializeDropdown = (option) => {
        if(option.textContent === "ALL MOVIES A-Z"){
            const spanEffect =  option.childNodes[0]
            spanEffect.classList.add("span-effect-selected");
            option.classList.add("selected-option-dropdown");
            resultDropdown.current.textContent = 'ALL MOVIES A-Z'
        }
    }

    const setCurrentOption = (e) => {
        const optionContainer = e.target;
        const spanEffect = optionContainer.childNodes[0];
        const text = optionContainer.childNodes[1].textContent;

        spanEffect.classList.add("span-effect-selected");
        resultDropdown.current.textContent = text;

        optionContainer.classList.add("selected-option-dropdown");
        //Al seleccionar una opción se esconde el Dropdown.
        dropdownMenu.current.style.display = "none";
        setFilter(resultDropdown.current.textContent);
    }

    useEffect(() => {
        optionsRef.current.forEach(option => {
            initializeDropdown(option);

            option.addEventListener("click", (e) => {
                clearEffects();
                setCurrentOption(e);
            })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return(
        <div className='drop-down-menu-section'>
        <div className='drop-down-menu'>
            <div onClick={toggleDropdown} className='icon-result'>
                <div ref={resultDropdown} className='result-dropmenu'>Here goes result</div>
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