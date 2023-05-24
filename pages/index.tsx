import type { NextPage } from "next"
import Image from "next/image"
import Header from "../components/header"
import Meta from "../components/meta"

const Home: NextPage = () => {
  return (
      <div>
          <Meta/>
          <Header/>
          <div className="mt-64 place-items-center justify-center md:grid mx-4 mb-16">
              <div className="md:flex gap-x-20">
                <div className="self-center mb-8">
                    <h1 className="text-4xl font-semibold">Hey, What's up?</h1>
                    <p className="text-xl mt-4">My name is Luander, i'm a Brazilian software enginner powered by coffee, code and Linux who likes to create open-source solutions to problems i find. Always working and having ideas. My brain don't stop (pls send help);</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Home
