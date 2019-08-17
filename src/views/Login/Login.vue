<template>
    <div class="box">
        <div class="login">
            <LoginHeader>
                <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-position="left" label-width="0"
                         slot="container">
                    <div class="form">
                        <div class="title">账号密码登录</div>
                        <!--                            账号-->
                        <el-form-item prop="username">
                            <el-input type="text" v-model="ruleForm.username" placeholder="账号">
                                <i slot="prefix" class="fa fa-user-o"></i>
                            </el-input>
                        </el-form-item>
                        <!--                            密码-->
                        <el-form-item prop="password">
                            <el-input type="text" v-model="ruleForm.password" placeholder="密码">
                                <i slot="prefix" class="fa fa-lock"></i>
                            </el-input>
                        </el-form-item>
                        <!--                            登录按钮-->
                        <el-form-item>
                            <el-button @click.native.prevent="handleSubmit" type="primary"
                                       style="width: 100%">登录
                            </el-button>
                        </el-form-item>
                        <!--                            其他功能(7天登录，和忘记密码)-->
                        <el-form-item>
                            <el-checkbox style="float: left" v-model="ruleForm.autoLogin">七天自动登录</el-checkbox>
                            <el-button @click="$router.push('/password')" class="forget" type="text">忘记密码</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </LoginHeader>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Provide} from "vue-property-decorator";
    import LoginHeader from "./LoginHeader.vue";
    @Component({ //修饰器 修饰Login类
        components: {
            LoginHeader
        }
    })
    export default class Login extends Vue { // 继承Vue 并导出 Login类
        @Provide()
        ruleForm: {
            username: string;
            password: string;
            autoLogin: boolean;
        } = {
            username: "",
            password: "",
            autoLogin: true
        };

        @Provide()
        rules = {
            username: [
                {required: true, message: '请输入账号', trigger: 'blur'},
                {min: 3, max: 10, message: "最少3个字符，最长10个字符"}
            ],
            password: [{required: true, message: '请输入密码', trigger: 'blur'},
                {min: 3, max: 10, message: "最少3个字符，最长10个字符"}],
        };

        handleSubmit(): void {
            // 将 this.$refs["ruleForm"] 转为任意类型
            (this.$refs["ruleForm"] as any).validate( (vaild:boolean)=>{
                if(vaild){

                }else{
                    this.$message({
                        message:"请输入正确内容",
                        type:"error",
                        center:true,
                        offset:100
                    });
                }
            })
        }
    }

</script>

<style scoped lang="scss">
    .box {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #fff;

        .login {
            width: 100%;
            height: 100%;
        }

        /*  表单部分  */
        .form {
            width: 500px;
            text-align: center;
            margin: 100px auto 0;
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2);
            padding: 20px;

            .title {
                height: 50px;
                line-height: 30px;
                text-align: center;
                font-size: 30px;
                color: #000;
            }
        }
    }

    i {
        font-size: 14px;
        margin-left: 8px;
    }

    .forget {
        float: right;
    }
</style>
