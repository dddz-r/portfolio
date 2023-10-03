import portfolio from "@/api/portfolio";
import { defineStore } from 'pinia';
// import axios from 'axios';

export const usePortfoiloStore = defineStore('portfolio', {
  state: () => ({
    portfolio: portfolio.list
  }),
  getters: {},
  actions: {
    // async getPortfoliList() {
    //   return (
    //     await axios.get('/test').catch(e => {
    //       let result = {};
    //       result.result = 'Fail';
    //       return result;
    //     })
    //   ).data;
    // },
    getPortfoliData() {
      return this.portfolio;
    }
  }
});
