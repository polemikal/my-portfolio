const path = require('path');

/**
 * 
 * @param {string} fileName 
 * @returns 
 */
const getFile = (fileName) => {
    const filePath = path.join(
        __dirname,
        '..',
        'public',
        'views',
        fileName
    );

    return filePath;
};

module.exports = {
    getFile
};