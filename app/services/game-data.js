import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),

  async getCardsData(firstId, secondId, isPersonType) {
    try {
      const cardOneData = await this.store.findRecord(isPersonType ? 'people' : 'starship', firstId);
      const cardTwoData = await this.store.findRecord(isPersonType ? 'people' : 'starship', secondId);

      return { cardOneData, cardTwoData };
    } catch(e) {
      alert('Seems it something went wrong. Try again');
    }
  }
});
