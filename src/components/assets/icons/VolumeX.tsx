import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgVolumeX(props: SvgProps) {
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
        d="M11.4 4.109c-.3-.2-.8-.1-1.1.1L5.6 8.007H2c-.6 0-1 .4-1 1v5.996c0 .6.4 1 1 1h3.6l4.7 3.797c.2.1.4.2.6.2.1 0 .3 0 .4-.1.3-.2.6-.5.6-.9V5.009c.1-.4-.1-.7-.5-.899zM10 16.902l-3.4-2.699c-.2-.1-.4-.2-.6-.2H3v-3.997h3c.2 0 .4-.1.6-.2L10 7.107v9.795zm13.7-1.2c.4-.4.4-.999 0-1.399l-2.3-2.299 2.3-2.298c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-2.3 2.3-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.299-2.3 2.298c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.3-2.3 2.3 2.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3z"
        clipRule="evenodd"
      />
      <Mask id="volume-x_svg__a" width={23} height={16} x={1} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.4 4.109c-.3-.2-.8-.1-1.1.1L5.6 8.007H2c-.6 0-1 .4-1 1v5.996c0 .6.4 1 1 1h3.6l4.7 3.797c.2.1.4.2.6.2.1 0 .3 0 .4-.1.3-.2.6-.5.6-.9V5.009c.1-.4-.1-.7-.5-.899zM10 16.902l-3.4-2.699c-.2-.1-.4-.2-.6-.2H3v-3.997h3c.2 0 .4-.1.6-.2L10 7.107v9.795zm13.7-1.2c.4-.4.4-.999 0-1.399l-2.3-2.299 2.3-2.298c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-2.3 2.3-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.299-2.3 2.298c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.3-2.3 2.3 2.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#volume-x_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgVolumeX;
