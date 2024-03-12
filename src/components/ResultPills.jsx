export default function Pills({icon, title, value, pillstyle }) {
  return (
    <div className={`pills ${pillstyle}`}>
      <img src={icon} />
      <p>{title}</p>
      <div className="result">
        <span>{value}</span>
        <span>/100</span>
      </div>
    </div>
  );
}
