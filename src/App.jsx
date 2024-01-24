import React, { useEffect } from 'react';
import getList from './components/service';
import List from './components/List';
import Loader from './components/Loader';
import Details from './components/Details';
import './App.css';


function App() {
  const [state, setState] = React.useState([]);
  const [item, setItem] = React.useState();
  const [load, setLoad] = React.useState(true);

  useEffect(() => {
    async function getResult() {
      const list = await getList();
      setState(list);
      setLoad(false);
    }
    getResult();
  }, []);

  async function handleClick(id) {
    if (!id) return;
    const details = await getList(id);
    setItem(details);
  };

  return (
    <main className='main'>
      <div className='wrapper'>
        {load ? <Loader/> : <List state={state} onChange={handleClick}/>}
        {item ? <Details item={item}/> : ''}
      </div>
    </main>
  );
};

export default App;
