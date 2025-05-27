import Image from "next/image";


interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string ) => void;

}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>

            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-2"> 
                <div 
                    onClick={() => setCategory('Beach')}
                    className={`pb-4  flex flex-col items-center space-y-2 border-b-2 ${dataCategory=='Beach' ? 'border-gray-800' : 'border-white'} border-solid border-white-500 opacity-50 hover:opacity-100 hover:border-gray-950`}>
                                <Image
                                    src="/icn_category_Fantastiske basseng.jpg"
                                    alt="Catergory - Beach"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-xs">Cabins</span>
                            </div>
                
                            <div 
                                onClick={() => setCategory('Garder')}
                                className={`pb-4  flex flex-col items-center space-y-2 border-b-2 ${dataCategory=='Garder' ? 'border-gray-800' : 'border-white'} border-solid border-white-500 opacity-50 hover:opacity-100 hover:border-gray-950`}>
                                <Image
                                    src="/icn_category_Garder.jpg"
                                    alt="Catergory - Beach"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-xs">Garder</span>
                            </div>
                
                            <div 
                                onClick={() => setCategory('Luxe')}
                                className={`pb-4  flex flex-col items-center space-y-2 border-b-2 ${dataCategory=='Luxe' ? 'border-gray-800' : 'border-white'} border-solid border-white-500 opacity-50 hover:opacity-100 hover:border-gray-950`}>
                                <Image
                                    src="/icn_category_Luxe.jpg"
                                    alt="Catergory - Beach"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-xs">Luxe</span>
                            </div>
                
                            <div 
                                onClick={() => setCategory('Room')}
                                className={`pb-4  flex flex-col items-center space-y-2 border-b-2 ${dataCategory=='Room' ? 'border-gray-800' : 'border-white'} border-solid border-white-500 opacity-50 hover:opacity-100 hover:border-gray-950`}>
                                <Image
                                    src="/icn_category_Room.jpg"
                                    alt="Catergory - Beach"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-xs">Room</span>
                            </div>
                
            </div>
        </>
    )
}


export default Categories;

