function ListGroup() {
  const items = ["Item1", "Item2", "Item3", "Item4"];

  return (
    <>
      <h1>Heading</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className='list-group-item'>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
