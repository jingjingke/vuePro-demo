const filters = {
  filterPhone: function (value) {
    // 显示手机号码中间4位*号[telphone-133****1234]
    if (value !== undefined) {
      let start = value.substring(0, 3),
        end = value.substring(7, 11);
      return start + '****' + end
    }
  },
  optionTxt: function (value, obj) {
    // 将传入的obj整成数组，再返回相应的值[主要用于select计算[普通select-val-txt]
    let newObj = {};
    let checkVal = /请选择/;
    if (checkVal.test(value) || value === '') return value;
    else {
      for (let i = 0; i < obj.length; i++) newObj[obj[i].val] = obj[i].txt;
      return newObj[value]
    }
  }
}

export default filters
