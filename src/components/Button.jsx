function Button({ text, btnStyle, onClick }) {
  return (
    <button onClick={onClick} className={btnStyle}>
      {text}
    </button>
  );
}

export default Button;