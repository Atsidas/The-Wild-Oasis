import { useMutation } from "@tanstack/react-query";
import { singup as singupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSingup() {
  const { mutate: singup, isLoading } = useMutation({
    mutationFn: singupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
    onError: (err) => {
      console.log("ERROR: ", err);
      toast.error("Problem with creating the new account");
    },
  });

  return { singup, isLoading };
}
