/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var expect = chai.expect;
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  it('Throws an error so it fails', function() {
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    var even = function(num){
      return num % 2 === 0;
    }
    return even(10) === true;
  });

  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
}); 

describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() { 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678970123') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
});

describe('Discover', function() {
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123412341234')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function () {
    expect(detectNetwork('6011123412341234123')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6441234123412341')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function () {
    expect(detectNetwork('6441234123412341231')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6451234123412341')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function () {
    expect(detectNetwork('6451234123412341231')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6461234123412341')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function () {
    expect(detectNetwork('6461234123412341231')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6471234123412341')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function () {
    expect(detectNetwork('6471234123412341231')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6481234123412341')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function () {
    expect(detectNetwork('6481234123412341231')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6491234123412341')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function () {
    expect(detectNetwork('6491234123412341231')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6512123412341234')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function () {
    expect(detectNetwork('6512123412341234123')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  it('has prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501812341234')).to.equal('Maestro');
  });
  it('has prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018123412343')).to.equal('Maestro');
  });
  it('has prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50181234123433')).to.equal('Maestro');
  });
  it('has prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501812341234123')).to.equal('Maestro');
  });
  it('has prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018123412341234')).to.equal('Maestro');
  });
  it('has prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50181234123412341')).to.equal('Maestro');
  });
  it('has prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501812341234123456')).to.equal('Maestro');
  });
  it('has prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018123412341234567')).to.equal('Maestro');
  });
    it('has prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502012341234')).to.equal('Maestro');
  });
  it('has prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020123412343')).to.equal('Maestro');
  });
  it('has prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50201234123433')).to.equal('Maestro');
  });
  it('has prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502012341234123')).to.equal('Maestro');
  });
  it('has prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020123412341234')).to.equal('Maestro');
  });
  it('has prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50201234123412341')).to.equal('Maestro');
  });
  it('has prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502012341234123456')).to.equal('Maestro');
  });
  it('has prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020123412341234567')).to.equal('Maestro');
  });
    it('has prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503812341234')).to.equal('Maestro');
  });
  it('has prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038123412343')).to.equal('Maestro');
  });
  it('has prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50381234123433')).to.equal('Maestro');
  });
  it('has prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503812341234123')).to.equal('Maestro');
  });
  it('has prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038123412341234')).to.equal('Maestro');
  });
  it('has prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50381234123412341')).to.equal('Maestro');
  });
  it('has prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503812341234123456')).to.equal('Maestro');
  });
  it('has prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038123412341234567')).to.equal('Maestro');
  });
  it('has prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630412341234')).to.equal('Maestro');
  });
  it('has prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304123412343')).to.equal('Maestro');
  });
  it('has prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63041234123433')).to.equal('Maestro');
  });
  it('has prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630412341234123')).to.equal('Maestro');
  });
  it('has prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304123412341234')).to.equal('Maestro');
  });
  it('has prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63041234123412341')).to.equal('Maestro');
  });
  it('has prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630412341234123456')).to.equal('Maestro');
  });
  it('has prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304123412341234567')).to.equal('Maestro');
  });
});

describe('China UnionPay', function() {
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       expect(detectNetwork(prefix.toString() + '1234567891')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
       expect(detectNetwork(prefix.toString() + '12345678912')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
       expect(detectNetwork(prefix.toString() + '123456789123')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
       expect(detectNetwork(prefix.toString() + '1234567891234')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       expect(detectNetwork(prefix.toString() + '1234567891234')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
       expect(detectNetwork(prefix.toString() + '12345678912345')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
       expect(detectNetwork(prefix.toString() + '123456789123456')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
       expect(detectNetwork(prefix.toString() + '1234567891234567')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       expect(detectNetwork(prefix.toString() + '123456789123')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
       expect(detectNetwork(prefix.toString() + '1234567891234')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
       expect(detectNetwork(prefix.toString() + '12345678912345')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
       expect(detectNetwork(prefix.toString() + '123456789123456')).to.equal('China UnionPay');
      });
    })(prefix)
  }
});

describe('Switch', function() {
  var prefix = [4903, 4905, 4911, 4936, 6333, 6759];
  var prefix2 = [564182, 633110];

  for (var i = 0; i <= 5; i++) {
    (function(i) {
      it('has a prefix of ' + prefix[i] + ' and a length of 16', function () {
        expect(detectNetwork(prefix[i].toString() + '123456789012')).to.equal('Switch');
      });

      it('has a prefix of ' + prefix[i] + ' and a length of 18', function () {
        expect(detectNetwork(prefix[i].toString() + '12345678901234')).to.equal('Switch');
      });

      it('has a prefix of ' + prefix[i] + ' and a length of 19', function () {
        expect(detectNetwork(prefix[i].toString() + '123456789012345')).to.equal('Switch');
      });
    })(i)
  }

  for (var i = 0; i <= 1; i++) {
    (function(i) {
      it('has a prefix of ' + prefix2[i] + ' and a length of 16', function () {
        expect(detectNetwork(prefix2[i].toString() + '1234567890')).to.equal('Switch');
      });

      it('has a prefix of ' + prefix2[i] + ' and a length of 18', function () {
        expect(detectNetwork(prefix2[i].toString() + '123456789012')).to.equal('Switch');
      });

      it('has a prefix of ' + prefix2[i] + ' and a length of 19', function () {
        expect(detectNetwork(prefix2[i].toString() + '1234567890123')).to.equal('Switch');
      });
    })(i)
  }
});


