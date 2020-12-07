import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgXSquare(props: SvgProps) {
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
        d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v14zm-6.6-7l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 9.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.3-2.3 2.3 2.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L13.4 12z"
        clipRule="evenodd"
      />
      <Mask id="x-square_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v14zm-6.6-7l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 9.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.3-2.3 2.3 2.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L13.4 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#x-square_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgXSquare;
