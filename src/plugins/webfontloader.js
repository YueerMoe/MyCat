/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    MiSans: {
      families: ['MiSans:300,450,500,650:Chinese_Simplify,Latin&display=swap'],
      src: 'https://font.sec.miui.com/font/css?family=MiSans:300,450,500,650:Chinese_Simplify,Latin&display=swap'
    },
  })
}
