const uuid = require('node-uuid')

module.exports = {
    /**
     * 判断是否为空（简化版）
     * @param {*} param 
     * @returns 
     */
    isEmpty(param) {
        if(param === 'null' || param === 'undefined') {
            return true
        } else {
            return false
        }
    },
    
    /**
     * 判断是否为空版（数字类型除外）
     * @param {*} param 
     * @returns 
     */
    isEmptyV2(param) {
        if(this.isEmpty(param)) {
            return true
        } else if(typeof param === 'string' && param.length === 0){
            return true
        } else if (param instanceof Object === true && Object.keys(param).length === 0) {
            return true
        } else if (param instanceof Array === true && param.length === 0) {
            return true
        } else {
            return false
        }
    },


    /**
     * 正则匹配
     * @param {String} param 
     * @param {*} reg 
     * @returns 
     */
    regMatch(param, reg) {
        if(this.isEmptyV2(param)) {
            return false
        }
        return param.test(reg)
    },


    getuuidV1(){
        return uuid.v1()
    },

    getuuidV2(){
        return uuid.v4()
    }
}