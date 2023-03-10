function Welcome() {
  return <h1>Welcome to ReactJS</h1>;
}

export function Welcome2(props) {
  return <h4>{props.children}</h4>;
}

export default Welcome;
