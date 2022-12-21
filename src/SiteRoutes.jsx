import { BrowserRouter, Route , Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout"
import { Movie } from "./pages/Movie"
import { Search } from "./pages/Search"
export const SiteRoutes = () =>{

    return <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="movie/:id" element={<Movie/>}/>
                <Route path="search" element={<Search/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
}