import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);  // State to store orders
  const url = "http://localhost:4000";
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [food_list, setFoodList] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartCalories = () => {
    let totalCalories = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalCalories += itemInfo.calorie * cartItems[item];
      }
    }
    return totalCalories;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  };

  const fetchOrders = async () => {
    if (token) {
      try {
        const response = await axios.get(`${url}/api/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error.response ? error.response.data : error.message);
      }
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      // Ensure fetchOrders is only called when the token is available
      if (token) {
        await fetchOrders();
      }
    }
    loadData();
  }, [token]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartCalories,
    getTotalCartAmount,
    orders,         // Provide the orders state
    setOrders,      // Provide a setter for orders
    addOrder: async (order) => {
      if (token) {
        try {
          const response = await axios.post(
            `${url}/api/orders`,
            { order },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setOrders((prevOrders) => [...prevOrders, response.data.order]);
        } catch (error) {
          console.error("Error adding order:", error);
        }
      }
    },
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
