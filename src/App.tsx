import './App.css'
import { useToggleSingleButtonState } from './useToggleSingleButtonState'
import { Button } from './Button';

export default function App() {
  const {activeButton, setActiveButton} = useToggleSingleButtonState();
  return (
    <main>
      <h1>Toggle the one you like</h1>
      <section>
        {
          ["left", "center", "right"].map((buttonName) => {
            return (
              <Button key={buttonName} name={buttonName} activeButton={activeButton} onToggle={() => setActiveButton(buttonName)}/>
            )
          })
        }
      </section>
    </main>
  )
}