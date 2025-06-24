/**
 * @file MintButton.js
 * @author Richard Moore <https://github.com/RadBoogie>
 * @description React component for minting NFTs on the Tezos blockchain.
 * @project Tezos Dummehs NFT Minting Page
 * @date Created June 2022
 * @license MIT License
 * @see https://blog.radboogie.com
 */

import "../index.css";
import {
    connectWallet,
    getActiveAccount,
    disconnectWallet,
    fetchSaleStat,
    mintNFT
} from "../utils/wallet";
import { useEffect, useState } from "react";


export default function MintButton() {
    const [stat, setStat] = useState({ maxSupply: 0, totalMinted: 0 });
    const [inputText, setInputText] = useState("1");
    const [wallet, setWallet] = useState(null);
    const [mintButtonDisabled, setMintButtonDisabled] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleConnectWallet = async () => {
        const { wallet } = await connectWallet();
        setWallet(wallet);
    };

    const handleDisconnectWallet = async () => {
        const { wallet } = await disconnectWallet();
        setWallet(wallet);
    };

    useEffect(() => {
        const func = async () => {
            const account = await getActiveAccount();
            if (account) {
                setWallet(account.address);
            }
        };
        func();

        async function fetchData() {
            const fetchedStat = await fetchSaleStat();
            console.log('Fetching ....');
            setStat(fetchedStat);
        }
        fetchData(); 
    }, []);

    const mintHandler = async (quantity) => {
        setMintButtonDisabled(true);

        setStatusMessage("Minting - do not refresh the page - please wait...");

        console.log(`Trying to mint ${quantity} NFTs`);
        const { success, error, hash } = await mintNFT(quantity);

        if (!success)
        {
            setStatusMessage(error.message);
            setMintButtonDisabled(false);
            return;
        }

        async function fetchData() {
            const fetchedStat = await fetchSaleStat();
            console.log('Fetching ....');
            setStat(fetchedStat);
        }
        fetchData(); 

        // If we get here we got the txn hash. Display it...
        setStatusMessage("Minting complete. Txn Hash: " + hash);
        setMintButtonDisabled(false);        
      };      

      function isNumeric(val) {
        return /^-?\d+$/.test(val);
        }

      const changeText = (e) => {
        setInputText(e.target.value);

        if (e.target.value <= 0)
        {
            setStatusMessage("QTY must be greater than zero!"); 
            setMintButtonDisabled(true);
            return;
        }

        if (e.target.value > 200)
        {
            setStatusMessage("QTY cannot be greater than 200 per transaction!"); 
            setMintButtonDisabled(true);
            return;
        }

        if (!isNumeric(e.target.value)) {
            setStatusMessage("QTY must be a valid whole number!"); 
            setMintButtonDisabled(true);
            return;            
        }

        setStatusMessage("");         
        setMintButtonDisabled(false);
      }

    return (
        <div className="text-center">

            <button className="wallet-button" onClick={wallet ? handleDisconnectWallet : handleConnectWallet} 
            title={wallet ? "Click to disconnect your wallet..." : "Click to connect your wallet to mint your NFTs..."} >

                {wallet
                    ? wallet.slice(0, 4) + "..." + wallet.slice(wallet.length - 4, wallet.length)
                    : "CONNECT WALLET"}
            </button>

            <div className="spacer50"></div>

            <div className="sold-amount">
                <p>{stat.totalMinted} of {stat.maxSupply} MINTED</p>
            </div>

            {wallet &&               
                (      
                    <>
                        <div className="spacer75"></div>                        
                            <div className="row mint mint-button-panel">
                                <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-2 col-lg-4">
                                    <label>QTY</label>
                                    <input value={inputText} onChange={changeText}></input>
                                </div>      

                                <div className="spacer30 d-block d-sm-block d-md-block d-lg-none d-xl-none"></div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <button className="mint-button" disabled={mintButtonDisabled} onClick={() => {
                                        mintHandler(inputText);
                                    }} >MINT!</button>
                                </div>       
                            </div>
                  
                        <div className="spacer10"></div>
                                    
                        <p>{statusMessage}</p>
           
                        <div className="spacer10"></div>

                        <div className="mint-info-panel">
                            <p>1ꜩ per Dummeh.</p>
                            <p>No mint limit.</p>
                            <p>Max 200 Dummehs per transaction.</p>
                        </div>
                    </>  
                )
            }

        </div>
    );
}