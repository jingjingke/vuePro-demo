// 引入组件
import topComponent from "./common/top";		  // top
import footComponent from "./common/footer";	// footer
import listComponent from "./common/list";		// list
import pageError from "./common/pageError";		// pageError(页面报错)
import noMore from "./common/noMore";			    // noMore(没有更多)
import sendSMS from "./common/sendSMS";			  // sms
import canvasCode from './common/canvasCode';	// 仿图片验证码

import alertKnow from "./popup/alertKnow";		// alert-know(弹出知识)
import alertCheck from "./popup/alertCheck";	// alertCheck(弹出提示-带验证)
import alertTip from "./popup/alertTips";		  // alertCheck(弹出提示-无验证)
import delayTime from "./popup/delay";			  // delay(黑底转圈)

import borrowTitle from './borrow/title';	  	// borrow-title
import borrowList from './borrow/list';			  // borrow-list

import rewardTitle from './reward/title';		  // reward-title
import rewardList from './reward/list';			  // reward-list

import loanBanner from './loan/top';			   // loan-top
import loanDetail from './loan/detail';			 // loan-detail


export default {
  topComponent,
  footComponent,
  listComponent,
  pageError,
  noMore,
  sendSMS,
  canvasCode,

  alertKnow,
  alertCheck,
  alertTip,
  delayTime,

  borrowTitle,
  borrowList,

  rewardTitle,
  rewardList,

  loanBanner,
  loanDetail
}
