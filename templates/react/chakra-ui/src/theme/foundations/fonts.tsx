import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Custom Font Name';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/MommyAndBabyPersonalUse.ttf');
      `}
  />
);

const fonts = {
  heading: `'Custom Font Name', sans-serif`,
  body: `'Raleway', sans-serif`,
};

export default fonts;
