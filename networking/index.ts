import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Config } from "@/Config";

const instance = axios.create({
    baseURL: Config.apiUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  export enum QueryMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
  }

  export enum QueryKey {
    Users = "Users"
  }

  // This function handles the error response from the API
  // It checks if the error has a response, request, or is a general error
  // This can be enhanced to handle auth failures and other specific error codes as well.
  function handleReject(error: AxiosError) {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
      return {
        status: error.response.status,
        message: error.response.data || "Something went wrong",
      };
    } else if (error.request) {
      console.error("Network Error: No response received");
      return { status: null, message: "No response from server. Check network." };
    } else {
      console.error("Request Error:", error.message);
      return { status: null, message: error.message };
    }
  }

  // This function handles the response from the API
  // It checks if the response is successful or not
  // If the response is not successful, it throws an error
  // This can be enhanced to abort the requests in case of 401 error.
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => Promise.reject(handleReject(error))
  );

  // This function is used to make API requests
  // It takes a config object as an argument and returns a promise of generic type T
  export async function makeRequest<T>(
    config: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return instance<T>(config)
  }
