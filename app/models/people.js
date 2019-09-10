import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  height: DS.attr('string'),
  gender: DS.attr('string'),
  mass: DS.attr('string')
});
