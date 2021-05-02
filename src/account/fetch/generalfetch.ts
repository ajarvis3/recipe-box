const generalFetch = (
   path: string,
   body: BodyInit,
   headers: HeadersInit | undefined,
   method: string
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
   return fetch(url, {
      method: method,
      headers: headers,
      body: body,
   })
      .then(
         (value) => value.json(),
         (err) => {
            console.error(err);
         }
      )};

export default generalFetch;
