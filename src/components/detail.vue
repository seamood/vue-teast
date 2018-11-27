<template>
  <div class="detail">
    <div class="detail__list" v-for="(item, id) of detail" :key="id">
      <p>
        <span class="unit">采血单位：</span>
        <span>{{item.dep_name}}</span>
      </p>
      <p>
        <span>新生儿性别：</span>
        <span>{{item.sex}}</span>
      </p>
      <p>
        <span class="unit">居住地址：</span>
        <span>{{item.address}}</span>
      </p>
    </div>
    <div class="detail__tab">
      <table>
        <tr class="tr1" >
          <td class="t1" >检测项目</td>
          <td class="t2">检测结果</td>
          <td class="t3">参考值</td>
          <td class="t4">检测结论</td>
        </tr>
        <tr class="tr2" v-for="(items, i) of good.listItems" :key="i" >
          <td >{{items.lab_type}}</td>
          <td >{{items.result_val}}</td>
          <td >{{items.val}}</td>
          <td >{{items.result_str}}</td>
        </tr>
      </table>
    </div>
    <div class="detail__foot" v-for="(itm, index) of content" :key="index">
      <p>
        <span>筛查中心：</span>
        <span>{{itm.laboratory_name}}</span>
      </p>
      <p>
        <span class="er">备注</span>：
        <span>{{itm.remark}}</span>
      </p>
      <p>
        <span class="er">说明</span>：
        <span>{{itm.sm}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['detail'],
  data () {
    return {
      good: [],
      content: []
    }
  },
  mounted () {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', this.goBack, false)
    }

    this.content = this.detail

    this.detail.forEach(itemss => {
      this.good = itemss
      console.log('itemss', itemss)
    })
  },
  methods: {
    goBack () {
      this.$router.push('/brother')
    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.goBack, false)
  }
}
</script>

<style scoped lang='less'>
@import '../assets/less/detail.less';
</style>
