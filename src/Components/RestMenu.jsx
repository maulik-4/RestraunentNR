import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu"; // Adjust the path as needed
import { useState } from "react";

const RestMenu = () => {
    const { id } = useParams();
    const { menuData, loading, error } = useFetchMenu(id);
    const [openSections, setOpenSections] = useState({});

    if (loading) return <p className="text-center text-lg">Loading...</p>;
    if (error) return <p className="text-center text-lg text-red-500">Error: {error}</p>;

    const restaurantCard = menuData?.cards?.find(
        (item) => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    const restaurantName = restaurantCard?.card?.card?.info?.name || "Restaurant Name Not Available";
    const restaurantCity = restaurantCard?.card?.card?.info?.city;
    
    const menuCards = menuData?.cards?.find(
        (item) => item.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) => card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            [index]: !prev[index], // Toggle the section
        }));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">{restaurantName}</h1>
            <h2 className="text-2xl font-semibold text-center text-gray-600">{restaurantCity}</h2>

            {menuCards?.map((menu, index) => {
                const { title, itemCards } = menu.card?.card || {};
                return (
                    <div key={index} className="mt-6">
                        <button 
                            onClick={() => toggleSection(index)} 
                            className="w-full text-left bg-gray-200 px-4 py-3 rounded-lg flex justify-between items-center hover:bg-gray-300 transition"
                        >
                            <h2 className="text-2xl font-semibold">{title}</h2>
                            <span className="text-xl">{openSections[index] ? "▲" : "▼"}</span>
                        </button>

                        {openSections[index] && (
                            <ul className="mt-3 space-y-4">
                                {itemCards?.map((item) => {
                                    const { id, name, price, description, imageId } = item.card?.info || {};
                                    return (
                                        <li key={id} className="border p-4 rounded-lg shadow-md bg-white flex flex-col md:flex-row items-center md:items-start gap-4">
                                            <div className="md:w-3/4">
                                                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                                                <p className="text-gray-600 text-sm mt-1">{description}</p>
                                                <p className="text-lg font-semibold text-green-600 mt-2">₹{price / 100}</p>
                                            </div>
                                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-lg">
                                                <img 
                                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400,h_400,c_fit/${imageId}`} 
                                                    alt={name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default RestMenu;
