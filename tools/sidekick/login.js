// import { AdobeIMS } from '@identity/imslib';

window.console.log('File loaded: login.js');
function executeLogin() {
  window.console.log('Executing login.js');
const ims = {}
  const imsConfig = {
    client_id: 'ad13336dbc26475d887a7350c024a2a7',
    scope: 'AdobeID,openid',
    locale: 'en_US',
    environment: 'stg1',
    useLocalStorage: false,
    autoValidateToken: true,
    modalMode: true,
    onAccessToken: function (tokenInformation) {
      ims.token = tokenInformation.token;
    },
    onReady: async function(appState) {
      console.log('onReady', appState);
      // if not logged in yet, wait for the modal to send us a message
      if (!adobeIms.getAccessToken()) {
        window.addEventListener('message', (ev) => {
            window.console.log('There is no acess token, waiting for message from modal', ev);
          if (ev.origin !== 'https://main--franklin-starter--andreialexandruparaschiv.hlx.page') {
            window.console.log('Wrong origin', ev.origin);
            return;
          }
          
          // Modal will send back a message on successful login
          // we reload the palette to the provided URL to force reading the auth cookie
          try {
            const url = new URL(ev.data);
            const usp = new URLSearchParams(url.hash.substring(1));
            const pathname = usp.get('old_hash');
            window.console.log('Reloaded palette', pathname);
            window.location.replace(pathname);
          } catch (err) {
            console.log(err);
          }
        })
        return adobeIms.signIn({}, {});
      }
        window.console.log('There is an access token, getting profile');
      ims.profile = await adobeIms.getProfile();

      // Pass the IMS auth down into the react app, and since we are not in the
      // unified shell context, the runtime doesn't exist
      // This loads the logged in experience now
      window.console.log('Loading app', ims);
    },
  };

  // reader initial logged out experience
    window.console.log('Initializing IMS');

  // const adobeIms = new AdobeIMS(imsConfig);  
  const adobeIms = window['adobeImsFactory'].createIMSLib(imsConfig);
  adobeIms.initialize(); 
}

// document.addEventListener('DOMContentLoaded', executeLogin);