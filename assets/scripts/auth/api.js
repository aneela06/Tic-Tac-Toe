'use strict';

const config = {
  apiOrigins: {
    production: 'http://aqueous-atoll-85096.herokuapp.com',
    development: 'http://tic-tac-toe.wdibos.com',
  },
};

// require('../config');

const app = require('../app');

// const getFormFields = require('../../../lib/get-form-fields.js');

//authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function (data) {
  console.log(data);
  return $.ajax({
    url: config.apiOrigins + '/sign-up/',
    method: 'POST',
    data,
  });
};

const signIn = function (data) {
  console.log(data);
  return $.ajax({
    url: config.apiOrigins + '/sign-in/',
    method: 'POST',
    data,
  });
};

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigins + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigins + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
