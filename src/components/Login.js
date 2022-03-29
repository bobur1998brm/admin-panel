import React, {useState} from 'react'
import { firebase} from "../server/firebase"
import {useDispatch} from "react-redux"

function Login() {
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()

    const phoneRegister = ()=>{
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha_container")
        firebase
            .auth()
            .signInWithPhoneNumber(phone, recaptcha)
            .then(e => {
                let code = prompt("")
                e.confirm(code).then(user => dispatch({type: "REGISTER_PHONE", payload: user.user.phoneNumber}))
            })
            .catch(er => console.log(er))
    }
  return (
    <div>
        <h1>Login</h1>
        <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" />
        <button onClick={phoneRegister}>Submit</button>
        <div id="recaptcha_container"></div>
    </div>
  )
}

export default Login