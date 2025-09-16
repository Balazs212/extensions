import { useState, useEffect } from "react"
import ExtensionCard from "./components/ExtensionCard"
import { getExtensions } from "./services/ExtensionServices"
import Header from "./components/Header"
import AllBtn from "./components/AllBtn"
import ActiveBtn from "./components/ActiveBtn"
import InactiveBtn from "./components/InactiveBtn"

export type Extension = {
  logo: string,
  name: string,
  description: string,
  isActive: boolean
}

const App = () => {
  const [extensions, setExtensions] = useState<Extension[]>([])
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

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
          <button className="allBtn" onClick={() => setFilter("all")}>All</button>
          <button className="activeBtn" onClick={() => setFilter("active")}>Active</button>
          <button className="inactiveBtn" onClick={() => setFilter("inactive")}>Inactive</button>
        </div>
      </div>
      <section className="extensionsWrapper">
        {extensions
          .filter(ext => {
            if (filter === "all") return true;
            if (filter === "active") return ext.isActive;
            if (filter === "inactive") return !ext.isActive;
          })
          .map(extension => <ExtensionCard key={extension.name} {...extension} />)}
      </section>
    </main>
  )
}

export default App
