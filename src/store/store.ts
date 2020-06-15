import { observable, action } from "mobx";
import { fdatasync } from "fs";

class Store {
  @observable
  name: string = "muhammed";

  @observable
  data: {
    title: string;
    authors: string;
    pageCount: string;
    language: string;
    smallThumbnail: string;
  } = {
    title: "",
    authors: "",
    pageCount: "",
    language: "",
    smallThumbnail: "",
  };

  @action
  getData = (
    title: string = "Bulunamadi",
    authors: string = "Bulunamadi",
    pageCount: string = "Bulunamadi",
    language: string = "Bulunamadi",
    smallThumbnail: string = "Bulunamadi"
  ) => {
    this.data.title = title;
    this.data.authors = authors;
    this.data.language = language;
    this.data.pageCount = pageCount;
    this.data.smallThumbnail = smallThumbnail;
  };
}

export default Store;
