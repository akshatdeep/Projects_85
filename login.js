import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Auth()
{
 
 const [email, setemail]=useState("")
 const [password, setpassword]=useState("")    



    async function Login()
    {
        let item = {email, password}

        let result = await fetch ('/auth/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body:JSON.stringify(item)


        })

        result = await result.json()
        console.log('result', result)
        localStorage.setItem('user-login', JSON.stringify(result))
        navigate('/')

    }
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(login)
        navigate('/')
    })



    return(
        <div class="content">
        <div class="brand">
            <a class="link" href="index.html">AdminCAST</a>
        </div>
        <form id="login-form" action="javascript:;" method="post">
            <h2 class="login-title">Log in</h2>
            <div class="form-group">
                <div class="input-group-icon right">
                    <div class="input-icon"><i class="fa fa-envelope"></i></div>
                    <input class="form-control" type="email"value={email} onChange={(e)=>setemail(e.target.value)} name="email" placeholder="Email" autocomplete="off"/>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group-icon right">
                    <div class="input-icon"><i class="fa fa-lock font-16"></i></div>
                    <input className="form-control" id="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} name="password" placeholder="Password"/>
                </div>
            </div>
            <div class="form-group d-flex justify-content-between">
                <label class="ui-checkbox ui-checkbox-info">
                    <input type="checkbox"/>
                    <span class="input-span"></span>Remember me</label>
                <a href="forgot_password.html">Forgot password?</a>
            </div>
            <div class="form-group">
                <button class="btn btn-info btn-block" onClick={Login}>Login</button>
            </div>
            <div class="social-auth-hr">
                <span>Or login with</span>
            </div>
            <div class="text-center social-auth m-b-20">
                <a class="btn btn-social-icon btn-twitter m-r-5" href="javascript:;"><i class="fa fa-twitter"></i></a>
                <a class="btn btn-social-icon btn-facebook m-r-5" href="javascript:;"><i class="fa fa-facebook"></i></a>
                <a class="btn btn-social-icon btn-google m-r-5" href="javascript:;"><i class="fa fa-google-plus"></i></a>
                <a class="btn btn-social-icon btn-linkedin m-r-5" href="javascript:;"><i class="fa fa-linkedin"></i></a>
                <a class="btn btn-social-icon btn-vk" href="javascript:;"><i class="fa fa-vk"></i></a>
            </div>
            <div class="text-center">Not a member?
                <a class="color-blue" href="register.js">Create accaunt</a>
            </div>
        </form>
    
</div>

    )
}


export default Auth