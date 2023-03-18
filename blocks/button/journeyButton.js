const journeyButton = document.querySelector('a');
journeyButton.removeAttribute('href');
const resultDiv = document.querySelector('#result');
journeyButton.addEventListener('click', () => {
  fetch('https://journey-private.adobe.io/authoring/journeyVersions/', {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7',
      authorization: 'token',
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
      const pre = document.createElement('pre');
      pre.innerText = JSON.stringify(json, null, 2);
      resultDiv.innerHTML = '';
      resultDiv.appendChild(pre);
    });
});
