interface AlertProps {
  heading: string;
  setHeding: (heading: string) => void;
}

const Alert = ({ heading, setHeding }: AlertProps) => {
  return (
    <div
      id="alert"
      className="alert alert-warning alert-dismissible fade show mt-3"
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
  );
};

export default Alert;
