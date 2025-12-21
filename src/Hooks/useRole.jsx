import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxios from "./useAxios";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);
  const instanceAxios = useAxios();

  // const { data: role,isLoading: isRoleLoading,} = useQuery({

  //   enabled: !loading && !!user?.email,
  //   queryKey: ["role", user?.email],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `http://localhost:3000/user/role/${user.email}`

  //     );
  //   //   console.log(res.data)
  //     return res.data.role;
  //   },
  // });

  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await instanceAxios.get(`/user/role/${user.email}`);
      return res.data.role;
    },
  });

  return { role, isRoleLoading };
};

export default useRole;
