function PersonCard(props) {
  return (
    <>
      <h1>{props.info.lastName}, {props.info.firstName}</h1>
      <p>Age: {props.info.age}</p>
      <p>Hair Color: {props.info.hairColor}</p>
    </>
  )
}

export default PersonCard;