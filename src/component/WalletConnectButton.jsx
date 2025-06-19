"use client";

import { useState } from "react";
import { RibbitWalletConnect } from 'ribbit-wallet-connect';

export default function WalletConnectButton() {
    const [connector] = useState(() => new RibbitWalletConnect());

    const connectToWallet = async () => {
        // Get the base URL of the website
        const baseUrl = window.location.origin;
        try {
            const sessionId = await connector.connect({
                name: "Ribbit DApp",
                logo: baseUrl + "/logo.jpg",
                description: "Connect to Ribbit Wallet",
                url: baseUrl
            });
            console.log('Connected with session:', sessionId);
        } catch (error) {
            console.error('Connection failed:', error);
        }
    };

    return (
        <button onClick={connectToWallet}>Connect Wallet</button>
    );
}
