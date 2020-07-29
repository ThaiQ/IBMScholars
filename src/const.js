const base_URL = process.env.NODE_ENV === 'production' ?
  'https://ibm-scholars-server.us-south.cf.appdomain.cloud' : 'http://localhost:3001'

  const AutismColors = {
    pink : {
      dark : "#9c6176",
      normal : "#f9bad0",
      light : "#ffcaf7"
    },
    yellow : {
      dark : "#bdb34f",
      normal : "#fff698",
      light : "#fcf4b3"
    },
    blue : {
      dark : "rgb(4, 35, 134)",
      normal : "rgba(95, 182, 176, 0.938)",
      light : "rgb(209, 255, 252, 0.938)"
    }
  }
  
  const ADHDColors = {
    green : {
      dark : "#009423",
      normal : "#2bff00",
      light : "#60fc84"
    },
    blue : {
      dark : "#28008c",
      normal : "#4400ff",
      light : "rgb(209, 255, 252, 0.938)"
    }
  }

module.exports = {
  base_URL, AutismColors, ADHDColors
};
