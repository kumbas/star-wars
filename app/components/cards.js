import Component from '@ember/component';
import { inject as service } from '@ember/service';

const STARSHIP_MAX = 37;
const PEOPLE_MAX = 87;

function getRandomNumber(min, max) {
  let rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

function getNewCards(isTypePerson, gameData) {
  const max = isTypePerson ? STARSHIP_MAX : PEOPLE_MAX;

  return gameData.getCardsData(getRandomNumber(1, max), getRandomNumber(1, max), isTypePerson);
}

function setWinner(cardOneData, cardTwoData, isTypePerson) {
  const prop = isTypePerson ? 'mass' : 'crew';
  const isDraw = cardOneData[prop] === cardTwoData[prop];

  if (isDraw) return null;
  const winner = cardOneData[prop] > cardTwoData[prop] ? cardOneData : cardTwoData;

  return  winner['isWinner'] = true;
}

export default Component.extend({
  gameData: service('gameData'),
  isPerson: true,
  cardOneData: null,
  cardTwoData: null,
  isLoading: false,
  actions: {
    async getCards() {
      this.set('isLoading', true);
      const { cardOneData, cardTwoData } = await getNewCards(this.isPerson, this.gameData);
      this.set('isLoading', false);
      setWinner(cardOneData, cardTwoData, this.isPerson);

      this.setProperties({ cardOneData, cardTwoData });

    },
    toggleType(isTypePerson) {
      this.set('isPerson', isTypePerson);
    }
  }
});
