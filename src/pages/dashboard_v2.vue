<template>
  <q-page class="bg-grey-4 q-mt-md">
    <div class="q-px-md q-pb-md gutter-y-sm"> <!-- container da pagina toda -->
      <div class="row">
        <q-card class="col-12 row bg-white" style="border-radius: 4px">
          <q-card flat class="col-xs-12 col-lg-3 q-px-lg q-py-md c-separator">
            <div>
              <div class="column float-left">
                <div class="c-text-blue c-top-card-title">900</div>
                <div class="c-top-card-subtitle">Total orders</div>
              </div>
              <div class="float-right">
                <q-icon name="shopping_cart" size="3.5em" class="c-text-blue"></q-icon>
              </div>
              <div class="float-clear"/>
            </div>

            <div class="c-progress-base q-mt-md">
              <div class="c-progress-1" style="width: 70%"/>
            </div>
          </q-card>
          <!-- fim card 1 -->
          <q-card flat class="col-xs-12 col-lg-3 q-px-lg q-py-md c-separator">
            <div>
              <div class="column float-left">
                <div class="c-text-red c-top-card-title">1050</div>
                <div class="c-top-card-subtitle">Total expenses</div>
              </div>
              <div class="float-right">
                <q-icon name="account_balance_wallet" size="3.5em" class="c-text-red"></q-icon>
              </div>
              <div class="float-clear"/>
            </div>

            <div class="c-progress-base q-mt-md">
              <div class="c-progress-2" style="width: 30%"/>
            </div>
          </q-card>
          <!-- fim card 2 -->
          <q-card flat class="col-xs-12 col-lg-3 q-px-lg q-py-md c-separator">
            <div>
              <div class="column float-left">
                <div class="c-text-green c-top-card-title">80%</div>
                <div class="c-top-card-subtitle">Total profit</div>
              </div>
              <div class="float-right">
                <q-icon name="account_balance" size="3.5em" class="c-text-green"></q-icon>
              </div>
              <div class="float-clear"/>
            </div>

            <div class="c-progress-base q-mt-md">
              <div class="c-progress-3" style="width: 80%"/>
            </div>
          </q-card>
          <!-- fim card 3 -->
          <q-card flat class="col-xs-12 col-lg-3 q-px-lg q-py-md">
            <div>
              <div class="column float-left">
                <div class="c-text-yellow c-top-card-title">720</div>
                <div class="c-top-card-subtitle">New customers</div>
              </div>
              <div class="float-right">
                <q-icon name="people" size="3.5em" class="c-text-yellow"></q-icon>
              </div>
              <div class="float-clear"/>
            </div>

            <div class="c-progress-base q-mt-md q-mb-xs">
              <div class="c-progress-4" style="width: 25%"/>
            </div>
          </q-card>
        </q-card> <!-- fim QCard topo -->
      </div>
      <!-- fim primeira div -->

      <div class="row gutter-sm">
        <div class="col-xs-12 col-lg-7 c-mid-row">
          <q-card class="bg-white fit">
            <q-card-title class="text-grey-8">Sales VS. Quotas</q-card-title>
            <q-card-separator inset/>
            <q-card-main class="c-graph-container">
              <IEcharts :option="lines" ref="lines" :resizable='true'/>
            </q-card-main>
          </q-card>
        </div>

        <div class="col-xs-12 col-lg-5 c-mid-row">
          <q-card class="bg-white fit">
            <q-card-title class="text-grey-8">Market Share & Growth</q-card-title>
            <q-card-separator inset/>
            <q-card-main class="c-graph-container">
              <IEcharts :option="bar" ref="bar" :resizable="true"/>
            </q-card-main>
          </q-card>
        </div>
      </div>
      <!-- fim segunda div-->

      <div class="row gutter-sm">
        <div class="col-xs-12 col-lg-4 c-bottom-row">
          <q-card class="bg-white fit">
            <q-card-title class="text-grey-8">Key Competitors</q-card-title> <!--FIXME-->
            <q-card-separator inset/>
            <q-card-main class="c-graph-container">
              <IEcharts :option="pie" ref="pie" :resizable="true"/>
            </q-card-main>
          </q-card>
        </div>

         <div class="col-xs-12 col-lg-8 c-bottom-row">
          <q-card class="bg-white fit">
            <q-card-title class="text-grey-8">Key Competitors</q-card-title>
            <q-card-separator inset/>
            <q-card-main class="c-graph-container">
              <IEcharts :option="stackedBar" ref="bar" :resizable="true"/> <!--FIXME-->
            </q-card-main>
          </q-card>
        </div>
      </div>

      <div class="row gutter-xs">
        <div class="col-12">
          <q-card flat class="round-borders bg-white c-table-card">
            <q-card-title class="text-grey-8">All Activities</q-card-title>
            <q-table
              :data="tableData"
              :columns="columns"
              row-key="name"
            >
              <q-td slot="body-cell-desc" slot-scope="props" :props="props">
                <q-chip small color="secondary">{{ props.status }}</q-chip>
              </q-td>
            </q-table>
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
        name: 'Status',
        required: true,
        label: 'Status',
        align: 'left',
        field: 'status',
        sortable: true,
        classes: 'c-table-status',
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
        status: 'Pending',
        creation: '12-09-2019'
      },
      {
        id: 'C002',
        name: 'New drug discussion',
        re: 'Meeting',
        owner: 'John',
        status: 'Completed',
        creation: '09-02-2019'
      },
      {
        id: 'C003',
        name: 'Universal services discussion',
        re: 'Meeting',
        owner: 'John',
        status: 'Completed',
        creation: '03-25-2019'
      },
      {
        id: 'C004',
        name: 'Add on business',
        re: 'Business',
        owner: 'John',
        status: 'Pending',
        creation: '03-18-2019'
      },
      {
        id: 'C005',
        name: 'Promotional Activity',
        re: 'Personal',
        owner: 'John',
        status: 'Completed',
        creation: '04-09-2019'
      },
      {
        id: 'C006',
        name: 'Advanced communications',
        re: 'Presentation',
        owner: 'John',
        status: 'Completed',
        creation: '12-09-2019'
      },
      {
        id: 'C007',
        name: 'New drug discussion',
        re: 'Meeting',
        owner: 'John',
        status: 'Completed',
        creation: '09-02-2019'
      },
      {
        id: 'C008',
        name: 'Universal services discussion',
        re: 'Meeting',
        owner: 'John',
        status: 'Pending',
        creation: '03-25-2019'
      },
      {
        id: 'C009',
        name: 'Add on business',
        re: 'Business',
        owner: 'John',
        status: 'Pending',
        creation: '03-18-2019'
      },
      {
        id: 'C010',
        name: 'Promotional Activity',
        re: 'Personal',
        owner: 'John',
        status: 'Pending',
        creation: '04-09-2019'
      }
    ]
  }),
  computed: { // chart data
    lines () {
      return {
        grid: { top: '4%' },
        legend: { bottom: '4%' },
        tooltip: {
          backgroundColor: '#323232CC',
          textStyle: { color: '#FFF' },
          borderWidth: 0
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep'],
          axisLine: {
            lineStyle: { color: 'grey' }
          },
          axisTick: { show: false },
          axisLabel: { color: 'grey' }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: { color: 'grey' }
          },
          axisTick: { show: false },
          axisLabel: { color: 'grey' }
        },
        series: [
          {
            name: 'Sales',
            data: [0, 600, 300, 700, 700, 1330, 600, 500, 0],
            type: 'line',
            areaStyle: {},
            smooth: true,
            color: '#E4A3E2'
          },
          {
            name: 'Goals',
            data: [0, 300, 600, 400, 1000, 730, 840, 300, 0],
            type: 'line',
            areaStyle: {},
            smooth: true,
            color: '#25C0EA'
          }
        ]
      }
    },
    stackedBar () {
      return {
        grid: { top: '4%', left: '15%' },
        legend: { bottom: '5%' },
        tooltip: {
          backgroundColor: '#323232CC',
          textStyle: { color: '#FFF' },
          borderWidth: 0
        },
        color: ['#CC9DD1', '#9CEBAF', '#41EFF7'],
        xAxis: {
          type: 'value',
          position: 'top',
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            formatter: '$' + '{value}',
            color: 'white'
          }
        },
        yAxis: {
          type: 'category',
          data: ['Alex Morrow', 'Joanna Carter', 'Jimmy Joanna', 'Mack Hales'],
          axisLine: { show: false },
          axisTick: { show: false }
        },
        series: [{
          name: 'Qualification',
          type: 'bar',
          stack: 'A',
          data: [300, 350, 400, 500]
        },
        {
          name: 'Discovery',
          type: 'bar',
          stack: 'A',
          data: [100, 180, 250, 300]
        },
        {
          name: 'Quote',
          type: 'bar',
          stack: 'A',
          data: [100, 120, 200, 220]
        }]
      }
    },
    bar () {
      return {
        grid: { top: '4%' },
        legend: { bottom: '5%' },
        tooltip: {
          backgroundColor: '#323232CC',
          textStyle: { color: '#FFF' },
          borderWidth: 0
        },
        xAxis: {
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
          axisLabel: {
            inside: false,
            color: 'white'
          },
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: 'grey' },
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            lineStyle: { color: 'grey' },
            show: false
          },
          axisTick: { show: false },
          axisLabel: { color: 'white' }
        },
        color: ['#E4A3E2', '#25C0EA'],
        series: [{
          name: 'Market Share',
          type: 'bar',
          barGap: '15%',
          data: [220, 120, 199, 234, 200, 330]
        },
        {
          name: 'Growth',
          type: 'bar',
          data: [180, 182, 120, 290, 290, 320]
        }]
      }
    },
    pie () {
      return {
        legend: {
          top: 230,
          orient: 'horizontal',
          width: 300
        },
        tooltip: {
          formatter: '{a}<br/>{b}: {c} ({d}%)',
          backgroundColor: '#323232CC',
          textStyle: { color: '#FFF' },
          borderWidth: 0
        },
        color: ['#66E398', '#CC9DD1', '#F0D377'],
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
            { name: 'Product 1', value: 65, selected: true },
            { name: 'Competitor 1', value: 20, selected: false },
            { name: 'Competitor 2', value: 15, selected: false }
          ]
        }
      }
    }
  }
}
</script>
<style scoped>
.c-top-card-title {
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 2px;
}

.c-top-card-subtitle {
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  color: #868686;
}

.c-separator {
  border-radius: 0px;
  border-right: 1px solid #E7E7E7;
}

.c-progress-base {
  height: 8px;
  border-radius: 3px !important;
  background: #E9ECEF;
}

.c-text-blue {
  color: #0DCEEC;
}

.c-text-red {
  color: #FE4B57;
}

.c-text-green {
  color: #15CA20;
}

.c-text-yellow {
  color: #FF9700;
}

.c-progress-1 {
  border-radius: inherit;
  height: 100%;
  background: linear-gradient(45deg, #17EAD9, #6078EA);
}

.c-progress-2 {
  border-radius: inherit;
  height: 100%;
  background: linear-gradient(45deg, #f54ea2, #ff7676);
}

.c-progress-3 {
  border-radius: inherit;
  height: 100%;
  background: linear-gradient(45deg, #42e695, #3bb2b8);
}

.c-progress-4 {
  border-radius: inherit;
  height: 100%;
  background: linear-gradient(45deg, #ffdf40, #ff8359);
}

.c-mid-row {
  display: block;
  height: 420px !important;
}

.c-bottom-row {
  display: block;
  height: 369px !important;
}

.chip_completed {
  background: green
}

.chip_pending {
  background: red
}
 </style>
