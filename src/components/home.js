import '../styles/home.scss';

function Home() {
  const homeStyle = {
    margin: '0 1.5rem',
  };
  return (
    <div className="homeDiv" style={homeStyle}>
      <h4>Welcome to our page!</h4>
      <div className="paragraphs">
        <p>
          The Math Magician Calculator is a powerful tool that brings the world of
          mathematics to your fingertips.
          With its advanced features and intuitive interface,
          this calculator is designed to make complex calculations a breeze. Whether
          youre a student a professional,
          or simply someone who enjoys exploring the realm of numbers,
          the Math Magician Calculator has something to offer.
        </p>
        <p>
          Equipped with a wide range of functions, this calculator can handle everything from
          basic arithmetic to advanced trigonometry and calculus.
          It allows you to perform calculations with precision and efficiency,
          saving you time and effort.
          The Math Magician Calculator also supports graphing capabilities,
          enabling you to visualize mathematical concepts and analyze data
        </p>
      </div>
    </div>
  );
}

export default Home;
