import {
  emailContent,
  headersVariantEtag,
  headersEmailVariant,
  headersRename,
  headersJourneyEmailID,
  duplicateJourney,
  headersDuplicateJourney, tokenAJO,
} from './data.js';

const resultDiv = document.createElement('pre');
resultDiv.id = 'result';
const body = document.querySelector('body');
body.appendChild(resultDiv);

let journeyId = null;
function createDuplicate() {
  return fetch(duplicateJourney, {
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
}

let messageId = null;
let bodyRename = null;
let journeyName = null;
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
      journeyName = JSON.stringify(json.result.name);
      bodyRename = JSON.stringify(json.result);
      messageId = json.result.steps[4].action.messageId;
      resultDiv.innerText = `
      journeyName: ${journeyName};
      EmailID: ${messageId}`;
      return Promise.resolve(messageId);
    });
}

let variantId = null;
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

let etag = null;
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
        resultDiv.innerText = 'Update completed!';
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

const button = document.querySelector('a');
// remove hyperlink
button.removeAttribute('href');
button.addEventListener('click', () => {
  createDuplicate().then(() => fetchMessageId()).then(() => fetchVariantId())
    .then(() => fetchEtag())
    .then(() => updateEmail());
});

const button1 = document.querySelector('a.button:any-link');
// remove hyperlink
button1.removeAttribute('href');

function renameJourney(newName) {
  // Convert the bodyRename JSON string back to an object
  const journey = JSON.parse(bodyRename);

  // Modify the name property of the object to the new name
  journey.name = newName;

  // Convert the modified object back to a JSON string
  const updatedBody = JSON.stringify(journey);

  return fetch(`https://journey-private.adobe.io/authoring/journeyVersions/${journeyId}`, {
    method: 'PUT',
    headers: headersRename,
    body: updatedBody,
  }).then((response) => {
    if (response.ok) {
      resultDiv.innerText = `Rename journey in ${newName} completed!`;
      return Promise.resolve('');
    }
    resultDiv.innerText = 'Renamed Failed';
    console.error('Renamed Failed');
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('');
  })
    .catch((error) => {
      console.error('Renamed Failed:', error);
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('');
    });
}

button1.addEventListener('click', () => {
  const newName = 'AndreiAPI';
  // set the journeyId
  fetchMessageId().then(() => renameJourney(newName));
});
