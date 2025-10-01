import { useState } from "react";
import "./App.css";
import { ArrowIcon } from "./ArrowIcon";

const faqs = [
    {
        question: "What is Web3?",
        answer: "Web3 is the next generation of the internet built on decentralized technologies like blockchain. Unlike Web2, where data is controlled by centralized platforms, Web3 empowers users with ownership, transparency, and peer-to-peer interactions."
    },
    {
        question: "What is Blockchain?",
        answer: "Blockchain is a decentralized digital ledger that records transactions across a network of computers. It ensures transparency, immutability, and security without relying on a central authority."
    },
    {
        question: "What is the difference between Web2 and Web3?",
        answer: "Web2 is the internet we use today, dominated by centralized platforms like Google, Facebook, and Amazon. Web3, on the other hand, shifts control to users through decentralization, blockchain, smart contracts, and token-based economies."
    },
    {
        question: "What are Smart Contracts?",
        answer: "Smart contracts are self-executing programs stored on a blockchain that automatically run when conditions are met. They remove the need for intermediaries in agreements and ensure trustless transactions."
    },
    {
        question: "What is a DAO?",
        answer: "A DAO (Decentralized Autonomous Organization) is a community-led organization governed by rules encoded in smart contracts. Decisions are made collectively by token holders, not by a centralized authority."
    },
    {
        question: "What is a Crypto Wallet?",
        answer: "A crypto wallet is a digital tool that allows users to store, send, and receive cryptocurrencies and interact with Web3 applications. Wallets can be custodial (managed by a third party) or non-custodial (fully controlled by the user)."
    },
    {
        question: "What is DeFi?",
        answer: "DeFi (Decentralized Finance) is a Web3 ecosystem of financial applications that run on blockchains. It allows users to lend, borrow, trade, and earn interest without relying on traditional banks."
    },
    {
        question: "What is an NFT?",
        answer: "NFT (Non-Fungible Token) is a unique digital asset stored on a blockchain. Unlike cryptocurrencies such as Bitcoin or Ethereum, NFTs represent ownership of specific items like art, music, or virtual real estate."
    },
    {
        question: "What is Gas Fee?",
        answer: "Gas fees are transaction costs paid to blockchain validators for processing and securing operations on the network. They vary depending on network activity and blockchain type."
    },
    {
        question: "What is the Metaverse?",
        answer: "The Metaverse is a virtual, immersive digital world powered by Web3 technologies where users can interact, socialize, work, and own assets like land or items using blockchain and NFTs."
    }
]

function App() {
    const [selectedItem, setSelectedItem] = useState(0);

    const toggleItem = (index) => {
        setSelectedItem(selectedItem === index ? null : index);
    };

    return (
        <div className="min-w-4xl bg-white p-5 space-y-6">
            <p className="font-extrabold text-[40px]">
                Frequently Asked Questions
            </p>
            <div className="max-w-3/4 mx-auto space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-[#F9F5F2] space-y-3 p-5">
                        <button
                            className="w-full flex justify-between items-center gap-3"
                            onClick={() => toggleItem(index)}
                        >
                            <span className="font-extrabold text-[30px]">
                                {faq.question}
                            </span>
                            <span className="w-[40px] h-[40px] flex items-center justify-center border rounded-full">
                                <ArrowIcon
                                    className={`transform transition-transform duration-200
                                        ${
                                            selectedItem === index
                                                ? "rotate-180"
                                                : ""
                                        }
                                    `}
                                />
                            </span>
                        </button>
                        <div
                            className={`transition-all duration-200 ease-in-out
                                ${
                                    selectedItem === index
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                }
                            `}
                        >
                            <p className="text-left">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
