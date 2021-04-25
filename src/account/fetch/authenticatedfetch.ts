import generalFetch from "./generalfetch";

const authenticatedFetch = (path: string, body: BodyInit) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authentication: "bearer ",
  };
  generalFetch(path, body, headers);
};

export default authenticatedFetch;
