const request = require('request');
const { expect } = require('chai');

describe('API integration /cart/:id', () => {
  const URL = 'http://localhost:7865';

  it('GET /cart/12 should return status 200 and correct body', (done) => {
    request.get(`${URL}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/abc should return 404', (done) => {
    request.get(`${URL}/cart/abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('GET /cart/123abc should return 404', (done) => {
    request.get(`${URL}/cart/123abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
