<template>
  <div class="container">
    <topComponent title='还款'></topComponent>
    <div class="repayMent">
      <ul class="formCom form-plus">
        <li>
          <label>本次还款<input type="text" placeholder="300.00" readonly="readonly"/></label>
        </li>
      </ul>
      <ul class="formCom form-plus mt20">
        <li>
          <label>身份信息<input type="text" value="张*章（441723*********233)" readonly="readonly"/></label>
        </li>
        <li>
          <label>银行信息<p class="input bank bank60">建设银行尾号(3635)</p></label>
        </li>
      </ul>
      <div class="tip">
        <p>限额：单笔5.00万元，单日20.00万元，单月20.00万元</p>
        <span class="subBtn" @click="$router.push('/user/repayTips')">确定</span>
      </div>
    </div>
  </div>
</template>
