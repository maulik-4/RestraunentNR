import { useEffect, useState } from "react";

const useFetchMenu = (id) => {
    const [menuData, setMenuData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(
                    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const json = await response.json();
                console.log("API Response:", json);
                setMenuData(json.data);
            } catch (err) {
                console.error("Error fetching menu:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMenu();
        }
    }, [id]);

    return { menuData, loading, error };
};

export default useFetchMenu;
