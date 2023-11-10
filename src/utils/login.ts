import axios from "axios";

// TODO: UPDATE URL
const url = "https://smsio.pando.tech/api/v2";

const login = async (data: string) => {
  try {
    const response = await axios.post(url, { id: data });
    return response.data;
  } catch (err) {
    return err;
  } finally {
    console.log("Finished!");
  }
};

export default login;
