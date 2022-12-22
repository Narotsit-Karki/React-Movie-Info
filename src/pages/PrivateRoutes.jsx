import { Login } from "./Login"
import { Register } from "./Register"
import { Navigate, Outlet, useNavigate } from "react-router"
import { useDispatch ,useSelector} from "react-redux"
import { useEffect } from "react"

export const PrivateRoutes = ({children}) => {
    const user = useSelector(state => state.user.value)
    const navigate = useNavigate()
    useEffect(() => {
        if(Object.keys(user).length == 0){
            navigate("/login")
        }
    },[])
    return children
}