export type GeneralFetchResult<T> =
   | {
        ok: true;
        status: number;
        data: T | null;
     }
   | {
        ok: false;
        status: number;
        error: string;
        data: unknown;
     };

const readResponseBody = async (response: Response) => {
   const text = await response.text();

   if (!text) {
      return null;
   }

   try {
      return JSON.parse(text);
   } catch {
      return text;
   }
};

const generalFetch = async <T>(
   urlPath: string,
   body: BodyInit | undefined,
   headers: HeadersInit | undefined,
   method: string
): Promise<GeneralFetchResult<T>> => {
   const resolvedHeaders: HeadersInit = headers || {
      "Content-type": "application/json; charset=UTF-8",
   };

   const env = import.meta.env.DEV ? "development" : "production";
   let host = "https://recipeboxapp.azurewebsites.net";
   if (env === "development") host = "http://localhost:8080";

   const url = new URL(urlPath, host).href;
   const options = body
      ? {
           method: method,
           headers: resolvedHeaders,
           body: body,
        }
      : {
           method: method,
           headers: resolvedHeaders,
        };

   try {
      const response = await fetch(url, options);
      const data = await readResponseBody(response);

      if (response.ok) {
         return {
            ok: true,
            status: response.status,
            data: data as T | null,
         };
      }

      return {
         ok: false,
         status: response.status,
         error:
            typeof data === "string"
               ? data
               : `Request failed with status ${response.status}`,
         data,
      };
   } catch (err) {
      console.error(err);
      return {
         ok: false,
         status: 0,
         error: err instanceof Error ? err.message : "Network request failed",
         data: null,
      };
   }
};

export default generalFetch;
