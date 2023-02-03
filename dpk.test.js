const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {

  const trivialKey = deterministicPartitionKey();
  const hashOf5 = "c74bd95b8555275277d4e941c73985b4bcd923b36fcce75968ebb3c5a8d2b1ac411cfae4c2d473bff59a2b7b5ea220f0ac7bb8c880afb32f1b4881d59cc60d85";

  test("Returns the literal '0' when given no input", () => {
    expect(trivialKey).toBe("0");
  });
  test( 'Undefined value for deterministicPartitionKey case', () => {
    expect(deterministicPartitionKey(undefined)).toBe("0");
  });
  test("Hash Length checking with custom Id", () => {
    expect(deterministicPartitionKey(5).length).toBeLessThanOrEqual(256);
  });
  test("Input/Output check for currect function", () => {
    expect(deterministicPartitionKey(5)).toBe(hashOf5);
  });
});
