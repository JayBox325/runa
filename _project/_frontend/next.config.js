const path = require('path')
const globImporter = require('node-sass-glob-importer')

module.exports = {
	sassOptions: {
        importer: globImporter(),
		includePaths: [path.join(__dirname, 'styles')]
	}
}