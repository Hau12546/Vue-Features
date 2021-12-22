<template>
  <form @click.prevent="SubmitForm">
    <div class="form-control" :class="{'invalid': InvalidName}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model.lazy="userInfo.userName" @blur="ValidateUserName()"  />
      <p v-if="InvalidName">Please enter valid name !!!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userInfo.userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="userInfo.userReferer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="Interest" value="news" type="checkbox" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="Interest" value="tutorials" type="checkbox" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="Interest" value="nothing" type="checkbox" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="How" type="radio" value="video" v-model="How"/>
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="How" type="radio" value="blogs" v-model="How"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="How" type="radio" value="others" v-model="How"/>
        <label for="how-other">Other</label>
      </div>
    </div>
    <Ratings :modelValue="rating" @Updated:modelValue="SubmitForm"></Ratings>
    <div>
      <button type="submit" >Save Data</button>
    </div>
  </form>
</template>

<script>
import Ratings from './Ratings.vue'
export default {
  components:{
    Ratings
  },
  data(){
    return{
      userInfo:{
        userName:'',
        userAge:null,
        userReferer:'google',
      },
      rating:'A',
      InvalidName:false,
      Interest:[],
      How:[],
    }
  },
  watch:{
    InvalidName(value){
      
    }
  },
  methods:{
    SubmitForm(ratings){
      //v-model return type number as a number
      //this.$refs.name.value return type number as a string
      // console.log(this.userInfo)
      // console.log(this.userInfo['userName']);
      // console.log(this.userInfo['userAge']);
      // console.log(this.userInfo['userReferer']);
      console.log(this.Interest);
      console.log(this.How);
      // this.Interest= [];
      // this.userHow = [];
      console.log(ratings.target.closest('li button'));
      this.rating = ratings.target.closest('li button').innerText;
      // this.rating = null;
    },
    ValidateUserName(){
      if(this.userInfo.userName.trim().length==0) this.InvalidName = true;
      if(this.userInfo.userName.trim().length>0) this.InvalidName = false;
    }
  }
}
</script>

<style scoped>

form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border: 1px solid red;
  box-shadow:   3px 3px red, 1px 1px red, 3px 3px red;
}

.form-control.invalid label {
  color: red;
}

.form-control.invalid p {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>