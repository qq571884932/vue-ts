<template>
    <div class="box">
        <div class="login">
            <header>
                ts+vue开发后台管理系统
            </header>

            <LoginHeader>
                <div slot="container">
                    <div class="form">
                        <div class="title">登录</div>
                        <div class="f-item">

                        </div>
                        <div class="f-item">

                        </div>
                        <div class="f-item">

                        </div>
                    </div>
                </div>
            </LoginHeader>
        </div>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import LoginHeader from "./LoginHeader.vue";

    @Component({ //修饰器 修饰Login类
        components: {
            LoginHeader
        }
    })
    export default class Login extends Vue { // 继承Vue 并导出 Login类

    }

</script>

<style scoped lang="scss">
    .box {
        width: 100%;
        height: 100%;
        background: url("../../assets/LOLbg.jpg") no-repeat;
        overflow: hidden;
        .login {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            header {
                width: 90%;
                height: 100px;
                line-height: 100px;
                margin: 0 auto;
                text-align: center;
                font-size: 50px;
                color: rgba(255, 255, 255, .8);
                font-weight: bold;
            }
        }
        /*  表单部分  */
        .form{
            width: 500px;
            height: 400px;
            background-color: red;
            margin: 0 auto;
        }
    }
</style>
