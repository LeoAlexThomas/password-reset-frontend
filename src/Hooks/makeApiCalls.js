import { useState } from "react";
import api from "../Utils/api";
import { toast } from "react-toastify";

// Used this hook for making api call for methods like [POST, PUT, PATCH, DELETE]
const useApi = () => {
  // handing loading state commonly here
  const [isLoading, setIsLoading] = useState(false);

  const makeApiCall = async ({ method, url, data, onError }) => {
    setIsLoading(true);
    try {
      // Making api call based on the parameters
      const response = await api({
        method,
        url,
        data,
      });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      // Handling error of api call
      setIsLoading(false);
      if (!onError) {
        // Showing error toast message
        toast.error(error.response.data.message);
      } else {
        onError(error);
      }
      return;
    }
  };

  return { isLoading, makeApiCall };
};

export default useApi;
