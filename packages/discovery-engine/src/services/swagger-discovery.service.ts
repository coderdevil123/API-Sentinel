import axios from "axios";

export class SwaggerDiscoveryService {

  async fetchDocument(
    url: string
  ): Promise<any> {

    const response =
      await axios.get(url);

    return response.data;
  }
}