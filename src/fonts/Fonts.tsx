import { Global } from '@emotion/react'
import Inter from './Inter-Regular.ttf'
import RecifeDisplay from './RecifeDisplay-Regular.ttf'
import RecifeDisplayItalic from './RecifeDisplay-RegularItalic.ttf'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: local('Inter'), url(${Inter}) format('truetype');
      }
      @font-face {
        font-family: 'RecifeDisplay';
        font-display: swap;
        src: local('RecifeDisplay'), url(${RecifeDisplay}) format('truetype');
      }
      @font-face {
        font-family: 'RecifeDisplay-Italic';
        font-display: swap;
        src: local('RecifeDisplay'), url(${RecifeDisplayItalic}) format('truetype');
      }
      `}
  />
)

