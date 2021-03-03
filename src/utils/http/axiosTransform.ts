import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { RequestOptions } from './type';

/**
 *@description 数据处理接口,可以根据项目自行配置
 */
export default interface AxiosTransform<T> {
  /**
   * @description 请求之前处理配置
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  /**
   * @description 请求成功处理
   */
  transformRequestData?: (res: AxiosResponse<T>, options: RequestOptions) => any;

  /**
   * @description 请求失败处理
   */
  requestCatch?: (e: Error) => Promise<any>;

  /**
   * @description 请求之前的拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  /**
   * @description 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error & { code: string | number; response: any }) => void;
}