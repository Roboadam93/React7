import { useState } from 'react'
import Panel from './components/Panel.jsx'

function App() {
  const initSzin = [
    { 
      id: 1, 
      szin: 'kék',
      hexakod: '#0000FF' 
    },
    { 
      id: 2,
      szin: 'piros',
      hexakod: '#FF0000'
    },
    { 
      id: 3, 
      szin: 'zöld', 
      hexakod: '#00FF00' 
    },
    { 
      id: 4, 
      szin: 'lila', 
      hexakod: '#800080' 
    },
  ]
  const [valasztottSzin, setValasztottSzin] = useState(initSzin[0].hexakod)

  return (
    <>
      <select value={valasztottSzin} onChange={(event) => setValasztottSzin(event.target.value)}>
        {initSzin.map((szin) => (
          <option key={szin.id} value={szin.hexakod}>
            {szin.szin}
          </option>
        ))}
      </select>

      <Panel szin={valasztottSzin} />
    </>
  )
}

export default App
