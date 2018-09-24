var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var CLIENT = 'AahAOEDfsTZ67VBTJhvPtVoVJvCAngQVBMfJ8sKFlk9tlrZWlekxzJPz6WFaiv7SVfvEAchk90A8EPB4';
var SECRET = 'EPrY-sRVJLxgUf9lOSgCFCKPpH_Odv94YZfjUviMR_fy8c2xdYiWFRueLwt8Bw2wlBnlxhYsjmwmlDca';
var PAYPAL_API = 'https://api.sandbox.paypal.com';

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.post('/create-payment/', function(req, res) {
console.log('1');
console.log(req);
  request.post(PAYPAL_API + '/v1/payments/payment', {
    auth: {
      user: CLIENT,
      pass: SECRET
    },
    body: {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      transactions: [{
        amount:{
          total: '30.00',
          currency: 'USD'
        }
      }],
      redirect_urls: {
        return_url: 'https://www.mysite.com',
        cancel_url: 'https://www.mysite.com'
      }
    },
    json: true
  }, function(err, response) {

    if (err) {
      return res.sendStatus(500);
    }
    res.json({
      id: response.body.id
    });

  });
});

app.post('/execute-payment/', function(req, res) {
  var paymentID = req.body.paymentID;
  var payerID = req.body.payerID;
  request.post(PAYPAL_API + '/v1/payments/payment/' + paymentID + '/execute',
    {
      auth:{
        user: CLIENT,
        pass: SECRET
      },
      body:{
        payer_id: payerID
      },
      json: true
    },
    function(err, response) {
      if (err) {
        return res.sendStatus(500);
      }
      res.json({
        status: 'success'
      });
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
