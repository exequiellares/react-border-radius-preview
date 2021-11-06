import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { propertiesUpdated } from './../store'

const PropertiesForm = () => {
  const dispatch = useDispatch();
  const styleData = useSelector(state => state.borderStyle)

  const [width, setWidth] = useState(styleData.width)
  const [height, setHeight] = useState(styleData.height)
  const [radius, setRadius] = useState(styleData.radius)
  const [borderWidth, setBorderWidth] = useState(styleData.borderWidth)
  const [color, setColor] = useState(styleData.color)
  const [style, setStyle] = useState(styleData.style)

  const onWidthChange = e => {
    setWidth(e.target.value)
    updateProperties('width', e.target.value)
  }

  const onHeightChange = e => {
    setHeight(e.target.value)
    updateProperties('height', e.target.value)
  }

  const onRadiusChange = e => {
    setRadius(e.target.value)
    updateProperties('radius', e.target.value)
  }

  const obBorderWidthChange = e => {
    setBorderWidth(e.target.value)
    updateProperties('borderWidth', e.target.value)
  }

  const onColorChange = e => {
    setColor(e.target.value)
    updateProperties('color', e.target.value)
  }

  const updateProperties = (field, value) => {
    const data = {
      width,
      height,
      radius,
      borderWidth,
      color,
      style
    }
    if (field && value) {
      data[field] = value
    }
    dispatch(propertiesUpdated(data))
  }

  const colorsOptions = ['black', 'red', 'blue', 'green', 'pink', 'orange']

  const renderedColorOptions = colorsOptions.map(c => (
    <option value={c}>{c}</option>
  ))

  return (
    <form className="properties-form">
      <div className="field">
        <label htmlFor="-width">Width (px)</label>
        <input type="number" name="width" id="width" value={width} onChange={onWidthChange} />
      </div>
      <div className="field">
        <label htmlFor="-height">Height (px)</label>
        <input type="number" name="height" id="height" value={height} onChange={onHeightChange} />
      </div>
      <div className="field">
        <label htmlFor="radius">Radius</label>
        <input type="number" name="radius" id="radius" value={radius} onChange={onRadiusChange} />
      </div>
      <div className="field">
        <label htmlFor="radius">Border</label>
        <input type="number" name="border" id="border" value={borderWidth} onChange={obBorderWidthChange} />
      </div>
      <div className="field">
        <label htmlFor="color">Color</label>
        <select name="color" id="color" value={color} onChange={onColorChange}>
          {renderedColorOptions}
        </select>
      </div>
    </form>
  )
}

export default PropertiesForm;
