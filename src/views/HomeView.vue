<template>
  <HeaderNav/>
  <SectionHome/>
  <SectionAward/>
  <SectionFaq/>
  <SectionSponsor/>
</template>

<script>
// @ is an alias to /src
import HeaderNav from '@/components/HeaderNav.vue';
import SectionHome from '@/components/SectionHome.vue';
import SectionAward from '@/components/SectionAward.vue';
import SectionFaq from '@/components/SectionFaq.vue';
import SectionSponsor from '@/components/SectionSponsor.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderNav,
    SectionHome,
    SectionAward,
    SectionFaq,
    SectionSponsor,
  },
};
</script>
