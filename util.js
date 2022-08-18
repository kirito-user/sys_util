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
    }
}