<template>
  <!-- <header>
    Vue Course Goals
  </header> -->
  <!-- <section id="user-goals">
   <h1>{{outputGoals()}}</h1> -->
     <!-- <div id="separate-line"></div>
    <p class="catch-phrase">{{courseGoalA}}</p> 
    <p class="catch-phrase">{{outputGoals()}}</p> 
    <p class="catch-phrase" v-html="outputGoals()"></p>
    <p class="catch-phrase">Learn More <a v-bind:href="VueLink">About Vue</a></p> -->
    <!-- <button v-on:click="IncreaseMethod()" type="button" class="btn btn-success">Increase</button>
    <button v-on:click="DecreaseMethod()" type="button" class="btn btn-danger">Decrease</button> -->
    <!-- <p class="catch-phrase" v-once>Initial Value: {{result/result}}</p> -->
    <!-- <p class="catch-phrase">Value: {{counter}}</p> -->
    <!-- <input class="form-input" type="text" v-model="name" >
    <div class="item-container d-flex">
      <button v-on:click="Submit()" type="button" class="btn btn-primary">Submit</button>
      <button v-on:click="Reset()" type="button" class="btn btn-secondary">Reset</button>
    </div>
    <p v-if="name.length>0" class="catch-phrase">{{FullName}}</p> -->
    <!-- <div class="item-container d-flex">
    <div class="item-container" v-bind:class="FirstChoice" v-on:click="HighlightChoice('A')">A</div>
    <div class="item-container" v-bind:class="{Box: Secondchosen}" v-on:click="HighlightChoice('B')">B</div>
    <div class="item-container" v-bind:class="[{Box: Thirdchosen}]" v-on:click="HighlightChoice('C')">C</div>
    </div>
  </section> -->
  <!-- <Assignment1/> -->
  <!-- <Assignment2/> -->
  <!-- <Assignment3/> -->
  <!-- <assignment4/> -->
  <!-- <ConditionalRendering/> -->
  <!-- <MonsterSlayer/> -->
  <!-- <VueDeepWorks/> -->
  <!-- <IntroducingComponent/> -->
  <!-- <DeepDiveComponents/> -->
  <!-- <LearningApp/> -->
  <!-- <TheForm/> -->
  <!-- <SurveyApp/> -->
  <!-- <routing/> -->
  <!-- <VueXTemplate/> -->
  <!-- <vuex-main/>, -->
  <coach-page/>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Assignment1 from './components/Assignment1.vue'
// import Assignment2 from './components/Assignment2.vue'
// import Assignment3 from './components/Assignment3.vue'
// import Assignment4 from './components/Assignment4'
// import ConditionalRendering from './components//ConditionalRendering.vue'
// import MonsterSlayer from './components/MonsterSlayer/MonsterSlayer'
// import  VueDeepWorks  from './components/VueBehindTheScene/VueDeepWorks'
// import IntroducingComponent from "./components/IntroducingComponent/IntroducingComponent.vue";
// import ActiveUser from "./components/Assignment6/ActiveUser"
// import DeepDiveComponents from "./components/DeepDiveComponents/DeepDiveComponents";
// import LearningApp from "./components/Learning Resource App/LearningResourceApp/LearningApp"
// import TheForm from './components/Forms/TheForm.vue'\
// import SurveyApp from "./components/HttpRequests/survey/SurveyApp.vue"
// import Routing from "./components/Routing/Routing.vue"
// import VueXTemplate from "./components/VueX/VueXTemplate/VueXTemplate.vue"
// import VuexMain from './components/VuexExercises/VuexMain/VuexMain.vue'
import CoachMainPage from './components/CoachFinder/Pages/CoachMainPage/CoachMainPage.vue'
export default {
  name: 'App',
  components:{
    // Assignment1,
    // Assignment2,
    // Assignment3,
    // Assignment4,
    // ConditionalRendering,
    // MonsterSlayer,
    // VueDeepWorks,
    // IntroducingComponent,
    // DeepDiveComponents,
    // LearningApp,
    // TheForm,
    // SurveyApp,
    // 'routing':Routing,
    // VueXTemplate,
    // 'vuex-main':VuexMain
    'coach-page':CoachMainPage
  },
  data(){
    return {
      courseGoalA:'Finish the couse and learn Vue!',
      courseGoalB:'Build Vue App!',
      VueLink:'https://vuejs.org',
      counter:1,
      name:'',
      temp:'',
      Firstchosen:false,
      Secondchosen:false,
      Thirdchosen:false,
    };
  },
  watch:{
    counter(){
      if(this.counter>50)
      {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  methods:{
    outputGoals(){
      return (((Math.random()*10)+1)>5)?this.courseGoalA:this.courseGoalB;
    },
    IncreaseMethod(){
      return this.counter+=10;
    },
    DecreaseMethod(){
      return this.counter-=10;
    },
    SetName(e){
      e.preventDefault();
      
    },

    Submit(){
      // this.name  = this.FullName();
    },
    Reset(){
      this.name='';
    },
    HighlightChoice(choice){
      console.log(choice)
      switch (choice) {
        case 'A':
          {
            this.Firstchosen = true;
            this.Secondchosen = false;
            this.Thirdchosen = false;
            break;
          }
        case 'B':
          {
            this.Firstchosen = false;
            this.Secondchosen = true;
            this.Thirdchosen = false;
            break;
          }
        case 'C':
          {
            this.Firstchosen = false;
            this.Secondchosen = false;
            this.Thirdchosen = true;
            break;
          }
        default:
          {
            this.Firstchosen = true;
            this.Secondchosen = false;
            this.Thirdchosen = false;
            break;
          }
      }
    },
  },
  computed:{
    FullName(){
      if(!this.name){
        return;
      }
      return `${this.name} Connor`;
    },
    FirstChoice(){
      return {Box:this.Firstchosen}
    }
  },
}
</script>

<style  scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0;
  padding: 0;
}


header{
  display: block;
  padding: 1em;
  background-color: #159b42;
  color:  rgb(90, 85, 85);
  text-align: center;
}
#user-goals{
  display: block;
  margin-inline: 20%;
  margin-block: 1em;
  padding: 1em;
  border: 1px solid #159b42 ;
  box-shadow: -3px 3px #159b42, -1px 1px #159b42, -3px 3px #159b42 ;
  border-radius: 10px 10px 10px 10px;
  color: #159b42;
}
#separate-line{
  border-bottom: 10px solid #2c3e50;
  border-radius: 10px 10px 10px 10px;
}
#user-goals>h1{
  margin-inline: auto;
}
.catch-phrase{
  display: block;
  position: relative;
  margin-inline: 40%;
  padding: .5em;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  border: 1px solid #159b42;
  border-radius: 30px;
  background-color: #159b42;
  color: #FFFF;
  font-weight: 700;
}

.btn{
  padding: .5em;
  color: #FFFF;
  background-color: #159b42;
  border: 1px solid #FFFF;
  border-radius: 10px;
  font-size: 1.25rem;
  outline:none
}

.item-container{
  margin-block: .5em;
  padding: .5em;
  max-width: 100%;
  text-overflow: ellipsis;
  background-color: #65af7d;
  overflow: hidden;
}

div[class~=Box]{
  border: 1px dotted #d44830;
  background-color: #473cda;
}

div[class~=d-flex]{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.btn:hover{
  background-color: #244ec0;
}
button[class~=btn-danger]{
  background-color: #d44830;
}

button[class~=btn-success]{
  background-color: #159b42;
}

button[class~=btn-primary]{
    background-color: #0f3bcc;
}

button[class~=btn-secondary]{
    background-color: #8e919b;
}

.form-input{
  size: .2em;
  padding: .2em;
  border: 3px solid #159b42;
  border-radius: 10px;
  font-size: 1.5rem;
}

.form-input:hover,.form-input:focus{
  border: 3px solid #3b30d4!important;
}

.nav-list{
    display: block;
    position: relative;
    max-height: 200px;
    padding: .5em;
    margin-inline: 0%;
    max-width: 100%;
    list-style-type: disc;
    background-color: #8ea094;
    color: #FFFF;
    overflow: auto;
}

.list-item{
    font-size: 1.25rem;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: rgb(42, 45, 202)!important;
}
</style>
