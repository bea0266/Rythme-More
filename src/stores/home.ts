import { defineStore } from 'pinia';
import game from 'samples/game.json';

export const useHomeStore = defineStore('home', {
  state: () => ({
    games: game.games,
  }),
  getters: {
  },
  actions: {

  },
});
