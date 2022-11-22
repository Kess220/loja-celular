import React, { useEffect, useState } from "react";

export const Store = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await fetch.json(url);
      const objJson = await response.json;
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <div>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{e.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
