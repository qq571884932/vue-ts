<template>
    <div class="box">
        <div class="login">
            <LoginHeader>
                <el-form :rules="rules" slot="container" :model="form">
                    <div class="form">
                        <div class="title">
                            找回密码
                        </div>
                        <el-form-item prop="account">
                            <el-input v-model="form.account"  placeholder="请输入账号！">
                                <i slot="prefix" class="fa fa-user-o"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="mail">
                            <el-input v-model="form.mail" placeholder="请输入邮箱！">
                                <i slot="prefix" class="fa fa-envelope-open"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click.native.prevent="handlePassword" style="width: 100%" type="primary" size="medium">确定</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </LoginHeader>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue,Provide} from "vue-property-decorator";
    import LoginHeader from "./LoginHeader.vue"
    @Component({
        components: {
            LoginHeader
        },
    })
    export default class Password extends Vue {
        @Provide()
        form:{
            account:string,
            mail:string
        } = {
            account:"",
            mail:""
        };

        @Provide()
        rules = {
            account:[{ required: true, message: '请输入账号', trigger: 'blur' },
                { min:3, message: '最少三个字符', trigger: 'blur' }],
            mail:[{ required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, message: '最少六个字符', trigger: 'blur' }]
        }

        handlePassword():void{
            console.log("A")
        }
    }
</script>

<style scoped lang="scss">
.form{
    width: 500px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rgba(0,0,0,.1);
    .title{
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        margin-bottom: 20px;
    }
    i{
        margin-left: 8px;
        font-size: 14px;
    }
}
</style>
