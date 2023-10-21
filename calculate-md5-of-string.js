const crypto = require('crypto');

const calculateMD5Hash = (inputString) => {
    return crypto.createHash('md5').update(inputString).digest('hex');
}

calculateMD5Hash(process.argv[2]);