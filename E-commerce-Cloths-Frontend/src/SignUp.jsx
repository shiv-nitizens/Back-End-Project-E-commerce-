import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./context/ShopContext";

function SignUp(props){

    const navigate = useNavigate();
    const { setUser } = useContext(ShopContext);

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

                setUser(true);
                updateConfirmFlag(true);

                setTimeout(() => {
                    navigate("/");
                }, 1000);

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
          <div className="h-screen flex justify-center items-center bg-white">
            <div className="flex w-[380px] flex-col items-center gap-6">

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
              <h1 className="text-3xl text-black font-bold mb-5">
                Sign Up
              </h1>

              <input
                type="text"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => changeEmail(e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 rounded-md"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => changePassword(e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 rounded-md"
              />

              <button
                type="submit"
                disabled={loader}
                className="w-[60%] self-center py-3 bg-emerald-500 text-white rounded-md"
              >
                {loader ? "Signing up..." : "Sign Up"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-black"
              >
                Already have an account? <br /> Login
              </button>

            </form>
          </div>
        )}
      </>
    );
}

export default SignUp;