import { useState } from "react"

export const Login = () => {
    let [form,setForm] = useState({
        email:'',
        password:''
    })
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleSubmit = () => {
        console.log(form.email,form.password);
    }

    return <>
    <main className="row">
        <div className="col-6 mx-auto my-3">
            <div className="row">
                <div className="col text-center">
                    <h2>Login</h2>
                </div>
            </div>
        
        <div className="row">
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={handleChange} name='email' type="email" id="email" className="form-control" value={form.email} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={handleChange} value={form.password} type="password" name="password" id="password" className="form-control" required/>
                </div>
                
                <div className="mb-3">
                    <button type="submit" className="btn btn-success">LogIn</button>
                </div>
            </form>
        
        
        </div>
        </div>
    </main>

    </>
}