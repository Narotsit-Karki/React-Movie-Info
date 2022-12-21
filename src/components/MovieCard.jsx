import { useNavigate } from "react-router"

export const MovieCard = ({movie}) => {
    const navigate = useNavigate()
return <>
   <div className="col my-3 movie-card" onClick={()=>{navigate(`/movie/${movie.id}`)}}>
        <div className="row">
            <div className="col-12 rounded-top">
                <img src={`${import.meta.env.VITE_IMAGE_URL+movie.poster_path}`} className="img-fluid"/>

            </div>
            <div className="col-12 text-center mt-2">
                <strong className="">{movie.title}</strong>

            </div>
            <div className="col-12 mt-2 text-center">
                <small>
                    <i className="fa-solid fa-clock me-2"></i>
                    {movie.release_date}
                    <br/>
                </small>
                <small>
                    <i className="fa-solid fa-star me-2"></i>
                        {movie.vote_average}
                </small>
                                            
            </div>
        </div>
    </div>
</>
}