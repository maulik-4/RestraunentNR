import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu"; // Adjust the path as needed

const RestMenu = () => {
    const { id } = useParams();
    const { menuData, loading, error } = useFetchMenu(id);

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

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">{restaurantName}</h1>
            <h2 className="text-3xl font-bold text-center mb-6">{restaurantCity}</h2>
            {menuCards?.map((menu, index) => {
                const { title, itemCards } = menu.card?.card || {};
                return (
                    <div key={index} className="mt-6">
                        <h2 className="text-2xl font-semibold border-b pb-2">{title}</h2>
                        <ul className="mt-2 space-y-3">
                            {itemCards?.map((item) => {
                                const { id, name, price, description } = item.card?.info || {};
                                return (
                                    <li key={id} className="border p-2 rounded">
                                        <h3 className="text-xl font-bold">{name}</h3>
                                        <p>{description}</p>
                                        <p className="font-semibold">Price: {price}</p>
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
