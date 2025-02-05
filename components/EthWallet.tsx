import { mnemonicToSeed } from "bip39";
import { useState } from "react";
import {Wallet, HDNodeWallet} from 'ethers';
import Button from "./ui/button";

const EthWallet = ({mnemonic}) => {
    const [ currentIndex, setCurrentIndex] = useState(0);
    const[address, setAddress] = useState([]);
    const AddWallet = async() =>{
        try{
            const seed = await mnemonicToSeed(mnemonic);
            const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
            const hdNode = HDNodeWallet.fromSeed(seed);
            const child = hdNode.derivePath(derivationPath);
            const privateKey = child.privateKey;
            const wallet = new Wallet(privateKey);
            setCurrentIndex(currentIndex + 1);
            setAddress([...address, wallet.address]);
        } catch(err)
        {
            console.error("Error while generating while", err);
        }
    }
  return (
    <div>
        <Button onClick={AddWallet} title="ETH Wallet">
            ETH Wallet
        </Button>
        {address.map((p,index)=>(
            <div key={index}>
                ETH -{p}
            </div>
        )
        )}
    </div>
  )
}

export default EthWallet