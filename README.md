# Dummehs Tezos NFT Minting Page

## Overview
This repository contains the source code for a web-based NFT minting page built for the Tezos blockchain, specifically for the "Dummehs" NFT collection. The application allows users to mint NFTs by interacting with a Tezos smart contract, leveraging the Tezos FA2 standard for non-fungible tokens. The frontend is built using modern web technologies, and the backend integrates with Tezos services for wallet connectivity and contract interactions.

- **Blockchain**: Tezos
- **Token Standard**: FA2 (TZIP-12)
- **Purpose**: Facilitate minting of "Dummehs" NFTs
- **Author**: Richard Moore

## Features
- **Wallet Integration**: Connects to Tezos wallets (e.g., Temple, Kukai) using Beacon for seamless user authentication and transaction signing.
- **NFT Minting**: Users can mint up to 200 NFTs.
- **Responsive UI**: A user-friendly interface designed for desktop and mobile, with smooth animations powered by libraries like GSAP.
- **Low-Cost Transactions**: Leverages Tezos' proof-of-stake blockchain for low gas fees and energy-efficient minting (#CleanNFTs).
- **Smart Contract Interaction**: Communicates with a deployed FA2 contract for minting, transferring, and managing NFTs.

## Prerequisites
To run this project locally or deploy it, ensure you have the following:
- **Node.js**: v16 or higher
- **Yarn**: v1.22.* or above
- **Tezos Wallet**: Temple, Kukai, or any Beacon-compatible wallet for testing
- **IPFS Service**: Pinata or similar for hosting NFT assets and metadata
- **Tezos Network Access**: Configured for mainnet, testnet (e.g., Ghostnet), or sandbox

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/RadBoogie/dummehs-tezos-nft-minting-page.git
   cd dummehs-tezos-nft-minting-page
