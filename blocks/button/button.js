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
      authorization: 'Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2NzkwNTgxNjY4ODlfNjhkZWYwMTktYzZiNi00YmYzLWFiNmMtMTNlMzkzM2NiMzg4X2V3MSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJ2b3lhZ2VyIiwidXNlcl9pZCI6Ijg0QUExRjgwNjMxQzMzREEwQTQ5NUM3REA3ZWViMjBmODYzMWMwY2I3NDk1YzA2LmUiLCJzdGF0ZSI6IntcInNlc3Npb25cIjpcImh0dHBzOi8vaW1zLW5hMS5hZG9iZWxvZ2luLmNvbS9pbXMvc2Vzc2lvbi92MS9abUpsT1RjMU16Y3ROV1kzTkMwMFl6UmxMV0prTW1JdE5qRXlOemM1TTJZek0yTXpMUzFETjBVd01UQTBNalUwT0RsRk4wVkRNRUUwUXprNFFUUkFZV1J2WW1VdVkyOXRcIn0iLCJhcyI6Imltcy1uYTEiLCJhYV9pZCI6IkM3RTAxMDQyNTQ4OUU3RUMwQTRDOThBNEBhZG9iZS5jb20iLCJjdHAiOjAsImZnIjoiWEpBSTVRQTZYUE43TVA0S0dNUVYzN1FBTEE9PT09PT0iLCJzaWQiOiIxNjc4Nzg5NjQ2NzYzXzc3MzJmZmVlLTI2YmItNGQ1MC05ZmEzLTBkNjA0YTM2MTQxZF91ZTEiLCJtb2kiOiI3MDNhNjA4ZiIsInBiYSI6Ik1lZFNlY05vRVYsTG93U2VjIiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwic2NvcGUiOiJBZG9iZUlELG9wZW5pZCxhZGRpdGlvbmFsX2luZm8ucHJvamVjdGVkUHJvZHVjdENvbnRleHQscmVhZF9vcmdhbml6YXRpb25zIiwiY3JlYXRlZF9hdCI6IjE2NzkwNTgxNjY4ODkifQ.TcywRkNqY_73pojGPCloi_1OHA1cSTxW3hymspoAX_7u-nDLlIjI9lF-8jPPFaYPg9zAwigHam4EF3oa5rwt-h2B0CxujryeqGwGeeoCqAG4ovs3uyODbgDrdEZBtMe5Epo_oZe_2uni5_9kEbA7Q9KDh1Zl09Ed_DtmwmfAGNcjPI3pFzhn980m1KUgMbvX7HmOPuEeekVCy620_JfEOvVu3qvoh2Brrje_ImgMSQ5ql5afBOOBY9iijtTCdzPORb5etgW7PcFDfCzQdLe8yoKLCrB7aNX7w-8-vmYfNhTH9tfhFilU1FT5RPyqJY2AjsXd6NTLumD07oPvRCePTA',
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
