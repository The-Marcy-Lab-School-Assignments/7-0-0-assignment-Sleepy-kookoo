const Font = () => {
  const [font, setFont] = useState()

  return (
    <>

      <button onClick={() => setFont()}>+</button>
      <button onClick={() => setFont()}>-</button>

    </>
  )
}

export default Font
