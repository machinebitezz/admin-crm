<template>
  <q-page class="bg-grey-4 q-px-sm q-pb-sm">
    <div class="gutter-xs"> <!-- container da pagina toda -->
      <div class="row gutter-xs">
        <div class="col-xs-12 col-xl-4">
          <q-card color="blue-8" class="q-pa-sm q-pr-md">
            <div class="float-left q-pa-sm">
              <div class="q-headline">Sales</div>
              <div class="q-headline q-mt-xs">160</div>
            </div>

            <div class="float-right q-pt-sm">
              <q-icon name="trending_up" size="4em"></q-icon>
            </div>
            <div class="float-clear"></div>
          </q-card>
        </div>

        <div class="col-xs-12 col-xl-4">
          <q-card color="green-8" class="q-pa-sm q-pr-md">
            <div class="float-left q-pa-sm">
              <div class="q-headline">Goals</div>
              <div class="q-headline q-mt-xs">140</div>
            </div>

            <div class="float-right q-pt-sm">
              <q-icon name="adjust" size="4em"></q-icon>
            </div>
            <div class="float-clear"></div>
          </q-card>
        </div>

        <div class="col-xs-12 col-xl-4">
          <q-card color="orange-8" class="q-pa-sm q-pr-md">
            <div class="float-left q-pa-sm">
              <div class="q-headline">% Change</div>
              <div class="q-headline q-mt-xs">
                <q-icon name="arrow_downward"></q-icon>
                2%
              </div>
            </div>

            <div class="float-right q-pt-sm">
              <q-icon name="compare_arrows" size="4em"></q-icon>
            </div>
            <div class="float-clear"></div>
          </q-card>
        </div>
      </div>

      <div class="row gutter-xs">
        <div class="col-xs-12 col-xl-4">
          <q-card flat class="round-borders bg-white c-graph-card">
            <q-card-title>Sales vs Goals</q-card-title>
            <q-card-separator inset></q-card-separator>
            <q-card-main class="c-graph-container">
              <IEcharts :option="bar" ref="bar" :resizable='true'/>
            </q-card-main>
          </q-card>
        </div>

        <div class="col-xs-12 col-xl-4">
          <q-card flat class="round-borders bg-white c-graph-card">
            <q-card-title>Market Share & Growth</q-card-title>
            <q-card-separator inset></q-card-separator>
            <q-card-main class="c-graph-container">
              <IEcharts :option="lines" ref="lines" :resizable='true'/>
            </q-card-main>
          </q-card>
        </div>

        <div class="col-xs-12 col-xl-4">
          <q-card flat class="round-borders bg-white c-graph-card">
            <q-card-title>Sales vs Quota</q-card-title>
            <q-card-separator inset></q-card-separator>
            <q-card-main class="c-graph-container">
              <IEcharts :option="gauge" ref="gauge" :resizable='true'/>
            </q-card-main>
          </q-card>
        </div>
      </div>

      <div class="row gutter-xs">
        <div class="col-xs-12 col-xl-4">
          <q-card flat class="round-borders bg-white c-graph-card">
            <q-card-title>Key Competitors</q-card-title>
            <q-card-separator inset></q-card-separator>
            <q-card-main class="c-graph-container">
              <IEcharts :option="pie" ref="pie" :resizable='true'/>
            </q-card-main>
          </q-card>
        </div>

        <div class="col-xs-12 col-xl-8">
          <q-card flat class="round-borders bg-white c-graph-card">
            <q-card-title>Sales Pipeline by Sales Rep</q-card-title>
            <q-card-separator inset></q-card-separator>
            <q-card-main class="c-graph-container">
              <IEcharts :option="stackedBar" ref="stackedBar" :resizable='true'/>
            </q-card-main>
          </q-card>
        </div>
      </div>

      <div class="row gutter-xs">
        <div class="col-12">
          <q-card flat class="round-borders bg-white c-table-card">
              <q-table
                title="All Activies"
                :data="tableData"
                :columns="columns"
                row-key="name"
                table-class="c-table"
              />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js'
import Vue from 'vue'

Vue.component('IEcharts', IEcharts)

export default {
  data: () => ({
    columns: [
      {
        name: 'Id',
        required: true,
        label: 'Activity Id',
        align: 'left',
        field: 'id',
        sortable: true,
        classes: 'c-table-element',
        style: 'width: 15%'
      },
      {
        name: 'Activity Name',
        required: true,
        label: 'Activity Name',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'c-table-element',
        style: 'width: 30%'
      },
      {
        name: 'Regarding',
        required: true,
        label: 'Regarding',
        align: 'left',
        field: 're',
        sortable: true,
        classes: 'c-table-element',
        style: 'width: 15%'
      },
      {
        name: 'Owner',
        required: true,
        label: 'Owner',
        align: 'left',
        field: 'owner',
        sortable: true,
        classes: 'c-table-element',
        style: 'width: 15%'
      },
      {
        name: 'Creation Date',
        required: true,
        label: 'Creation Date',
        align: 'left',
        field: 'creation',
        sortable: true,
        classes: 'c-table-element',
        style: 'width: 15%'
      }
    ],
    tableData: [
      {
        id: 'C001',
        name: 'Advanced communications',
        re: 'Presentation',
        owner: 'John',
        creation: '12-09-2019'
      },
      {
        id: 'C002',
        name: 'New drug discussion',
        re: 'Meeting',
        owner: 'John',
        creation: '09-02-2019'
      },
      {
        id: 'C003',
        name: 'Universal services discussion',
        re: 'Meeting',
        owner: 'John',
        creation: '03-25-2019'
      },
      {
        id: 'C004',
        name: 'Add on business',
        re: 'Business',
        owner: 'John',
        creation: '03-18-2019'
      },
      {
        id: 'C005',
        name: 'Promotional Activity',
        re: 'Personal',
        owner: 'John',
        creation: '04-09-2019'
      },
      {
        id: 'C006',
        name: 'Advanced communications',
        re: 'Presentation',
        owner: 'John',
        creation: '12-09-2019'
      },
      {
        id: 'C007',
        name: 'New drug discussion',
        re: 'Meeting',
        owner: 'John',
        creation: '09-02-2019'
      },
      {
        id: 'C008',
        name: 'Universal services discussion',
        re: 'Meeting',
        owner: 'John',
        creation: '03-25-2019'
      },
      {
        id: 'C009',
        name: 'Add on business',
        re: 'Business',
        owner: 'John',
        creation: '03-18-2019'
      },
      {
        id: 'C010',
        name: 'Promotional Activity',
        re: 'Personal',
        owner: 'John',
        creation: '04-09-2019'
      }
    ]
  }),
  computed: { // chart data
    bar () {
      return {
        grid: { top: '4%' },
        legend: { bottom: '5%' },
        tooltip: {
          backgroundColor: '#323232CC',
          textStyle: { color: '#FFF' },
          borderWidth: 0
        },
        dataset: {
          dimention: ['Sales', 'Goals'],
          source: [
            { time_period: 'Jan 2019', sale: 50, goal: 70 },
            { time_period: 'Feb 2019', sale: 80, goal: 75 },
            { time_period: 'Mar 2019', sale: 86, goal: 80 },
            { time_period: 'Apr 2019', sale: 72, goal: 85 }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {
          type: 'value',
          axisLine: { show: true },
          axisTick: { show: true }
        },
        series: [
          { type: 'bar', name: 'Sales', color: '#D53A35' },
          { type: 'bar', name: 'Goals', color: '#2F4554' }
        ]
      }
    },

    lines () {
      return {
        grid: { top: '4%' },
        legend: { bottom: '5%' },
        tooltip: {
          backgroundColor: '#323232CC',
          textStyle: { color: '#FFF' },
          borderWidth: 0
        },
        dataset: {
          dimention: ['Share', 'Growth'],
          source: [
            { product: 'Product A', share: 20, growth: 25 },
            { product: 'Product B', share: 22, growth: 18 },
            { product: 'Product C', share: 40, growth: 45 }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {
          type: 'value',
          axisLine: { show: true },
          axisTick: { show: true }
        },
        series: [
          { type: 'line', name: 'Share', color: '#D53A35' },
          { type: 'line', name: 'Growth', color: '#2F4554' }
        ]
      }
    },

    gauge () {
      return {
        legend: { show: false },
        tooltip: {
          formatter: '{a}{b}: {c}%',
          backgroundColor: '#323232CC',
          textStyle: { color: '#FFF' },
          borderWidth: 0
        },
        series: [{
          type: 'gauge',
          name: 'Sales',
          detail: { formatter: '{value}%' },
          data: [{ value: 30 }],
          min: 0,
          radius: '100%',
          axisLine: {
            show: true,
            lineStyle: {
              color: [[0.35, '#293C55'], [0.65, '#61A0A8'], [1, '#C23731']],
              width: 20
            }
          },
          pointer: {
            length: 90,
            itemStyle: { color: '#293C55' }
          },
          splitLine: {
            length: 20,
            distance: -20,
            lineStyle: {
              color: '#fff',
              width: 1
            }
          },
          axisTick: {
            length: 7,
            distance: -20,
            lineStyle: { color: '#fff' }
          },
          axisLabel: { distance: 40 }
        }]
      }
    },
    pie () {
      return {
        top: '0%',
        legend: {
          top: 210,
          orient: 'horizontal',
          width: 300
        },
        tooltip: {
          formatter: '{a}<br/>{b}: {c} ({d}%)',
          backgroundColor: '#323232CC',
          textStyle: { color: '#FFF' },
          borderWidth: 0
        },
        color: ['#C23731', '#293C55', '#61A0A8', '#E98F6F'],
        series: {
          type: 'pie',
          name: 'Product',
          radius: ['40%', '70%'],
          colorBy: 'data',
          label: {
            normal: {
              position: 'inner',
              formatter: '{d}%'
            },
            emphasis: {
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          selectedMode: 'single',
          data: [
            { name: 'Product 1', value: 400, selected: true, color: '#D53A35' },
            { name: 'Competitor 1', value: 200, selected: false },
            { name: 'Competitor 2', value: 150, selected: false },
            { name: 'Competitor 3', value: 250, selected: false }
          ]
        }
      }
    },
    stackedBar () {
      return {
        grid: {
          top: '8%',
          left: '14%',
          bottom: '8%'
        },
        calculable: true,
        legend: { bottom: '0%' },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          backgroundColor: '#323232CC',
          textStyle: { color: '#FFF' },
          borderWidth: 0
        },
        xAxis: {
          type: 'value',
          position: 'top',
          axisTick: { show: true },
          axisLabel: {
            formatter: '$' + '{value}' // erro quando usa uma string só, usar concatenação
          }
        },
        yAxis: {
          type: 'category',
          data: ['Alex Morrow', 'Joanna Carter', 'Jimmy Joanna', 'Mack Hales']
        },
        series: [{
          name: 'Qualification',
          type: 'bar',
          stack: 'A',
          data: [300, 350, 400, 500],
          color: '#549FD7'
        },
        {
          name: 'Discovery',
          type: 'bar',
          stack: 'A',
          data: [100, 180, 250, 300],
          color: '#DF964F'
        },
        {
          name: 'Quote',
          type: 'bar',
          stack: 'A',
          data: [100, 120, 200, 220],
          color: '#55585A'
        }]
      }
    }
  }
}
</script>

<style scoped>
.c-graph-card {
  border: 1px solid #ADADAD;
  height: 350px;
}
</style>

<style>
th.c-table-element {
  color: #5e5e5e !important
}

td.c-table-element {
  color: #717171 !important
}

.q-table-title {
  color: #5e5e5e
}
</style>
