import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: 'https://swapi.co',
  init() {
    this._super(...arguments);

    this.set('headers', {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }
});
