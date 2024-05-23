// auth0-config.js
const auth0 = new auth0.WebAuth({
  domain: 'YOUR_AUTH0_DOMAIN',
  clientID: 'YOUR_AUTH0_CLIENT_ID',
  redirectUri: window.location.origin,
  responseType: 'token id_token',
  scope: 'openid profile email'
});
