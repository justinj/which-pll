var assert = require("assert");
var whichPll = require("./index");

describe("whichPll", function() {
  it("returns '?' if it is not given a PLL", function() {
    assert.equal(whichPll("R"), "?");
  });

  it("returns '' if it is given the identity PLL", function() {
    assert.equal(whichPll(""), "");
    assert.equal(whichPll("U"), "");
    assert.equal(whichPll("U x"), "");
  });

  it ("returns the name of the PLL", function() {
    assert.equal(whichPll("R U R' U' R' F R2 U' R' U' R U R' F'"), "T");
    assert.equal(whichPll("R U R' U' R' F R2 U' R' U' R U R' F' U"), "T");
    assert.equal(whichPll("U R U R' U' R' F R2 U' R' U' R U R' F'"), "T");

    assert.equal(whichPll("R2 U2 R U2 R2 U2 R2 U2 R U2 R2"), "H");
    assert.equal(whichPll("R' U' R y R2 u R' U R U' R u' R2"), "Gb");
    assert.equal(whichPll("R2 U' R' U' R U R U R U' R"), "Ua");
  });
});
