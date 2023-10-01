<template>
  <div>
  <!-- Hero -->
  <section class="et-hero-tabs">
    <h1>STICKY SLIDER NAV</h1>
    <h3>Sliding content with sticky tab nav</h3>
    <div class="et-hero-tabs-container">
      <a class="et-hero-tab" href="#tab-profile">Profile</a>
      <a class="et-hero-tab" href="#tab-skill">Skill</a>
      <a class="et-hero-tab" href="#tab-career">Career</a>
      <a class="et-hero-tab" href="#tab-portfolio">Portfolio</a>
      <a class="et-hero-tab" href="#tab-contacts">Contacts</a>
      <span class="et-hero-tab-slider"></span>
    </div>
  </section>

  <!-- Main -->
  <main class="et-main">
    <section class="et-slide" id="tab-profile">
      <!-- <h1>Profile</h1> -->
      <ProfilePage></ProfilePage>
    </section>
    <section class="et-slide" id="tab-skill">
      <h1>Skill</h1>
      <h3>something about flexbox</h3>
    </section>
    <section class="et-slide" id="tab-career">
      <h1>Career</h1>
      <h3>something about react</h3>
    </section>
    <section class="et-slide" id="tab-portfolio">
      <!-- <h1>Portfolio</h1> -->
      <PortfolioPage></PortfolioPage>
    </section>
    <section class="et-slide" id="tab-contacts">
      <h1>Contacts</h1>
      <h3>something about other</h3>
    </section>
  </main>
  </div>
</template>

<script>
// import { mapStores, storeToRefs } from 'pinia';
import ProfilePage from '@/components/pages/ProfilePage.vue';
import PortfolioPage from '@/components/pages/PortfolioPage.vue';
export default {
  name: 'MainPage',
  components: {
    ProfilePage,
    PortfolioPage
  },
  data() {
    return {
      currentId: null,
      currentTab: null,
      tabContainerHeight: 70,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);

    // 여기서 필요한 경우에 초기화 코드를 추가할 수 있어

    // 예: this.checkTabContainerPosition();
    //     this.findCurrentTabSelector();
  },

  methods: {
    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop = document.querySelector(element.getAttribute('href')).offsetTop - this.tabContainerHeight + 1;
      // window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    },

    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    },

    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    },

    checkTabContainerPosition() {
      let offset = document.querySelector('.et-hero-tabs').offsetTop + document.querySelector('.et-hero-tabs').offsetHeight - this.tabContainerHeight;
      if (window.scrollY > offset) {
        document.querySelector('.et-hero-tabs-container').classList.add('et-hero-tabs-container--top');
      } else {
        document.querySelector('.et-hero-tabs-container').classList.remove('et-hero-tabs-container--top');
      }
    },

    findCurrentTabSelector() {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      document.querySelectorAll('.et-hero-tab').forEach(function (tab) {
        let id = tab.getAttribute('href');
        let offsetTop = document.querySelector(id).offsetTop - self.tabContainerHeight;
        let offsetBottom = document.querySelector(id).offsetTop + document.querySelector(id).offsetHeight - self.tabContainerHeight;
        if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
          newCurrentId = id;
          newCurrentTab = tab;
        }
      });
      if (this.currentId !== newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    },

    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = window.getComputedStyle(this.currentTab).width;
        left = this.currentTab.getBoundingClientRect().left;
      }
      document.querySelector('.et-hero-tab-slider').style.width = width;
      document.querySelector('.et-hero-tab-slider').style.left = left + 'px';
    },
  },

}
</script>

<style scoped lang = "scss">
  @import "@/assets/scss/main.scss";
</style>
