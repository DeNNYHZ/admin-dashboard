"use client";

import { useEffect, useState } from 'react';
import { STORAGE_KEYS, Transaction } from '@/lib/db';

export function useOfflineSync() {
  const [isOnline, setIsOnline] = useState(true);
  const [pendingTransactions, setPendingTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Check online status
    const handleOnline = () => {
      setIsOnline(true);
      syncTransactions();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    setIsOnline(navigator.onLine);

    // Load pending transactions from localStorage
    const stored = localStorage.getItem(STORAGE_KEYS.OFFLINE_TRANSACTIONS);
    if (stored) {
      setPendingTransactions(JSON.parse(stored));
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const syncTransactions = async () => {
    if (pendingTransactions.length === 0) return;

    try {
      // Here you would normally sync with your backend
      console.log('Syncing transactions:', pendingTransactions);
      
      // Clear pending transactions after successful sync
      localStorage.removeItem(STORAGE_KEYS.OFFLINE_TRANSACTIONS);
      setPendingTransactions([]);
    } catch (error) {
      console.error('Failed to sync transactions:', error);
    }
  };

  const addOfflineTransaction = (transaction: Transaction) => {
    const updatedTransactions = [...pendingTransactions, transaction];
    setPendingTransactions(updatedTransactions);
    localStorage.setItem(
      STORAGE_KEYS.OFFLINE_TRANSACTIONS,
      JSON.stringify(updatedTransactions)
    );
  };

  return {
    isOnline,
    pendingTransactions,
    addOfflineTransaction,
    syncTransactions,
  };
}