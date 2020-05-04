<template>
    <div>
        <!-- <order-header :title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header> -->
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>

// import OrderHeader from './../components/order-header'
import ServiceBar from './../components/service-bar'
import NavFooter from './../components/nav-footer'

export default {
    name:'order',
    data(){
        return {
            title:'',
            tip:''
        }
    },
    components:{
        // OrderHeader,
        ServiceBar,
        NavFooter
    },
    // mounted(){
    //     let path = this.$route.path;
    //     // console.log(path);
    //     if(path == '/order/confirm'){
    //         this.title = '订单确认';
    //         this.tip = '请认真填写收货地址';
    //     }else if(path == '/order/list'){
    //         this.title = '订单列表';
    //         this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
    //     }else if(path == '/order/pay'){
    //         this.title = '订单支付';
    //         this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
    //     }else{
    //         this.title = '订单支付';
    //         this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
    //     }
    // },
}
</script>