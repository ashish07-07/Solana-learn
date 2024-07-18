"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const keypair = web3_js_1.Keypair.generate();
console.log(`the key pair it generated is ${keypair.publicKey} and the private key is ${keypair.secretKey}`);
console.log(typeof keypair);
