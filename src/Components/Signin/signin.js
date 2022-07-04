import React from "react";

const Signin = ({ onRouteChange}) => {
    return (
        <div className=" vh-100 center flex flex-column justify-center ">
            <main className="pa4 white-80 ">
                <form onSubmit={()=>onRouteChange("home")} className="measure center" autocomplete="off">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">User</label>
                            <input required className="pa2 input-reset ba bg-transparent white w-100" type="text" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3 ">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input required className="b pa2 input-reset ba bg-transparent white w-100" type="password" name="password" id="password" />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer center"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div className="">
                        <input
                            className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign in"   
                        />
                    </div>
                    <div className="lh-copy white mt3">
                        <p onClick={()=>onRouteChange("Register")} className="f6 link pointer dim white ">Register</p>
                    </div>
                </form>
            </main>
        </div>
    );
}
export default Signin;