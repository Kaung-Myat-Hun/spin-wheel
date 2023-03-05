import axios from "axios";
import react, { useState, useEffect } from "react";

function GetApi(url, depend) {
  const [dataRes, setDataRes] = useState([]);
  const { VITE_APP_DOMAIN } = import.meta.env;
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${VITE_APP_DOMAIN}${url}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        if (res.data.status === "success" || res.status === "success") {
          setDataRes(res.data.data || res.data);
        }
      });
  }, []);
  return { dataRes };
}
export default GetApi;
