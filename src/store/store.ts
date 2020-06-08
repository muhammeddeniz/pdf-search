import { observable, action } from "mobx";

class Store {
  @observable
  name: string = "muhammed";

  @observable
  currentPage: any | undefined;

  @action
  getData = (a: any) => {
    this.currentPage = a;
  };
}

export default Store;
