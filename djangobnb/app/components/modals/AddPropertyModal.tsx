'use client'

import Image from 'next/image';

import Modal from './Modal';

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';

const AddPropertyModal = () => {
    const addPropertymodal = useAddPropertyModal();

    return (
        <>
            <Modal

                isOpen={addPropertymodal.isOpen}
                close={addPropertymodal.close}
                label="Add Property"
                content={(
                    <p>Yoo</p>
                )}
            />
        </>
    )
}

export default AddPropertyModal;