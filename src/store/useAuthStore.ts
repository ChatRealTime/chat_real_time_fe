import { create } from "zustand";
import { apiInstance } from "../utils/api.config";

interface AuthStore {
  authUser: any;
  isCheckingAuth: boolean;
  isUpdatingProfile: boolean;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isUpdatingProfile: false,

  checkAuth: async () => {
    try {
      const res = await apiInstance.get("/auth/check-auth");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Lỗi check auth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
