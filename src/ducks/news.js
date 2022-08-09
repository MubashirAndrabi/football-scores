import Axios from "axios";

const NEWS = "app/news/NEWS";

export function getNews(values) {
  return { type: NEWS, values };
}

export default function reducer(state = { trending: [] }, action) {
  switch (action.type) {
    case NEWS:
      return { ...state, trending: action.values };
    default:
      return state;
  }
}

export function fetchNews() {
  return (dispatch, getState) => {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=gb&category=sports",
      {
        headers: {
          "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY,
        },
      }
    )
      .then((response) => {
        const data = response.data.articles.map((item) => {
          return item;
        });

        dispatch(getNews(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
