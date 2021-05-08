<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <h4>{{userName}}</h4>
  <h4>{{userinfo.name}}-{{userinfo.sex}}</h4>
  <button @click="count++">{{count}}</button>
  <el-button type="primary">测试elementplus</el-button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters } = createNamespacedHelpers("user");

import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState({
      userinfo: (state: any) => state.userinfo,
    }),
    ...mapGetters({
      userName: "userName",
    }),
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>