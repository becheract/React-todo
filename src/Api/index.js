import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
    timeout: 5000,
    headers: {'Authorization': 'basic 1be23a53-9c0a-49a1-81aa-81218b01bc22'}
  });

  export default instance;