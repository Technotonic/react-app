interface AlertProps {
  heading: string;
  setHeding: (heading: string) => void;
}

const Alert = ({ heading, setHeding }: AlertProps) => {
  return (
    <div className="container">
      <div
        id="alert"
        className="alert alert-primary alert-dismissible fade show mt-3"
        role="alert"
      >
        <strong>{heading}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => setHeding("")}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
