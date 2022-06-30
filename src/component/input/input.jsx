export default function Input({ placeholder, value, callback, type = "text" }) {
  return (
    <div className="form-child">
      <input
        id="name"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={callback}
      />
    </div>
  );
}
