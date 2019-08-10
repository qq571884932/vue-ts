<template>
    <div class="box">
        <div class="login">
            <header>
                ts+vue开发后台管理系统
            </header>

            <LoginHeader>
                <div slot="container">
                    <div class="form">
                        <div class="title">账号密码登录</div>
                        <div class="f-item">
                            <input :placeholder="p_name" type="text">

                            <input :placeholder="p_password" type="text">
                        </div>
                    </div>
                    <button id="login">登录</button>
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
        },
        data(){
            return{
                p_name:"账号",
                p_password:"密码"
            }
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
                min-width: 640px;
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
            text-align: center;
            margin: 100px auto 0;

            .title{
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 30px;
                color: #fff;
            }
            .f-item{
                input{
                    width: 400px;
                    height: 50px;
                    border-radius: 50px;
                    background-color: rgba(255,255,255,.5);
                    outline: none;
                    border: none;
                    color: rgba(255,255,255,.8);
                    font-size: 24px;
                    padding: 0 20px;
                    margin-top: 20px;
                }

            }

        }
        #login{
            position: relative;
            z-index: 2;
            display: block;
            overflow: hidden;
            width: 400px;
            height: 50px;
            border: none;
            outline: none;
            margin: 20px auto 0;
            background-color: rgba(255, 255, 255, 0.50);
            color: rgba(0, 0, 0, 0.50);
            font-size: 20px;
            transition: all .3s;
            cursor: pointer;
        }
        #login:after{
            content: '';
            position: absolute;
            z-index: -1;
            display: block;
            top: -68%;
            left: 50%;
            width: 0;
            height: 120px;
            background-color: rgba(255, 255, 255, 0.68);
            transform: rotate(10deg);
            transition: all .3s;
        }
        #login:hover{
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            border-radius: 50px;
        }
        #login:hover:after{
            width: 500px;
            margin-left: -250px;
        }
    }
</style>
