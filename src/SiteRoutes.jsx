import { BrowserRouter, Route , Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout"
import { Movie } from "./pages/Movie"
import { Search } from "./pages/Search"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { PrivateRoutes } from "./pages/PrivateRoutes"
export const SiteRoutes = () =>{

    return <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Layout/>}>
                <Route index element={<PrivateRoutes><Home/></PrivateRoutes>}/>
                <Route path="movie/:id" element={<PrivateRoutes><Movie/></PrivateRoutes>}/>
                <Route path="search" element={<PrivateRoutes><Search/></PrivateRoutes>} />
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
}