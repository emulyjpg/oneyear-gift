
export default {
  basePath: 'https://emulyjpg.github.io/oneyear-gift',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
