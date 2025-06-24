/**
 * @file App.js
 * @author Richard Moore <https://github.com/RadBoogie>
 * @description Webpage for minting of Dummehs NFTs on the Tezos Blockchain.
 * @project Dummehs Tezos NFT Minting Page
 * @date Created June 2022
 * @license MIT License
 * @see https://blog.radboogie.com
 */

import king from './assets/images/king.png';
import dummehs from './assets/images/four-dummeh-montage.png';
import shiny_six from './assets/images/shiny-six-masthead-1000.png';
import twitter from './assets/images/twt-128.png';
import discord from './assets/images/discord-128.png';
import trms from './assets/images/trms-logo-400.png';
import tezos from './assets/images/TezosLogo_Horizontal_Black_500.png';

import MintButton from "./components/MintButton";

function App() {
    return (
        <>
            <div className="div-banner">
                <h1>DUMMEHS!</h1>
            </div>

            <div className="header2-section-xs d-block d-sm-none d-md-none d-lg-none d-xl-none">
                <div className="spacer50"></div>

                <h2>A COLLECTION OF 10,000 NFTs</h2>
            </div>

            <div className="header2-section-sm d-none d-sm-block d-md-none d-lg-none d-xl-none">
                <div className="spacer50"></div>

                <h2>A COLLECTION OF 10,000 NFTs</h2>
            </div>

            <div className="header2-section-md d-none d-sm-none d-md-block d-lg-none d-xl-none">
                <div className="spacer75"></div>

                <h2>A COLLECTION OF 10,000 NFTs</h2>
            </div>

            <div className="header2-section-lg d-none d-sm-none d-md-none d-lg-block d-xl-none">
                <div className="spacer100"></div>

                <h2>A COLLECTION OF 10,000 NFTs</h2>
            </div>

            <div className="header2-section-xl d-none d-sm-none d-md-none d-lg-none d-xl-block">
                <div className="spacer100"></div>

                <h2>A COLLECTION OF 10,000 NFTs</h2>
            </div>

            <div className="container">
                <div className="spacer100"></div>

                <div className="row">
                    <div className="col-md-12">

                        <h3>ABOUT...</h3>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <img className="img-fluid" src={dummehs} alt="Dummehs" />
                            </div>
                            <div className="col-12 col-lg-8">
                                <p><b>The Real Me Society</b> proudly presents <b>Dummehs!</b></p>

                                <p>An exciting and original collection of PFP NFTs available on the Tezos blockchain.</p>

                                <p>Each <b>Dummeh</b> is beautifully rendered as a stunning 3K image, each one has a unique personality.</p>

                                <p><b>Dummehs</b> are perfectly designed to be used as eye catching avatars online and on social media.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spacer100"></div>

                <div className="full-width-section-black">
                    <h2>Collect them for fun and  choose which <b>Dummeh</b> you use depending on your mood!</h2>
                </div>

                <div className="spacer150"></div>

                <div className="row">
                    <div className="col-md-12">

                        <h3>FIND THE REAL YOU...</h3>

                        <div className="row">
                            <p>Many billions of combinations, find the one that really matches you!</p>

                            <div className="col-12 col-lg-4">
                                <div className="text-center">
                                    <img className="img-fluid" src={king} alt="King Dummeh" />
                                </div>
                            </div>

                            <div className="spacer40 d-block d-sm-block d-md-block d-lg-none d-xl-none"></div>

                            <div className="col-12 col-lg-8">

                                <ul>
                                    <li>Over 190 different head decals</li>
                                    <li>Making over 250 Billion different combinations</li>                                    
                                    <li>Find a Dummeh that suits your personality</li>
                                    <li>Or choose a Dummeh that makes you laugh!</li>
                                    <li>Buy a Dummeh for a friend</li>
                                    <li>Find a Dummeh that matches your passions and hobbies</li>
                                    <li>Find a Dummeh with a rare trait</li>
                                    <li>Or if you&apos;re lucky you might find one of the elusive and exclusive Shiny Six!</li>
                                </ul>

                            </div>

                            <p>We have Footballers, Basketball Players, Soldiers, Vikings, Pirates, Cowboys, Magicians, Clowns, Kings and Queens plus many, many more!</p>

                            <p>Choose a different <b>Dummeh</b> depending on your mood.</p>

                            <p>Find a <b>Dummeh</b> that matches your personality, your profession or your hobbies. Or buy a <b>Dummeh</b> for a friend to celebrate a special occasion.</p>
                        </div>
                    </div>
                </div>

                <div className="spacer150"></div>

                <div className="row">
                    <div className="col-md-12">

                        <h3>THE SHINY SIX...</h3>

                        <p>Six lucky minters will receive one of the exclusive and elusive <b>Shiny Six</b>.</p>

                        <div className="text-center">
                            <img className="img-fluid" src={shiny_six} alt="The Shiny Six" />
                        </div>

                        <div className="spacer20"></div>

                        <p>These mega-rare chrome head and body finishes are not used on any other <b>Dummehs</b> in the collection.</p>

                        <p>All of the <b>Shiny Six</b> are available in the public mint and you could be lucky enough to mint one!</p>

                        <p>Each of the <b>Shiny Six</b> is literally one in ten thousand.</p>
                    </div>
                </div>

                <div className="spacer20"></div>

                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="full-width-section-black">
                            <h2>THERE CAN BE ONLY SIX!</h2>
                        </div>
                    </div>
                </div>

                <div className="spacer150"></div>



                <div className="row">
                    <div className="col-md-12">
                        <h3>MINT...</h3>


                        <div className="mint-panel">
                            <div className="text-center">
                            <div className="spacer40"></div>
                                <img className="img-fluid" src={tezos} alt="Tezos" /></div>

                            <div className="spacer75"></div>

                            <MintButton />

                            <div className="spacer40"></div>
                        </div>
                    </div>

                </div>

                <div className="spacer150"></div>

                <div className="row">
                    <div className="col-md-12">

                        <h3>ROADMAP...</h3>

                        <div className="timeline">
                            <div className="timeline-container left">
                                <div className="timeline-content">
                                    <h4>Foundation</h4>
                                    <p>December 2021 - The Real Me Society (TRMS) is founded, the first project is to be <b>Dummehs!</b></p>
                                    <p>TRMS social media, website &amp; Discord goes live.</p>
                                </div>
                            </div>

                            <div className="timeline-container right">
                                <div className="timeline-content">
                                    <h4>Creation</h4>
                                    <p>Q1 2022 - Dummehs artwork is created and perfected.</p>
                                    <p>Work begins on creation of smart contracts for the project.</p>
                                    <p>TRMS writes its own NFT generation application enabling deep curation of the NFT generation process.</p>
                                </div>
                            </div>

                            <div className="timeline-container left">
                                <div className="timeline-content">
                                    <h4>Mint</h4>
                                    <p>June 10th 2022 - The Dummehs! public mint begins.</p>
                                </div>
                            </div>

                            <div className="timeline-container right">
                                <div className="timeline-content">
                                    <h4>Giveaways</h4>
                                    <p>After the mint, airdrops will be issued to giveaway winners and contributors to TRMS.</p>
                                </div>
                            </div>

                            <div className="timeline-container left">
                                <div className="timeline-content">
                                    <h4>TRMS Art Foundation</h4>
                                    <p>10% of the revenue from minting Dummehs! will be used to start an NFT art foundation.</p>
                                    <p>TRMS will purchase NFT art from artists.</p>
                                    <p>Some of the purchased art will be airdropped as a gift to Dummehs! token holders.</p>
                                    <p>Some of the art will be sold to fund further NFT art purchases and to grow the artists secondary market.</p>
                                </div>
                            </div>

                            <div className="timeline-container right">
                                <div className="timeline-content">
                                    <h4>Secondary</h4>
                                    <p>At TRMS we are in it for the long haul. The work for us will really begin after minting, with much emphasis
                                        being placed on promoting the secondary market for Dummehs!</p>
                                    <p>The TRMS art foundation will allow us to not only give something back to the NFT art community, but also
                                        to bring more people together to make sure NFTs are "For the People".</p>
                                </div>
                            </div>

                            <div className="timeline-container left">
                                <div className="timeline-content">
                                    <h4>Future</h4>
                                    <p>With Dummehs! being a roaring success TRMS will embark on more exciting NFT based projects.</p>
                                    <p>The TRMS community will be encouraged to help us shape our future path.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="spacer150"></div>

                <div className="row">
                    <div className="col-md-12">

                        <h3>FAQ...</h3>

                        <div className="faq-panel">
                            <h4>When is the public mint?</h4>
                            <p>June 10th 2022.</p>
                        </div>

                        <div className="faq-panel">
                            <h4>How many Dummehs?</h4>
                            <p>There will be 10,000 Dummehs! in the collection.</p>
                        </div>

                        <div className="faq-panel">
                            <h4>What blockchain will they be on?</h4>
                            <p>Dummehs will be minting on the Tezos blockchain.</p>
                        </div>

                        <div className="faq-panel">
                            <h4>How much are they?</h4>
                            <p>The mint price is 1ꜩ + gas fees.</p>
                        </div>

                        <div className="faq-panel">
                            <h4>How do I get one?</h4>
                            <p>You will be able to mint your Dummeh! from this page when the mint is live.</p>
                            <p>The collection is available here <a href="https://objkt.com/explore/tokens/1?faContracts=KT1AwaMWjrL7qt1AhhwDF31ai9vVYSXvCbGi" target="_blank">https://objkt.com/collection/dummehs</a> for secondary sales.</p>
                        </div>

                        <div className="faq-panel">
                            <h4>Is there a whitelist?</h4>
                            <p>No, we’ll be going straight to public mint so that everyone can have the opportunity to buy one.</p>
                        </div>

                        <div className="faq-panel">
                            <h4>Is there a mint limit?</h4>
                            <p>No, you can mint as many or as few Dummehs as you want. The maximum per transaction is 200 Dummehs.</p>
                        </div>

                        <div className="faq-panel">
                            <h4>What is the contract address?</h4>
                            <p>The Dummehs FA2 contract is <b>T1AwaMWjrL7qt1AhhwDF31ai9vVYSXvCbGi</b></p>
                        </div>

                    </div>
                </div>

                <div className="spacer150"></div>

                <div className="row">
                    <div className="col-md-12">

                        <h3>SOCIAL...</h3>

                        <p>Catch up with the creator of #Dummehs <b>Richard Moore</b>  on Twitter&nbsp; 
                            <a href="https://twitter.com/SerfRadBoogie" target="_blank" rel="noreferrer">@SerfRadBoogie</a>.</p>

                        <div className="row">
                            <div className="text-center">
                                <button className="button">
                                    <a href="https://twitter.com/SerfRadBoogie" target="_blank" rel="noreferrer">
                                        <img src={twitter} alt="Social Media" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="spacer150"></div>
            </div>

            <div className="spacer150"></div>

        </>
    );
}

export default App;
