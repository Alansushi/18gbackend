export default function CardItemContent({ image, name, location, status }) {
  return (
    <div className="cardItemContent">
      <img alt="character img" src={image} />
      <p>{name}Hola?</p>
      <p>{location.name}</p>
      <p>{status}</p>
    </div>
  );
}
