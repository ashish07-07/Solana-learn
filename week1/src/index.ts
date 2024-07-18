import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();
console.log(
  `the key pair it generated is ${keypair.publicKey} and the private key is ${keypair.secretKey}`
);
