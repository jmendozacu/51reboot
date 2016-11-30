!function(){
     // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pie4'));

        // 指定图表的配置项和数据

let option = {
    title:{
        // text:'助攻能力'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    // legend: {
    //     // orient: 'vertical',
    //     x: 'center',
    //     data:['AST Adj','Potential AST','others','FT AST','Secondary AST','AST']
    // },
    //     toolbox:{
    //                 top:15,
    //     feature:{
    //         dataView:{
    //             show:true
    //         }
    //     }
    // },
    series: [
        {
            name:'Curry AST Ability',
            type:'pie',
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
            data:[
                {value:9.9, name:'AST Adj'},
                {value:12.3, name:'Potential AST'},
                {value:41.9, name:'others'}
            ]
        },
        {
            name:'Curry AST Ability',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:6.7, name:'AST'},
                {value:0.7, name:'FT AST'},
                {value:2.5, name:'Secondary AST'},
                {value:12.3, name:'Potential AST'},
                {value:41.9, name:'others'}
            ]
        }
    ]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}()