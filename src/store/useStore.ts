import { create } from 'zustand';

export interface Wallet {
  name: string;
  balance: number;
  type: 'standard' | 'limit';
  limit?: number;
  day?: number;
}

export interface Transaction {
  id: number;
  date: number;
  desc: string;
  amount: number;
  type: 'expense' | 'income' | 'transfer';
  category: string;
  account: string;
}

interface ProfileData {
  wallets: Wallet[];
  transactions: Transaction[];
}

interface AppState {
  activeProfile: string;
  setProfile: (profileName: string) => void;
  profiles: Record<string, ProfileData>;
  addTransaction: (profile: string, tx: Transaction) => void;
  addWallet: (profile: string, wallet: Wallet) => void;
}

export const useStore = create<AppState>((set) => ({
  activeProfile: 'Main (Personal)',
  setProfile: (profileName) => set({ activeProfile: profileName }),
  profiles: {
    'Main (Personal)': {
      wallets: [{ name: 'Cash', balance: 0, type: 'standard' }, { name: 'Bank', balance: 0, type: 'standard' }],
      transactions: []
    },
    'Stall (Commercial)': {
      wallets: [{ name: 'Register', balance: 0, type: 'standard' }],
      transactions: []
    },
    'School (Fund)': {
      wallets: [{ name: 'Treasury', balance: 0, type: 'standard' }],
      transactions: []
    }
  },
  addTransaction: (profile, tx) => set((state) => {
    const pData = state.profiles[profile] || { wallets: [], transactions: [] };
    const updatedWallets = pData.wallets.map(w => {
      if (w.name === tx.account) {
        return { ...w, balance: tx.type === 'income' ? w.balance + tx.amount : w.balance - tx.amount };
      }
      return w;
    });
    return {
      profiles: {
        ...state.profiles,
        [profile]: {
          wallets: updatedWallets,
          transactions: [tx, ...pData.transactions]
        }
      }
    };
  }),
  addWallet: (profile, wallet) => set((state) => {
    const pData = state.profiles[profile] || { wallets: [], transactions: [] };
    return {
      profiles: {
        ...state.profiles,
        [profile]: {
          ...pData,
          wallets: [...pData.wallets, wallet]
        }
      }
    };
  })
}));
