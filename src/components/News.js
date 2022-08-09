import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchNews } from "../ducks/news";

import { useSelector } from "react-redux";

function News() {
  const dispatch = useDispatch();

  const news = useSelector((state) => {
    return state.news.trending;
  });

  useEffect(() => {
    if (!news.length) {
      dispatch(fetchNews());
    }
  }, []);

  // return
  // news
  //   ? news.slice(16).map((item) => {
  return (
    <>
      <div className="relative h-screen overflow-scroll pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <h3 className="text-xl font-bold">Latest News</h3>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none cursor-pointer">
            {news.slice(16).map((_) => (
              <a target="_blank" rel="noreferrer" href={_.url} key={_.title}>
                <div
                  key={_.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={_.urlToImage}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-black px-3 py-2 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-50">
                        {/* <a href={_.category.href} className="hover:underline">
                        {_.category.name}
                      </a> */}
                        {_.title}
                      </p>

                      <p className="mt-3 text-base text-gray-500">
                        {/* {_.content} */}
                      </p>
                    </div>
                    <div className="mt-1 flex items-center text-gray-50">
                      <div className="flex-shrink-0">
                        <span className="">Author: {_.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default News;
