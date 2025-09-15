const AddToCartBtn = (props:{
  count: number,
  increase: ()=>void,
  decrease: ()=>void,
}) => {
  
  return (
    <>
    {
        props.count == 0 ?
        <div className="addBtn" onClick={props.increase}>
            🛒 Add to Cart
        </div> :
        <div className="addBtn active">
            <button onClick={props.decrease}>-</button>
            {props.count}
            <button onClick={props.increase}>+</button>
        </div>
    }
    </>
  )
}

export default AddToCartBtn