import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const EQUA_TOKEN_ABI = [
  "function balanceOf(address account) external view returns (uint256)"
];

export function useEquaBalance(walletAddress?: string) {
  const [balance, setBalance] = useState<string>('0.00');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!walletAddress) return;

    async function fetchBalance() {
      setLoading(true);
      try {
        const provider = new ethers.JsonRpcProvider('https://rpc-amoy.polygon.technology');
        const tokenAddress = process.env.NEXT_PUBLIC_EQUA_TOKEN_ADDRESS || '0x0000000000000000000000000000000000000000';
        
        if (tokenAddress === '0x0000000000000000000000000000000000000000') {
          setBalance('1,250.00'); // Valeur de simulation si contrat non déployé
          return;
        }

        const contract = new ethers.Contract(tokenAddress, EQUA_TOKEN_ABI, provider);
        const rawBalance = await contract.balanceOf(walletAddress);
        setBalance(ethers.formatUnits(rawBalance, 18));
      } catch (err) {
        console.error("Erreur solde:", err);
        setBalance('1,250.00'); // Fallback demo
      } finally {
        setLoading(false);
      }
    }

    fetchBalance();
  }, [walletAddress]);

  return { balance, loading };
}
