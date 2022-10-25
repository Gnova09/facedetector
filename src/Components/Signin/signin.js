import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../Context/StateContext";


const Signin = () => {

    const { route, login, usuario } = useContext(StateContext);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const { setRoute } = route;
    const { isSignedIn, setIsSignedIn } = login;
    const { setUser } = usuario;

    useEffect(() => {

        if (isSignedIn) {

            setRoute("home")
        }
        // eslint-disable-next-line
    }, [isSignedIn])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": pass
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:3000/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                const res = result === "Not enable to login" ? alert("Credenciales incorrectas") :
                    (
                        setUser(result),
                        setIsSignedIn(true)
                    );
            })
    }


    return (
        <div className="  center flex flex-column justify-center ">
            <main className="pa4 white-80 ">
                <form onSubmit={handleSubmit} className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">User</label>
                            <input required
                                className="pa2 input-reset ba bg-transparent white w-100"
                                type="text"
                                name="email-address"
                                id="email-address"
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>
                        <div className="mv3 ">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input required
                                className="b pa2 input-reset ba bg-transparent white w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer center"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div >
                        <input
                            className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib"
                            type="submit"
                            onSubmit=""
                            value="Sign in"
                        />
                    </div>
                    <div className="lh-copy white mt3">
                        <p onClick={() => setRoute("Register")} className="f6 link pointer dim white ">Register</p>
                    </div>
                </form>
            </main>
        </div>
    );
}
export default Signin;