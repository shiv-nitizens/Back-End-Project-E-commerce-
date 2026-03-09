import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(props){

    const navigate = useNavigate();

    async function checkCredentials(e) {
        e.preventDefault();
        changeLoaderFlag(true);
        try {
        const res = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (res.status === 200) {
            updateConfirmFlag(true);
            setTimeout(()=>{
                props.changeSuccessState(true);
            },1000);
        } else if (res.status === 401) {
            console.log("Invalid credentials");
        }

        } finally {
        changeLoaderFlag(false);
        }
    }

      const [email, changeEmail] = useState("");
      const [password, changePassword] = useState("");
      const [loader, changeLoaderFlag] = useState(false);
      const [confirm , updateConfirmFlag] = useState(false)
    
      return (
        <>
          {confirm ? (
            <div className="h-screen flex justify-center items-center bg-white transition-all duration-300">
              <div className="flex w-[380px] flex-col items-center gap-6 opacity-100 scale-100 transition-all duration-300">
          
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-emerald-500 text-white text-3xl font-bold">
                  ✓
                </div>
    
                <h2 className="text-2xl text-black font-semibold">
                  SignUp Successful
                </h2>
    
                <p className="text-zinc-500 text-sm">
                  Hello
                </p>
    
              </div>
            </div>
          ) : (
            <div className="relative w-full h-screen bg-white flex justify-center items-center">

              {/* Back button */}
              <button
                onClick={() => navigate("/")}
                className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center rounded-full border border-zinc-400 hover:bg-zinc-200 transition active:scale-95 text-2xl"
              >
                ↼
              </button>

              <form
                onSubmit={checkCredentials}
                className="flex w-[380px] flex-col gap-7"
              >
                <h1 className="text-3xl text-black font-bold tracking-wide mb-5">
                Sign Up
                </h1>
    
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={e => changeEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 text-black placeholder-zinc-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 transition-all duration-200 rounded-md"
                />
    
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={e => changePassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 text-black placeholder-zinc-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 transition-all duration-200 rounded-md"
                />
    
                <button
                  type="submit"
                  disabled={loader}
                  className="w-[60%] self-center py-3 bg-emerald-500 text-white rounded-md transition-all duration-200 hover:bg-emerald-400 active:scale-95 disabled:opacity-60 mt-3"
                >
                  {loader ? "Signing in..." : "SignIn"}
                </button>

                <button 
                className="text-black"
                type="button"
                onClick={()=>navigate("/login")}
                >
                  Already have an account ?
                  <br />
                  Login
                </button>

              </form>
            </div>
          )}
        </>
      )
}

export default SignUp;