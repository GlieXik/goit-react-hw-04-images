import axios from "axios";

export const fetchData = (q, page) => {
  const searchParams = new URLSearchParams({
    key: "28372549-e090c48611b383f38160db719",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    q: q,
    page: page,
    per_page: 12,
  });

  return axios(`https://pixabay.com/api/?${searchParams}`);
};
