import Image from "next/image";

const MyReservationPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">

            <h1 className="mt-6 pb-2 text-2xl">My Reservations</h1>

            <div className="space-y-4">
         <div className="p-5 my-6 grid grid-col-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                        <div className="col-span-1">
                            <div className="relative cursor-pointer overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill
                                    src="/House_1.jpeg"
                                    className="hover:scale-110 object-cover transition h-full w-full"
                                    alt="house for sale"

                                />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-3">
                                <h2 className="mb-4 font-bold text-xl">Property Name</h2>
                                <p className="mb-2"><strong>Check in Date:</strong>14/2/2025</p>
                                <p className="mb-2"><strong>Check out Date:</strong>16/2/2025</p>
                                <p className="mb-2"><strong>Number of Nights:</strong>2</p>
                                <p className="mb-2"><strong>Total price:</strong> $200</p>
                                <div className="mt-6 cursor-pointer inline-block py-4 px-6 bg-airbnb text-white border-2 rounded-xl hover:bg-airbnb-dark transition ">Go to Property</div>
                        </div>                  

                    </div>

                    <div className="p-5 my-6 grid grid-col-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                        <div className="col-span-1">
                            <div className="relative cursor-pointer overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill
                                    src="/House_1.jpeg"
                                    className="hover:scale-110 object-cover transition h-full w-full"
                                    alt="house for sale"

                                />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-3">
                                <h2 className="mb-4 font-bold text-xl">Property Name</h2>
                                <p className="mb-2"><strong>Check in Date:</strong>14/2/2025</p>
                                <p className="mb-2"><strong>Check out Date:</strong>16/2/2025</p>
                                <p className="mb-2"><strong>Number of Nights:</strong>2</p>
                                <p className="mb-2"><strong>Total price:</strong> $200</p>
                                <div className="mt-6 cursor-pointer inline-block py-4 px-6 bg-airbnb text-white border-2 rounded-xl hover:bg-airbnb-dark transition ">Go to Property</div>
                        </div>                  

                    </div>
            </div>
        </main>
    )
} 

export default MyReservationPage;