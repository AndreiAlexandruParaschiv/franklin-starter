import {
  emailContent,
  headersEmailUpdate,
  urlEmailUpdate,
  urlVariantEtag,
  headersVariantEtag,
  headersEmailVariant,
  urlEmailVariant,
  dataRM,
  headersRename,
  urlRename,
  headersJourneyEmailID,
  getJourney,
  duplicateJourney,
  headersDuplicateJourney,
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
button.addEventListener('click', () => {
  fetch(duplicateJourney, {
    headers: headersDuplicateJourney,
    body: '{"origUID":"2e4c364e-eb0c-41db-8cfa-28987013304b","type":"journeyVersion"}',
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  }).then((response) => {
    if (response.ok) {
      resultDiv.innerText = 'The duplicate operation is Successful';
      console.log('Duplication completed');
    } else {
      resultDiv.innerText = 'The duplicate Failed';
      console.error('Failed to duplicate journey');
    }
  })
    .catch((error) => {
      console.error('Error duplicating journey:', error);
    });
});

const button1 = document.querySelector('a.button:any-link');
// remove hyperlink
button1.removeAttribute('href');
button1.addEventListener('click', () => {
  fetch(getJourney, {
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
      const firstResult = json.results[0];
      const steps4 = firstResult.steps[4];
      resultDiv.innerText = `
      JourneyId: ${firstResult.uid}
      EmailLabel: ${steps4.nodeName}
      EmailID: ${steps4.uid}`;
    });
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

const button3 = document.querySelector('a.button:any-link');
// remove hyperlink
button3.removeAttribute('href');
button3.addEventListener('click', () => {
  // Retrieve email variant
  fetch(urlEmailVariant, {
    headers: headersEmailVariant,
    method: 'GET',
  })
    .then((response) => response.json().then((json) => {
      const variant = json.channels.email.variants[0].variantId;
      resultDiv.innerText = `Variant: ${variant}`;
    }));
});

const button4 = document.querySelector('a.button:any-link');
// remove hyperlink
button4.removeAttribute('href');
button4.addEventListener('click', () => {
  // Retrieve email variant etag
  fetch(urlVariantEtag, {
    headers: headersVariantEtag,
    method: 'GET',
  })
    .then((response) => {
      const etag = response.headers.get('ETag');
      return response.json().then(() => {
        resultDiv.innerText = `ETag: ${etag}`;
      });
    });
});

const button5 = document.querySelector('a.button:any-link');
// remove hyperlink
button5.removeAttribute('href');
button5.addEventListener('click', () => {
  fetch(urlEmailUpdate, {
    method: 'PUT',
    headers: headersEmailUpdate,
    body: JSON.stringify(emailContent),
  })
    .then((response) => response.json())
  // eslint-disable-next-line no-shadow
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
