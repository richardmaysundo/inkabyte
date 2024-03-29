var plugins = [{
      plugin: require('C:/Git/inkabyte/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('C:/Git/inkabyte/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Inkabyte","short_name":"Agency","start_url":"/","background_color":"#ffffff","theme_color":"#fed136","display":"minimal-ui","icon":"content/assets/inkabyte-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e6e2a691e0708d2ff529bb6d86634b36"},
    },{
      plugin: require('C:/Git/inkabyte/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Git/inkabyte/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Git/inkabyte/node_modules/gatsby-omni-font-loader/gatsby-ssr'),
      options: {"plugins":[],"preconnect":["https://fonts.gstatic.com"],"web":[{"name":"Droid Sans","file":"https://fonts.googleapis.com/css2?family=Droid+Sans&display=swap"},{"name":"Montserrat","file":"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"},{"name":"Kaushan Script","file":"https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"},{"name":"Roboto Slab","file":"https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
