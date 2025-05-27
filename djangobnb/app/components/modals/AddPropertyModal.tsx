'use client'

import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';
import CustomButton from '../forms/CustomButton';
import Categories from '../addproperty/Categories';

const AddPropertyModal = () => {
    //state
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathrooms, setDataBathrooms]= useState('');
    const [dataGuests, setDataGuests]= useState('');


    //
    //
    const addPropertymodal = useAddPropertyModal();

    //
    // Set dates

    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    const content = (
        <>
            {
                currentStep ==1 ? (
                    <>
                        <h2 className='mb-6 text-2xl'>Choose category</h2>
                        <Categories
                            dataCategory={dataCategory}
                            setCategory={(category) => setCategory(category)}/>
                        <CustomButton            
                            label="Next"
                            onClick={() => setCurrentStep(2)}
                        />
                    </>
                ) : currentStep ==2 ? (
                    <>
                        <h2 className='mb-6 text-2xl'>Describe you place</h2>

                        <div>
                            <div>
                                <label>Title</label>
                                <input
                                    type='text'
                                    value={dataTitle}
                                    onChange={(e) => setDataTitle(e.target.value)}
                                    className='w-full p-4 border border-gray-600 rounded-6xl'
                                    />
                            </div>
                            <div>
                                <label>Description</label>
                                <textarea
                                    value={dataDescription}
                                    onChange={(e) => setDataDescription(e.target.value)}
                                    className='w-full h-[200px] p-4 border border-gray-600 rounded-6xl'
                                    ></textarea>
                            </div>
                        </div>

                        <CustomButton            
                            label="Previous"
                            className='mb-2 bg-black hover:bg-gray-800'
                            onClick={() => setCurrentStep(1)}
                        />
                        <CustomButton            
                            label="Previous"
                            onClick={() => setCurrentStep(3)}
                        />
                    </>
                ) : currentStep ==3 ?(
                    <>

                        <h2 className='mb-6 text-2xl'>Details</h2>

                            <div>
                                <div>
                                    <label>Price per night</label>
                                    <input
                                        type='number'
                                        value={dataPrice}
                                        onChange={(e) => setDataPrice(e.target.value)}
                                        className='w-full p-4 border border-gray-600 rounded-6xl'
                                        />
                                </div>

                                <div>
                                    <label>Bedrooms</label>
                                    <input
                                        type='number'
                                        value={dataPrice}
                                        onChange={(e) => setDataBedrooms(e.target.value)}
                                        className='w-full p-4 border border-gray-600 rounded-6xl'
                                        />
                                </div>
                                 <div>
                                    <label>Bathrooms</label>
                                    <input
                                        type='number'
                                        value={dataPrice}
                                        onChange={(e) => setDataBathrooms(e.target.value)}
                                        className='w-full p-4 border border-gray-600 rounded-6xl'
                                        />
                                </div>
                                 <div>
                                    <label>Bedrooms</label>
                                    <input
                                        type='number'
                                        value={dataGuests}
                                        onChange={(e) => setDataGuests(e.target.value)}
                                        className='w-full p-4 border border-gray-600 rounded-6xl'
                                        />
                                </div>
                          
                            </div>

                        <CustomButton            
                            label="Previous"
                            className='mb-2 bg-black hover:bg-gray-800'
                            onClick={() => setCurrentStep(1)}
                        />
                        <CustomButton            
                            label="Previous"
                            onClick={() => setCurrentStep(3)}
                            />
                    </>
                    ) :

                    <p>asdf</p>
            }
            
        </>
    )
    return (
        <>
            <Modal

                isOpen={addPropertymodal.isOpen}
                close={addPropertymodal.close}
                label="Add Property"
                content={
                    content
                }
            />
        </>
    )
}

export default AddPropertyModal;