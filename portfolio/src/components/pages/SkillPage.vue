<template>
  <div class="skill-container">
    <h1>Skill</h1>
    <div class="falling-blocks-container">
      <div v-for="(row, rowIndex) in blocks" :key="rowIndex" class="block-row">
        <p class="block-header">{{ row.id }}</p>      
        <div
          v-for="(block, colIndex) in row.blocks"
          :key="colIndex"
          class="falling-block"
          :style="{ borderColor: row.color, color: row.color, backgroundColor: row.bgC }"
          ref="blocks"
          :id="'skill_block_' + rowIndex + '_' + colIndex"
          @mouseover="blockMouseOver(rowIndex, colIndex, block, row.color)"
          @mouseout="blockMouseOut(rowIndex, colIndex, block, row.color)"
        >
          {{ block.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillPage',
  data() {
    return {
      blocks: [
        { id: "Language", color: "red", blocks: [{ name: "JAVA", proficiency: "60%" }, { name: "javaScript", proficiency: "70%" }, { name: "C++", proficiency: "60%" }, { name: "C", proficiency: "60%" }] },
        { id: "Tool", color: "blue", blocks: [{ name: "vscode", proficiency: "60%" }, { name: "git", proficiency: "40%" }]},
        { id: "Web_FE", color: "orange", blocks: [{ name: "HTML", proficiency: "80%" }, { name: "CSS", proficiency: "70%" }, { name: "SCSS", proficiency: "60%" }, { name: "jQuery", proficiency: "80%" }, { name: "vue3", proficiency: "70%" }, { name: "react", proficiency: "40%" }, { name: "angularjs", proficiency: "60%" }]},
        { id: "Web_BE", color: "green", blocks: [{ name: "springboot", proficiency: "70%" }, { name: "Node.js", proficiency: "50%" }]},
        { id: "Infra&DB", color: "purple", blocks: [{ name: "mariaDB", proficiency: "80%" }, { name: "oracle", proficiency: "30%" }, { name: "mongoDB", proficiency: "50%" }]},
      ],
      observer: {}
    };
  },
  mounted() {
    // Intersection Observer 생성
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 화면에 노출되는 부분이 50% 이상일 때 감지
    };

    this.observer = new IntersectionObserver(this.handleIntersection, options);

    // 모든 블록에 대해 Observer 등록
    this.$refs.blocks.forEach((block) => {
      this.observer.observe(block);
    });
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 블록이 화면에 나타났을 때 애니메이션 활성화
          entry.target.style.animation = 'fallAnimation 1s ease-in-out forwards';
          
          // 감시 중지
          this.observer.unobserve(entry.target);
        }
      });
    },
    blockMouseOver(rowIndex, colIndex, block, color) {
      let elem = document.getElementById('skill_block_' + rowIndex + '_' + colIndex);
      elem.style.color = "white";
      elem.style.backgroundColor = color;
      elem.innerHTML = block.proficiency;
      // block.flashing = setInterval(() => {
      //   elem.style.backgroundColor = `linear-gradient(to right, ${color}, lightgray)`;
      // }, 200);
    },
    blockMouseOut(rowIndex, colIndex, block, color) {
      let elem = document.getElementById('skill_block_' + rowIndex + '_' + colIndex);
      // clearInterval(block.flashing);
      elem.style.color = color;
      elem.style.backgroundColor = "#ffffff00";
      elem.innerHTML = block.name;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/mixin';
.skill-container{
  width: 100%;
  h1 {
    letter-spacing: 1rem;
    font-size: 28pt;
    margin: 20px;
  }
}
.falling-blocks-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  .block-row {
    margin-inline: 20px;
    display: flex;    
    flex-direction: column;

    .block-header {
      @include title(18pt)
    }

    .falling-block {
      width: 100px;
      height: 40px;
      line-height: 40px;
      margin: 5px;
      border: 1px solid;
      font-size: 14pt;
      padding-inline: 4px;
      opacity: 0; /* 초기에는 투명하게 설정 */
      transition: all 0.3s ease; // 트랜지션 효과 추가
    }
  }  
}

@keyframes fallAnimation {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 800px) {
  .falling-blocks-container {
    .block-row {
      margin-inline: 5px;
      .block-header {
        @include title(16pt)
      }
      .falling-block {
        width: 80px;
        padding-inline: 2px;
        font-size: 12pt;
      }
    }
  }
}
</style>
