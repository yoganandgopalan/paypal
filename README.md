# paypal
paypal sample integration with nodejs


PayPal Task setup
================

PayPal task implemented using Node.js 

Instructions
------

Configuring
-----------
Please change your configuration in server.js find CLIENT and SECRET variables and change it
var CLIENT = 'XXX';
var SECRET = 'YYY';

Example changes in server.js:

```js
{
var CLIENT = 'AahAOEDfsTZ67VBTJhvPtVoVJvCAngQVBMfJ8sKFlk9tlrZWlekxzJPz6WFaiv7SVfvEAchk90A8EPB4';
var SECRET = 'EPrY-sRVJLxgUf9lOSgCFCKPpH_Odv94YZfjUviMR_fy8c2xdYiWFRueLwt8Bw2wlBnlxhYsjmwmlDca';
}
```

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:yoganandgopalan/paypal.git # or clone your own fork
cd paypal
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).


SandBox Test Account
-----------
email: yoganandtestapi@paypal.com
pass : paypa123@#$