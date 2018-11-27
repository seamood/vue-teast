<template>
  <div class="index">
    <div class="index__nav" v-if="nav">
      <span>里定医疗</span>
    </div>
    <div class="index__nav" v-if="navs">
      <img @click="back" src="../assets/images/zuo.png" alt=""/>
      <span>里定医疗</span>
    </div>
    <div class="index__title" v-if="title">
      <img src="../assets/images/wen.png" alt="1">
      <span>产前筛查结果查询</span>
    </div>
    <div class="index__title" v-if="titles">
      <img src="../assets/images/wen.png" alt="1">
      <span>产前筛查化验结果</span>
    </div>
    <div class="index__content" v-if="content">
      <span>血&nbsp; 卡&nbsp; 号：</span>
      <input v-model="card_no" autocomplete="off" placeholder="请输入血卡号" />
    </div>
    <div class="index__content" v-if="contents">
      <span>妇女姓名：</span>
      <input v-model="name" autocomplete="off" placeholder="请输入妇女姓名" />
    </div>
    <!-- <div class="index__content">
      <span>验&nbsp; 证&nbsp; 码：</span>
      <input v-model="yzm" class="index__code"  autocomplete="off" placeholder="请输入验证码" />
      <span class="code">获取验证码</span>
    </div> -->
    <div class="index__btn" v-if="btn">
      <button @click="ViewResults" :disabled="!card_no || !name">查看结果</button>
    </div>
    <div class="index__notice" v-if="notice">
      <span>最近有不法分子冒充国家单位人员进行新生儿补贴的诈骗电话，请不要轻信，接到上述内容的短信或电话，请立即挂断电话，拨打110或到派出所报警求助</span>
    </div>
    <div class="index__explain" v-if="explain">
      <p>说明：</p>
      <span>1.输入血卡号，请检查输入的血卡号和个人查询联的血卡号是否一致；</span>
      <span>2.输入母亲姓名，输入在医院采血时登记的母亲姓名；</span>
      <span>3.以上信息输入正确后，点击“查看结果”可查看新生儿筛选的化验结果信息；</span>
      <span><a href="https://mp.weixin.qq.com/s/4WVMSwW-VOI2WYx3D5PBvw">4.查询方式及常见问题</a></span>
    </div>
    <div class="index__result" v-if="result">
      <div class="div">
        <img src="../assets/images/wen.png" alt="2"/>
        <span>产前筛查化验结果</span>
      </div>
      <p class="p1">输入正确的信息后，点击“查看结果”可在此查看化验结果</p>
      <p class="p2"><a href="https://mp.weixin.qq.com/s/ZTWsnfsoVEfAbj0m3RDrSw">查询结果说明</a></p>
    </div>
    <v-detail v-if="detail" :detail="details"></v-detail>
    <div class="loading" v-if="loading">
      <vue-loading type="spiningDubbles" color="rgb(90, 193, 221)" :size="{ width: '40px', height: '40px' }" class="load"></vue-loading>
    </div>
    <footer class="index__footer">
      <p>里定健康网lib.ldxxw.com.cn</p>
      <p>全国服务热线400-632-5588</p>
      <p>北京里定医疗网络技术服务有限公司</p>
      <p>法律声明ICP证：黔ICP备15015604(版权所有)</p>
    </footer>
  </div>
</template>
<script>
import {getData} from '../service/api'
import detail from './detail'
import { VueLoading } from 'vue-loading-template'
export default {
  data () {
    return {
      card_no: '',
      name: '',
      detail: false,
      result: true,
      content: true,
      contents: true,
      notice: true,
      explain: true,
      btn: true,
      details: [],
      loading: false,
      navs: false,
      nav: true,
      title: true,
      titles: false
    }
  },
  created () {
    if (localStorage.c) this.card_no = localStorage.c
    if (localStorage.n) this.name = localStorage.n
  },
  mounted () {
    // this.$refs.zuo.style.transform = 'rotate(180deg)'
  },
  methods: {
    ViewResults () {
      // this.loading = true
      getData(this.card_no, this.name).then(res => {
        this.details = res.datas
        // this.loading = false
        console.log('res', res.datas)
        localStorage.c = this.card_no
        localStorage.n = this.name

        this.explain = false
        this.btn = false
        this.content = false
        this.contents = false
        this.result = false
        this.notice = false
        this.detail = true
        this.nav = false
        this.navs = true
        this.title = false
        this.titles = true
      })
    },
    back () {
      this.explain = true
      this.btn = true
      this.content = true
      this.contents = true
      this.result = true
      this.notice = true
      this.detail = false
      this.nav = true
      this.navs = false
      this.title = true
      this.titles = false
    }
  },
  components: {
    'v-detail': detail,
    'vue-loading': VueLoading
  }
}
</script>

<style scoped lang='less'>
@import '../assets/less/index.less';
</style>
