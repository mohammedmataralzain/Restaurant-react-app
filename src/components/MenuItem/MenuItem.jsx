import "./style.css";
// eslint-disable-next-line react/prop-types
const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__MenuItem">
      <div className="app__MenuItem-top">
        <p className="p__cormorant">{title}</p>
        <div>
          <p></p>
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <p className="app__MenuItem-tags p__open-sans">{tags}</p>
    </div>
  );
};

export default MenuItem;
