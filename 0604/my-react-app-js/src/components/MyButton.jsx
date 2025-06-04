export default function MyButton(props) {
  return (
    <div>
      <a href={props.clickUrl} target="_blank" style={{ color: props.color }}>
        {props.title}
      </a>
    </div>
  );
}
