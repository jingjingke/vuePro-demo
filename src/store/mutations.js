export const mutations = {
	//更新信用中心资料状态
	uploadCreditStatu(state, param) {
		state.creditStatus[param.name] = param.val;
	},
	//更新(/保存)信用中心资料数据
	uploadCreditData(state, param) {
		state.creditDatas[param.name] = param.val;
	},

	//更新其它上传图片资料状态
	changeOhterPicStatu(state, param) {
		state.ohterPicStatus[param.name] = param.val;
	},
	//更新(/保存)其它上传图片资料数据
	uploadOhterPicData(state, param) {
		state.ohterPicDatas[param.name] = param.val;
	},

	//更新借款列表页状态
	uploadBorrow(state, param) {
		if(param.num === 0) {
			for(var i = 1; i <= 4; i++) state.userPages['borrowList' + i] = param.val;
		} else {
			state.userPages['borrowList' + param.num] = param.val;
		}
	},

	//新增borrowDetail内容[保存json数据]
	addBorrow(state, param) {
		//表示实际可以拥有num++个对象可以被保存，多余的则删除(例num=5时实际是可以存6条json数据)
		var num = 5;
		if(state.borrowArry.length > num) {
			delete state.borrowDetail[state.borrowArry[num]];
			state.borrowArry.pop();
		}
		state.borrowDetail[param.id] = param.val;
		state.borrowArry.unshift(param.id);
	},

	//添加借款描述与贷款申请选项（这里只保存一条，实际中根据选择的借款类型来分别存）
	uploadApplys(state, param) {
		state[param.name] = param.val;
	},

	//记录贷款详情里面的小图标状态
	changeLoanIconStatu(state, param) {
		state.loanIcons[param.name] = param.val;
	}

}