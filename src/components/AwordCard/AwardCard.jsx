import "./style.css"
// eslint-disable-next-line react/prop-types
const AwardCard = ({title,imgUrl,subtitle}) => {
  return (
    <div className="app__award">
      <div className="app__award-img">
        <img src={imgUrl}/>
      </div>
      <div className="app__award-info">
        <p className="headtext__cormorant"  style={{fontSize:"23px"}}>{title}</p>
        <p className="p__open-sans" style={{color:"#AAAAAA"}}>{subtitle}</p>
      </div>
    </div>
  )
}

export default AwardCard