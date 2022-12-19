import { useEffect, useState} from "react"
import axios from "axios"
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses"
import { MovieCard } from "../components/MovieCard"
export const Home = () => {
    let [nowPlaying,setNowPlaying] = useState([])
    let[topRated,setTopRated] = useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`).then(
            (response) => {
                setNowPlaying(response.data.results);
            }
        ).catch(
            (err) => {

            }
        )

        axios.get(`${import.meta.env.VITE_API_URL}movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`).then(
            (response) => {
                setTopRated(response.data.results);
            }
        ).catch(
            (err) => {

            }
        )

    },[]
    )

    return <>
        <main className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <h3> In Theaters</h3>
                    </div>
                </div>
                <div className="row row-cols-5">
                    {
                        nowPlaying.slice(0,5).map(
                            (movie) => <MovieCard movie={movie}/>
                        )
                    }
                </div>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <h3> Top Rated</h3>
                    </div>
                </div>
                <div className="row row-cols-5">
                    {
                         topRated.slice(0,5).map(
                            (movie) => <MovieCard movie={movie}/>
                        )
                    }
                </div>
            </div>
        </main>
    </>
}   