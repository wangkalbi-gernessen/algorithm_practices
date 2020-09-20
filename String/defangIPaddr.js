'use strict';

/**
 * @param {string} address
 * @return {string}
 */

const defangIPaddr = function(address) {

    let  addr = address.split('.').join('[.]');
    // let addr = address.replace(/\./gi, '[.]');
    return addr;
};

console.log(defangIPaddr("255.100.50.0"));