import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { IconType } from '../../utils/interface'

export const CarInfoIcon: React.FC<IconType> = ({ style }) => {
  return (
    <Svg width={19} height={18} viewBox='0 0 19 18' fill='none' {...style}>
      <Path
        d='M16.889 11h-2.111V9h2.11m1.056 7v2h-4.222v-2h1.056v-2h-1.056v-2h3.167v4m-.085-15a1.51 1.51 0 00-.58-.726A1.645 1.645 0 0015.305 0H3.694a1.645 1.645 0 00-.917.274c-.269.179-.472.433-.581.726L0 7v8c0 .265.111.52.31.707.197.188.466.293.746.293H2.11c.28 0 .549-.105.746-.293a.974.974 0 00.31-.707v-1h5.277c0-1.857.779-3.637 2.165-4.95C11.994 7.738 13.874 7 15.833 7A7.555 7.555 0 0119 7.68V7M3.694 11c-.313 0-.619-.088-.88-.253a1.52 1.52 0 01-.582-.673 1.427 1.427 0 01-.09-.867c.06-.29.211-.558.433-.768.221-.21.503-.352.81-.41.308-.058.626-.028.915.085.29.114.537.306.71.553.175.246.268.536.268.833 0 .398-.167.78-.464 1.06-.297.282-.7.44-1.12.44zM2.111 6l1.583-4.5h11.612L16.889 6H2.11z'
        fill='currentColor'
      />
    </Svg>
  )
}
