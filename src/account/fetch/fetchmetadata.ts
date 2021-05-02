const fetchMetaData = (url: string) => {
   // switch this to env at some point
   return fetch(url).then(
      (value) => {
         console.log(value);
      },
      (err) => {
         console.error(err);
      }
   );
};

export default fetchMetaData;
