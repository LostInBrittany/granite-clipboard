import { html, fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('GraniteClipboard', () => {
  it('has a default action "copy", debug false and text ""', async () => {
    const el = await fixture(html`
      <granite-clipboard>Hello test</granite-clipboard>
    `);

    expect(el.action).to.equal('copy');
    expect(el.debug).to.false;
    expect(el.text).to.equal('');
  });

  it('fixes wrong action values', async () => {
    const el = await fixture(html`
      <granite-clipboard>Hello test</granite-clipboard>
    `);
    el.action = 'copy';
    expect(el.action).to.equal('copy');
    el.action = 'paste';
    expect(el.action).to.equal('copy');
    el.action = '';
    expect(el.action).to.equal('copy');

  });

  it('copies to clipboard on click', async () => {
    const el = await fixture(html`
      <granite-clipboard text="Text to be copied">Hello test
      </granite-clipboard>
    `);
    el.addEventListener('clipboard-copy', (evt) => {
      console.log('SHIT',evt)
      expect(evt.detail.text).to.equal('Text to be copied')
    })    
    el.shadowRoot.querySelector('#container').click();

  });
});
