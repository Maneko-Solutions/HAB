import React from 'react'
import { ClipPath, Defs, G, Path, Svg } from 'react-native-svg'
import { IconType } from '../../utils/interface'

export const AdminIcon: React.FC<IconType> = ({ style }) => {
  return (
    <Svg width={21} height={20} viewBox='0 0 21 20' fill='none' {...style}>
      <G clipPath='url(#clip0_1675_5934)' fill='currentColor'>
        <Path d='M8.656 8.228a3.756 3.756 0 110-7.512 3.756 3.756 0 010 7.512zm0-6.395a2.644 2.644 0 100 5.29 2.644 2.644 0 000-5.29zM9.622 17.6a1.19 1.19 0 01-.344-.933H2.722v-3.212a8.229 8.229 0 016.162-2.6h.4a1.222 1.222 0 01.344-1.027l.067-.061c-.261 0-.556-.034-.811-.034a9.15 9.15 0 00-7.162 3.19.555.555 0 00-.11.332v3.412a1.111 1.111 0 001.11 1.11h7.056l-.156-.177zM15.428 9.05z' />
        <Path d='M19.21 12.956l-1.11-.34a4.004 4.004 0 00-.323-.783l.556-1.033a.211.211 0 00-.055-.244l-.806-.806a.2.2 0 00-.245-.039l-1.022.556a3.97 3.97 0 00-.794-.34l-.34-1.11a.2.2 0 00-.2-.134h-1.138a.2.2 0 00-.194.145l-.34 1.111c-.277.08-.546.193-.8.333l-1.01-.555a.195.195 0 00-.24.039l-.821.8a.212.212 0 00-.034.244l.556 1.011c-.147.25-.265.517-.35.795l-1.111.333a.2.2 0 00-.145.194v1.14a.194.194 0 00.145.171l1.11.34c.083.272.195.535.334.783l-.556 1.06a.2.2 0 00.034.24l.805.805a.21.21 0 00.245.04l1.039-.556c.247.133.508.239.777.316l.334 1.111a.211.211 0 00.194.145h1.14a.205.205 0 00.194-.145l.338-1.138c.267-.078.524-.184.767-.317l1.05.555a.2.2 0 00.239-.038l.845-.756a.195.195 0 000-.222l-.556-1.045c.135-.245.243-.504.322-.772l1.111-.339a.2.2 0 00.145-.194V13.15a.2.2 0 00-.09-.194zm-4.905 2.6a1.855 1.855 0 11-.011-3.711 1.855 1.855 0 01.011 3.71z' />
      </G>
      <Defs>
        <ClipPath id='clip0_1675_5934'>
          <Path fill='#fff' transform='translate(.5)' d='M0 0H20V20H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
