import '../styles/Footer.css';
import logo from '../assets/images/disney-logo.png';

const Footer = ({footerRef}) => {
    return(
        <footer ref={footerRef}>
            <div className='footer-logo'>
                <img src={logo} alt = "logo" className='logo-footer'></img>
            </div>
            <div className='second-section-footer'>
                <div className='second-section-element'>Privacy Policy</div>
                <div className='second-section-element'>Privacy Notice</div>
                <div className='second-section-element'>Subscriber Agreement</div>
                <div className='second-section-element'>Help</div>
            </div>
            <div className='third-section-footer'>
                <div className='third-section-element'>Supported Devices</div>
                <div className='third-section-element'>About us</div>
                <div className='third-section-element'>Interest-based Ads</div>
            </div>
            <div className='fourth-section-footer'>
                The Disney+ service is marketed by WDC (MEXICO), S. DE R.L. DE C.V. Periférico Sur 3299, 11th flor,
                Colonia Fuentes del Pedregal, Tlalpan Mayor's Office, 14140, CDMX and RFC number WME920221837.
            </div>
            <div className='fifth-section-footer'>
                © Disney. All Rights Reserved.
            </div>
        </footer>
    )
}