import { useState, useEffect } from "react"
import ExtensionCard from "./components/ExtensionCard"
import { getExtensions } from "./services/ExtensionServices"
import Header from "./components/Header"

export type Extension = {
  logo: string,
  name: string,
  description: string,
  isActive: boolean
}

const App = () => {
  const [extensions, setExtensions] = useState<Extension[]>([])

  useEffect(()=>{
    getExtensions().then(data => {
      setExtensions(data)
    })
  }, [])

  return (
    <main>
      <Header/>
      <div className="navBarDiv">
        <h1>Extensions List</h1>
        <div className="btnDiv">
          <button className="allBtn">All</button>
          <button className="activeBtn">Active</button>
          <button className="inactiveBtn">Inactive</button>
        </div>
      </div>
      <section className="extensionsWrapper">
        { extensions.map(extension => <ExtensionCard {...extension} />) }
      </section>
    </main>
  )
}

export default App
