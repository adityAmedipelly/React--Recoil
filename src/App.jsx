import { useState } from 'react'
import  './App.css'
import { RecoilRoot, atom,useRecoilValue, useRecoilState } from 'recoil'
import { CounterAtom } from './store/atoms/counter'

function App(){


  return(
    <RecoilRoot>
      <Counter/>
      </RecoilRoot>

  )

}

function Counter(){

  return <div>
    <CurrentCount  />
    <Decrease />
    <Increase />
  </div>
}

function CurrentCount(){
  const count = useRecoilValue(CounterAtom);
  return <div>
    {count}
  </div>
}

function Decrease(){
  const [count, setCount] = useRecoilState(CounterAtom);
  function decrease(){
     setCount( c => c - 1);
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Increase(){
  const [ count, setCount] = useRecoilState(CounterAtom);
  function increase(){
    setCount( c => c + 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}





export default App 