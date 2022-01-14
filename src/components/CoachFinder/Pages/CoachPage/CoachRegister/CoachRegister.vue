<template>
  <base-container>
    <template #customContainer>
      <div class="trainer-form">
        <base-heading :HeaderType="'h3'"><template #h3>Register Your Trainer List</template></base-heading>
        <form action="" @click.prevent>
          <div class="form-input">
            <base-label for="">FirstName:</base-label>
            <input type="text" placeholder="FirstName" @blur="FormValidator()" v-model.trim="firstName.val" />
            <label v-if="!firstName.isValid && firstName.val!=''">Invalid FirstName</label>
          </div>
          <div class="form-input">
            <base-label for="">LastName:</base-label>
            <input type="text" placeholder="LastName" @blur="FormValidator()" v-model.trim="lastName.val" />
            <label v-if="!lastName.isValid && lastName.val!=''">Invalid LastName</label>
          </div>
          <div class="form-input">
            <base-label for="">Description:</base-label>
            <textarea placeholder="Your Self Introduction" @blur="FormValidator()"
              v-model.trim="description.val"></textarea>
            <label v-if="!description.isValid && description.val!=''">Invalid Description</label>
          </div>
          <div class="form-input">
            <base-label for="">Major:</base-label>
            <select multiple size="1" v-model="major.val" @click="FormValidator()">
              <option :value="item" v-for="(item, index) in GetITSubjectList" :key="index">
                {{ item }}
              </option>
            </select>
            <label v-if="!major.isValid && major.val!=''">Have at least one Major</label>
          </div>
          <div class="form-input">
            <base-label for="">Avatar:</base-label>
            <input type="text" minlength="2" placeholder="Avatar" @blur="FormValidator()"
              v-model.trim.number="avatar.val" />
          </div>
          <div class="form-input">
            <base-label for="">Wages:</base-label>
            <input type="text" minlength="2" maxlength="7" placeholder="Perhour" @blur="FormValidator()"
              v-model.trim.number="wages.val" />
            <label v-if="!wages.isValid && wages.val!=''">Invalid Wages</label>
          </div>
          <div>
            <base8-button :disabled="!isFormValid" @click="OnSubmit()"><template #customButton>Submit</template>
            </base8-button>
          </div>
        </form>
      </div>
    </template>
  </base-container>
</template>


<script>
  import {
    mapGetters
  } from 'vuex';
  import CoachAppAPI from '../../../Share/API'
  export default {
    data() {
      return {
        firstName: {
          val: '',
          isValid: false,
        },
        lastName: {
          val: '',
          isValid: false,
        },
        description: {
          val: '',
          isValid: false,
        },
        major: {
          val: [],
          isValid: false,
        },
        rates: {
          val: 1,
          isValid: false,
        },
        wages: {
          val: 0,
          isValid: false,
        },
        avatar:{
          val:'',
          isValid:false
        },
        isFormValid: false,
      };
    },
    computed: {
      ...mapGetters('CoachStore', ['GetITSubjectList']),
      ...mapGetters(['GetToken'])
    },
    methods: {
      FormValidator() {
        if (this.firstName.val && !Number(this.firstName.val)) {
          this.firstName.isValid = true;
          this.isFormValid = true;
        } else {
          this.firstName.isValid = false;
          this.isFormValid = false;
        }

        if (this.lastName.val && !Number(this.lastName.val)) {
          this.lastName.isValid = true;
          this.isFormValid = true;
        } else {
          this.lastName.isValid = false;
          this.isFormValid = false;
        }

        if (this.description.val) {
          this.description.isValid = true;
          this.isFormValid = true;
        } else {
          this.description.isValid = false;
          this.isFormValid = false;
        }

        if (this.major.val.length > 0) {
          this.major.isValid = true;
          this.isFormValid = true;
        } else {
          this.major.isValid = false;
          this.isFormValid = false;
        }

        if (this.rates.val) {
          this.rates.isValid = true;
          this.isFormValid = true;
        } else {
          this.rates.isValid = false;
          this.isFormValid = false;
        }

        if (this.wages.val && Number(this.wages.val)) {
          this.wages.isValid = true;
          this.isFormValid = true;
        } else {
          this.wages.isValid = false;
          this.isFormValid = false;
        }
      },
      OnSubmit() {
        const TrainerProfile = {
          id: new Date().getSeconds(),
          avatar: 'https://github.com/tanmayvijay.png',
          firstName: this.firstName.val,
          lastName: this.lastName.val,
          description: this.description.val,
          major: this.major.val,
          rates: Number(this.wages.val),
          wages: Number(this.wages.val),
        };
        this.$store.dispatch('AddTrainerAction', TrainerProfile, {
          root: true
        });
        const TrainerAPI = `${CoachAppAPI.post}?auth=${this.GetToken}`
        const SaveTrainer = new Promise((resolve, reject) => {
          fetch(TrainerAPI, {
            method: 'POST',
            body: JSON.stringify(TrainerProfile)
          }).then((response) => {
            if (response.ok) {
              resolve('Create Done ^-^');
            } else {
              reject('Can not create :-<');
            }
          })
        });

        SaveTrainer.then((message) => {
          console.log(message);
        }).catch((message) => {
          console.log(message);
        })
      }
    },
  };
</script>

<style scoped>
  .trainer-form {
    position: relative;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 0.5em;
    border: 1px solid red;
  }

  form {
    max-width: 100%;
  }

  .form-input {
    display: grid;
    margin-block: 1.35rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 0.5em;
  }

  .form-input>input {
    grid-column: 1 / span 3;
    padding-block: 0.5em;
    margin-block: 0.5em;
    border: 1px solid rgb(92, 85, 85);
    outline: none;
    color: rgb(71, 136, 71);
    font-size: 1.35rem;
  }

  .form-input textarea,
  select {
    grid-column: 1 / span 3;
    padding: 0.5em;
    border: 1px solid rgb(92, 85, 85);
    line-height: 1.25rem;
    outline: none;
    color: rgb(71, 136, 71);
    font-size: 1.35rem;
  }

  .form-input:nth-child(3)>div:first-child {
    height: min-content;
  }
</style>