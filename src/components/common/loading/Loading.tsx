import { LinearProgress } from '@mui/material';

const Loading = ({ text = '' }) => {
  return (
    <div className="App-body">
      <h2>{text}</h2>
      <br />
      <LinearProgress />
    </div>
  );
};

export default Loading;
