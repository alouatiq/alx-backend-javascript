const request = require('request');
const { expect } = require('chai');

describe('API integration', () => {
  const URL = 'http://localhost:7865';

  it('GET /available_payments returns correct object and status', (done) => {
    request.get(`${URL}/available_payments`, { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  it('POST /login returns correct welcome message', (done) => {
    const payload = { userName: 'Betty' };
    request.post(
      {
        url: `${URL}/login`,
        json: true,
        body: payload,
        headers: { 'Content-Type': 'application/json' }
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
