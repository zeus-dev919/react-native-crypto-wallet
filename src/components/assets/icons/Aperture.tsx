import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgAperture(props: SvgProps) {
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
        d="M23 12c0 2.4-.8 4.6-2.1 6.4 0 .1-.1.2-.2.3-2 2.7-5.2 4.4-8.8 4.4-.2 0-.4-.025-.6-.05-.2-.025-.4-.05-.6-.05h-.1c-3.9-.5-7.2-3.1-8.7-6.5v-.1C1.3 15 1 13.5 1 12c0-2.4.8-4.6 2.1-6.4 0-.05.025-.075.05-.1.025-.025.05-.05.05-.1C5.2 2.7 8.4 1 12 1c.4 0 .8 0 1.2.1h.1c4 .5 7.3 3 8.8 6.5v.1c.6 1.3.9 2.8.9 4.3zm-12.8 3h3.5l1.7-3-1.7-3h-3.5l-1.7 3 1.7 3zM3 12c0-1.4.3-2.8.9-4l4 7H3.5c-.3-.9-.5-1.9-.5-3zm17.4-3H16l4 7c.6-1.2.9-2.6.9-4 0-1.1-.2-2.1-.5-3zm-.9-2h-8.1l2.2-3.8c2.5.4 4.6 1.8 5.9 3.8zM7.4 10l4-7c-2.5.2-4.7 1.4-6.2 3.2L7.4 10zm-2.9 7h8.1l-2.2 3.8C7.9 20.4 5.8 19 4.5 17zm12.1-3l-4 7c2.5-.2 4.7-1.4 6.2-3.2L16.6 14z"
        clipRule="evenodd"
      />
      <Mask id="aperture_svg__a" width={22} height={23} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 12c0 2.4-.8 4.6-2.1 6.4 0 .1-.1.2-.2.3-2 2.7-5.2 4.4-8.8 4.4-.2 0-.4-.025-.6-.05-.2-.025-.4-.05-.6-.05h-.1c-3.9-.5-7.2-3.1-8.7-6.5v-.1C1.3 15 1 13.5 1 12c0-2.4.8-4.6 2.1-6.4 0-.05.025-.075.05-.1.025-.025.05-.05.05-.1C5.2 2.7 8.4 1 12 1c.4 0 .8 0 1.2.1h.1c4 .5 7.3 3 8.8 6.5v.1c.6 1.3.9 2.8.9 4.3zm-12.8 3h3.5l1.7-3-1.7-3h-3.5l-1.7 3 1.7 3zM3 12c0-1.4.3-2.8.9-4l4 7H3.5c-.3-.9-.5-1.9-.5-3zm17.4-3H16l4 7c.6-1.2.9-2.6.9-4 0-1.1-.2-2.1-.5-3zm-.9-2h-8.1l2.2-3.8c2.5.4 4.6 1.8 5.9 3.8zM7.4 10l4-7c-2.5.2-4.7 1.4-6.2 3.2L7.4 10zm-2.9 7h8.1l-2.2 3.8C7.9 20.4 5.8 19 4.5 17zm12.1-3l-4 7c2.5-.2 4.7-1.4 6.2-3.2L16.6 14z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#aperture_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgAperture;
