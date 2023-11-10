import "./Header.css";

interface HeadingProps {
  text: string;
}

const Header = (props: HeadingProps) => {
  const { text } = props;

  return (
    <header className="header">
      <img src={"/logo.png"} alt="SMSio logo" />
      <h1>{text}</h1>
    </header>
  );
};

export default Header;
