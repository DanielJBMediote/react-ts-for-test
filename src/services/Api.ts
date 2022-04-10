import axios, { AxiosInstance } from 'axios';


export default abstract class Api {

  private token: string;
  private readonly host: string = 'http://localhost:3333/';
  private instance: AxiosInstance;

  constructor(path: string) {
    this.instance = axios.create({
      baseURL: this.host + path,
      timeout: 10000
    })
  }

  async get(url: string, params?: any) {
    return this.instance.get(url, params!);
  }
  async put(url: string, params?: any) {
    return this.instance.put(url, params!);
  }

  async delete(url: string, data?: any, params?: any) {
    return this.instance.put(url, data, params!);
  }

  async post(url: string, data?: any, params?: any) {
    return this.instance.post(url, data, params!);
  }

}