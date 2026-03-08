import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const[searchQuery,setSearchQuery]=useState("")

  const fetchProducts = async () => {
    setProducts(dummyProducts)
  }
  useEffect(() => {
    fetchProducts()
  },[])
  const value = {
    navigate,
    user,
    setUser,
    products,
    searchQuery,
    setSearchQuery
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;