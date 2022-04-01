import './InputComponent.css';

function InputComponent(props) {
  return (
    <form onSubmit={props.pippo}>
        <label>InputComponent</label>
        <input type="text"></input>
        <button type="submit">send</button>
    </form>
  );
}

export default InputComponent;
