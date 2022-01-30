import './style.css';

interface SesamButtonTypes {
  text: string;
  onClick: () => void;
}

const SesamButton = (props: SesamButtonTypes) => {
  return (
    <button className="SesamButton" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default SesamButton;
