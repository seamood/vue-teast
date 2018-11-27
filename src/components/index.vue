<template>
  <div class="hello">
    <div class="index__content" >
      <span>血&nbsp; 卡&nbsp; 号：</span>
      <input v-model="card_no" autocomplete="off" placeholder="请输入血卡号" />
    </div>
    <div class="index__content" >
      <span>母亲姓名：</span>
      <input v-model="name" autocomplete="off" placeholder="请输入母亲姓名" />
    </div>
    <div class="index__btn" >
      <button @click="ViewResults" :disabled="!card_no || !name">查看结果</button>
    </div>
  </div>
</template>

<script>
import {getData} from '../service/api'
export default {
  data () {
    return {
      card_no: '',
      name: ''
    }
  },
  mounted () {
    
  },
  methods: {
    ViewResults () {
      getData(this.card_no, this.name).then(res => {
      console.log(res)
    })
  }
    // getData().then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style scoped lang='less'>
</style>
