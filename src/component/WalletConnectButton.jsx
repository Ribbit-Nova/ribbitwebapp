"use client";

import { useState } from "react";
import { RibbitConnectSDK } from 'ribbit-connect-sdk';

export default function WalletConnectButton() {
    const [connector] = useState(() => new RibbitConnectSDK());

    const connectToWallet = async () => {
        // Get the base URL of the website
        const baseUrl = window.location.origin;
        console.log("Base URL:", baseUrl);
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
