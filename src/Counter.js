import React, { useEffect, useReducer, useState } from "react";
import { IncDec } from "./reducers";
import { useBoolean } from "./useBoolean";
import { useFetch } from "./useFetch";

const initialState = {
  value: 0,
};

function Counter() {
  // const [state, dispatch] = useReducer(IncDec, initialState);
  // const [isToggle, { setToggle }] = useBoolean(false);
  const { extractDataFromApi } = useFetch(
    "https://jsonplaceholder.typicode.com/"
  );

  function handleGetData(event) {
    console.log(event);
    // console.log(get);

    extractDataFromApi("posts", {}, "get").then((response) =>
      console.log(response)
    );
  }

  function handlePostData(event) {
    console.log(event);

    extractDataFromApi(
      "posts",
      { title: "foo", body: "bar", userId: 1 },
      "post"
    ).then((response) => console.log(response));
  }

  function handlePutData(event) {
    console.log(event);
    extractDataFromApi(
      "posts/1",
      {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      },
      "put"
    ).then((response) => console.log(response));
  }

  function handleDelData(event) {
    console.log(event);
    extractDataFromApi("posts/1", {}, "delete").then((response) =>
      console.log(response)
    );
  }

  return (
    <>
      <button onClick={handleGetData}>Get data</button>
      <button onClick={handlePostData}>Post data</button>
      <button onClick={handlePutData}>PUT data</button>
      <button onClick={handleDelData}>DEL data</button>
    </>
  );
}

export default Counter;
