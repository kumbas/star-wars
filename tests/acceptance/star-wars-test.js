import { module, test } from 'qunit';
import { visit, click, waitFor } from '@ember/test-helpers';
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

    assert.equal(this.element.querySelectorAll('.play-button').length, 1, 'should display play button');
  });

  test('should show loading state', async function(assert) {
    const loadingSelector = '.loading';
    const loadingBlockWaitTime = 200;
    await visit('/');
    click('.play-button');
    await waitFor(loadingSelector, loadingBlockWaitTime);

    assert.equal(this.element.querySelectorAll(loadingSelector).length, 1, 'should loading block');
  });
});
