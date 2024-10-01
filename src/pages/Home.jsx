// import react
import { useEffect, useRef, useState } from "react";

// import react-router-dom
import { useActionData } from "react-router-dom";

// import hooks
import { useFetch } from "../hooks/useFetch";

// import companents
import { Search, FormInput, ImagaContainer } from "../companents";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search");
  return search;
};

const Home = () => {
  const dataFromAction = useActionData();
  const [allImages, setAllImages] = useState([]);
  const [pageParam, setPageParam] = useState(1);
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=18u_dbAKeQsQKml1QfC7t_D3kN0y3H-nx9NKkDutZU8&query=${
      dataFromAction ?? "All"
    }&page=${pageParam}`
  );

  const prevSearchParam = useRef(dataFromAction);

  useEffect(() => {
    if (data && data.results) {
      setAllImages((prevImages) => {
        return pageParam === 1
          ? data.results
          : [...prevImages, ...data.results];
      });
    }
  }, [data]);

  useEffect(() => {
    if (dataFromAction != prevSearchParam.current) {
      setAllImages([]);
      setPageParam(1);
      prevSearchParam.current = dataFromAction;
    }
  }, [dataFromAction]);

  if (isPending) {
    <h1>Loading....</h1>;
  }
  if (error) {
    <h1>Error: </h1>;
  }

  return (
    <>
      <Search />
      <div className="py-10 align-elements">
        {allImages && <ImagaContainer images={allImages} />}
        <button
          onClick={() => setPageParam(pageParam + 1)}
          className="btn btn-outline w-full my-5 mx-auto"
        >
          Read more
        </button>
      </div>
    </>
  );
};

export default Home;
