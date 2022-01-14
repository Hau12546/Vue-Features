<template>
  <div>
    <Theheader></Theheader>
    <!-- <BageList></BageList>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo> -->
  </div>
  <DynamicComponents/>
  <!-- <ScopedSlots>
    <template #default="slotProps">
      <h3>{{slotProps.goal}}</h3>
      <p>{{slotProps['another-prop']}}</p>
    </template>
  </ScopedSlots> -->
</template>

<script>
import  Theheader  from "./Theheader";
// import  BageList  from "./BageList";
// import  UserInfo  from "./UserInfo";
import DynamicComponents from "./DynamicComponents"
// import ScopedSlots from "./ScopedSlots";
export default {
  components:{
    Theheader,
    // BageList,
    // UserInfo,
    // ScopedSlots
    DynamicComponents,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script >

<style >

html {
  font-family: sans-serif;
}

p{
  font-weight: 400;
  font-size: 1.25rem;
}

body {
  margin: 0;
}
</style>