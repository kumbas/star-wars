import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | star wars', function(hooks) {
  setupApplicationTest(hooks);

  test('should show heading home page', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('h1').length, 1, 'should display heading');
  });

  test('should show 2 cards', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.card').length, 2, 'should display 2 cards');
  });

  test('should show play button', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.btn-primary').length, 1, 'should display play button');
  });
});
