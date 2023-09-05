export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'http://localhost:3001/api/login',
  registerEndpoint: 'http://localhost:3001/api/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
