import type { Extension } from "../App";
import RemoveBtn from "./RemoveBtn";
import { SwitchBtn } from "./SwitchBtn";



const ExtensionCard = (props: Extension) => {


  return (
    <div className='extensionCard'>
        <img src={props.logo}/>
        <h1 className='extensionLogo'>{props.name}</h1>
        <h3 className='extensionDescription'>{props.description}</h3>
        <RemoveBtn/>
        <SwitchBtn/>
    </div>
  )
}

export default ExtensionCard