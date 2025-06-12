const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 for SUM(1.4, 4.5)', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 for SUM(1.2, 3.7)', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 for SUBTRACT(1.4, 4.5)', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 for SUBTRACT(1.4, 1.4)', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 for DIVIDE(1.4, 4.5)', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" for DIVIDE(1.4, 0)', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" for DIVIDE(1.4, 0.2)', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });
});
