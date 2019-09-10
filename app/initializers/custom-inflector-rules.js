import Inflector from 'ember-inflector';

export function initialize() {
  const inflector = Inflector.inflector;

  inflector.uncountable('people');
}

export default {
  name: 'custom-inflector-rules',
  initialize
};
