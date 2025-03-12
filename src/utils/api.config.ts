import axios from "axios";

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_API_URL,
  withCredentials: true, // set to true to send cookies with requests
});

//define the error status code
const ENTITY_ERROR_STATUS: number = 422;
const UNAUTHORIZED_ERROR_STATUS: number = 401;
const INTERNAL_SERVER_ERROR_STATUS: number = 500;

type EntityErrorPayload = {
  message: string;
  field?: string;
};

// class tổng quát cho việc bắt lỗi Http
export class HttpError extends Error {
  status: number;
  payload: {
    message: string;
    [key: string]: any;
  };
  constructor({
    status,
    payload,
    message = "Lỗi HTTP không xác định",
  }: {
    status: number;
    payload: any;
    message?: string;
  }) {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}

// class bắt lỗi khi status code là 422
export class EntityError extends HttpError {
  status: typeof ENTITY_ERROR_STATUS;
  payload: EntityErrorPayload;
  constructor({
    status,
    payload,
  }: {
    status: typeof ENTITY_ERROR_STATUS;
    payload: EntityErrorPayload;
  }) {
    super({ status, payload, message: "Lỗi thực thể 422" });
    this.status = status;
    this.payload = payload;
  }
}

//define interceptor when response error

apiInstance.interceptors.response.use(
  (response) => response.data, //just receive res.data when has response from api
  async (error) => {
    if (!error.response) {
      return Promise.reject(
        new HttpError({
          status: INTERNAL_SERVER_ERROR_STATUS,
          payload: { message: "Lỗi không xác định từ máy chủ" },
        })
      );
    }
    if (error.response.status === ENTITY_ERROR_STATUS) {
      return Promise.reject(
        new EntityError({
          status: ENTITY_ERROR_STATUS,
          payload: error.response.data,
        })
      );
    } else if (error.response.status === UNAUTHORIZED_ERROR_STATUS) {
      //  gọi api logout và chuyển đến trang login
      try {
        await apiInstance.post("/auth/logout");
      } finally {
        if (window.location.pathname !== "/login")
          //Phải check để tránh lặp vô hạn khi checkAuth trong public route
          window.location.href = "/login";
      }
      return Promise.reject(
        new HttpError({
          status: UNAUTHORIZED_ERROR_STATUS,
          payload: {
            message: "Bạn chưa đăng nhập hoặc phiên đăng nhập hết hạn",
          },
        })
      );
    }

    return Promise.reject(error);
  }
);
