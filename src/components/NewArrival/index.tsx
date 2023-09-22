import { MovieCard } from "../MovieCard";
import { Container, MoviesContainer } from "./styles";

import noTimeToDieImg from '../../assets/images/007_no_time_to_die.png';
import dontBreathe2Img from '../../assets/images/dont_breathe_2.png';
import duneImg from '../../assets/images/dune.png';
import shangChiImg from '../../assets/images/shang_chi.png';

export function NewArrival() {
    return (
        <Container>
            <h2>New Arrival</h2>

            <MoviesContainer>
                <MovieCard
                    title="Dune"
                    originInfo="USA, 2021"
                    imgUrl={duneImg}
                    genres="Action, Adventure, Drama"
                    ratings={{
                        imdb: 84.0, 
                        rotten: 75
                    }}
                />
                <MovieCard
                    title="No Time To Die"
                    originInfo="USA, 2021 "
                    imgUrl={noTimeToDieImg}
                    genres="Action, Adventure, Thriller"
                    ratings={{
                        imdb: 76.0,
                        rotten: 68
                    }}
                />
                <MovieCard
                    title="Shang-Chi and the Legend of the Ten Rings"
                    originInfo="USA, 2021"
                    imgUrl={shangChiImg}
                    genres="Action, Adventure, Fantasy"
                    ratings={{
                        imdb: 79.0,
                        rotten: 71 
                    }}
                />
                <MovieCard
                    title="Don't Breathe 2"
                    originInfo="USA, 2021"
                    imgUrl={dontBreathe2Img}
                    genres="Action, Drama, Horror"
                    ratings={{
                        imdb: 61.0,
                        rotten: 46
                    }}
                />
            </MoviesContainer>
        </Container>
    )
}