import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/index/users";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/reducers/userReducers";

const RegisterPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  // react query
const {mutate,isLoading}=  useMutation({
    mutationFn:({name,email,password})=>{
      return signup({name,email,password})
    },
    onSuccess:(data)=>{
       dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
     // console.log(data)
    },
     onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  })

   useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues:{
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    },
    mode:"onChange"
   
  });

  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
   // console.log(data)
  };
  const password = watch("password");

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Sign Up
          </h1>

          <form onSubmit={ handleSubmit(submitHandler) }>
            {/* NAME */}
            <div className="flex flex-col mb-6 w-full">
              <label
                className="text-[#5a7184] font-semibold block"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.name ? "border-red-500" : "border-[#c3cad9]"
                }`}
                type="text"
                id="name"
                {...register("name",{
                  minLength:{
                    value:1,
                    message:"Name length must be atleast 1 character long"
                  },
                  required:{
                    value:true,
                    message:"Name is required"
                  }
                })}
                placeholder="Enter name"
              />
               {errors.name?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="flex flex-col mb-6 w-full">
              <label
                className="text-[#5a7184] font-semibold block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                 className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.email ? "border-red-500" : "border-[#c3cad9]"
                }`}
                type="text"
                id="email"
                 {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                placeholder="Enter email"
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}

            <div className="flex flex-col mb-6 w-full">
              <label
                className="text-[#5a7184] font-semibold block"
                htmlFor="password"
              >
                Password
              </label>
              <input
                 className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.password ? "border-red-500" : "border-[#c3cad9]"
                }`}
                type="password"
                id="password"
                 {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password length must be at least 6 characters",
                  },
                })}
                placeholder="Enter password"
              />
               {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="flex flex-col mb-6 w-full">
              <label
                className="text-[#5a7184] font-semibold block"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
              className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.confirmPassword ? "border-red-500" : "border-[#c3cad9]"
                }`}
                type="password"
                id="confirmPassword"
                 {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "Passwords do not match";
                    }
                  },
                })}
                placeholder="Enter confirm password"
              />
               {errors.confirmPassword?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            {/* <Link className="text-sm font-semibold text-primary" to="/forget-password">Forgot password?</Link> */}
            <button
              type="submit"
               disabled={!isValid || isLoading}
              className="bg-primary hover:bg-green-400 text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Register
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              You have an account?{" "}
              <Link to="/login" className="text-primary">
                Login now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
