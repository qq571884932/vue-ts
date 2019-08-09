<template>
    <div class="header">
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

<style scoped>

</style>
