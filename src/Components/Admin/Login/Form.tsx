import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { AdminSchema } from "../../../Schema/admin/schema";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

import { AdminLoginApi } from "../../../Api/admin/adminLogin/LoginApi";
export default function AdminLogin() {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={AdminSchema}
        onSubmit={(values) => {
            try {
               AdminLoginApi(values).then((res)=>{
                 if(res?.data.success){
                  localStorage.setItem("admin", res.data.token);
                    navigate('/admin/dashboard')
                    toast.success('login Success')
                    
                 } if(res?.data.action){
                  toast.error('Invalid Credentials')
                 }  if(res?.data.success=== false) {
                  toast.error('password not match')
                 }
               
                
               })

            } catch (error) {
              console.log(error);
              
            }
           
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="inputs flex flex-col gap-2 ">
              <label className="" htmlFor="Email"></label>
              <Field
                type="email"
                name="email"
                placeholder="@gmail.com"
                className="input h-6 w-1/2 ml-[75px]  md:h-7 outline-none shadow-md  outline-zinc-300 hover:bg-slate-100  placeholder-black placeholder-opacity-50 rounded-sm "
              />
              {errors.email && touched.email ? (
                <div className="text-red-500 font-Ariza  md:ml-[70px]   ml-[70px] text-sm md:text-lg">
                  {errors.email}
                </div>
              ) : null}

              <label className="" htmlFor="Password"></label>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="input h-6 w-1/2 ml-[75px]  md:h-7 outline-none shadow-md outline-zinc-300 hover:bg-slate-100  placeholder-black placeholder-opacity-50 rounded-sm"
              />
              {errors.password && touched.password ? (
                <div className="text-red-500 font-Ariza  md:ml-[70px]    ml-[70px] text-sm md:text-lg">
                  {errors.password}
                </div>
              ) : null}

              <button
                type="submit"
                className=" butn bg-transparent shadow-lg w-20  h-5   ml-[100px] text-sm md:h-6 md:ml-[150px] md:mt-3  mt-2  text-black font-semibold border border-gray-500 rounded-lg "
              >
            
                LOGIN
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
