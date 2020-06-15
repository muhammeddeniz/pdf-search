import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { Interface } from "readline";
import { observer } from "mobx-react";

interface IProps {
  mystore?: any;
}

const Slug: React.FC<IProps> = ({ mystore }) => {
  const router = useRouter();
  const slug: any = router.query.slug || [];
  let deneme = slug.splice("/");
  let id = deneme[0];

  useEffect(() => {
    console.log(mystore.currentPage);
  }, []);

  const [a, seta] = useState([]);

  return (
    <div>
      <h1>{mystore.data.title}</h1>
      <h1>{mystore.data.authors}</h1>
      <h1>{mystore.data.pageCount}</h1>
      <h1>{mystore.data.language}</h1>
      <img src={mystore.data.smallThumbnail} alt="" />
    </div>
  );
};

export default observer(Slug);
