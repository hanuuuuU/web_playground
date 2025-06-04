export default function CaptionImage(props) {
  return (
    <div>
      <div style={{ width: 300, height: 200 }}>
        <img
          src={props.imgUrl}
          alt={props.caption}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <p>{props.caption}</p>
    </div>
  );
}
