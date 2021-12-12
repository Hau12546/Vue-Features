<template>
  <input type="text" class="form-input"  v-on:focusout="SetClass($event)" placeholder="Enter CSS Class" />
  <div class="item-container" v-bind:class="[{Class: true, show:UI, hide:!UI}]">
    {{Class}}
  </div>
  <div class="item-container">
    <button class="btn btn-primary" v-on:click="ToggleElement()" type="button">Toggle Dynamic Style</button>
  </div>
  <hr>
  <input type="text" class="form-input"  v-on:focusout="SetColor($event)" placeholder="Enter CSS color" />
  <div class="item-container" v-bind:style="{'background-color': CssColor}">
  {{CssColor}}
  </div>
  
</template>

<style>
  .show{
    display:block;
  }

  .hide{
    display:none;
  }
  
  .user1{
    border: 1px dotted #0000;
    background-color: red!important;
  }

  div[class~=user2]{
    border: 1px dotted #0000;
    background-color: blue!important;
  }
</style>

<script>
export default {
  data(){
    return {
      CssClass:'user1',
      ToggleDisplay:false,
      ShowHide:'show',
      CssColor:'red',
    }
  },
  methods: {
    ToggleElement(){
      this.ToggleDisplay = this.ToggleDisplay!=true;
    },
    SetColor(e){
      this.CssColor = e.target.value;
    },
    SetClass(e){
      this.CssClass = e.target.value;
    }
  },
  computed: {
    UI(){
      return this.ToggleDisplay;
    },
    Class(){
      // console.log(this.CssClass)
      return this.CssClass;
    }
  },
};
</script>
