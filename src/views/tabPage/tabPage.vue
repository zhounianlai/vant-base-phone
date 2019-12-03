<template>
    <div class="tab-page">
        <keep-alive>
            <router-view />
        </keep-alive>
        <tab-bar />
    </div>
</template>

<script>
import TabBar from "@@/tabTar/tabTar";

export default {
    name: "tabPage",
    components: {
        TabBar
    }
};
</script>