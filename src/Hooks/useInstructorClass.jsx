import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useInstructorClass = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user.email);
    const [axiosSecure] = useAxiosSecure();
   

    const { data:instructorClass = [], refetch } = useQuery({
        queryKey: ['addClass', user?.email],
        enabled: !loading,
        queryFn: async () =>{
          const response = await axiosSecure.get(`/instructorclass/${user?.email}`)
          return response.data;
        }
      });
      return [instructorClass, refetch]
    
};

export default useInstructorClass;