import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | card', function(hooks) {
  setupRenderingTest(hooks);

  test('should renders card with placeholder text', async function(assert) {
    await render(hbs`<Card />`);

    assert.equal(this.element.textContent.trim(), 'Press Play button');
  });

  test('should renders card with data', async function(assert) {
    this.set('cardData', { name: 'Biggs Darklighter' });

    await render(hbs`<Card @cardData={{cardData}} />`);
    assert.equal(this.element.textContent.trim(), 'Biggs Darklighter');
  });

  test('should renders card with winner label', async function(assert) {
    this.set('cardData', { name: 'Jar Jar Binks', isWinner: true });

    await render(hbs`<Card @cardData={{cardData}} />`);
    assert.dom(this.element.querySelector('.badge')).hasText('Winner');
  });
});
