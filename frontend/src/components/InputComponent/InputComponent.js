import './InputComponent.css';

function InputComponent(props) {
  return (
    <div className="center">
      <form onSubmit={props.onSubmit}>
          <input type="text" name="message"></input>
          <button type="submit">send</button>
      </form>
    </div>
  );
}

export default InputComponent;
