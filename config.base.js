module.exports = function(){
    switch(process.env.NODE_ENV){
        default:
        return {
            twitter: {
                consumer_key: 'lUtmeZwNADg5We9DE4pRQ',
                consumer_secret: 'ucGv29bwxsTHibyliqQsIU2dRGewjyHUtehFi4mLo',
                access_token_key: '9355572-uyLIM22QcA7DSr0H0uPxurok5Zhmt9kH0Bv39np1Es',
                access_token_secret: 'xOtIGR7hb6JsUAHNjCimoHyQhcC9Es0OhcigHi6N4xs'
              }
          },
          server: 'http://localhost:3000'

      };
  }
};