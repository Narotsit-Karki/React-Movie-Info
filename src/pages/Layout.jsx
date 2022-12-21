import "../css/style.css"

import  * as bootstrap from "bootstrap"
import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { Home } from "./Home"
import { SearchForm } from "../components/SearchForm"
export const Layout = () => {
   

    return <>
        <div className="container bg-white pt-3">
        <header className="row">
            <div className="col-auto">
                <Link to="/" className="link-success text-decoration-none">
                    <h1><i className="fa-solid fa-film"></i> Movie Info</h1>
                </Link>

            </div>
            <div className="col-4 ms-auto">
              <SearchForm />
            </div>
        </header>
      
      <Outlet/>

        <footer className="row text-bg-dark py-3">
            <div className="col-4">
                <div className="col-12 ">
                    <h2> <i className="fa-solid fa-film"></i> Movie Info</h2>
                </div>
                <div className="col-12">
                    <strong>Email: </strong>
                    <a href="mailto:infomovie@gmail.com" className="text-decoration-none"> infomovie@gmail.com</a>
                </div>
            </div>
            <div className="col-4">
                <div className="col-12">
                    <h3>Find us on</h3>
                </div>
                <div className="col-12">
                    <a href="https://facebook.com" target="_blank" className="link-light">
                        <i className="fa-brands fa-facebook fa-2x"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" className="link-light ms-2">
                        <i className="fa-brands fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" className="link-light ms-2">
                        <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>

                    <a href="https://snapchat.com" target="_blank" className="link-light ms-2">
                        <i className="fa-brands fa-snapchat fa-2x"></i>
                    </a>
                </div>
            </div>
            <div className="col-4">
                <div className="col-12">
                    <h3>Subscribe to newsletter</h3>
                </div>
                <div className="col-12">
                    <div className="input-group">
                        <input  type='email' placeholder="Enter email ..." className="form-control"/>
                        <button className="btn btn-outline-light btn-dark">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="col-12 my-3 text-center">
                &copy; Movie Info, 2022. All rights reserved.
            </div>
            
        </footer>
    </div>
    </>
}
