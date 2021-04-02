import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID ac178b7205b3247a2278bae64ba558a11a69043f207bfc1f5175e8dd93e9df31"
  }
});
