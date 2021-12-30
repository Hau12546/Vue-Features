<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="LoadExperiences()">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...!!!</p>
      <p v-if="isEmpty">No Experiences Yet!!</p>
      <p v-if="isError && !isEmpty">Something Is Wrong. Try again later!</p>
      <ul v-if="!isLoading && !isEmpty && !isError">
        <survey-result :rating="result.rate"
          :name="result.name" v-for="(result,index) in results" :key="index"></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';
const  VueFeaturesAPI= {
	post:'https://vue-features-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json',
	get:'https://vue-features-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json',
	delete:'https://vue-features-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json'
}
export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data(){
    return {
      results:[],
      isLoading:false,
      isEmpty:false,
      isError:false,
    }
  },
  methods:{
    LoadExperiences(){
      this.isLoading  =true;
      axios.get(VueFeaturesAPI.get,{headers:{'Content-Type':'application/json'}}).then((response)=>{
        if(response.status==200)
        {
          this.results=[];
          const data = response.data;
          if(!data){
            this.isEmpty = true;
            throw new Error('No Experiences');
          };
          for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              this.results.push({id:key,...data[key]});
            }
          }
          this.isLoading = false;
          this.isEmpty = false;
          this.isError = false;
        };
      }).catch((message)=>{
        console.log(message);
        this.isLoading = false;
        this.isError = true;
      });
    },
  },
  // created(){
  //   this.LoadExperiences();
  // },
  mounted(){
    this.LoadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>