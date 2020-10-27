js计算精度处理
number-precision
import NP from 'number-precision'
NP.strip(0.1+0.2)

vue数字增加变化效果
import ICountUp from 'vue-countup-v2'
components: {
  ICountUp
},
data () {
  return {
    delay: 1000,
    endVal: 0,
    options: {
      decimalPlaces: 2,
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
      prefix: '',
      suffix: ''
    },
  }
},
methods: {
  onReady (instance, CountUp) {
    instance.update(this.endVal)
  }
}
<ICountUp
  :class="appType"
  :delay="delay"
  :endVal="endVal"
  :options="options"
  @ready="onReady"
/>
