import axios from "axios";

export default axios.create({
  // Currently using ngrok for Device testing, will deploy API Soon
  baseURL: "http://c48239f6612a.ngrok.io",
});
