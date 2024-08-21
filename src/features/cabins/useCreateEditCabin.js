import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin, editCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateEditCabin(isEditSession, reset) {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: isEditSession ? editCabin : createCabin,
    onSuccess: () => {
      toast.success(
        isEditSession
          ? "Cabin successfuly edited"
          : "New cabin successfuly created"
      );

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });

      if (reset) reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, mutate };
}
