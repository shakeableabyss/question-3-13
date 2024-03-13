// Write your tests here!
/*When encoding, it translates the letters i and j to 42.

  When decoding, it translates 42 to (i/j).

  It ignores capital letters. (For example, the results of A Message and a message should be the same.)

  It maintains spaces in the message, before and after encoding or decoding. 
  */

//const expect = require("chai").expect;
//const polybius = require("../src/polybius");

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should encode i and j to 42", () => {
    
    const expected = 42;
    
    const input1 = [
        "i",
        true
      ];

      const actual1 = caesar(input1);

      expect(actual1).to.equal(expected);

      const input2 = [
        "j",
        true
      ];
      const actual2 = caesar(input2);

      expect(actual2).to.equal(expected);

  });

  it("should decode 42 to i/j", () => {
        
    const input = [
        42,
        false
    ];

    const expected = "i/j";
    const actual = caesar(input);

    expect(actual).to.equal(expected);

  });

  it("should ignore capital letters", () => {
    const input1 = [
        "TEST",
        true
      ];
      
    const input2 = [
        "test",
       true
    ];
      
    const actual1 = caesar(input1);
    const actual2 = caesar(input2);
    expect(actual1).to.equal(actual2);
  });

  it("should maintain spaces in the message", () => {
            
    const input1 = [
        " A A ",
        true
    ];

    const expected1 = " 11 11 ";
    const actual1 = caesar(input1);

    expect(actual1).to.equal(expected1);

    const input2 = [
        " 11 11 ",
        false
    ];

    const expected2 = " a a ";
    const actual2 = caesar(input2);

    expect(actual2).to.equal(expected2);

  });
});