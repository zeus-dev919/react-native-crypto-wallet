import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgFolderPlus(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 5h-8.5L9.8 2.4C9.6 2.2 9.3 2 9 2H4C2.3 2 1 3.3 1 5v14c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3zm1 14c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h4.5l1.7 2.6c.2.2.5.4.8.4h9c.6 0 1 .4 1 1v11zm-6-4c.6 0 1-.4 1-1s-.4-1-1-1h-2v-2c0-.6-.4-1-1-1s-1 .4-1 1v2H9c-.6 0-1 .4-1 1s.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1v-2h2z"
        clipRule="evenodd"
      />
      <Mask id="folder-plus_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 5h-8.5L9.8 2.4C9.6 2.2 9.3 2 9 2H4C2.3 2 1 3.3 1 5v14c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3zm1 14c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h4.5l1.7 2.6c.2.2.5.4.8.4h9c.6 0 1 .4 1 1v11zm-6-4c.6 0 1-.4 1-1s-.4-1-1-1h-2v-2c0-.6-.4-1-1-1s-1 .4-1 1v2H9c-.6 0-1 .4-1 1s.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1v-2h2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#folder-plus_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgFolderPlus;
