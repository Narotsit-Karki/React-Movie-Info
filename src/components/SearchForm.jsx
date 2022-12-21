
import { useState } from "react";
import { useNavigate } from "react-router";
export const SearchForm = () =>{
    const navigate = useNavigate();
    let [query , setSearch] = useState('');
    
    const handleSubmit = ()=>{
      navigate(`/search?query=${query}`)
    }

    return <>
          <div className="input-group mt-2">
                    <input onInput={(e)=>{setSearch(e.target.value)}} type="search" className="form-control" placeholder="Search  movie and more ..."/>
                    <button onClick={handleSubmit}className="btn btn-success"><i className="fa-solid fa-search"></i></button>
            </div>
        </>
}