import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useInstructorAddClass = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
   

    const { data:addclass = [], refetch } = useQuery({
        queryKey: ['addClass', user?.email],
        enabled: !loading,
        queryFn: async () =>{
          const response = await axiosSecure.get(`/students/${user?.email}`)
          return response.data;
        }
      });
      return [addclass, refetch]
};

export default useInstructorAddClass;