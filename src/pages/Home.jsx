import "../css/style.css"

import  * as bootstrap from "bootstrap"
import { Link } from "react-router-dom"


export const Home = () => 
    <div className="container bg-white">
        <div className="row">
            <div className="col-auto">
                <Link to="/" className="link-success text-decoration-none">
                    <i class="fa-solid fa-film"></i><h1> Movie Info</h1>
                </Link>

            </div>
            <div className="col-4 ms-auto">
                <div className="input-group mt-2">
                    <input type="search" className="form-control" placeholder="Search  movie and more ..."></input>
                    <button className="btn btn-success"><i className="fa-solid fa-search"></i>search</button>
                </div>
            </div>
        </div>
    </div>


