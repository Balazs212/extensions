import type { Extension } from "../App"

const ExtensionCard = (props: Extension) => {


  return (
    <div className='extensionCard'>
        <img src={props.logo}/>
        <h1 className='extensionLogo'>{props.name}</h1>
        <h3 className='extensionDescription'>{props.description}</h3>
        <button>Remove</button>
    </div>
  )
}

export default ExtensionCard