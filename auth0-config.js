// auth0-config.js
const auth0 = new auth0.WebAuth({
  domain: 'supra.au.auth0.com',
  clientID: 'AUdrKtndM8XcJ1kUCgySl85MkaO1wV4K',
  redirectUri: window.location.origin,
  responseType: 'token id_token',
  scope: 'openid profile email'
});
