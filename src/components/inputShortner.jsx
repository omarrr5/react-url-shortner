const InputShortner = () => {
  return (
    <div className="inputContainer">
      <h1>URL <span>Shortner</span></h1>
      <div>
        <input type="text" placeholder="Paste a link to shorten" />
        <button>Shorten</button>
      </div>
      <div className="footer">
        <p>Made By <span>Omar Khalaf</span></p>
    </div>
    </div>
  )
}

export default InputShortner
