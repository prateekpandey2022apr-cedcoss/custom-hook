import { useState } from "react";

const useFetch = (baseUrl) => {
  const [url, setUrl] = useState(baseUrl);

  const get = (endpoint) => {
    return fetch(baseUrl + endpoint, {
      method: "GET",
    }).then((response) => response.json());
  };

  const post = (endpoint, payload) => {
    return fetch(baseUrl + endpoint, {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => response.json());
  };

  const put = (endpoint, payload) => {
    return fetch(baseUrl + endpoint, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => response.json());
  };

  const del = (endpoint) => {
    return fetch(baseUrl + endpoint, {
      method: "DELETE",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => response.json());
  };

  const extractDataFromApi = (endpoint, payload, method) => {
    switch (method.toLowerCase()) {
      case "get":
        return get(endpoint);
      case "post":
        return post(endpoint, payload);
      case "put":
        return put(endpoint, payload);
      case "delete":
        return del(endpoint);
      default:
        throw new Error(`Invalid method ${method}`);
    }
  };

  //   const _request = ()
  //   return { get, post, put, del };
  return { extractDataFromApi };
};

export { useFetch };
