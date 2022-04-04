import './InputComponent.css';

function InputComponent(props) {
  return (
    <form onSubmit={props.onSubmit}>
        <label>InputComponent</label>
        <input type="text" name="message"></input>
        <button type="submit">send</button>
    </form>
  );
}

export default InputComponent;
