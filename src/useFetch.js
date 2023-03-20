import { useState,useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
      setTimeout(() => {
        fetch(url)
          .then((res) => {
              if (!res.ok) {
                  throw Error("could not fetch data")
              }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setData(data);
            setIsLoading(false);
            setError(null)
          })
          .catch(err => {
              setError(err.message)
              setIsLoading(false);
              console.log(err)
          });
      }, 0);
    }, [url]);


    return {data,IsLoading,error}
}

export default useFetch;