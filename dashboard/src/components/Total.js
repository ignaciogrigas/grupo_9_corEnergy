import '../css/total.css';

function Total(props) {
  return (
    <div className="total">
        <ul>
            <li className="icon">{props.icon}</li>
            <li>{props.amount}</li>
        </ul><br></br>
        <h3>{props.title}</h3>
    </div>
  );
}

export default Total;