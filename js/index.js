var  app=new Vue({
    el:'#app',
    data:{
     name:'hello'
    },
    methods:{

    },
    computed:{

    },


})
// // vue的组件化
// Vue.component('alert',{
//     template:"<button @click='onclick'>弹窗</button>",
//     methods:{
//         onclick:function(){
//             alert('hello')
//         }
//     }
    
// })
// // vue的组件 第一步得命名组件的名字
// // 第二部命名组件的html的代码
// // 第三部就是命名组件的行为
// // vue组件的域
// new Vue({
//     el:"#app"
// })
/**
 * 接下来是vue的组件的局部定义
 */
new  Vue({
    el:"#app",
    components:{
        'alert_box':{
            template:"<button @click='onclick'>弹窗</button>",
            methods:{
                onclick:function(){
                    alert('hello')
                }
            }
        }
    }
})
// 组件的域：全局的域和局部的域
// 全局域的情况比较少，为了避免冲突一般都是局部域
// 局部域更加的灵活