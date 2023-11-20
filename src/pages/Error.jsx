import classes from './Error.module.css'

const Error = ({ title, message, onConfirm }) => {
  return (
    <div className={classes.error}>
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
