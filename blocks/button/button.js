import {
  emailContent,
  headersVariantEtag,
  headersEmailVariant,
  dataRM,
  headersRename,
  urlRename,
  headersJourneyEmailID,
  duplicateJourney,
  headersDuplicateJourney, tokenAJO,
} from './data.js';

const resultDiv = document.createElement('pre');
resultDiv.id = 'result';
const body = document.querySelector('body');
body.appendChild(resultDiv);

// select button by hyperlink
const button = document.querySelector('a');
// remove hyperlink
button.removeAttribute('href');
// add eventlisterner on click
let journeyId = null;
button.addEventListener('click', () => {
  fetch(duplicateJourney, {
    headers: headersDuplicateJourney,
    body: '{"origUID":"2e4c364e-eb0c-41db-8cfa-28987013304b","type":"journeyVersion"}',
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  }).then((response) => response.json())
    .then((json) => {
      journeyId = json.uid;
      const emailNode = json.createdElement.steps[4];
      resultDiv.innerText = `
      JourneyId Create: ${journeyId};
      EmailLabel: ${emailNode.nodeName}
      NodeEmailID: ${emailNode.uid}`;
      return Promise.resolve(journeyId);
    });
});

const button1 = document.querySelector('a.button:any-link');

// remove hyperlink
button1.removeAttribute('href');
let messageId = null;

function fetchMessageId() {
  return fetch(`https://journey-private.adobe.io/authoring/journeyVersions/${journeyId}`, {
    headers: headersJourneyEmailID,
    referrer: 'https://journeys.adobe.com/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: null,
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((json) => {
      messageId = json.result.steps[4].action.messageId;
      resultDiv.innerText = `
      EmailID: ${messageId}`;
      return Promise.resolve(messageId);
    });
}

button1.addEventListener('click', () => {
  fetchMessageId();
});

const button2 = document.querySelector('a.button:any-link');
// remove hyperlink
button2.removeAttribute('href');
button2.addEventListener('click', () => {
  // set the journeyId
  fetch(urlRename, {
    method: 'PUT',
    headers: headersRename,
    body: JSON.stringify(dataRM),
  }).then((response) => response.json())
  // eslint-disable-next-line no-shadow
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

let variantId = null;
const button3 = document.querySelector('a.button:any-link');
// remove hyperlink
button3.removeAttribute('href');

function fetchVariantId() {
  return fetch(`https://platform.adobe.io/journey/authoring/message/inline-messages/${messageId}`, {
    headers: headersEmailVariant,
    method: 'GET',
  })
    .then((response) => response.json().then((json) => {
      console.log(json);
      variantId = json.channels.email.variants[0].variantId;
      resultDiv.innerText = `Variant: ${variantId}`;
      return Promise.resolve(variantId);
    }));
}

button3.addEventListener('click', () => {
  // Retrieve email variant
  fetchVariantId();
});

const button4 = document.querySelector('a.button:any-link');
let etag = null;
// remove hyperlink
button4.removeAttribute('href');

function fetchEtag() {
  return fetch(`https://platform.adobe.io/journey/authoring/message/inline-messages/${messageId}/email/variants/${variantId}`, {
    headers: headersVariantEtag,
    method: 'GET',
  })
    .then((response) => {
      etag = response.headers.get('ETag');
      return response.json().then(() => {
        resultDiv.innerText = `ETag: ${etag}`;
        console.log(`ETag: ${etag}`);
        return Promise.resolve(etag);
      });
    });
}

button4.addEventListener('click', () => {
  // Retrieve email variant etag
  fetchEtag();
});

const button5 = document.querySelector('a.button:any-link');
// remove hyperlink
button5.removeAttribute('href');

function updateEmail() {
  return fetch(`https://platform.adobe.io/journey/authoring/message/inline-messages/${messageId}/email/variants/${variantId}`, {
    method: 'PUT',
    headers: {
      Accept: '*/*',
      accept: 'aplication/json',
      authorization: tokenAJO,
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'content-type': 'application/vnd.adobe.cjm.variant.v1+json',
      DNT: '1',
      Pragma: 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'x-api-key': 'aem-outbound-marketing',
      'x-gw-ims-org-id': '908936ED5D35CC220A495CD4@AdobeOrg',
      'x-sandbox-name': 'prod',
      'if-match': etag,
    },
    body: JSON.stringify(emailContent),
  })
    .then((response) => {
      if (response.ok) {
        resultDiv.innerText = 'Update completed';
        console.log('Update completed');
        return Promise.resolve('');
      }
      resultDiv.innerText = 'Update Failed';
      console.error('Update Failed');
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('');
    })
    .catch((error) => {
      console.error('Update Failed:', error);
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('');
    });
}

button5.addEventListener('click', () => {
  updateEmail();
});

const button6 = document.querySelector('a.button:any-link');
// remove hyperlink
button6.removeAttribute('href');
button6.addEventListener('click', () => {
  fetchMessageId().then(() => fetchVariantId()).then(() => fetchEtag()).then(() => updateEmail());
});
