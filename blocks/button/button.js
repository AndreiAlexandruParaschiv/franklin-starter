import {
  data, emailContent, tokenAJO, headersEmailUpdate, urlEmailUpdate,
} from './data.js';

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
      authorization: tokenAJO,
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

const resultDiv = document.createElement('pre');
resultDiv.id = 'result';
const body = document.querySelector('body');
body.appendChild(resultDiv);
const button1 = document.querySelector('a.button:any-link');
// remove hyperlink
button1.removeAttribute('href');
button1.addEventListener('click', () => {
  fetch('https://journey-private.adobe.io/authoring/journeyVersions/', {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7',
      authorization: tokenAJO,
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      pragma: 'no-cache',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'x-api-key': 'voyager_ui',
      'x-gw-ims-org-id': '908936ED5D35CC220A495CD4@AdobeOrg',
      'x-sandbox-name': 'prod',
      'x-vyg-query-filters': 'eyJmdW5jdGlvbiI6Im9yIiwidHlwZSI6ImZ1bmN0aW9uIiwiYXJncyI6W3siZnVuY3Rpb24iOiJjb250YWluIiwidHlwZSI6ImZ1bmN0aW9uIiwiYXJncyI6W3siZGF0YVR5cGUiOiJzdHJpbmciLCJ0eXBlIjoiY29uc3RhbnQiLCJ2YWx1ZSI6Im5hbWUifSx7ImRhdGFUeXBlIjoic3RyaW5nIiwidHlwZSI6ImNvbnN0YW50IiwidmFsdWUiOiJSZWFsTWFkcmlkIn0seyJkYXRhVHlwZSI6ImJvb2xlYW4iLCJ0eXBlIjoiY29uc3RhbnQiLCJ2YWx1ZSI6dHJ1ZX1dfSx7ImZ1bmN0aW9uIjoiY29udGFpbiIsInR5cGUiOiJmdW5jdGlvbiIsImFyZ3MiOlt7ImRhdGFUeXBlIjoic3RyaW5nIiwidHlwZSI6ImNvbnN0YW50IiwidmFsdWUiOiJkZXNjcmlwdGlvbiJ9LHsiZGF0YVR5cGUiOiJzdHJpbmciLCJ0eXBlIjoiY29uc3RhbnQiLCJ2YWx1ZSI6IlJlYWxNYWRyaWQifSx7ImRhdGFUeXBlIjoiYm9vbGVhbiIsInR5cGUiOiJjb25zdGFudCIsInZhbHVlIjp0cnVlfV19XX0=',
      'x-vyg-query-page': '0',
      'x-vyg-query-pagesize': '30',
      'x-vyg-query-sorts': 'W3siZGlyZWN0aW9uIjoiZGVzY2VuZGluZyIsImZpZWxkcyI6WyJtZXRhZGF0YS5jcmVhdGVkQXQiXX1d',
    },
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
  fetch('https://journey-private.adobe.io/authoring/journeyVersions/d678d8ba-15df-421e-a5e1-c0b35b894a8f', {
    method: 'PUT',
    headers: {
      Accept: '*/*',
      'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7',
      authorization: tokenAJO,
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Content-Type': 'application/json',
      DNT: '1',
      Pragma: 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'x-api-key': 'voyager_ui',
      'x-gw-ims-org-id': '908936ED5D35CC220A495CD4@AdobeOrg',
      'x-sandbox-name': 'prod',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json())
  // eslint-disable-next-line no-shadow
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

const button3 = document.querySelector('a.button:any-link');
// remove hyperlink
button3.removeAttribute('href');
button3.addEventListener('click', () => {
  // Retrieve email variant and etag
  fetch('https://platform.adobe.io/journey/authoring/message/inline-messages/122d5669-bbca-4f6d-8e82-22068b200eef', {
    headers: {
      accept: '*/*',
      Authorization: tokenAJO,
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      pragma: 'no-cache',
      'x-api-key': 'voyager',
      'x-gw-ims-org-id': '908936ED5D35CC220A495CD4@AdobeOrg',
      'x-sandbox-name': 'prod',
    },
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
  // Retrieve email variant and etag
  fetch('https://platform.adobe.io/journey/authoring/message/inline-messages/122d5669-bbca-4f6d-8e82-22068b200eef/email/variants/7b4a6bc1-3ff1-4e13-9f36-972fd55f0f8b', {
    headers: {
      accept: '*/*',
      Authorization: tokenAJO,
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      pragma: 'no-cache',
      'x-api-key': 'voyager',
      'x-gw-ims-org-id': '908936ED5D35CC220A495CD4@AdobeOrg',
      'x-sandbox-name': 'prod',
    },
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
