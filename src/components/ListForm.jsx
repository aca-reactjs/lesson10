function ListForm({ onSubmit }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(e.target.elements[0].value);

    e.target.elements[0].value = "";
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input name="item" type="text" />
    </form>
  );
}

export default ListForm;
