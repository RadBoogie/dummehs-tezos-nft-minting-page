/**
 * @file wallet.js
 * @author Richard Moore <https://github.com/RadBoogie>
 * @description Utility functions for Tezos wallet integration using Taquito and Beacon Wallet.
 * @project Dummehs Tezos NFT Minting Page
 * @date Created June 2022
 * @license MIT License
 * @see https://blog.radboogie.com
 */

import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import { OpKind } from "@taquito/taquito";

import config from "../config";

const preferredNetwork = NetworkType.MAINNET; // "MAINNET";
const options = {
  name: "Dummehs",
  iconUrl: "https://tezostaquito.io/img/favicon.png",
  preferredNetwork: preferredNetwork,
};


const wallet = new BeaconWallet(options);

const getActiveAccount = async () => {
  return await wallet.client.getActiveAccount();
};

const connectWallet = async () => {
  let account = await wallet.client.getActiveAccount();

  if (!account) {
    await wallet.requestPermissions({
      network: { 
        type: preferredNetwork//,
        //name: "Local TestNet",
        //rpcUrl: rpcURL
       },
    });
    account = await wallet.client.getActiveAccount();
  }
  return { success: true, wallet: account.address };
};

const disconnectWallet = async () => {
  await wallet.disconnect();
  return { success: true, wallet: null };
};

const checkIfWalletConnected = async (wallet) => {
  try {
    const activeAccount = await wallet.client.getActiveAccount();
    if (!activeAccount) {
      await wallet.client.requestPermissions({
        type: { network: preferredNetwork },
      });
    }
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const changeName = async (name) => {
  // const wallet = new BeaconWallet(options);
  const response = await checkIfWalletConnected(wallet);

  if (response.success) {
    const tezos = new TezosToolkit(config.rpcURL);
    tezos.setWalletProvider(wallet);
    const contract = await tezos.wallet.at(config.contractAddress);
    const operation = await contract.methods.default(name).send();
    const result = await operation.confirmation();
    console.log(result);
  }
};

const fetchSaleStat = async () => {
  const tezos = new TezosToolkit(config.rpcURL);
  const contract = await tezos.contract.at(config.contractAddress);
  const storage = await contract.storage();
  const maxSupply = storage.maxSupply;
  const totalMinted = storage.mintIndex;
  return {
    maxSupply: maxSupply.toNumber(),
    totalMinted: totalMinted.toNumber(),
  };
};

const mintNFT = async (quantity) => {
  // const wallet = new BeaconWallet(options);
  const response = await checkIfWalletConnected(wallet);
  if (response.success) {
    const tezos = new TezosToolkit(config.rpcURL);
    tezos.setWalletProvider(wallet);

    const contract = await tezos.wallet.at(config.contractAddress);

    //TODO: We don't need microtransactions as we pass Qty to the contract...
    let microTransactions = [];

      microTransactions.push({
        kind: OpKind.TRANSACTION,
        ...contract.methods.mint(quantity).toTransferParams(),
        amount: quantity * config.price,
        mutez: false,
      });

    console.log("Sending txn...");

    try{
      const batch = await tezos.wallet.batch(microTransactions);
      const batchOp = await batch.send();

  
      console.log("Operation hash:", batchOp);

      let hash = batchOp.opHash;
      await batchOp.confirmation();

      return {
        success: true,
        hash: hash,
      };

    } catch(error) {
      return {
        error: error,
        success: false,
      }; 
    }


  } else {
    return {
      success: false,
    };
  }
};

export {
  connectWallet,
  disconnectWallet,
  getActiveAccount,
  checkIfWalletConnected,
  fetchSaleStat,
  mintNFT
};
