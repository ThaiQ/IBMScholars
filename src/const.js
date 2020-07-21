const base_URL = process.env.NODE_ENV === 'production' ?
'https://ibm-scholar-server.us-south.cf.appdomain.cloud' : 'http://localhost:3001'

module.exports = {
    base_URL
  };