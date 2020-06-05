import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";

const Slug = () => {
  const router = useRouter();
  const slug = router.query.slug || [];
  let deneme = slug.splice("/");

  console.log(deneme);

  const [a, seta] = useState();

  // useEffect(() => {
  //   Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${slug}`).then(
  //     (res) => {
  //       console.log(res);
  //       seta(res.data.kind);
  //     }
  //   );
  // });

  return (
    <div>
      <h1> de: {deneme[0]}</h1>
      <h1> de: {deneme[1]}</h1>
    </div>
  );
};

export default Slug;
