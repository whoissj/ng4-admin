export let echartsData = {
  showloading: false,
  chartOption: {
  title: {
    text: '堆叠区域图'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      areaStyle: { normal: {} },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
},
  Baroptions: {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 335, name: '直达', selected: true },
        { value: 679, name: '营销广告' },
        { value: 1548, name: '搜索引擎' }
      ]
    },
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '55%'],

      data: [
        { value: 335, name: '直达' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1048, name: '百度' },
        { value: 251, name: '谷歌' },
        { value: 147, name: '必应' },
        { value: 102, name: '其他' }
      ]
    }
  ]
},
  linkoption: {
  title: {
    text: '懒猫今日访问量'
  },
  color: ['#3398DB'],
  //气泡提示框，常用于展现更详细的数据
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  toolbox: {
    show: true,
    feature: {
      //显示缩放按钮
      dataZoom: {
        show: true
      },
      //显示折线和块状图之间的切换
      magicType: {
        show: true,
        type: ['bar', 'line']
      },
      //显示是否还原
      restore: {
        show: true
      },
      //是否显示图片
      saveAsImage: {
        show: true
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: [21231,1212,21231,3213],
    axisTick: {
      alignWithLabel: true
    },
    axisLabel: {
      interval: 0,
      rotate: 20
    },
  }],
  yAxis: [{
    name: "懒猫今日访问量",
    type: 'value'
  }],
  series: [{
    name: '今日访问次数',
    type: 'bar',
    barWidth: '60%',
    label: {
      normal: {
        show: true
      }
    },
    data:[21231,1212,21231,3213]
  }]
},
  datamapvalue: [
  {name: '海门', value: [121.15,31.89,9]},
  {name: '鄂尔多斯', value: [109.781327,39.608266,12]},
  {name: '招远', value: [120.38,37.35,12]},
  {name: '舟山', value: [122.207216,29.985295,12]},
  {name: '齐齐哈尔', value: [123.97,47.33,14]},
  {name: '盐城', value: [120.13,33.38,15]},
  {name: '赤峰', value: [118.87,42.28,16]},
  {name: '青岛', value: [120.33,36.07,18]},
  {name: '乳山', value: [121.52,36.89,18]},
  {name: '金昌', value: [102.188043,38.520089,19]}
],
  mapoption: {
  backgroundColor: '#404a59',
  title: {
    text: '全国主要城市空气质量',
    subtext: 'data from PM25.in',
    sublink: 'http://www.pm25.in',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    y: 'bottom',
    x: 'right',
    data: ['pm2.5'],
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#323c48',
        borderColor: '#111'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series: [
    {
      name: 'pm2.5',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: this.datamapvalue,
      symbolSize: function (val) {
        return val[2] / 10;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#ddb926'
        }
      }
    },
    {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: this.datamapvalue,
      symbolSize: function (val) {
        return val[2] / 10;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#f4e925',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      zlevel: 1
    }
  ]
}
};
export let userData = {
  ageSort : 'false',
  data : [ {
    key    : '1',
    studyCode:'0690645033',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key    : '2',
    studyCode:'0690645033',
    name   : 'Jim Green',
    age    : 42,
    address: 'London No. 1 Lake Park',
  }, {
    key    : '3',
    studyCode:'0690645033',
    name   : 'Joe Black',
    age    : 32,
    address: 'Sidney No. 1 Lake Park',
  } ]
};
export let lexiconData = {
  data:[
    {name:'大学英语A',num:4321,people:123},
    {name:'大学英语B',num:3456,people:455},
    {name:'大学英语C',num:3589,people:233},
    {name:'大学英语D',num:4290,people:444}
  ]
};
