var Cubid = require("cubid");

var aufs = ["", "U", "U2", "U'"];
var justNeedsAUF = function(cube) {
  for (var i = 0; i < aufs.length; i++) {
    if (cube.apply(aufs[i]).isSolved()) {
      return true;
    }
  }
  return false;
};

// Note these are the *inverses*
var pllInverses = {
  "": "",
  "Aa": "R' F R' B2 R F' R' B2 R2",
  "Ab": "R' F R' B2 R F' R' B2 R2",
  "E": "R' U L' D2 L U' R L' U R' D2 R U' L",
  "F": "R' U R U' R2 F' U' F U R F R' F' R2 U'",
  "Ga": "R' U' R B2 D L' U L U' L D' B2",
  "Gb": "R2 U (R' U R' U') R U' R2 D U' R' U R D'",
  "Gc": "L U2 L' U F' L' U' L U L F U L' U' L' U L",
  "Gd": "L' U' L U L U' F' L' U' L' U L F U' L U2 L'",
  "H": "M2 U M2 U2 M2 U M2",
  "Ja": "B' U F' U2 B U' B' U2 F B",
  "Jb": "B U' F U2 B' U B U2 F' B'",
  "Na": "L U' R U2 L' U R' L U' R U2 L' U R'",
  "Nb": "R' U L' U2 R U' L R' U L' U2 R U' L",
  "Ra": "R U2 R' U2 R B' R' U' R U R B R2 U",
  "Rb": "R' U2 R U2 R' F R U R' U' R' F' R2' U'",
  "T": "R U R' U' R' F R2 U' R' U' R U R' F'",
  "Ua": "R' U R' U' R' U' R' U R U R2",
  "Ub": "R2 U' R' U' R U R U R U' R",
  "V": "R' U R' U' B' R' B2 U' B' U B' R B R",
  "Y": "F R U' R' U' R U R' F' R U R' U' R' F R F'",
  "Z": "M2 U M2 U M' U2 M2 U2 M' U2",
};
var pllNames = Object.keys(pllInverses);

var whichPll = function(alg) {
  var cube = new Cubid("");
  var preAufdCube;
  var plldCube;
  var postAufdCube;
  for (var preAuf = 0; preAuf < aufs.length; preAuf++) {
    preAufdCube = cube.apply(aufs[preAuf]);
    for (var pll = 0; pll < pllNames.length; pll++) {
      plldCube = preAufdCube.apply(pllInverses[pllNames[pll]]);
      for (var postAuf = 0; postAuf < aufs.length; postAuf++) {
        postAufdCube = plldCube.apply(aufs[postAuf]);
        if (postAufdCube.apply(alg).isSolved()) {
          return pllNames[pll];
        }
      }
    }
  }
  return "?";
};

module.exports = whichPll;
