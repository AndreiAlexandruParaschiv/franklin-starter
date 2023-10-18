
//  Sign In button
// document.addEventListener('DOMContentLoaded', function() {
//   let signInButton = document.querySelector('.button.primary');
//   signInButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     executeLogin();
//   });


window.console.log('File loaded: login.js');

function executeLogin() {
  window.adobeIMS.signIn();
  window.console.log('Executing login.js');

  // reader initial logged out experience
  window.console.log('Initializing IMS');
}

   window.adobeid = {
    client_id: 'ad13336dbc26475d887a7350c024a2a7',
    scope: 'AdobeID,openid',
    locale: 'en_US',
    environment: 'stg1',
    useLocalStorage: false,
    autoValidateToken: true,
    modalMode: false,
    onAccessToken: function (tokenInformation) {
      ims.token = tokenInformation.token;
      window.console.log('onAccessToken', tokenInformation);
    },
    onReady: async function(appState) {
      console.log('onReady', appState);
    },
  };