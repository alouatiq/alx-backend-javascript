const request = require('request');
const { expect } = require('chai');

describe('API integration', () => {
  const URL = 'http://localhost:7865';

  it('GET / should return status 200', (done) => {
    request.get(`${URL}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('GET / should return correct message', (done) => {
    request.get(`${URL}/`, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
