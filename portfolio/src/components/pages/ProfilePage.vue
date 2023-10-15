<template>
  <div class="styled-home">
    <div class="top">
      <div class="top-left">
      <div class="img-box"></div>
    </div>
    <div class="top-right">
      <section>
        <h2 class="title">INFOS</h2>
        <ul>
          <li>
            <span>Name : </span>이수민
          </li>
          <li>
            <span>Age : </span>1998.11.13
          </li>
          <!-- <li>
            <span>Phone : </span>010.0000.0000
          </li> -->
          <li>
            <span>Email : </span>callbyy@gmail.com
          </li>
        </ul>
        <div>
          <a href="https://github.com/dddz-r" target="_blank">
            <img src="@/assets/img/logo/github.svg"/>
          </a>
          <a href="https://sumni.tistory.com/" target="_blank">
            <img src="@/assets/img/logo/blog-solid.svg"/>
          </a>
        </div>
      </section>
    </div>
    </div>
    <div class="bottom">         
      <div class="title-box">
        <h2 class="title">INTRODUCE</h2>
        <botton class="download-btn" @click="downloadResume">
          이력서 다운로드
        </botton>
      </div>
      <div class="contents">
        <p>
          컴퓨터공학을 졸업한 3년차 웹개발자 이수민 입니다.
          <br />
          창의적인 문제 해결과 협업을 통해 팀의 목표를 달성하는 데에 주력하고 있습니다.
          <br />
          다양한 의견을 수용과 지속적으로 학습을 통하여 최고의 성과를 내는 개발자가 되겠습니다!!
          <br />
        </p>
      </div>    
    </div>
  </div>
</template>

<script>
import { saveAs } from "file-saver";
export default {
  name: 'ProfilePage',
  data() {
    return {};
  },
  methods: {
    downloadResume(){
      const fetchPdf = async () => {
        const response = await fetch('/files/portfolio_nophonenumber.pdf');
        const arrayBuffer = await response.arrayBuffer();
        return arrayBuffer;
      };

      fetchPdf().then(pdfContent => {
        const pdfBlob = new Blob([pdfContent], { type: 'application/pdf' });
        saveAs(pdfBlob, 'LeeSuminResume.pdf');
      });

      
      // const link = document.createElement('a');
      // link.href = '/assets/files/LeeSuminPortfolio.pdf';
      // link.download = 'LeeSuminResume.pdf';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/mixin';
.styled-home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
}
.top {
  display: flex;
  height: 40vh;
  width: 100%;
  .top-left {
    width: 50%;
    flex: 0 0 35%;
    position: relative;
    max-width: 600px;
    margin: 20px;
      .img-box {
        height: 100%;
        width: 100%;
        /* background-image: url; */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        // border-radius: 15px;
        @include box-shadow;
        position: relative;
        z-index: 1;
      }
  }

  .top-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10%;
    section {
      margin-bottom: 40px;
      .title {
        @include title(25pt);
        text-align: left;
      }
      ul {
        display: flex;
        flex-direction: column;
        li {          
          text-align: left;
          padding-bottom: 10px;
          font-size: 16pt;
          font-weight: 500;
          color: var(--main-color);
          span {
            width: 70px;
            font-weight: 400;
            opacity: 0.8;
            color: #000000;
          }
        }
      }
      div {
        display: flex;
        a {
          cursor: pointer;
          img {
            width: 35px;
            margin-inline: 10px;
          }
        }

      }
    }
  }
}
.bottom {
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 100%;
  .title-box {
    margin: 0px 20px;
    display: flex;
    justify-content: space-between;
    .title {
      @include title(24pt);
    }
    .download-btn {
      height: 40px;
      line-height: 40px;
      width: 200px;
      margin-block: auto;
      padding-left: 12px;
      padding-right: 12px;
      color: #333;
      font-size: 14pt;
      border: 1px solid #ccc;
      border-radius: 6px;
      background-color: #fff;
      box-sizing: border-box;
      transition: all .3s;
      cursor: pointer;

      &:hover {
      background-color: #eee;
      border: 1px solid #eee;
      }
    }
  }
  .contents {
    margin: 0px 20px;

    p {
      text-align: left;
      font-size: 16pt;
      line-height: 1.6;
      word-break: keep-all;
    }
  }  
}

@media screen and (max-width: 800px) {
  .top {
    flex-wrap: wrap;
    height: fit-content;
    .top-left {
    flex: none;
    width: 100%;
    height: 50vh;
    margin: 0px;
    .img-box {
      background-position: center;
    }
  }
  .top-right {
    width: 100%;
    height: 20vh;
    flex: none;
    margin: 5vh 0;
    padding: 0px;
  }
  }

  .bottom{
    height: fit-content;
  }
}
     
</style>
