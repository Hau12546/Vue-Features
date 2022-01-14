<template>
	<li>
    <p>Time: {{Request.Time}}</p>
    <p>Email: {{Request.userEmail}}</p>
    <p class="message">Message: {{Request.userMessage}}</p>
  </li>
</template>

<script>
export default {
	props:['Request'],
	data(){
		return {
		}
	}
}
</script>

<style scoped>
.message{
  width: 500px;
  padding-right: .5em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
li::before {
  content: "";
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/fb-heart.gif);
  background-size: contain;
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;
  top: 0.1rem;
  margin-right: 0.2rem;
}


li{
  height: 180px;
  margin-inline: 20%;
  padding: 1em;
  border: 1px solid #FFFF;
  border-radius: 10px;
  box-shadow: -3px 3px rgb(148, 144, 141), -1px 1px rgb(148, 144, 141), -3px 3px rgb(148, 144, 141);
  background-color: #FFFF;
  overflow: hidden;
}

li:hover{
  background-color: #000000;
  color: #FFFF;
}
</style>