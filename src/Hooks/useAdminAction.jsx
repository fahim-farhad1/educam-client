import { useQuery } from "react-query";
import axios from "axios";

const useAdminAction = () => {
  // const token = localStorage.getItem('access-token');

  const { data:adminActions = [], refetch } = useQuery({
    queryFn: async () =>{
      const response = await axios.get('https://educam-server.vercel.app/classes')
      console.log('res from axios', response);
      return response.data;
    }
  });
  return [adminActions, refetch]
};
export default useAdminAction;
