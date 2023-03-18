const journeyButton = document.querySelector('a');
journeyButton.removeAttribute('href');
const resultDiv = document.querySelector('#result');
journeyButton.addEventListener('click', () => {
  fetch('https://journey-private.adobe.io/authoring/journeyVersions/', {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7',
      authorization: 'Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2NzkwNzMwOTQ4NThfMzJhNzc5ZDItODBmYi00NTEzLWE1OTgtOWJlZWJmMmNiMzg2X2V3MSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJ2b3lhZ2VyIiwidXNlcl9pZCI6Ijg0QUExRjgwNjMxQzMzREEwQTQ5NUM3REA3ZWViMjBmODYzMWMwY2I3NDk1YzA2LmUiLCJzdGF0ZSI6IntcInNlc3Npb25cIjpcImh0dHBzOi8vaW1zLW5hMS5hZG9iZWxvZ2luLmNvbS9pbXMvc2Vzc2lvbi92MS9abUpsT1RjMU16Y3ROV1kzTkMwMFl6UmxMV0prTW1JdE5qRXlOemM1TTJZek0yTXpMUzFETjBVd01UQTBNalUwT0RsRk4wVkRNRUUwUXprNFFUUkFZV1J2WW1VdVkyOXRcIn0iLCJhcyI6Imltcy1uYTEiLCJhYV9pZCI6IkM3RTAxMDQyNTQ4OUU3RUMwQTRDOThBNEBhZG9iZS5jb20iLCJjdHAiOjAsImZnIjoiWEpBWVBRQTZYUE43TVA0S0dNUVYzN1FBTEE9PT09PT0iLCJzaWQiOiIxNjc4Nzg5NjQ2NzYzXzc3MzJmZmVlLTI2YmItNGQ1MC05ZmEzLTBkNjA0YTM2MTQxZF91ZTEiLCJtb2kiOiJiMmUwNzliNiIsInBiYSI6Ik1lZFNlY05vRVYsTG93U2VjIiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwiY3JlYXRlZF9hdCI6IjE2NzkwNzMwOTQ4NTgiLCJzY29wZSI6IkFkb2JlSUQsb3BlbmlkLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCxyZWFkX29yZ2FuaXphdGlvbnMifQ.Nq9aDcT_W3gp6m0TcDwdEtcr0cqImgiiYj5L-VKKEr0o0d8QD0f11ng3fkR2H6ldeC4B0zoRwZAgaGnnwz9GKp2T1hMjMISPcs8q8oiBWkwwCFU8tE0bGONlMuPQda__33_B7Jfwb23hLM3i49akndkafqmqXWotEAuPHJCErEezToH0BFaHQ0zF1LBoyri_KoFhliHWv7KeIUicqmNofpgk2tfDPkcELRYdaFYonjw3BhQn0rMhmYKe19nBUaCbvAi_PiORUlAXJFrCakZF5-PdAmNLMx0XnO7T6Nat8mnXazDY_J3X2KezeJWJSUE8IVgNXKY0Q2-HK8MnQSB_gw',
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
