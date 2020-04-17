import { html, fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('GraniteClipboard', () => {
  it('has a default action "copy", debug false and text ""', async () => {
    const el = await fixture(html`
      <granite-clipboard></granite-clipboard>
    `);

    expect(el.action).to.equal('copy');
    expect(el.debug).to.false;
    expect(el.text).to.equal('');
  });

  it('copies to clipboard on click', async () => {
    const el = await fixture(html`
      <granite-clipboard text="Text to be copied" debug>
      </granite-clipboard>
    `);
    el.addEventListener('clipboard-copy', (evt) => {
      console.log('Copied');
      expect(evt.detail.text).to.equal('Text to be copied')
    })
    console.log(el.shadowRoot.querySelector('#container'))
    el.shadowRoot.querySelector('#container').click();

  });
/*
  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <granite-clipboard title="attribute title"></granite-clipboard>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <granite-clipboard></granite-clipboard>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
*/
});
