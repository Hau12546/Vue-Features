<template>
  <div class="list-item-people" id="Friend">
    <h3>{{ name}}</h3>
    <div class="info">
      <div class="algin-center">
        <div class="checkbox" v-on:click="ToggleChecked()" v-bind:class="[{'checkbox-checked':isChecked}]"></div>
        <label for="">Is Best Friend</label>
      </div>
      <button type="button" class="btn btn-primary" v-if="ShowFriendDetail" @click="ToggleInfo()">
        Hide Detail
      </button>
      <button type="button" class="btn btn-danger" v-if="!ShowFriendDetail"  @click="ToggleInfo()">
        Show Detail
      </button>
      <button type="button" class="btn btn-danger"  @click="Remove()">
        Remove
      </button>
    </div>
    <div class="info-list" v-if="ShowFriendDetail">
      <label for="" v-show="BF"><p>Best Friend</p></label>
      <div class="info">
        <p><strong>Phone Number:</strong> {{ phone }}</p>
      </div>
      <div class="info">
        <p><strong>Email:</strong> {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props:[
  //   'id',
  //   'name',
  //   'phone',
  //   'email',
  //   'isFavourite'
  // ],
  props:{
    id:{
      type: Number,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    phone:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      validator: (value)=>{
        console.log(value.split().includes('@'))
        if(!value.split('').includes('@')){
          try {
            throw new Error('No email found');
          } catch (error) {
            console.log(error);
          }
        }
        return true;
      }
    },
    isFavourite:{
      type:Boolean,
      required:false,
      default:false,
    }
  },
  emits:{
    'toggle-checked':function(id){
      if(id) return true;
      if(!id) {
        try {
            throw new Error('No ID found');
          } catch (error) {
            console.log(error);
          }
      }
    },
  },
  data() {
    return {
      ShowFriendDetail: true,
      friend: {
        id: 0,
        name: "John Connor",
        phone: "0379564044",
        email: "John4044@gmail.com",
      },
       BF:this.isFavourite,
      isChecked:false,
    };
  },
  methods: {
    ToggleInfo() {
      this.ShowFriendDetail = this.ShowFriendDetail != true;
      this.BF = this.BF!=false;
    },
    ToggleChecked(){
      this.isChecked = this.isChecked!=true;
      this.BF = this.isChecked;
      // this.$emit('toggle-checked',this.id);
    },
    Remove(){
      this.$emit('friend-ID', this.id);
    }
  },
};
</script>

<style>

.checkbox{
  min-height: 20px;
  min-width: 20px;
  margin: 1em;
  border: 1px solid rgb(32, 29, 168);
}
.checkbox-checked{
  background-color: #000;
}

.algin-center{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5em;
}
</style>
