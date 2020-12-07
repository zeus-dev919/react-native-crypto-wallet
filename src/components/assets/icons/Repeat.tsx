import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgRepeat(props: SvgProps) {
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
        d="M2 9v2c0 .6.4 1 1 1s1-.4 1-1V9c0-1.7 1.3-3 3-3h11.6l-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l4-4c.05-.05.075-.1.1-.15.025-.05.05-.1.1-.15.1-.3.1-.6 0-.8 0-.1-.1-.2-.2-.3l-4-4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L18.6 4H7C4.2 4 2 6.2 2 9zm18 4c0-.6.4-1 1-1s1 .4 1 1v2c0 2.8-2.2 5-5 5H5.4l2.3 2.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-4-4a.523.523 0 01-.1-.15c-.025-.05-.05-.1-.1-.15-.1-.3-.1-.6 0-.8 0-.1.1-.2.2-.3l4-4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L5.4 18H17c1.7 0 3-1.3 3-3v-2z"
        clipRule="evenodd"
      />
      <Mask id="repeat_svg__a" width={20} height={24} x={2} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M2 9v2c0 .6.4 1 1 1s1-.4 1-1V9c0-1.7 1.3-3 3-3h11.6l-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l4-4c.05-.05.075-.1.1-.15.025-.05.05-.1.1-.15.1-.3.1-.6 0-.8 0-.1-.1-.2-.2-.3l-4-4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L18.6 4H7C4.2 4 2 6.2 2 9zm18 4c0-.6.4-1 1-1s1 .4 1 1v2c0 2.8-2.2 5-5 5H5.4l2.3 2.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-4-4a.523.523 0 01-.1-.15c-.025-.05-.05-.1-.1-.15-.1-.3-.1-.6 0-.8 0-.1.1-.2.2-.3l4-4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L5.4 18H17c1.7 0 3-1.3 3-3v-2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#repeat_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgRepeat;
