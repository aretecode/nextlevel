import { getResultJSON, getResultText } from './responseHelpers.js';

import firstOpenPort from './port.js';
import exit from './exit.js';

export default {
  getResultJSON: getResultJSON,
  getResultText: getResultText,
  firstOpenPort: firstOpenPort,
  exit: exit
};

export { getResultJSON, getResultText, firstOpenPort, exit };