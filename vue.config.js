const path = require('path');
module.exports = {
	chainWebpack: (config)=>{
	    config.resolve.alias
	      .set('@$', path.join(__dirname,'src'))
	      .set('assets', path.join(__dirname,'src/assets'))
	      .set('common', path.join(__dirname,'src/common'))
	      .set('components', path.join(__dirname,'src/components'))
  	}
}
