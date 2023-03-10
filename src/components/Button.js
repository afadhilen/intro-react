function Button(props) {
  const clickScroll = () => {
    const element = document.getElementById("todo");
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };
  return (
    <button className="btn" onClick={clickScroll}>
      {props.children}
    </button>
  );
}

export default Button;
