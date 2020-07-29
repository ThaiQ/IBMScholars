const base_URL = process.env.NODE_ENV === 'production' ?
  'https://ibm-scholars-server.us-south.cf.appdomain.cloud' : 'http://localhost:3001'

  const AutismColors = {
    pink : {
      dark : "#9c6176",
      normal : "#f9bad0",
      light : "#ffe6f2"
    },
    yellow : {
      dark : "#bdb34f",
      normal : "#efd35a",
      light : "#fbfbd0",
    },
    blue : {
      dark : "#1f8aad",
      normal: "#9fdfdf",
      light : "#e6f9ff"
    }
  }
  
  const ADHDColors = {
    green : {
      dark : "#4d8644",
      normal : "#8cc28c",
      light : "#bddbbd"
    },
    blue : {
      dark : "#334d99",
      normal : "#668ccc",
      light : "#c6d8ec"
    },
    orange : {
      dark : ' #cc8033',
      normal : ' #ffbf80',
      light : '#ffe6cc',
    }
  }

module.exports = {
  base_URL, AutismColors, ADHDColors
};
