"use client";

import { useEffect, useState } from "react";
import { RibbitConnectSDK } from 'ribbit-connect-sdk';

export default function WalletConnectButton() {
  const [connector] = useState(() => new RibbitConnectSDK());
  const [account, setAccount] = useState("");

  useEffect(() => {
    connector.on('connect', (session) => {
      setAccount(session.accounts[0]);
    });

    return () => connector.disconnect();
  }, [connector]);

  const connect = async () => {
    console.log(await connector.connect({
      name: "Ribbit DApp",
      logo: "http://localhost:3000/logo.jpg",
      description: "Connect to Ribbit Wallet",
      url: window.location.href
    }));
  };

  return (
    <button onClick={connect}>
      {account ? `Connected: ${account}` : "Connect Wallet"}
    </button>
  );
}
