"use client";
import { useState, useEffect } from "react";
import { useStore } from "../../store/useStore";
import { useRouter } from "next/navigation";

export default function AddTransactionPage() {
  const router = useRouter();
  const activeProfile = useStore(state => state.activeProfile);
  const profileData = useStore(state => state.profiles[activeProfile]);
  const addTransaction = useStore(state => state.addTransaction);

  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [wallet, setWallet] = useState("");

  // Sync the wallet selection safely once the profile data mounts
  useEffect(() => {
    if (profileData?.wallets && profileData.wallets.length > 0) {
      setWallet(profileData.wallets[0].name);
    }
  }, [profileData]);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !wallet) return;

    addTransaction(activeProfile, {
      id: Date.now(),
      date: Date.now(),
      desc: desc || "Transaction Entry",
      amount: parseFloat(amount),
      type: "expense",
      category: "General",
      account: wallet
    });
    router.push("/");
  };

  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <form onSubmit={handleConfirm}>
        <input 
          type="number" 
          placeholder="0" 
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
          style={{ fontSize: "3rem", textAlign: "center", width: "100%", border: "none", background: "transparent", color: "var(--text)", outline: "none", fontWeight: 800 }} 
          required 
        />
        <input 
          type="text" 
          placeholder="Note Description" 
          value={desc} 
          onChange={e => setDesc(e.target.value)} 
          style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--input-bg)", color: "var(--text)", marginTop: "15px", outline: "none" }} 
        />
        <select 
          value={wallet} 
          onChange={e => setWallet(e.target.value)} 
          style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--input-bg)", color: "var(--text)", marginTop: "15px", outline: "none" }}
        >
          {profileData?.wallets?.map((w, idx) => (
            <option key={idx} value={w.name}>{w.name}</option>
          ))}
        </select>
        <button 
          type="submit" 
          className="tab-add-btn" 
          style={{ width: "100%", borderRadius: "18px", marginTop: "20px", border: "none", height: "50px", fontWeight: 600, cursor: "pointer" }}
        >
          Confirm Entry
        </button>
      </form>
    </div>
  );
}
