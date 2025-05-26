
'use client'

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

const AddPropertyButton = () => {

    const addPropertymodal = useAddPropertyModal();

    const airbnbYourHome = () => {
        addPropertymodal.open()
    }
    return (
        <div 
            onClick={airbnbYourHome}
            className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-600">
            <button> Django Your home Button</button>
        </div>
    )
}

export default AddPropertyButton;