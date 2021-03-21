export default {
    API_URL: process.env.NODE_ENV === 'production' ? 'https://post-office-api.herokuapp.com' : 'http://localhost:3003'
}