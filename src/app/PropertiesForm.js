import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { propertiesUpdated } from './../store'

const PropertiesForm = () => {
  const dispatch = useDispatch();
  const styleData = useSelector(state => state.borderStyle)

  const [width, setWidth] = useState(styleData.width)
  const [height, setHeight] = useState(styleData.height)
  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(styleData.borderTopLeftRadius)
  const [borderTopRightRadius, setBorderTopRightRadius] = useState(styleData.borderTopRightRadius)
  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(styleData.borderBottomLeftRadius)
  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(styleData.borderBottomRightRadius)
  const [borderWidth, setBorderWidth] = useState(styleData.borderWidth)
  const [color, setColor] = useState(styleData.color)
  const [style, setStyle] = useState(styleData.style)
  const [message, setMessage] = useState('')

  const onWidthChange = e => {
    setWidth(e.target.value)
    updateProperties('width', e.target.value)
  }

  const onHeightChange = e => {
    setHeight(e.target.value)
    updateProperties('height', e.target.value)
  }

  const onBorderTopLeftRadiusChange = e => {
    setBorderTopLeftRadius(e.target.value)
    updateProperties('borderTopLeftRadius', e.target.value)
  }

  const onBorderTopRightRadiusChange = e => {
    setBorderTopRightRadius(e.target.value)
    updateProperties('borderTopRightRadius', e.target.value)
  }

  const onBorderBottomLeftRadiusChange = e => {
    setBorderBottomLeftRadius(e.target.value)
    updateProperties('borderBottomLeftRadius', e.target.value)
  }

  const onBorderBottomRightRadiusChange = e => {
    setBorderBottomRightRadius(e.target.value)
    updateProperties('borderBottomRightRadius', e.target.value)
  }


  const obBorderWidthChange = e => {
    setBorderWidth(e.target.value)
    updateProperties('borderWidth', e.target.value)
  }

  const onColorChange = e => {
    setColor(e.target.value)
    updateProperties('color', e.target.value)
  }

  const copyToClipboard = e => {
    let copyText = document.getElementById('code')
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    setMessage('The code was copied to the clipboard!')
  }

  const updateProperties = (field, value) => {
    const data = {
      width,
      height,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
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

  const getCode = () => {
    return `width: ${width}px;
height: ${height}px;
border-color: ${color};
border-style: ${style};
border-width: ${borderWidth}px;
border-top-left-radius: ${borderTopLeftRadius}px;
border-top-right-radius: ${borderTopRightRadius}px;
border-bottom-left-radius: ${borderBottomLeftRadius}px;
border-bottom-right-radius: ${borderBottomRightRadius}px;`
  }

  return (
    <form className="properties-form">
      <div className="message">{message}</div>
      <div className="field">
        <label htmlFor="-width">Width (px)</label>
        <input type="number" name="width" id="width" value={width} onChange={onWidthChange} />
      </div>
      <div className="field">
        <label htmlFor="-height">Height (px)</label>
        <input type="number" name="height" id="height" value={height} onChange={onHeightChange} />
      </div>
      <div className="field">
        <label htmlFor="top-left-radius">Border Radius Top Left</label>
        <input type="number" name="top-left-radius" id="top-left-radius" value={borderTopLeftRadius} onChange={onBorderTopLeftRadiusChange} />
      </div>
      <div className="field">
        <label htmlFor="top-right-radius">Border Radius Top Right</label>
        <input type="number" name="top-right-radius" id="top-right-radius" value={borderTopRightRadius} onChange={onBorderTopRightRadiusChange} />
      </div>
      <div className="field">
        <label htmlFor="bottom-left-radius">Border Radius Bottom Left</label>
        <input type="number" name="bottom-left-radius" id="bottom-left-radius" value={borderBottomLeftRadius} onChange={onBorderBottomLeftRadiusChange} />
      </div>
      <div className="field">
        <label htmlFor="bottom-right-radius">Border Radius Bottom Right</label>
        <input type="number" name="bottom-right-radius" id="bottom-right-radius" value={borderBottomRightRadius} onChange={onBorderBottomRightRadiusChange} />
      </div>
      <div className="field">
        <label htmlFor="border">Border Width</label>
        <input type="number" name="border" id="border" value={borderWidth} onChange={obBorderWidthChange} />
      </div>
      <div className="field">
        <label htmlFor="color">Color</label>
        <select name="color" id="color" value={color} onChange={onColorChange}>
          {renderedColorOptions}
        </select>
      </div>
      <div className="field">
        <label htmlFor="code">Generated Code</label><br />
        <textarea name="code" id="code" disabled={true} value={getCode()} rows={10} cols={40}></textarea>
      </div>
      <div className="field">
        <button type="button" onClick={copyToClipboard}>Copy to Clipboard!</button>
      </div>
    </form>
  )
}

export default PropertiesForm;
