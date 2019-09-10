import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  crew: DS.attr(),
  mass: DS.attr(),
});
