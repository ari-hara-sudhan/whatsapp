import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
function Login() {
    const [{},dispatch]=useStateValue()
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>
      
{
    dispatch({
        type:actionTypes.SET_USER,
        user:result.user,
    })
    console.log(result)
    
})
      
        .catch((error)=>alert(error.message))

    }
    return (
        <div className="login">
           <div className="login__container">
               <img className="login__logo" src="https://www.bing.com/th?id=OIP.HT81DsS-pt0LE33O5F-_QwHaEK&w=253&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="whts" />
               <div className="login__text">
                   <h3>Sign In to Whatsapp</h3>
               </div>
               <Button className="login__button" onClick={signIn}>Sign In With Google</Button>


           </div>
            
        </div>
    )
}

export default Login
