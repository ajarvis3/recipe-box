const generalFetch = (
  path: string,
  body: BodyInit,
  headers: HeadersInit | undefined
) => {
  if (!headers) {
    headers = {
      "Content-type": "application/json; charset=UTF-8",
    };
  }
  // switch this to env at some point
  const env = process.env.NODE_ENV || "development";
  let host = "https://recipeboxapp.azurewebsites.net";
  if (env === "development") host = "http://localhost:8080";
  const url = `${host}/${path}`;
  fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then(
      (value) => value.json(),
      (err) => {
        console.error(err);
      }
    )
    .then(
      (data) => {
        console.log(data);
        if (data && data.token) localStorage.setItem("token", data.token);
      },
      (err) => console.error(err)
    );
};

export default generalFetch;
