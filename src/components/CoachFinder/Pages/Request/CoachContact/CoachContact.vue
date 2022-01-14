<template>
  <base-container>
    <template #customContainer>
      <base-heading :HeaderType="'h2'"><template #h2>Coach Contact</template></base-heading>
      <form action="" @click.prevent>
        <div class="form-control">
          <label for="">Email:</label>
          <input type="email" id="email" @blur="FormValidator()" placeholder="@google.com" v-model.trim="email.val">
          <p v-if="!email.isValid">None Empty Email</p>
        </div>
        <div class="form-control">
          <label for="">Messages:</label>
          <textarea name="" id="message" rows="5" @blur="FormValidator()" v-model.trim="message.val"></textarea>
          <p v-if="!message.isValid">None Empty Message</p>
        </div>
        <div class="action">
          <base8-button :disabled="!isFormValid" @click="OnSubmit()"><template #customButton>Send Message</template>
          </base8-button>
        </div>
      </form>
    </template>
  </base-container>
</template>

<script>
  export default {
    data() {
      return {
        email: {
          val: '',
          isValid: false
        },
        message: {
          val: '',
          isValid: false
        },
        isFormValid: false
      }
    },
    methods: {
      FormValidator() {
        if (this.email.val.length > 0 && this.email.val.split('').includes('@')) {
          this.email.isValid = true;
          this.isFormValid = true;
        } else {
          this.email.isValid = false;
          this.isFormValid = false;
        }

        if (this.message.val.length > 0) {
          this.message.isValid = true;
          this.isFormValid = true;
        } else {
          this.message.isValid = false;
          this.isFormValid = false;
        }
        console.log(this.email)
      },
      OnSubmit() {
        const Request = {
          coachID: this.$store.state.CoachStore.TargetTrainerID,
          email: this.email.val,
          message: this.message.val,
        };
        this.$store.dispatch('AddRequestAction', Request, {
          root: true
        });
      }
    },
    mounted() {
    },
  }
</script>

<style scoped>
  form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
  }

  .form-control {
    margin: 0.5rem 0;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
  }

  input:focus,
  textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
  }

  .errors {
    font-weight: bold;
    color: red;
  }

  .actions {
    text-align: center;
  }
</style>