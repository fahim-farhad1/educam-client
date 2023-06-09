import { Query, useQuery } from "react-query";

const useStudent = () => {
  const { refetch, data, } = useQuery("students",{
    queryFn: async () =>{
        const response = await fetch('http://localhost:3000/students')
        return response.json()
    },
  }
  );
  return [data, refetch];
};
export default useStudent;
