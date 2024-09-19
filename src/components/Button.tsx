interface ButtonProps {
  children: string;
  selectedIndex: number;
  cities: string[];
}

const Button = ({ children, selectedIndex, cities }: ButtonProps) => {
  const handleOnClick = () => {
    if (selectedIndex !== -1) {
      console.log(cities[selectedIndex]);
    }
  };
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
