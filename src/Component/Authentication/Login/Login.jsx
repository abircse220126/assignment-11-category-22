import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
// import axios from "axios";
import useAxios from "../../../Hooks/useAxios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const instanceAxios=useAxios()

  const { googleSignIn, googleLogIn } = use(AuthContext);
  const navigate = useNavigate();

  // === Dynamic 3D Cubes ===
  const cubes = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    depth: Math.random() * 800 - 400,
    rotateX: Math.random() * 360,
    rotateY: Math.random() * 360,
  }));

  //Show Password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    console.log("clicked handle login");

    googleSignIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
        setError(" email or password is invalid");
      });
  };

  // Using Google Sign

  const handleGoogleLogin = () => {
    console.log("google sign in button is clicked");
    googleLogIn()
      .then((res) => {
        console.log(res.user);

        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          role:"borrower"
        };

        instanceAxios.post("/users", userInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            console.log("user is created");
          } else {
            console.log("user is already exit");
          }
          navigate("/home");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-black">
      {" "}
      {/* === Dynamic 3D Cubes Background === */}
      <div className="absolute inset-0 overflow-hidden perspective-[1000px]">
        {cubes.map((cube) => (
          <div
            key={cube.id}
            className="absolute bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-blue-600 opacity-40 shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-sm animate-cubeMotion"
            style={{
              width: `${cube.size}px`,
              height: `${cube.size}px`,
              top: `${cube.top}%`,
              left: `${cube.left}%`,
              animationDelay: `${cube.delay}s`,
              transform: `translateZ(${cube.depth}px) rotateX(${cube.rotateX}deg) rotateY(${cube.rotateY}deg)`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl w-full max-w-sm p-6 text-white">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4 text-center">WelCome Back</h2>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body text-black">
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="fieldset">
                {/* Name Field*/}

                {/* Email Field */}
                <div>
                  <label className="block mb-1 text-xs font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-md bg-white/20 focus:bg-white/30 outline-none border border-white/30 placeholder-gray-200 focus:border-fuchsia-400 transition text-sm"
                  />
                </div>

                {errors.email?.type === "required" && (
                  <p>email field is Required</p>
                )}

                {/* Photo Url */}

                {/* password */}
                <label className="block mb-1 text-xs font-medium">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                    })}
                    className="w-full px-3 py-2 rounded-md bg-white/20 focus:bg-white/30 outline-none border border-white/30 placeholder-gray-200 focus:border-fuchsia-400 transition text-sm"
                    placeholder="Password"
                  />
                  <div
                    onClick={handleShowPassword}
                    className="absolute top-3 right-7"
                  >
                    {showPassword ? <FaEyeSlash /> : <LuEye />}
                  </div>
                </div>
                {errors.password?.type === "required" && (
                  <p>password is fequired</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p>password must be 6 character or long</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p>
                    password must be atleast one upercase and one Special
                    Character
                  </p>
                )}
                {error && <p>{error}</p>}

                <button className="w-full mt-3 py-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600 rounded-md font-semibold text-white text-sm shadow-lg transition transform hover:scale-[1.02]">
                  Login
                </button>
              </fieldset>
            </form>
            {/* Divider */}
            <div className="flex items-center justify-center my-4">
              <div className="w-1/4 h-[1px] bg-white/30"></div>
              <span className="px-3 text-xs text-gray-300">OR</span>
              <div className="w-1/4 h-[1px] bg-white/30"></div>
            </div>
          </div>

          {/* Google Login Button */}

          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-10/12 py-2 bg-white text-gray-800 font-medium rounded-md shadow-md hover:bg-gray-100 transition text-sm -mt-5 mx-auto"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-4 h-4"
            />
            Login with Google
          </button>

          <p className="text-xs text-center mt-5 text-gray-300 pb-5 text-black">
            Create an New account?{" "}
            <span className="text-fuchsia-400 hover:underline cursor-pointer">
              <Link to="/">signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
