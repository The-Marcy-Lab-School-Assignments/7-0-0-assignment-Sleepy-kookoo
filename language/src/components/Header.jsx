import { useState } from "react";


const Header = () => {

  const [lang, setLang] = useState('Good morning')
  const [font, setFont] = useState(10)

  const increase = () => {
    setFont(font + 10)
  }

  const decrease = () => {
    setFont(font - 5)
  }

  return (
    <>

      <button onClick={() => setFont(increase)}>+</button>
      <button onClick={() => setFont(decrease)}>-</button>

      <h1 style={{ fontSize: `${font}px` }}>{lang}</h1>

      <button onClick={() => setLang("Good morning")}>English</button>
      <button onClick={() => setLang("Buenos Dias")}>Spanish</button>
      <button onClick={() => setLang("Bonjou!")}>HaitianCreole</button>
      <button onClick={() => setLang("Bom Dia")}>Portuguese</button>
      <button onClick={() => setLang("Bonjour!")}>French</button>
    </>
  )

};

export default Header
