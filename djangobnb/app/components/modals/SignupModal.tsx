'use client'

import Modal from "./Modal";

import { useState } from "react"
import useSignupModal from "@/app/hooks/useSignupModal"
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {

    const signupModal = useSignupModal()

    const content = (
        <>
        <h1 className="mb-6 text-2xl">Welcome to Djangobnb, please Signup</h1>
        <form className="space-y-4">
            <input type="email" placeholder="Your password" className="w-full h-[54px] px-4  border border-gray-300 rounded-xl" />
            <input type="password" placeholder="repeat Password" className="w-full h-[54px] px-4  border border-gray-300 rounded-xl" />
            <div className="p-5 bg-airbnb  text-white rounded-xl opacity-80">
                The error message
            </div>

            <CustomButton
                label="Submit"
                onClick = {() => console.log("submitted")}
            />
        </form>
        </>
    )
    
    return (
        <Modal
        isOpen={signupModal.isOpen}
        close={signupModal.close}
        label="Sign Up"
        content = {content}
            />
    )
}


export default SignupModal;