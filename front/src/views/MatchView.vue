<template>
<MatchComponent></MatchComponent>
</template>
<script>
import MatchComponent from '@/components/MatchComponent.vue';

export default {
  name: 'HomeView',
  components: { MatchComponent
  },
  data:() => ({
    home: true
  })
  
}
</script>
