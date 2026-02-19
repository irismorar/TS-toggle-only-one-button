type DestructuredProps = {
  name: string;
  activeButton: string;
  onToggle: () => void;
}

export function Button({name, activeButton, onToggle}: DestructuredProps) {
  return (
    <button onClick={onToggle} style={{backgroundColor: name===activeButton? "violet" : "#444", color: name===activeButton? "#222" : "#aaa"}}>{name}</button>
  )
}