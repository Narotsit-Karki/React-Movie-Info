import { BrowserRouter, Route , Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout"


export const SiteRoutes = () =>{

    return <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Layout/>}>
                <Route index element={<Home/>}>

                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
}