import { useState, useEffect } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import * as SC from "./ImageGallery.styled";
import { fetchData } from "../../api/fetchData";
import { Loader } from "../Loader/Loader";
import { ButtonMore } from "../Buttons/ButtonMore";

export const ImageGallery = ({ query }) => {
  const [res, setRes] = useState([]);
  const [, setError] = useState(null);
  const [status, setStatus] = useState("idle");
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);

  const api = (q, p) => {
    fetchData(q, p)
      .then(({ data }) => {
        setRes((prevstate) => [...prevstate, ...data.hits]);
        setStatus("resolved");
        setTotalHits(data.totalHits);
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  };
  const loadMore = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!query) return;

    api(query, page);
  }, [page, query]);

  const createItems = () => {
    return res.map((item) => (
      <ImageGalleryItem
        key={item.id}
        previewURL={item.webformatURL}
        largeImageURL={item.largeImageURL}
      ></ImageGalleryItem>
    ));
  };
  const lastPage = (page, res) => {
    if (Math.ceil(res / 12) === page) {
      return true;
    }
  };

  if (status === "idle") {
    return;
  }

  if (status === "pending") {
    return <Loader></Loader>;
  }

  if (status === "rejected") {
    return <h1>Not found</h1>;
  }

  if (status === "resolved") {
    return (
      <>
        <SC.ImageGallery>{createItems()}</SC.ImageGallery>
        {lastPage(page, totalHits) === true ? (
          ""
        ) : (
          <ButtonMore onClick={loadMore}></ButtonMore>
        )}
      </>
    );
  }
};
