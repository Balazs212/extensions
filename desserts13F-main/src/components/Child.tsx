const Child = (props: {increaseCounter: () => void}) => {
  return (
    <div>
        <button onClick={props.increaseCounter}>Gyerek gomb +</button>
    </div>
  )
}

export default Child