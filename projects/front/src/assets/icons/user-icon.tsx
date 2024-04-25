import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { IconType } from '../../utils/interface'

export const UserIcon: React.FC<IconType> = ({ style }) => {
  return (
    <Svg width={16} height={18} viewBox='0 0 16 18' fill='none' {...style}>
      <Path
        d='M13.6 10.5c.636 0 1.247.237 1.697.659.45.422.703.994.703 1.591v.536C16 15.97 12.632 18 8 18s-8-1.925-8-4.714v-.536c0-.597.253-1.169.703-1.591A2.484 2.484 0 012.4 10.5h11.2zM8 0c.63 0 1.255.116 1.837.343a4.833 4.833 0 011.557.975c.446.418.8.914 1.04 1.46.242.546.366 1.131.366 1.722s-.124 1.176-.365 1.722a4.493 4.493 0 01-1.04 1.46c-.447.418-.976.75-1.558.975A5.08 5.08 0 018 9a4.967 4.967 0 01-3.394-1.318C3.706 6.838 3.2 5.693 3.2 4.5c0-1.193.506-2.338 1.406-3.182A4.967 4.967 0 018 0z'
        fill='currentColor'
      />
    </Svg>
  )
}
