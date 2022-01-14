import {
	createApp
} from 'vue'
import App from './App.vue'
// import router from './router'
// import {bootstrap} from 'bootstrap'
// import { IconsPlugin ,BootstrapVue} from 'bootstrap-vue' 
import BaseCard from './components/HttpRequests/UI/BaseCard.vue'
import BaseButton from './components/HttpRequests/UI/BaseButton.vue'
import BaseBage from "./components/VuexExercises/OtherComponents/ui/BaseBadge.vue"
import CoachRouter from './components/CoachFinder/CoachRouter/router';
import AlertModal from './components/Learning Resource App/UI/Dialog/AlertModal.vue'
import {
	Store
} from './components/CoachFinder/Store/GlobalStore/Store'
import SplitContainer from './components/CoachFinder/UI/SplitContainer.vue'
import BaseBackgroundContainer from './components/CoachFinder/UI/BaseBackgroundContainer.vue'
import BaseLabel from './components/CoachFinder/UI/BaseLabel.vue'
import Heading from './components/CoachFinder/UI/Heading.vue'
import Base8Button from './components/CoachFinder/UI/Base8Button.vue'
import Spinner from "./components/CoachFinder/UI/Spinner.vue";
import BaseDialog from "./components/CoachFinder/UI/BaseDialog/BaseDialog.vue";



// import  Store  from './components/VueX/StateManagement/Vuex';
// import RootStore from './components/VuexExercises/Store/RootStore/store'

const app = createApp(App);
// app.use(Store);
app.use(CoachRouter);
// app.use(router);
app.use(Store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('alert-modal', AlertModal);
app.component('base-badge', BaseBage);
app.component('split-container', SplitContainer)
app.component('base-container', BaseBackgroundContainer)
app.component('base-label', BaseLabel)
app.component('base-heading', Heading)
app.component('base8-button', Base8Button)
app.component('Spinner', Spinner)
app.component('base-dialog',BaseDialog)
app.mount('#app');

// app.component('TheResources',TheResources)