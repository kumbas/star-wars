import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  model: DS.attr('string'),
  manufacturer:  DS.attr('string'),
  crew :DS.attr('string')
});
