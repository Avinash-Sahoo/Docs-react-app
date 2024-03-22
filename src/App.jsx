import React from "react"
import Foreground from "./component/Foreground"
import Background from "./component/Background"

function App() {

  return (
    <>
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
    </div>



    </>
  )
}

export default App
