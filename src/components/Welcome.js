function Welcome() {
  return <h1>Welcome to ReactJS</h1>;
}

export function Welcome2(props) {
  return <h6>{props.children}</h6>;
}

export default Welcome;
