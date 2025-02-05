import { mnemonicToSeed } from "bip39";
import { useState } from "react";
import {derivePath} from "ed25519-hd-key";
import {Keypair} from "@solana/web3.js"
import nacl from "tweetnacl";
import Button from "./ui/button";

const SolanaWallet = ({mnemonic}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);

    const AddWallet = async () =>{
        try {
            const seed = await mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const {key} = derivePath(path, seed.toString("hex"));
            const derivedSeed = Uint8Array.from(key);
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keyPair = Keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex+1);
            setPublicKeys([...publicKeys, keyPair.publicKey.toBase58()])
        }
        catch(error){
            console.error("Error while generating wallet, Please Try Again!", error);
        }
    }
  return (
    <div>
        <Button title="Add SOL Wallet" onClick={AddWallet}>Add Wallet</Button>
        {publicKeys.map((p,index)=>(
            <div key={index}>
                {p}
            </div>
        ))}
    </div>
  )
}

export default SolanaWallet