import './MessageComponent.css';

function MessageComponent(props) {
   
    return (
        <div className="center">
            <p className="alert alert-primary d-inline-block">{props.message}</p>
        </ div>
    );
  }
  
  export default MessageComponent