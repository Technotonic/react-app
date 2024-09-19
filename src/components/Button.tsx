interface ButtonProps {
  children: string;
  handleOnClick: () => void;
}

const Button = ({ children, handleOnClick }: ButtonProps) => {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleOnClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default Button;
