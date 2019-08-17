<template>
    <div class="header">
        <header>
            Vue+TypeScript 后台管理系统
        </header>
        <!--插槽-->
        <div class="container">
            <slot name="container"></slot>
        </div>
    </div>
</template>

<script>
    import {Component,Vue} from "vue-property-decorator";
    @Component({
        components:{

        }
    })
    export default class LoginHeader extends Vue{

    }
</script>

<style scoped lang="scss">
    .header header {
        width: 90%;
        min-width: 640px;
        height: 100px;
        line-height: 100px;
        margin: 0 auto;
        text-align: center;
        font-size: 50px;
        color: #000000;
        font-weight: bold;
    }
</style>
