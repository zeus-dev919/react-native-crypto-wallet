import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgLifeBuoy(props: SvgProps) {
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
        d="M23 12c0 3.1-1.2 5.8-3.2 7.8S15 23 12 23c-3.1 0-5.8-1.2-7.8-3.2S1 15 1 12s1.2-5.8 3.2-7.8S9 1 12 1s5.8 1.2 7.8 3.2S23 9 23 12zm-6.9 2.7l2.9 2.9c1.3-1.5 2-3.5 2-5.6 0-2.1-.8-4.1-2-5.6l-2.8 2.8c.5.8.8 1.8.8 2.8 0 1-.3 2-.9 2.7zM9 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm5.7-4.1L17.6 5c-1.5-1.3-3.5-2-5.6-2-2.1 0-4.1.7-5.6 2l2.8 2.8C10 7.3 11 7 12 7c1 0 2 .3 2.7.9zM5 6.4l2.9 2.9C7.3 10 7 11 7 12c0 1 .3 2 .8 2.8L5 17.6c-1.2-1.5-2-3.5-2-5.6 0-2.1.7-4.1 2-5.6zm4.3 9.7L6.4 19c1.5 1.3 3.5 2 5.7 2.1 2.1 0 4.1-.8 5.6-2l-2.9-2.9c-.8.5-1.8.8-2.8.8-1 0-2-.3-2.7-.9z"
        clipRule="evenodd"
      />
      <Mask id="life-buoy_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 12c0 3.1-1.2 5.8-3.2 7.8S15 23 12 23c-3.1 0-5.8-1.2-7.8-3.2S1 15 1 12s1.2-5.8 3.2-7.8S9 1 12 1s5.8 1.2 7.8 3.2S23 9 23 12zm-6.9 2.7l2.9 2.9c1.3-1.5 2-3.5 2-5.6 0-2.1-.8-4.1-2-5.6l-2.8 2.8c.5.8.8 1.8.8 2.8 0 1-.3 2-.9 2.7zM9 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm5.7-4.1L17.6 5c-1.5-1.3-3.5-2-5.6-2-2.1 0-4.1.7-5.6 2l2.8 2.8C10 7.3 11 7 12 7c1 0 2 .3 2.7.9zM5 6.4l2.9 2.9C7.3 10 7 11 7 12c0 1 .3 2 .8 2.8L5 17.6c-1.2-1.5-2-3.5-2-5.6 0-2.1.7-4.1 2-5.6zm4.3 9.7L6.4 19c1.5 1.3 3.5 2 5.7 2.1 2.1 0 4.1-.8 5.6-2l-2.9-2.9c-.8.5-1.8.8-2.8.8-1 0-2-.3-2.7-.9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#life-buoy_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgLifeBuoy;
