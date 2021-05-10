const generalFetch = (
   urlPath: string,
   body: BodyInit | undefined,
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
   console.log(env);
   console.log(host);
   const url = new URL(urlPath, host).href;
   const options = body
      ? {
            method: method,
            headers: headers,
            body: body,
         }
      : {
            method: method,
            headers: headers,
         };;
   return fetch(url, options).then(
      (value) => {
         if (value.status >= 200 && value.status <= 300) {
            return value.json();
         } else {
            return value.status;
         }
      },
      (err) => {
         console.error(err);
      }
   );
};

export default generalFetch;
