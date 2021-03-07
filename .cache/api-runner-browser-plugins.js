module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Inkabyte","short_name":"Agency","start_url":"/","background_color":"#ffffff","theme_color":"#fed136","display":"minimal-ui","icon":"content/assets/inkabyte-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e6e2a691e0708d2ff529bb6d86634b36"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-omni-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"preconnect":["https://fonts.gstatic.com"],"web":[{"name":"Droid Sans","file":"https://fonts.googleapis.com/css2?family=Droid+Sans&display=swap"},{"name":"Montserrat","file":"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"},{"name":"Kaushan Script","file":"https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"},{"name":"Roboto Slab","file":"https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
