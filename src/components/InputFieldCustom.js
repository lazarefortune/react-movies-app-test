
function inputFieldCustom( props ) {
    const { label = "", value = "", onChange, type = "text", placeholder = "", error, id, required = false } = props;
  return (
      <div className="form__group">
            <label htmlFor={id}>{label}</label>
            <input type={type} className="form__control" id={id} placeholder={placeholder} value={value}  required={required} />
            {error && <span className="text-danger">{error}</span>}
      </div>
  );
}

export default inputFieldCustom;