import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingBooking, mutate } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success("Booking successfuly deleted");

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeletingBooking, mutate };
}
