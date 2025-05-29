

import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";


import apiServices from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";

const PropertyDetailPage = async ({params}: { params: {id: string }}) => {
    const { id } =  params;
    const property = await apiServices.get(`/api/properties/${params.id}`)
    const userId = await getUserId();
    return (
            <main className="max-w-[1500px] mx-auto px-6 pb-10">
                <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
                    <Image
                        fill
                        src='/House_1.jpeg'
                        className='object-cover w-full h-full'
                        alt='beach house'
                    
                        />
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="py-6 pr-6 col-span-3">
                        <h1 className="mb-4 text-4xl">Property name {property.title}</h1>

                        <span className="mb-6 block text-lg text-gray-600">
                           Guests : {property.guests}- {property.bedrooms}bedrooms - {property.bathrooms} bathroom
                        </span>

                        <hr/>

                        <div className="py-6 flex items-center space-x-4">
                            {property.landlord.avatar_url && (
                                    <Image
                                src={property.landlord.avatar_url}
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />
                            )}
                            
                            <p><strong>{property.landlord.name}{property.landlord.avatar_url}</strong></p>
                        </div>
                        <hr/>

                        <p className="mt-6 text-lg">
                            {property.description}
                        </p>
                    </div>
                        <div className="w-[350] ">
                                <ReservationSidebar
                                    property={property}
                                    userId={userId}
                                />
                        </div>
                </div>
            </main>
    )
}

export default PropertyDetailPage;