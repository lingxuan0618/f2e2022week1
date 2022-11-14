<template>
  <router-view/>
</template>

<style lang="scss">
/* 中文字體 */
@font-face{
  font-family: custom-pixel;
  src: url(./assets/font/zpix.woff2);
  // unicode-range: U+4E00-9FFF;
}
/* 英文字體 */
// @font-face{
//   font-family: custom-pixel;
//   src: url(./assets/font/PressStart2P-Regular.ttf);
//   unicode-range: U+00-024F;
// }
body {
  font-family: custom-pixel;
}
</style>
