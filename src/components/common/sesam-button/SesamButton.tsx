import './style.css';

interface SesamButtonTypes {
  text: string;
  onClick: () => void;
}

const SesamButton = ({ text, onClick, ...rest }: SesamButtonTypes) => {
  return (
    <button className="SesamButton" onClick={onClick} {...rest}>
      {text}
    </button>
  );
};

export default SesamButton;
