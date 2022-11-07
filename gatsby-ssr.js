export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="brown-regular"
      rel="preload"
      href="/fonts/brown-regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
  ])
}