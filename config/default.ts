export default {
  port: 1337,
  dbUrl: 'mongodb://localhost:27017/typescript-rest-api',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  privateKey: `-----BEGEN PRIVATE KEY-----\n
  12345678absd
  \n-----END PRIVATE KEY-----
  `,
  publicKey: `-----BEGEN PUBLIC KEY-----\n
  12345678ABSD
  \n-----END PUBLIC KEY-----
  `
};
