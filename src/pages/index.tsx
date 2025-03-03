import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input, Card } from "../components";
import { observer } from "mobx-react";

interface IProps {
  mystore?: any;
}

const HomePage: React.FC<IProps> = ({ mystore }) => {
  const [query, setQuery] = useState("default");
  const [load, setLoad] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  const [text, setText] = useState([
    {
      id: "",
      volumeInfo: {
        title: "",
        authors: [],
        publisher: "",
        description: "",
        pageCount: "",
        // bureada kaldım
        categories: [],
        language: "",
        previewLink: "",
        infoLink: "",
        saleInfo: {
          country: "",
          listPrice: {
            amount: 0,
          },
        },

        imageLinks: {
          smallThumbnail: "",
          thumbnail: "",
          small: "",
          medium: "",
        },
      },
      accessInfo: {
        pdf: {
          isAvailable: false,
          acsTokenLink: "",
        },
      },
    },
  ]);

  const fetchData = async () => {
    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => {
        setText(response.data.items);
        console.log(response.data.items);
      });
    setLoad(true);
  };

  return (
    <div className="homePage">
      <div className="homePage-searchArea">
        <Input
          keyPressFunc={(e: any) => {
            if (e.keyCode === 13) {
              setLoad(false);
              setFirstLoad(false);
              fetchData();
            }
          }}
          title="Aranacak Eser"
          searchFunc={(e: any) => setQuery(e.target.value)}
          placeholder="Aranacak kelimeyi giriniz"
          primary
        ></Input>

        <Button
          primary
          clickfunc={async () => {
            await setLoad(false);
            setFirstLoad(false);
            fetchData();
          }}
        >
          Search
        </Button>
      </div>

      {load ? (
        <div className="homePage-content">
          {!firstLoad ? (
            text ? (
              text.map((index) => {
                return (
                  <Card
                    onClick={() => {
                      mystore?.getData(
                        index.volumeInfo.title,
                        index.volumeInfo.authors[0],
                        index.volumeInfo.pageCount,
                        index.volumeInfo.language,
                        index.volumeInfo.imageLinks.medium
                      );
                    }}
                    index={index}
                  />
                );
              })
            ) : (
              <div className="cantFind">
                <h1>Aradığınız Öğe bulunamadi</h1>
              </div>
            )
          ) : null}
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
};

export default observer(HomePage);
