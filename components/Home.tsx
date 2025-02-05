"use client";
import { TextGenerateEffect } from "./ui/text-generate-efftect";
import WalletGenerator from "./WalletGenerator";

const words = `Welcome to the Project Vault`;

export function HomePage() {
  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center py-10">
      <TextGenerateEffect words={words} />
      </div>
      {/* <Signup/> */}
      <WalletGenerator />
    </div>
  )
}
