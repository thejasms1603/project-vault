import { useState } from "react"
import { generateMnemonic, validateMnemonic, mnemonicToSeedSync} from "bip39";
import Button from "./ui/button";
import SolanaWallet from "./SolanaWallet";
import EthWallet from "./EthWallet";


const WalletGenerator = () => {
    const [mnemonic, setMnemonic] = useState("")
  return (
    <div>
      <div className='flex flex-col py-3 gap-4 justify-center items-center'>
        <div>
          <span className='font-bold text-3xl'>WalletGenerator</span>
        </div>
        <button
          onClick={async function () {
            const mn = await generateMnemonic();
            setMnemonic(mn);
          }}
          className='border-2 border-red-500 font-bold px-3 py-2'
        >
          Create Seed Phrase
        </button>

        <textarea
          className='border-2 border-red-500 w-full h-20'
          value={mnemonic}
        ></textarea>
      </div>
      <SolanaWallet mnemonic={mnemonic} />
      <EthWallet mnemonic={mnemonic} />
    </div>
  );
}

export default WalletGenerator