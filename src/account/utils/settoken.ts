import Token from "../types/Token";

const setToken = (data: Token) => {
   if (data && data.token) localStorage.setItem("token", data.token);
};

export default setToken;
