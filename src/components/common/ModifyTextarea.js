import './Input.scss';

const ModifyTextarea = ({ name, title, RequiredInput, SelectInput, value, onChange }) => {
  return (
    <div className="common-input-box">
      {title && (
        <label htmlFor={name}>
          {RequiredInput && <span className="req">{RequiredInput}</span>}
          {SelectInput && <span className="sel">{SelectInput}</span>}
          {title}
        </label>
      )}

      <textarea
        name={name}
        id={name}
        cols={10}
        rows={5}
        value={value ?? ''}
        onChange={onChange}
      />
    </div>
  );
};

export default ModifyTextarea;