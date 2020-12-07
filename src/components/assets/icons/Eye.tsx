import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgEye(props: SvgProps) {
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
        d="M12 3c7.516 0 11.724 8.2 11.925 8.6.1.2.1.6 0 .8-.2.4-4.41 8.6-11.925 8.6C4.926 21 .781 13.735.152 12.631c-.04-.069-.065-.113-.077-.131-.1-.3-.1-.6 0-.9C.275 11.2 4.485 3 12 3zm-9.92 9c1.001 1.6 4.509 7 9.92 7s8.919-5.4 9.92-7C20.92 10.4 17.412 5 12 5s-9.019 5.4-9.92 7zM12 8c-2.205 0-4.008 1.8-4.008 4S9.795 16 12 16s4.008-1.8 4.008-4S14.205 8 12 8zm-2.004 4c0 1.1.902 2 2.004 2 1.102 0 2.004-.9 2.004-2s-.902-2-2.004-2c-1.102 0-2.004.9-2.004 2z"
        clipRule="evenodd"
      />
      <Mask id="eye_svg__a" width={24} height={18} x={0} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3c7.516 0 11.724 8.2 11.925 8.6.1.2.1.6 0 .8-.2.4-4.41 8.6-11.925 8.6C4.926 21 .781 13.735.152 12.631c-.04-.069-.065-.113-.077-.131-.1-.3-.1-.6 0-.9C.275 11.2 4.485 3 12 3zm-9.92 9c1.001 1.6 4.509 7 9.92 7s8.919-5.4 9.92-7C20.92 10.4 17.412 5 12 5s-9.019 5.4-9.92 7zM12 8c-2.205 0-4.008 1.8-4.008 4S9.795 16 12 16s4.008-1.8 4.008-4S14.205 8 12 8zm-2.004 4c0 1.1.902 2 2.004 2 1.102 0 2.004-.9 2.004-2s-.902-2-2.004-2c-1.102 0-2.004.9-2.004 2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#eye_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgEye;
