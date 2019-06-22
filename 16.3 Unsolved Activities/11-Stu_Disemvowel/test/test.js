var expect = require('chai').expect;
var disemvowel = require('../disemvowel');

describe("Disemvowel", function() {

  it("should remove vowels", function() {
    expect(disemvowel("this has no vowels")).to.equal("ths hs n vwls")
  }) 

  it("should ignore numbers", function() {
    expect(disemvowel("this has numbers 103")).to.equal("ths hs nmbrs 103");
  } )

  it("should not be null", function() {
    expect(disemvowel("")).to.equal("");
  })

  it("should not be all capitals", function() {
    expect(disemvowel("FART")).to.equal("FRT");
  })

  it("should cast numbers to strings", function() {
    expect(disemvowel(123)).to.equal("123");
  })




})