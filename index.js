//! © 2015 Nathan Rugg <nmrugg@gmail.com> | MIT

var lzma;


lzma = require('./src/lzma_worker');

///NOTE: This function is for backwards compatibility's sake.
module.exports.LZMA = function LZMA()
{
    return lzma;
}

module.exports.compress   = lzma.compress;
module.exports.decompress = lzma.decompress;
