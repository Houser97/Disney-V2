import '../styles/MoviesSeriesSection.css'
import { AnimatedMovies, AnimatedSeries, Recommended, MarvelMovies } from '../assets/constants'

const MoviesSeriesSection = () => {

    const [recommendedMovies] = useState([{image: Daredevil},
                                          {image: Luca},
                                          {image: Malcolm},
                                          {image: ObiWan},
                                          {image: Rio},
                                          {image: Luke},
                                          {image: Chip},
                                          {image: Moon}])

    const titleRecommendedSection = "Recommended for you"

    const [marvelMovies] = useState([{image: Punisher},
        {image: Jessica},
        {image: IronFist},
        {image: Loki},
        {image: Moon},
        {image: Luke},
        {image: Daredevil},
        {image: Defenders}])

    const titleMarvelSection = "Marvel Series and Specials"

    const [animatedMovies] = useState([{image: Increibles},
        {image: Robots},
        {image: Rio},
        {image: Toystory},
        {image: Dino},
        {image: WallE},
        {image: Chip},
        {image: Raya}])

    const titleAnimatedMoviesSection = "Animated Movies"

    const [animatedSeries] = useState([{image: Mickey},
        {image: Bluey},
        {image: Mira},
        {image: Bymax},
        {image: StarWarsAn},
        {image: Kim},
        {image: Dalmatas},
        {image: Kusko}])

    const titleAnimatedSeriesSection = "Animated Series"


    return(
        <div className='movies-series-section'>
            <MovieCarousel key={"movie-carousel-1"} movies={recommendedMovies} title = {titleRecommendedSection} />
            <MovieCarousel key={"movie-carousel-2"} movies={marvelMovies} title = {titleMarvelSection} />
            <MovieCarousel key={"movie-carousel-3"} movies={animatedMovies} title = {titleAnimatedMoviesSection} />
            <MovieCarousel key={"movie-carousel-4"} movies={animatedSeries} title = {titleAnimatedSeriesSection} />
        </div>
    )
}

export default MoviesSeriesSection;