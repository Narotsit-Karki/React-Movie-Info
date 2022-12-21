import axios from "axios";
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard"; 
export const Search = () => {
    let[movies,setMovies] = useState([])
    const [qs,setQs] = useSearchParams()

    useEffect(
        () => {
            axios.get(`${import.meta.env.VITE_API_URL}search/movie?query=${qs.get('query')}&api_key=${import.meta.env.VITE_API_KEY}`).then(
                response => setMovies(response.data.results)
            ).catch(
                (err) =>{
                    console.log(err);
                }
            )
        },[qs]
    )
    
    return <>
    <main className="row">
        <div className="col-12">
    
            <div className="row">
                <div className="col-12">
                    <h3> Search results for "{qs.get('query')}"</h3>
                </div>
            </div>
            <div className="row row-cols-5">
                {
                movies.map(
                    (movie) => <MovieCard movie={movie}/>
                )
            }
            </div>
        </div>
    </main>
    </>
}