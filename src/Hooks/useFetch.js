import { useEffect, useState } from "react";

export default function useFetch() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let mount = true;
    setLoading(true);
    try {
      if (mount) {
        fetch("Database/articles.json")
          .then((resp) => resp.json())
          .then((data) => {
            setPosts(data);
          })
          .then(() => {
            setLoading(false);
          })
          .catch((error) => console.log("error"));
      }
    } catch (error) {
      console.error(error.getMessage());
    }

    return () => {
      mount = false;
    };
  }, []);

  return { posts, loading };
}
