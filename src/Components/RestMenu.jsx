import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestMenu = () => {
    const [restMenuD, setRestMenuD] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
            );
            const json = await response.json();
            console.log("API Response:", json); 
            setRestMenuD(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

  
    const restaurantCard = restMenuD?.cards?.find(
        (item) => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    const restaurantName = restaurantCard?.card?.card?.info?.name || "Restaurant Name Not Available";
    const restaurantCity = restaurantCard?.card?.card?.info?.city;
    
    const menuCards = restMenuD?.cards?.find(
        (item) => item.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) => card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="container mx-auto p-6">
    
            <h1 className="text-3xl font-bold text-center mb-6">{restaurantName}</h1>
            <h2 className="text-3xl font-bold text-center mb-6 ">{restaurantCity}</h2>
 

            {menuCards?.map((menu, index) => {
                const { title, itemCards } = menu.card?.card || {};
                return (
                    <div key={index} className="mt-6">
                        <h2 className="text-2xl font-semibold border-b pb-2">{title}</h2>
                        <ul className="mt-2 space-y-3">
                            {itemCards?.map((item) => {
                                const { id, name, price, description } = item.card?.info || {};
                                return (
                                    <li key={id} className="border p-4 rounded-lg shadow-sm">
                                        <p className="text-lg font-medium">{name} - ₹{price ? price / 100 : "N/A"}</p>
                                        <p className="text-gray-500">{description || "No description available"}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default RestMenu;
