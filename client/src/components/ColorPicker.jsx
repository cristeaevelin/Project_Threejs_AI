import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div>
      <SketchPicker
      color={snap.color}
      disableAlpha
      // presetColors={[ // you can set the colors

      // ]}
      onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker