/**
 * FontAwesome icon set component.
 * Usage: <FontAwesome name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from './lib/create-icon-set';
import glyphMap from './glyphmaps/SC-font.json';

const iconSet = createIconSet(glyphMap, 'sc-font', 'sc-font.ttf');

export default iconSet;

