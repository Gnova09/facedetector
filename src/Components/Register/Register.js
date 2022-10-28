import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../Context/StateContext";

const Register = () => {
    const {route} = useContext(StateContext);
    const{setRoute}=route
    const[name,setName]=useState("")
    const[lastname,setLastname]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[created, setCreated]=useState(false);
    
    useEffect(()=>{
       
        if(created){
            alert("Usuario creado")
            setRoute("signin")
            //setRoute("signin")
        }
            
        // eslint-disable-next-line
    },[created]);

    const handleRegister = (event) => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "lastname": lastname,
            "email": email,
            "password": pass
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://polar-anchorage-52776.herokuapp.com/register", requestOptions)
            .then(response => response.text())
            .then(result => {

                result ? setCreated(true): alert("Error");
            })
            .catch(error => console.log('error', error));          
            
    }
    return (
        <div className=" center flex flex-column justify-center">
            <main className="pa4 white-80 ">
                <form onSubmit={handleRegister} className="measure center" autocomplete="off">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Name</label>
                            <input required 
                            className="pa2 input-reset ba bg-transparent white w-100" 
                            type="text" 
                            name="Name" 
                            id="Name" 
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mv3 ">
                            <label className="db fw6 lh-copy f6" for="password">Lastname</label>
                            <input required className="b pa2 input-reset ba bg-transparent white w-100"
                             type="text" 
                            
                             onChange={(e) => setLastname(e.target.value)}
                             />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">User</label>
                            <input required className="pa2 input-reset ba bg-transparent white w-100" 
                            type="text" 
                            name="email-address" 
                            id="email-address"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mv3 ">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input required className="b pa2 input-reset ba bg-transparent white w-100" 
                            type="password" 
                            name="password" 
                            id="password"
                            onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer center"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div className="">
                        <input
                            className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Register"
                        />
                    </div>

                </form>
            </main>
        </div>
    );
}
export default Register;