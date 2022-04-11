import './InputComponent.css';
import { useState, useContext } from 'react'
import { SocketContext } from '../../SocketContext';


function InputComponent(props) {
  const socket = useContext(SocketContext)
  const [val, setVal] = useState("");

  function sendMessage(e) {
    e.preventDefault()
      if (val) {
        socket.emit("chat message", val)
        console.log("submit eseguito: " + val)
        setVal("")
      }
  }

 function update(e){
  console.log(`${e.target.value} - ${val}`)
  setVal(e.target.value)
  console.log(`${e.target.value} - ${val}`)
 }


  return (
    <div className="center bottom">
      <form onSubmit={sendMessage}>
        <div className="d-flex justify-content-center">
          <input className="w-100" type="text" name="message" value={val} onChange={update}></input>
          <button className="btn btn-primary" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16" alt="send">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputComponent;
