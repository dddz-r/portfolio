<template>
  <div class="skills-div">
    <div class="skill-card">
      <div class="skill-header">
        Language
      </div>
      <div class="skill-content">
        <li>JAVA</li>
        <li>JAVA</li>
        <li>JAVA</li>
      </div>
    </div>
    <div class="skill-card">
      <div class="skill-header">
        Language
      </div>
      <div class="skill-content">
        <li>JAVA</li>
        <li>JAVA</li>
        <li>JAVA</li>
        <li>JAVA</li>
        <li>JAVA</li>
        <li>JAVA</li>
      </div>
    </div>
    <div class="skill-card">
      <div class="skill-header">
        Language
      </div>
      <div class="skill-content">
        <li>JAVA</li>
        <li>JAVA</li>
        <li>JAVA</li>
      </div>
    </div>
    <div class="skill-card">
      <div class="skill-header">
        Language
      </div>
      <div class="skill-content">
        <li>JAVA</li>
        <li>JAVA</li>
        <li>JAVA</li>
      </div>
    </div>
    <div class="skill-card">
      <div class="skill-header">
        Language
      </div>
      <div class="skill-content">
        <li>JAVA</li>
        <li>JAVA</li>
        <li>JAVA</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillPage',
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/mixin';
    .skills-div{
      display: flex;
      height: 100%;
      width: 100%;
    }
    .skill-card {
      margin: 10px;
      height: 100%;
      width: 100%;
      background-color: #fff;
      @include box-shadow;
      @include transitions;
      .skill-header {
        background-color: orange;
        padding: 10px 20px;
        font-size: 14pt;
      }
      .skill-content {
        font-size: 13pt;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        li {
          margin: 5px;
        }
      }
    }

    @media screen and (max-width: 800px) {
      .skills-div{
        display: flex;
        flex-direction: column;
      }
      .skill-card {
        height: 200px;
        .skill-content{
          height: 160px;
          display: flex;
          flex-direction: column;          
          flex-wrap: wrap;
        }
      }
    }
</style>
