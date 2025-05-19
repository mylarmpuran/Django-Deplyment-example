'use client'

import Modal from "./Modal";

import { useState } from "react"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {

    const LoginModal = useLoginModal()

    const content = (
        <>
        <h1 className="mb-6 text-2xl">Welcome to Djangobnb, please login</h1>
        <form className="space-y-4">
            <input type="email" placeholder="your email address" className="w-full h-[54px] px-4  border border-gray-300 rounded-xl" />
            <input type="password" placeholder="your password" className="w-full h-[54px] px-4  border border-gray-300 rounded-xl" />
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
        isOpen={LoginModal.isOpen}
        close={LoginModal.close}
        label="Login In"
        content = {content}
            />
    )
}


export default LoginModal;