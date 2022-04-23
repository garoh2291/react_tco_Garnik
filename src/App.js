import { Stars } from './head/head';
import { InfoDiv } from './image-info/info';
import './styles/wrapper.css';
import { HeadText } from './text/text';

function App() {
  return (
    <div className='wrapper'>
      <Stars class = "small"/>
      <HeadText/>
      <InfoDiv />
    </div>

  );
}

export default App;
