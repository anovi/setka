export default function (moduleOptions) {
  this.nuxt.hook('generate:done', (nuxt, generateOptions) => {
    console.log('GENERATE DONE');
  })
}