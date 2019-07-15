const { namespace } = require('@dhis2/cli-helpers-engine')

const command = namespace('style', {
    desc: 'DHIS2 programmatic style for commit msgs/code',
    aliases: 's',
    builder: require('./cmds.js'),
})

module.exports = command