import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useAddedClass = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, data:addedClass = [], refetch } = useQuery({
    queryKey: ['addClasses', user?.email],
    queryFn: async () =>{
      const response = await fetch(`http://localhost:3000/addedclass?email=${user?.email}`)

      return response.json();
    }
  });
  return [addedClass, isLoading, refetch]
};
export default useAddedClass;
