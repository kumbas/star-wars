import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | game-data', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:game-data');
    assert.ok(service);
  });
});
