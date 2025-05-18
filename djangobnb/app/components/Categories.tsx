import Image from "next/image";


const Categories = () => {
    return (
        <div className="mt-10 pl-10 pt-3 cursor-pointer pb-6 flex items-center space-x-12 ">
            <div className="pb-4  flex flex-col items-center space-y-2 border-b-2 border-solid border-white-500 opacity-50 hover:opacity-100 hover:border-gray-950">
                <Image
                    src="/icn_category_Fantastiske basseng.jpg"
                    alt="Catergory - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Cabins</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white-500 opacity-50 hhover:opacity-100 hover:border-gray-950">
                <Image
                    src="/icn_category_Garder.jpg"
                    alt="Catergory - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Garder</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-4 border-solid border-white-500 opacity-50 hover:opacity-100 hover:border-gray-950">
                <Image
                    src="/icn_category_Luxe.jpg"
                    alt="Catergory - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Luxe</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white-500 opacity-50 hover:opacity-100 hover:border-gray-950">
                <Image
                    src="/icn_category_Room.jpg"
                    alt="Catergory - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Room</span>
            </div>
        </div>
    )
}

export default Categories;