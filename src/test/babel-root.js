const register = require('@babel/register').default;

register({extensions: ['.ts', '']});

require('jsdom-global/index')();
