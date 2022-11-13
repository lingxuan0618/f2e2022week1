<template>
  <SectionFaq/>
  <SectionSponsor/>
</template>

<script>
// @ is an alias to /src
import SectionFaq from '@/components/SectionFaq.vue';
import SectionSponsor from '@/components/SectionSponsor.vue';

export default {
  name: 'HomeView',
  components: {
    SectionFaq,
    SectionSponsor,
  },
};
</script>
