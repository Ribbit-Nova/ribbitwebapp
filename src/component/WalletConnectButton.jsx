"use client";

import { useState } from "react";
import { RibbitWalletConnect } from 'ribbit-wallet-connect';

export default function WalletConnectButton() {
    const [ribbit] = useState(() => new RibbitWalletConnect());

    const connectToWallet = async () => {
        // Get the base URL of the website
        const baseUrl = window.location.origin;
        try {
            // const isActive = await ribbit.checkSessionStatus(sessionId);
            // if (!isActive) {
            const data = await ribbit.connect({
                name: "Ribbit DApp",
                logo: baseUrl + "/logo.jpg",
                description: "Connect to Ribbit Wallet",
                url: baseUrl
            });
            console.log('Connected with session data:', data);
            // }
            // else {
            //     console.log('Already connected with session:', sessionId);
            // }
        } catch (error) {
            console.error('Connection failed:', error);
        }
    };

    const sessionStatus = async () => {
        try {
            const sessionId = "434a5a31-165b-410f-8895-171d5aa34e3b";
            const isActive = await ribbit.checkSessionStatus(sessionId);
            console.log('Session status:', isActive);
            if (isActive) {
                console.log('Current session ID:', sessionId);
            } else {
                console.log('No active session found.');
            }
        } catch (error) {
            console.error('Failed to get session status:', error);
        }
    };

    const sendTransaction = async () => {
        try {
            const param = {
                to: "0xRecipientAddress", // Replace with the recipient's address
                value: "1000000000000000000", // Amount in wei (1 ETH)
                gas: "21000", // Gas limit
                gasPrice: "20000000000", // Gas price in wei (20 Gwei)
                data: "0x", // Optional data field
            };
            const sessionId = "434a5a31-165b-410f-8895-171d5aa34e3b";
            const result = await ribbit.sendTransaction(sessionId, {
                method: 'supra_send_transaction',
                params: param,
                chainId: '6' // Replace with the appropriate chain ID (e.g., Ethereum mainnet)
            });
            console.log('Transaction sent successfully:', result);
        } catch (error) {
            console.error('Failed to send transaction:', error);
        }
    };

    // Function to disconnect the wallet
    const disconnect = async () => {
        try {
            const data = await ribbit.disconnect("cc959f97-105b-4eec-b1d9-c9e858e6b518");
            console.log('Disconnected successfully', data);
        } catch (error) {
            console.error('Failed to disconnect:', error);
        }
    };

    return (
        <>
            <button onClick={connectToWallet}>Connect Wallet</button><br />
            <button onClick={disconnect}>Disconnect Wallet</button><br />
            <button onClick={sessionStatus}>Session Status</button><br />
            <button onClick={sendTransaction}>Send Transaction</button>
        </>
    );
}
