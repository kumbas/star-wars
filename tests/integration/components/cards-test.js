import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | cards', function(hooks) {
  setupRenderingTest(hooks);

  test('should renders 2 cards', async function(assert) {
    await render(hbs`<Cards />`);

    assert.equal(this.element.querySelectorAll('.card').length, 2, 'should display 2 cards');
  });

  test('should render with people type', async function(assert) {
    await render(hbs`<Cards />`);

    assert.dom(this.element.querySelector('#persons').parentNode).hasClass('active');
  });

  test('should change type on starship button click', async function(assert) {
    await render(hbs`<Cards />`);
    await click('#starships');

    assert.dom(this.element.querySelector('#starships').parentNode).hasClass('active');
  })
});
