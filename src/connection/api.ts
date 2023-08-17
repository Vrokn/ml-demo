/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const BASE_URL = 'https://music.musicaudience.info';
export const API_KEY = '5db48e1f3a0a4580bad47849f1317bd0';

type ApiRequestConfig = AxiosRequestConfig;

export const apiCall = async (
  config: ApiRequestConfig,
  showSnackbar?: (text: string, type: "success" | "info" | "warning" | "error") => void
): Promise<AxiosResponse<any> | null> => {
  const headers = {
    Authorization: `apikey ${API_KEY}`,
    ...config.headers,
  };

  try {
    return await axios({
      ...config,
      baseURL: BASE_URL,
      headers,
    });
  } catch (error: any) {
    console.error("API call error:", error);

    let errorMessage = 'Oops! Something went wrong with the request. Please try again.';
    if (error.response && error.response.data) {
      errorMessage = error.response.data.error || errorMessage;
    }
    showSnackbar && showSnackbar(errorMessage, 'error');
    return null;
  }
};