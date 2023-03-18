// select button by hyperlink
const button = document.querySelector('a');
// remove hyperlink
button.removeAttribute('href');
// add eventlisterner on click
button.addEventListener('click', () => {
  fetch('https://journey-private.adobe.io/authoring/metadata/resource/duplicate', {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7',
      authorization: 'token',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      pragma: 'no-cache',
      'x-api-key': 'voyager_ui',
      'x-gw-ims-org-id': '908936ED5D35CC220A495CD4@AdobeOrg',
      'x-sandbox-name': 'prod',
    },
    body: '{"origUID":"2e4c364e-eb0c-41db-8cfa-28987013304b","type":"journeyVersion"}',
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  });
});
