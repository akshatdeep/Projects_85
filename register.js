import React, { useState } from 'react'

function Register()
{

    const [first_name,setfirst_name]=useState("")
    const [last_name, setlast_name]=useState("")
    const [email, setemail]=useState("")
    const [password,setpassword]=useState("")
    const [password_confirmation,setpassword_confirmation]=useState("")


    async function Singup()
    {
        let item ={first_name,last_name,email,password,password_confirmation}

        var result = await fetch('/singup',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",

            },
            body:JSON.stringify(item)
        })
        result = await result.json()
        console.log(result)
        localStorage.setItem('user-info', JSON.stringify(result))
        
    }


    
 return(
    <div className="content">
        <div className="brand">
            <a className="link" href="index.html">AdminCAST</a>
        </div>
        <form id="register-form" action="javascript:;" method="post">
            <h2 className="login-title">Sign Up</h2>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <input className="form-control" type="text" value={first_name} onChange={(e)=>setfirst_name(e.target.value)} name="first_name" placeholder="First Name"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <input className="form-control" type="text" value={last_name} onChange={(e)=>setlast_name(e.target.value)} name="last_name" placeholder="Last Name"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <input className="form-control" type="email" value={email} onChange={(e)=>setemail(e.target.value)} name="email" placeholder="Email" autocomplete="off"/>
            </div>
            <div className="form-group">
                <input className="form-control" id="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} name="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <input className="form-control" type="password" value={password_confirmation} onChange={(e)=>setpassword_confirmation(e.target.value)} name="password_confirmation" placeholder="Confirm Password"/>
            </div>
            <div className="form-group text-left">
                <label className="ui-checkbox ui-checkbox-info">
                    <input type="checkbox" name="agree"/>
                    <span className="input-span"></span>I agree the terms and policy</label>
            </div>
            <div className="form-group">
                <button className="btn btn-info btn-block" onClick={Singup}>Sign up</button>
            </div>
            <div className="social-auth-hr">
                <span>Or Sign up with</span>
            </div>
            <div className="text-center social-auth m-b-20">
                <a className="btn btn-social-icon btn-twitter m-r-5" href="/#"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-social-icon btn-facebook m-r-5" href="/#"><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-google m-r-5" href="/#"><i className="fa fa-google-plus"></i></a>
                <a className="btn btn-social-icon btn-linkedin m-r-5" href="/#"><i className="fa fa-linkedin"></i></a>
                <a className="btn btn-social-icon btn-vk" href="/#"><i className="fa fa-vk"></i></a>
            </div>
            <div className="text-center">Already a member?
                <a className="color-blue" href="login.html">Login here</a>
            </div>
        </form>
    </div>
 )
    
 

}
  
export default Register