import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | cards', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders 2 cards', async function(assert) {
    await render(hbs`<Cards />`);

    assert.equal(this.element.querySelectorAll('.card').length, 2, 'should display 2 cards');
  });
});
