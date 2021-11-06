import { useSelector } from 'react-redux'

const BorderRadiusPreview = () => {

  const styleData = useSelector(state => state.borderStyle)
  const style = {
    width: `${styleData.width}px`,
    height: `${styleData.height}px`,
    borderStyle: styleData.style,
    borderWidth: `${styleData.borderWidth}px`,
    borderColor: styleData.color,
    borderRadius: `${styleData.radius}px`,
  }

  return (
    <div className="box-container">
      <div style={style}></div>
    </div>
  )
}

export default BorderRadiusPreview;
