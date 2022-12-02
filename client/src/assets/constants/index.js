import Daredevil from '../images/MoviesSeries/DaredevilSerie.JPG';
import Malcolm from './images/MoviesSeries/MalcolmSerie.JPG';
import Luca from './images/MoviesSeries/Luca.JPG';
import ObiWan from './images/MoviesSeries/ObiSerie.JPG';
import Rio from './images/MoviesSeries/RioSerie.JPG';
import Luke from './images/MoviesSeries/LukeSerie.JPG';
import Chip from './images/MoviesSeries/ChipSerie.JPG';
import Moon from './images/MoviesSeries/MoonSerie.JPG';
import Punisher from './images/MoviesSeries/PunisherSerie.JPG';
import Defenders from './images/MoviesSeries/DefendersSerie.JPG';
import Loki from './images/MoviesSeries/LokiSerie.JPG';
import IronFist from './images/MoviesSeries/IronSerie.JPG';
import Jessica from './images/MoviesSeries/JessiSerie.JPG';
import Bluey from './images/MoviesSeries/BlueySerie.JPG';
import Dino from './images/MoviesSeries/DinoSerie.JPG';
import Mira from './images/MoviesSeries/MiraSerie.JPG';
import Raya from './images/MoviesSeries/RayaSerie.JPG';
import Robots from './images/MoviesSeries/RobotsSerie.JPG';
import Toystory from './images/MoviesSeries/ToyStorySerie.JPG';
import WallE from './images/MoviesSeries/WallESerie.JPG';
import Bymax from './images/MoviesSeries/BymaxSerie.JPG';
import Increibles from './images/MoviesSeries/Increibles.JPG';
import Dalmatas from './images/MoviesSeries/Dalmatas.JPG';
import Kim from './images/MoviesSeries/Kim.JPG';
import Kusko from './images/MoviesSeries/Kusko.JPG';
import StarWarsAn from './images/MoviesSeries/StarWarsAnimated.JPG';
import Mickey from './images/MoviesSeries/Mickey.JPG';

/*Carousel*/
import DaredevilCarousel from '../images/Carousel/Daredevil.png'
import BaymaxCarousel from '../images/Carousel/Baymax.png'
import DrStrangeCarousel from '../images/Carousel/DrStrange.png'
import MalcolmCarousel from '../images/Carousel/Malcolm.png'
import RonsCarousel from '../images/Carousel/Rons.png'
import Thor from '../images/Carousel/Thor.PNG'

const movies = 
[   {image:Daredevil, 
    title: "Daredevil", 
    isMovie: false, 
    isForKids: false, 
    isOriginal: false, 
    isAnimated: false },

    {image:Malcolm, 
    title: "Malcolm in the middle", 
    isMovie: false, 
    isForKids: false, 
    isOriginal: false, 
    isAnimated: false },

    {image: Luca, 
    title: "Luca", 
    isMovie: true, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: ObiWan, 
    title: "Obi-Wan Kenobi", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: false },

    {image: Rio, 
    title: "Rio", 
    isMovie: true, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },
    
    {image: Luke, 
    title: "Luke Cage", 
    isMovie: false, 
    isForKids: false, 
    isOriginal: false, 
    isAnimated: false },

    {image: Chip, 
    title: "Chip and Dale", 
    isMovie: true, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: Moon, 
    title: "Moon Knight", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: false },

    {image: Defenders, 
    title: "Defenders", 
    isMovie: false, 
    isForKids: false, 
    isOriginal: false, 
    isAnimated: false },
    
    {image: Punisher, 
    title: "Punisher", 
    isMovie: false, 
    isForKids: false, 
    isOriginal: false, 
    isAnimated: false },

    {image: Loki, 
    title: "Loki", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: false },

    {image: Jessica, 
    title: "Jessica Jones", 
    isMovie: false, 
    isForKids: false, 
    isOriginal: false, 
    isAnimated: false },

    {image: IronFist, 
    title: "Iron Fist", 
    isMovie: false, 
    isForKids: false, 
    isOriginal: false, 
    isAnimated: false },

    {image: Bluey, 
    title: "Bluey", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: false, 
    isAnimated: true },

    {image: Dino, 
    title: "The good dinosaur", 
    isMovie: true, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: Raya, 
    title: "Raya and the last dragon", 
    isMovie: true, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: Robots, 
    title: "Robots", 
    isMovie: true, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: Mira, 
    title: "Miraculous", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: false, 
    isAnimated: true },

    {image: Toystory, 
    title: "Toy Story", 
    isMovie: true, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: WallE, 
    title: "WallE", 
    isMovie: true, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: Bymax, 
    title: "Baymax", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: Increibles, 
    title: "Incredibles", 
    isMovie: true, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: Dalmatas, 
    title: "101 dalmatian street", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: Kim, 
    title: "Kim possible", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: Kusko, 
    title: "The emperor's new school kusko", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },

    {image: StarWarsAn, 
    title: "Star Wars", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: false, 
    isAnimated: true },

    {image: Mickey, 
    title: "Mickey", 
    isMovie: false, 
    isForKids: true, 
    isOriginal: true, 
    isAnimated: true },]

export default movies;

export const carouselImagens = {

}