import { UseFormSetError } from "react-hook-form";
import { EntityError } from "./api.config";
import toast from "react-hot-toast";

export const handleErrorApi = ({
  error,
  setError,
}: {
  error: any;
  setError?: UseFormSetError<any>;
}) => {
  // check if error in EntityError (422)
  if (error instanceof EntityError && setError) {
    const { payload } = error;
    console.log("payload", payload);
    if (payload.field && payload.message) {
      // Nếu API trả về lỗi theo field (ví dụ: { field: "email", message: "Email không hợp lệ" })
      setError?.(payload.field, { type: "manual", message: payload.message });
    } else if (payload.message) {
      // Nếu API chỉ trả về message
      toast.error(payload.message);
    }
  } else {
    // Lỗi không phải 422
    toast.error("Đã có lỗi xảy ra, vui lòng thử lại!");
    console.error("Lỗi không xác định:", error);
  }
};
