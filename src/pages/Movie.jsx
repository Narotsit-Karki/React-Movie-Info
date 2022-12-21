      import { useEffect,useState } from "react"
import { useParams } from "react-router"
import axios from "axios"

export const Movie = () => {
    let [movie,setMovie] = useState({})
    const params = useParams()
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}`
        ).then(
            (response) => {
                setMovie(response.data)
            }
        ).catch(
            (err) =>{

            }
        )

    },[]
    )
    
    return Object.keys(movie).length>0?
    <> 
    <div className="row">
        <div className="col-12">
            <div className="row mb-2 mt-2">
                <div className="col-4">
                <img src={`${import.meta.env.VITE_IMAGE_URL+movie.poster_path}`} className="img-fluid"/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text text-success">{movie.title}</h1>
                        </div>
                        <div className="col-12 text-primary fst-bold">
                            {movie.tagline}
                        </div>
                        <div className="col-12 text-secondary fst-italic my-3">
                            {movie.overview}
                        </div>
                        <div className="col-12">
                            
                        </div>
                        <div className="col-12">
                            {movie.genres.map(genre => <span className="badge text-bg-success me-2">{genre.name}</span>)}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>:

        <div className="spinner-border text-primary fs-1" role="status">
          <span className="sr-only">Loading...</span>
        </div>
}