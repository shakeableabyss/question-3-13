// Write your tests here!
/*It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.

  It ignores capital letters. (For example, the results of A Message and a message should be the same.)

  When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)

  It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding. 
  */

//const expect = require("chai").expect;
//const caesar = require("../src/caesar");

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift value is = 0, < -25, > 25, or nil", () => {
    
    // this will hold for each test
    const expected = false;
    
    const input1 = [
        "test",
        0
    ];
    
    const actual1 = caesar(input1);
    expect(actual1).to.equal(expected);
    
    const input2 = [
        "test",
        -26
    ];
    
    const actual2 = caesar(input2);
    expect(actual2).to.equal(expected);
    
    const input3 = [
        "test",
        26
    ];
    
    const actual3 = caesar(input3);
    expect(actual3).to.equal(expected);

    const input4 = [
        "test"
    ];
    
    const actual4 = caesar(input4);
    expect(actual4).to.equal(expected);
  });

  
  it("should ignore capital letters", () => {
      const input1 = [
        "TEST",
        3,
        true
      ];
      
      const input2 = [
        "test",
        3,
        true
      ];
      

      const actual1 = caesar(input1);
      const actual2 = caesar(input2);
      expect(actual1).to.equal(actual2);
    });


   it("should handle shifts that go past the end of the alphabet", () => {
      const input = [
        "z",
        3,
        true
      ];
      const expected = "c";
      const actual = caesar(input);
      expect(actual).to.equal(expected);
    });


   it("should maintain all nonalphabetic symbols in the message", () => {
      const input1 = [
        " 1234567890-=+/!@#$%^&*()[]{}",
        5,
        true
      ];
      const expected = " 1234567890-=+/!@#$%^&*()[]{}";
      const actual1 = caesar(input1);
      expect(actual1).to.equal(expected);

      const input2 = [
        " 1234567890-=+/!@#$%^&*()[]{}",
        5,
        false
      ];
      
      const actual2 = caesar(input2);
      expect(actual2).to.equal(expected);

    });
  });