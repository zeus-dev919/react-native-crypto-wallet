import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCameraOff(props: SvgProps) {
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
        d="M6.7 5.3l15 15 2 2c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3L20.6 22H3c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h.6L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l5 5zm3 5.8l-.2.2c-.4.7-.6 1.5-.5 2.3.2.8.6 1.4 1.3 1.9.6.5 1.4.7 2.2.5.5-.1 1-.4 1.4-.7l-4.2-4.2zM3 20c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h2.6l2.7 2.7c-.2.2-.3.3-.4.5-.8 1.1-1 2.4-.8 3.7.2 1.3 1 2.5 2.1 3.2.8.6 1.8.9 2.8.9.3 0 .6 0 .9-.1.9-.2 1.7-.6 2.4-1.2l3.3 3.3H3zm21-2.7V8c0-1.7-1.3-3-3-3h-3.5l-1.7-2.6c-.2-.2-.5-.4-.8-.4H9c-.6 0-1 .4-1 1s.4 1 1 1h5.5l1.7 2.6c.2.2.5.4.8.4h4c.6 0 1 .4 1 1v9.3c0 .6.4 1 1 1s1-.4 1-1z"
        clipRule="evenodd"
      />
      <Mask id="camera-off_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.7 5.3l15 15 2 2c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3L20.6 22H3c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h.6L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l5 5zm3 5.8l-.2.2c-.4.7-.6 1.5-.5 2.3.2.8.6 1.4 1.3 1.9.6.5 1.4.7 2.2.5.5-.1 1-.4 1.4-.7l-4.2-4.2zM3 20c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h2.6l2.7 2.7c-.2.2-.3.3-.4.5-.8 1.1-1 2.4-.8 3.7.2 1.3 1 2.5 2.1 3.2.8.6 1.8.9 2.8.9.3 0 .6 0 .9-.1.9-.2 1.7-.6 2.4-1.2l3.3 3.3H3zm21-2.7V8c0-1.7-1.3-3-3-3h-3.5l-1.7-2.6c-.2-.2-.5-.4-.8-.4H9c-.6 0-1 .4-1 1s.4 1 1 1h5.5l1.7 2.6c.2.2.5.4.8.4h4c.6 0 1 .4 1 1v9.3c0 .6.4 1 1 1s1-.4 1-1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#camera-off_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCameraOff;
