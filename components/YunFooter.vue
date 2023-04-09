<script lang="ts" setup>
import YunFooter from "valaxy-theme-yun/components/YunFooter.vue";
</script>

<template>
  <YunFooter>
    <!--<NetdunLogo />-->
    <VCLiveTime start-time="2023-04-01">
      <template #live-time-before>
        <span>春夏秋冬，小屋已通电</span>
      </template>
      <template #live-time-after>
        <span>(●'◡'●)</span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>