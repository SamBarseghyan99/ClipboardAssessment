const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidateId;

  if (event) {
    if (event.partitionKey) {
      candidateId =  typeof event.partitionKey === 'string' ? event.partitionKey : JSON.stringify(candidateId);
    } else {
      candidateId = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    }
  } else {
    candidateId = TRIVIAL_PARTITION_KEY;
  }

  if (candidateId.length > MAX_PARTITION_KEY_LENGTH) candidateId = crypto.createHash("sha3-512").update(candidateId).digest("hex");
  
  return candidateId;
};