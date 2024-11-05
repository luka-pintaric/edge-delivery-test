import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';


/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const [wrapper] = block.children;

  const content = `
  <div>
    <h1>Header</h1>
  </div>
  `;

  wrapper.innerHTML(content);
}
