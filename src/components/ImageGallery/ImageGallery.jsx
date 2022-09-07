import { useState, useEffect } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import * as SC from "./ImageGallery.styled";
import { fetchData } from "../../api/fetchData";
import { Loader } from "../Loader/Loader";
import { ButtonMore } from "../Buttons/ButtonMore";

export const ImageGallery = ({ query }) => {
  const [res, setRes] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);

  const loadMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.query !== this.props.query) {
  //     this.setState({ status: "pending", page: 1 });

  //     fetchData(this.props.query)
  //       .then(({ data }) => {
  //         this.setState((prevState) => ({
  //           data: data.hits,
  //           status: "resolved",
  //           totalHits: data.totalHits,
  //         }));
  //       })
  //       .catch((error) => this.setState({ error, status: "rejected" }));
  //   }
  //   if (prevState.page !== this.state.page) {
  //     fetchData(this.props.query, this.state.page)
  //       .then(({ data }) => {
  //         this.setState((prevState) => ({
  //           data: [...prevState.data, ...data.hits],
  //           status: "resolved",
  //           totalHits: data.totalHits,
  //         }));
  //       })
  //       .catch((error) => this.setState({ error, status: "rejected" }));
  //   }
  // }
  useEffect(() => {
    if (!query) return;

    if (page === 1) setStatus("pending");
    fetchData(query, page)
      .then(({ data }) => {
        setRes((prevstate) => [...prevstate, ...data.hits]);
        setStatus("resolved");
        setTotalHits(data.totalHits);
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [query, page]);

  console.log(res);
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
