import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './login.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Login = () => {
    const [state, setstate] = useState("");
    const [password, setPassword] = useState("")
    const[error, setError] = useState(false)

    const navigate = useNavigate();




    const submit = (e) =>{
        e.preventDefault();
        if(state&&password==='admin'){
            navigate('/post')
        }else{
            setError(true)
        }
    }
    // const submit = (e) => {
    //     e.preventDefault();
    //     if (password == 123 && state == 'admin') {
    //         navigate('/post')

    //         // console.log('bbebe')
    //     } else{
    //         setError(true)
    //     }
    // }

    const handleEmail = (e) => {
        setstate(e.target.value)
    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    return (
        <form onSubmit={submit} className='container mt-5'>
            <div className={css.container}>
                <div className={css.inputs_container}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Login</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            value={state}
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            value={password}
                            onChange={handlePassword}

                        />

                    </div>
                    {
                        error ? <div className={css.error}>Не правильный логин или пароль</div> : ""
                    }
                </div>
                <div className={css.btn}>

                    <Link to={"/"} className="btn btn-secondary">Close</Link>
                    <button className="btn btn-secondary"
                        type='submit'
                    >Login</button>

                </div>
            </div>
        </form>

    )
}

export default Login;
