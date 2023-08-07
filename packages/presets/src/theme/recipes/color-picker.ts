import { colorPickerAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(colorPickerAnatomy.build())

export const colorPicker = defineRecipe({
  className: 'colorPicker',
  description: 'A color picker style',
  base: parts({
    content: {
      borderRadius: 'lg',
      borderWidth: '1px',
      boxShadow: 'lg',
      padding: '4',
      maxW: '264px',
    },
    area: {
      height: '36',
      borderRadius: 'sm',
      overflow: 'hidden',
    },
    areaGradient: {
      height: '100%',
    },
    channelSliderTrack: {
      height: '2',
      borderRadius: 'full',
    },
    channelSliderTrackBg: {
      overflow: 'hidden',
      borderRadius: 'full',
    },
    swatchGroup: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '2',
      background: 'bg.default',
    },
    swatch: {
      height: '6',
      width: '6',
      borderRadius: 'full',
      boxShadow:
        '0 0 0 1px var(--colors-border-emphasized), 0 0 0 2px var(--colors-bg-default) inset',
    },
    areaThumb: {
      borderRadius: 'full',
      height: '2.5',
      width: '2.5',
      boxShadow: 'white 0px 0px 0px 2px, black 0px 0px 2px 1px',
      outline: 'none',
    },
    channelSliderThumb: {
      borderRadius: 'full',
      height: '2.5',
      width: '2.5',
      boxShadow: 'white 0px 0px 0px 2px, black 0px 0px 2px 1px',
      transform: 'translate(-50%, -50%)',
      zIndex: '1',
      outline: 'none',
    },
  }),
})