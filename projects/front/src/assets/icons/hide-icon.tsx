import React from 'react'
import { Path, Svg } from 'react-native-svg'

type IconType = {
  style?: object
}

export const HideIcon: React.FC<IconType> = ({ style }) => {
  return (
    <Svg width={20} height={14} viewBox='0 0 20 14' fill='none' style={style}>
      <Path
        d='M12.86 1.2v.002l-1.804 1.829a4.047 4.047 0 00-2.113 0 4.072 4.072 0 00-1.83 1.064A4.121 4.121 0 006.059 5.94a4.146 4.146 0 000 2.13l-2.815 2.827A11.398 11.398 0 010 7a11.259 11.259 0 015.41-5.185 11.134 11.134 0 017.44-.614h.01zm3.876 1.903A11.456 11.456 0 0120 7a11.259 11.259 0 01-5.42 5.193 11.134 11.134 0 01-7.451.607l1.805-1.83a4.049 4.049 0 003.942-1.065 4.12 4.12 0 001.056-1.845 4.146 4.146 0 000-2.13l2.81-2.823.005-.004h-.01z'
        fill='currentColor'
      />
      <Path
        d='M12.86 1.202l-1.804 1.829C12.85 3.5 13.5 4.5 13.932 5.93l2.81-2.824a.292.292 0 01-.006-.004h.01c-1.244-.602-2.162-1.6-3.887-1.901zM6.058 8.07l-2.815 2.827c1.41 1.027 2.246 1.478 3.886 1.902l1.805-1.83C7.5 10.5 6.5 9.905 6.058 8.07z'
        fill='currentColor'
      />
    </Svg>
  )
}

// export default ShowIcon