import { tokenAJO } from './data.js';

const button = document.querySelector('a');
// remove hyperlink
button.removeAttribute('href');
button.addEventListener('click', () => {
  const requestBody = {
    name: 'sandbox-item',
    description: 'post-match-newsletter-20230427',
    async: true,
    visibility: 'GLOBAL',
    suppressFiles: false,
    destinationSandbox: {
      name: 'prod',
    },
    artifacts: [
      {
        id: '60e150d7-aa53-49d9-b65c-cf7902b3fdd7',
        type: 'JOURNEY',
      },
    ],
  };

  fetch('https://platform.adobe.io/data/foundation/exim/snapshots/copy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: tokenAJO,
      'x-api-key': 'platform_exim',
      'x-gw-ims-org-id': '908936ED5D35CC220A495CD4@AdobeOrg',
      'x-sandbox-name': 'prod',
    },
    body: JSON.stringify(requestBody),
  });
});
