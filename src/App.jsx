import React, { useEffect } from "react"
import { Navbar, Carousel, Text, Contents, Footer, MyForm } from "./components"
import Modal from "./components/Modal";

function App() {

  useEffect(() => {
    document.title = 'Downpour Taxi';
  }, [])


  return (
    <>
      <Navbar />
      <div className="mt-16 z-20">
        <Carousel />
      </div>
      <div className="w-10/12 mx-auto">
        <Text />
        <Contents />
      </div>
      <MyForm />
      <Footer />
    </>
  )
}

export default App
