import '../styles/DropdownMenu.css';
import '../styles/OptionDropdownMenu.css';
import React, { useEffect, useRef } from 'react';
import OptionDropdownMenu from './OptionDropdownMenu';

interface dropdownProps {
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

const DropdownMenu = ({setFilter}: dropdownProps) => {
    const options = ["ALL MOVIES A-Z", "ANIMATED", "KIDS"];

    const optionsRef = useRef<HTMLDivElement[]>([]);
    const spansEffectRef = useRef<HTMLSpanElement[]>([]); 
    const dropdownMenu = useRef<HTMLDivElement | null>(null); 
    const resultDropdown = useRef<HTMLDivElement | null>(null);

    const clearEffects = () => {
        spansEffectRef.current.forEach(span => span.classList.remove("span-effect-selected"));
        optionsRef.current.forEach(option => option.classList.remove("selected-option-dropdown"))
    }

    const toggleDropdown = () => {
        //Se verifica que dropdownMenu.current no sea nulo, ya que typescript no puede garantizar que dropdownMenu.current no sea null en el momento en que se está usando. 
        if(dropdownMenu.current){
            const dropdownDisplay = window.getComputedStyle(dropdownMenu.current).display;
            if(dropdownDisplay === "none") dropdownMenu.current.style.display = "flex";
            else if(dropdownDisplay === "flex") dropdownMenu.current.style.display = "none";
        }
    }

    const initializeDropdown = (option: HTMLDivElement) => {
        if(option.textContent !== "ALL MOVIES A-Z") return;
        //const spanEffect =  option.childNodes[0]  Devuelve un nodo secundario del elemento option, y este tipo de datos no tiene la propiedad classList.
        const spanEffect =  option.firstElementChild as HTMLSpanElement //Devuelve el primer elemento secundario (en lugar del primer nodo secundario) 
        spanEffect.classList.add("span-effect-selected");
        option.classList.add("selected-option-dropdown");
        if(resultDropdown.current){
            resultDropdown.current.textContent = 'ALL MOVIES A-Z'
        }
    }

    const setCurrentOption = (e:MouseEvent) => {
        const optionContainer = e.target as HTMLDivElement; //e.target es EventTarget, que no tiene la propiedad childNodes. Entonces, se define como HTMLDivElement para solucionar esto.
        const spanEffect = optionContainer.firstElementChild as HTMLSpanElement;
        const text = optionContainer.childNodes[1].textContent;

        spanEffect.classList.add("span-effect-selected");
        //Se verifica que no sea nulo. Se hace para evitar errores en TypeScript.
        if(resultDropdown.current){
            resultDropdown.current.textContent = text;
        }

        optionContainer.classList.add("selected-option-dropdown");
        //Al seleccionar una opción se esconde el Dropdown.
        if(dropdownMenu.current){
            dropdownMenu.current.style.display = "none";
        }
        //Se verifica que no sea nulo para poder asignar el valor correcto al estado.
        if(text){
            setFilter(text);
        }
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