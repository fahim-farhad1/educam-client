import { useContext } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const useAddedClass = () => {
  const { user, loading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();

  const { data:addedClass = [], refetch } = useQuery({
    queryKey: ['addClasses', user?.email],
    enabled: !loading,
    queryFn: async () =>{
      const response = await axiosSecure.get(`/addtoclass?email=${user?.email}`)
      console.log('res from axios', response);
      return response.data;
    }
  });
  return [addedClass, refetch]
};
export default useAddedClass;
