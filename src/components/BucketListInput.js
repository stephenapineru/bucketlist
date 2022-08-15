function BucketListInput(props){
    return (
    <form onSubmit={props.submitHandler}>
    <input 
      type="text" 
      name="newItem" 
      placeholder="enter new item" 
      onChange={props.changeHandler}
      value={props.newItem}
    />
    <button 
      type="submit" 
    >Save</button>
  </form>
)}

export default BucketListInput;