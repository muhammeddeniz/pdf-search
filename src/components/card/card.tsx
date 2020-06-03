import React from "react";
import Link from "next//link";

import "./card.scss";
import { Button } from "../button";

interface IProps {
  store?: any;
  index?: any;
  id?: string;
  volumeInfo?: {
    title: string;
    authors: [];
    publisher: string;
    description: string;
    pageCount: string;
    categories: string;
    language: string;
    previewLink: string;
    infoLink: string;
    saleInfo: {
      country: string;
      listPrice: {
        amount: number;
      };
    };
    pdf: {
      isAvailable: boolean;
      acsTokenLink: "";
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

const Card: React.FC<IProps> = ({ index }) => {
  return (
    <div className="card">
      <div key={index.id} className="homePage-content-items">
        <p className="card-sayfa">{index.volumeInfo.pageCount} sf.</p>

        <p className="card-baslik">{index.volumeInfo.title}</p>
        <p className="card-author">
          {index.volumeInfo.authors?.map((i: any) => i)}
          {!index.volumeInfo.authors ? "unknown" : ""}
        </p>
        <img
          className="homePage-content-items-img"
          src={
            index.volumeInfo.imageLinks
              ? index.volumeInfo.imageLinks.smallThumbnail
              : " "
          }
          alt=""
        />

        <p className="card-yayinevi">{index.volumeInfo.publisher}</p>

        {/* <p>{index.volumeInfo.description}</p> */}
        <div className="card-buttons">
          <Link
            href={
              index.accessInfo.pdf?.acsTokenLink
                ? index.accessInfo.pdf?.acsTokenLink
                : ""
            }
          >
            <a>
              <Button outline>Pdf İndir</Button>
            </a>
          </Link>
          <Link
            href={
              index.volumeInfo.previewLink ? index.volumeInfo.previewLink : ""
            }
          >
            <a className="btn-right">
              <Button outline>Pdf Oku</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
