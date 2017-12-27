import home from './components/home';

export default [{
  path: '/',
  component: home,
  children: [{
    path: '/',
    redirect: '/loan'
  },
    {
      path: '/login',
      meta: {
        title: '登录'
      },
      component: resolve => require(['./view/other/login'], resolve)
    },
    {
      path: '/reg',
      meta: {
        title: '注册'
      },
      component: resolve => require(['./view/other/reg'], resolve)
    },
    {
      path: '/forget',
      meta: {
        title: '忘记密码'
      },
      component: resolve => require(['./view/other/forget'], resolve)
    },

    {
      path: '/agreement',
      meta: {
        title: '委托服务确认书'
      },
      component: resolve => require(['./view/other/agreement'], resolve)
    },

    {
      path: 'user',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '个人中心'
        },
        component: resolve => require(['./view/user/index'], resolve)
      },
        {
          path: 'borrowList',
          component: resolve => require(['./view/user/borrowList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '全部借款'
            },
            component: resolve => require(['./view/user/borrowListAll'], resolve)
          },
            {
              path: 'apply',
              meta: {
                title: '申请中借款'
              },
              component: resolve => require(['./view/user/borrowListApply'], resolve)
            },
            {
              path: 'repay',
              meta: {
                title: '待归还借款'
              },
              component: resolve => require(['./view/user/borrowListRepay'], resolve)
            },
            {
              path: 'over',
              meta: {
                title: '已结束借款'
              },
              component: resolve => require(['./view/user/borrowListOver'], resolve)
            },
          ]
        },
        {
          path: 'borrowDetail/:id',
          meta: {
            title: '借款详情'
          },
          component: resolve => require(['./view/user/borrowDetail'], resolve)
        },
        {
          path: 'borrowDetail/:id/more',
          meta: {
            title: '更多详情'
          },
          component: resolve => require(['./view/user/borrowDmore'], resolve)
        },
        {
          path: 'borrowReason/:id',
          meta: {
            title: '查看不过理由'
          },
          component: resolve => require(['./view/user/borrowReason'], resolve)
        },
        {
          path: 'dealList',
          meta: {
            title: '查看合同列表'
          },
          component: resolve => require(['./view/user/dealList'], resolve)
        },
        {
          path: 'dealDetail',
          meta: {
            title: '借款协议'
          },
          component: resolve => require(['./view/user/dealDetail'], resolve)
        },
        {
          path: 'repayList',
          meta: {
            title: '我的还款'
          },
          component: resolve => require(['./view/user/repayList'], resolve)
        },
        {
          path: 'repayGo/:id/:total',
          meta: {
            title: '操作还款'
          },
          component: resolve => require(['./view/user/repayGo'], resolve)
        },
        {
          path: 'repayTips',
          meta: {
            title: '确认信息'
          },
          component: resolve => require(['./view/user/repayTips'], resolve)
        },
        {
          path: 'repayRecord',
          meta: {
            title: '还款记录'
          },
          component: resolve => require(['./view/user/repayRecord'], resolve)
        },
        {
          path: 'rewardList',
          component: resolve => require(['./view/user/rewardList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '未使用奖励'
            },
            component: resolve => require(['./view/user/rewardUnused'], resolve)
          },
            {
              path: 'used',
              meta: {
                title: '已使用奖励'
              },
              component: resolve => require(['./view/user/rewardUsed'], resolve)
            },
            {
              path: 'expired',
              meta: {
                title: '已失效奖励'
              },
              component: resolve => require(['./view/user/rewardExpired'], resolve)
            }
          ]
        },
        {
          path: 'helpList',
          meta: {
            title: '帮助中心'
          },
          component: resolve => require(['./view/user/helpList'], resolve)
        },
        {
          path: 'helpDetail/:index',
          meta: {
            title: '疑问解答'
          },
          component: resolve => require(['./view/user/helpDetail'], resolve)
        },
        {
          path: 'feedback',
          meta: {
            title: '意见反馈'
          },
          component: resolve => require(['./view/user/feedback'], resolve)
        },
        {
          path: 'aboutUs',
          meta: {
            title: '关于我们'
          },
          component: resolve => require(['./view/user/aboutUs'], resolve)
        }
      ]
    },

    {
      path: 'loan',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '借款中心'
        },
        component: resolve => require(['./view/loan/index'], resolve)
      },
        {
          path: 'micro',
          meta: {
            title: '微额借款'
          },
          component: resolve => require(['./view/loan/loanMicro'], resolve)
        },
        {
          path: 'samll',
          meta: {
            title: '小额借款'
          },
          component: resolve => require(['./view/loan/loanSmall'], resolve)
        },
        {
          path: 'large',
          meta: {
            title: '福利借款'
          },
          component: resolve => require(['./view/loan/loanLarge'], resolve)
        },
        {
          path: 'dataComm',
          meta: {
            title: '完善资料'
          },
          component: resolve => require(['./view/loan/dataComm'], resolve)
        },
        {
          path: 'dataMust',
          meta: {
            title: '必填资料'
          },
          component: resolve => require(['./view/loan/dataMust'], resolve)
        },
        {
          path: 'dataSelect',
          meta: {
            title: '选填资料'
          },
          component: resolve => require(['./view/loan/dataSelect'], resolve)
        },
        {
          path: 'submitApply',
          meta: {
            title: '提交申请'
          },
          component: resolve => require(['./view/loan/submitApply'], resolve)
        },
        {
          path: 'loanDes',
          meta: {
            title: '借款描述'
          },
          component: resolve => require(['./view/loan/des'], resolve)
        },
        {
          path: 'loanRecom',
          meta: {
            title: '推荐人手机号码'
          },
          component: resolve => require(['./view/loan/recom'], resolve)
        },
        {
          path: 'sureMsg',
          meta: {
            title: '确认信息'
          },
          component: resolve => require(['./view/loan/sureMsg'], resolve)
        },
        {
          path: 'sureMore',
          meta: {
            title: '借款详情'
          },
          component: resolve => require(['./view/loan/sureMore'], resolve)
        },
        {
          path: 'cancelSup',
          meta: {
            title: '取消上标'
          },
          component: resolve => require(['./view/loan/cancelSup'], resolve)
        }
      ]
    },

    {
      path: 'credit',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '信用中心'
        },
        component: resolve => require(['./view/credit/index'], resolve)
      },
        {
          path: 'userInfo',
          meta: {
            title: '个人信息'
          },
          component: resolve => require(['./view/credit/userInfo'], resolve)
        },
        {
          path: 'contacts',
          meta: {
            title: '联系人信息'
          },
          component: resolve => require(['./view/credit/contacts'], resolve)
        },
        {
          path: 'scan',
          meta: {
            title: '人脸识别'
          },
          component: resolve => require(['./view/credit/scan'], resolve)
        },
        {
          path: 'work',
          meta: {
            title: '工作信息'
          },
          component: resolve => require(['./view/credit/work'], resolve)
        },
        {
          path: 'bankInfo',
          meta: {
            title: '添加银行卡'
          },
          component: resolve => require(['./view/credit/bankInfo'], resolve)
        },
        {
          path: 'support',
          meta: {
            title: '查看支持银行'
          },
          component: resolve => require(['./view/credit/supportBank'], resolve)
        },
        {
          path: 'bankHelp',
          meta: {
            title: '帮助'
          },
          component: resolve => require(['./view/credit/bankHelp'], resolve)
        },
        {
          path: 'bankSMS',
          meta: {
            title: '验证银行卡'
          },
          component: resolve => require(['./view/credit/bankSMS'], resolve)
        },
        {
          path: 'bankDetail',
          meta: {
            title: '银行卡详情'
          },
          component: resolve => require(['./view/credit/bankDetail'], resolve)
        },
        {
          path: 'mobile',
          meta: {
            title: '手机认证'
          },
          component: resolve => require(['./view/credit/mobile'], resolve)
        },
        {
          path: 'idCard',
          meta: {
            title: '身份认证'
          },
          component: resolve => require(['./view/credit/checkIDcard'], resolve)
        },
        {
          path: 'waterBank',
          meta: {
            title: '选择银行'
          },
          component: resolve => require(['./view/credit/waterBank'], resolve)
        },
        {
          path: 'waterLogin/:index',
          meta: {
            title: '银行登录'
          },
          component: resolve => require(['./view/credit/waterLogin'], resolve)
        },
        {
          path: 'sbsqCity',
          meta: {
            title: '选择城市'
          },
          component: resolve => require(['./view/credit/sbsqCity'], resolve)
        },
        {
          path: 'sbsqLogin',
          meta: {
            title: '社保登录'
          },
          component: resolve => require(['./view/credit/sbsqLogin'], resolve)
        },
        {
          path: 'gjjCity',
          meta: {
            title: '选择城市'
          },
          component: resolve => require(['./view/credit/sbsqCity'], resolve)
        },
        {
          path: 'gjjLogin',
          meta: {
            title: '公积金登录'
          },
          component: resolve => require(['./view/credit/sbsqLogin'], resolve)
        },
        {
          path: 'zhima',
          meta: {
            title: '芝麻分'
          },
          component: resolve => require(['./view/credit/zhima'], resolve)
        },
        {
          path: 'alipay',
          meta: {
            title: '支付宝认证'
          },
          component: resolve => require(['./view/credit/alipay'], resolve)
        },
        {
          path: 'otherData',
          meta: {
            title: '其它资料'
          },
          component: resolve => require(['./view/credit/dataOther'], resolve)
        },
        {
          path: 'uploadPic/:param',
          meta: {
            title: '上传图片'
          },
          component: resolve => require(['./view/credit/dataUpload'], resolve)
        }
      ]
    },

    {
      path: 'creditReport',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '简版个人征信报告'
        },
        component: resolve => require(['./view/credit/report/index'], resolve)
      },
        {
          path: 'login',
          meta: {
            title: '央行征信登录'
          },
          component: resolve => require(['./view/credit/report/login'], resolve)
        },
        {
          path: 'get',
          meta: {
            title: '获取报告'
          },
          component: resolve => require(['./view/credit/report/get'], resolve)
        },
        {
          path: 'sms',
          meta: {
            title: '快捷验证'
          },
          component: resolve => require(['./view/credit/report/sms'], resolve)
        },
        {
          path: 'answers',
          meta: {
            title: '身份验证'
          },
          component: resolve => require(['./view/credit/report/answers'], resolve)
        },
        {
          path: 'cover',
          meta: {
            title: '征信报告封面'
          },
          component: resolve => require(['./view/credit/report/cover'], resolve)
        },
        {
          path: 'list',
          meta: {
            title: '征信报告列表'
          },
          component: resolve => require(['./view/credit/report/list'], resolve)
        },
        {
          path: 'detail',
          meta: {
            title: '征信报告详情'
          },
          component: resolve => require(['./view/credit/report/detail'], resolve)
        },
        {
          path: 'helps',
          meta: {
            title: '疑问解答'
          },
          component: resolve => require(['./view/credit/report/helps'], resolve)
        },
        {
          path: 'regHow',
          meta: {
            title: '如何注册账号'
          },
          component: resolve => require(['./view/credit/report/regHow'], resolve)
        },
        {
          path: 'regStep1',
          meta: {
            title: '填写信息'
          },
          component: resolve => require(['./view/credit/report/regStep1'], resolve)
        },
        {
          path: 'regStep2',
          meta: {
            title: '补充信息'
          },
          component: resolve => require(['./view/credit/report/regStep2'], resolve)
        }
      ]
    }
  ]
},
  {
    path: '*',
    meta: {
      title: '页面不存在'
    },
    component: resolve => require(['./view/other/error'], resolve)
  }
]
