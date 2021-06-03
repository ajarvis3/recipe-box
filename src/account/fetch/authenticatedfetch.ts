import generalFetch from "./GeneralFetch";

const authenticatedFetch = (
   path: string,
   body: BodyInit | undefined,
   method: string
) => {
   const headers: HeadersInit = {
      "Content-Type": "application/json",
      "Authentication": "bearer " + localStorage.getItem("token"),
   };
   return generalFetch(path, body, headers, method);
};

export default authenticatedFetch;
