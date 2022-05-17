import axios from "axios";

axios.defaults.baseURL = `http://localhost:8000`;

axios.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('user_token'); // user token example
  if (token !== null)
    config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  }, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500;

    if (!expectedError) {
      if ((error + "").includes("Network"))
        console.log('خطا در برقراری ارتباط با شبکه.');

    } else {
      const errorStatus = error.response.status;

      switch (errorStatus) {
        case 500:
          console.log('خطا در برقرار ارتباط با سرور.');
          break;

        case 401:
          console.log('اتمام اعتبار کاربر.');
          break;

        case 403:
          console.log('عدم امکان دسترسی کاربر.');
          break;

        case 404:
          console.log('درخواست مورد نظر یافت نشد.');
          break;

        default:
          break;
      }
    }

    return Promise.reject(error);
  }
);

export const request = {
  get: (url: string, body = {}) => axios.get(url, body),
  post: (url: string, body = {}, config = {}) => axios.post(url, body, config),
  put: (url: string, body = {}) => axios.put(url, body),
  delete: (url: string, params = {}) => axios.delete(url, params),
};