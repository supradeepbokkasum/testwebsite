// auth0-login.js
const login = () => {
  auth0.authorize();
};

const handleAuthentication = () => {
  auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      window.location.hash = '';
      localStorage.setItem('accessToken', authResult.accessToken);
      localStorage.setItem('idToken', authResult.idToken);
      fetchProfile(authResult.accessToken);
    } else if (err) {
      console.error(`Error: ${err.error}`);
    }
  });
};

const fetchProfile = (accessToken) => {
  auth0.client.userInfo(accessToken, (err, profile) => {
    if (profile) {
      document.getElementById('profile').innerText = JSON.stringify(profile);
    }
  });
};

document.addEventListener('DOMContentLoaded', handleAuthentication);
