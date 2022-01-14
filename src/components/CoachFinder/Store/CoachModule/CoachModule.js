export const CoachModule = {
	namespaced:true,
	state(){
		return {
			LastFetch:null,
			TargetTrainerID:-1,
			ITSubjectList:[
				'BackEnd',
				'FrontEnd',
				'Machine Learning',
				'IOT',
				'Artificial Intelligent',
				'Automation',
				'Algorithm',
				'Data Structure',
				'Testing',
				'Automation Testing'
			],
			TrainerList:[
				// {
				// 	id:0,
				// 	avatar:'https://github.com/tanmayvijay.png',
				// 	firstName:'John',
				// 	lastName:'Automation',
				// 	description:'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
				// 	major:['Automation','BackEnd','FrontEnd'],
				// 	rates:7,
				// 	wages:80,
				// },
				// {
				// 	id:1,
				// 	avatar:'https://github.com/tanmayvijay.png',
				// 	firstName:'John',
				// 	lastName:'Testing',
				// 	description:'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
				// 	major:['Testing','BackEnd','FrontEnd'],
				// 	rates:5,
				// 	wages:40,
				// },
				// {
				// 	id:2,
				// 	avatar:'https://github.com/tanmayvijay.png',
				// 	firstName:'John',
				// 	lastName:'Algorithm',
				// 	description:'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
				// 	major:['Algorithm','BackEnd','FrontEnd'],
				// 	rates:10,
				// 	wages:400
				// },
			],
			TrainerProfile:{
				id:-1,
				avatar:'https://github.com/tanmayvijay.png',
				firstName:'John',
				lastName:'Nathan',
				description:'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.',
				major:['IOT','BackEnd','FrontEnd'],
				rates:7,
				wages:100
			},
			Trending:[
				{
					id:0,
					link:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
				},
				{
					id:1,
					link:'https://www.pngitem.com/pimgs/m/538-5380039_logo-java-clipart-png-download-java-circle-icon.png',
				},
				{
					id:2,
					link:'https://cdn.stayhappening.com/events7/banners/6d863fa574f1ce8c423232a9b859265b1ee1cff88093a618c65ea963f75127d8-rimg-w500-h500-gmir.jpg?v=1613063828',
				},
				{
					id:3,
					link:'https://www.pngitem.com/pimgs/m/610-6105615_python-icon-button-ui-app-pack-blackvariant-python.png',
				},
				{
					id:4,
					link:'https://image.shutterstock.com/image-vector/sql-database-icon-logo-design-260nw-684826648.jpg',
				},
			],
		};
	},
	mutation:{
		ToTrainerDetail(state,payload){
			state.TargetTrainerID = payload.id;
			payload.router.push('/coach-detail');
		},
		AddTrainer(state,payload){
			state.TrainerList.push(payload);
		}
	},
	action:{
		ToDetail(context,payload){
			context.commit('ToTrainerDetail',payload);
		},
		AddTrainerAction(context,payload){
			context.state.TrainerID.push(payload.id);
			context.commit('AddTrainer',payload);
		},
	},
	getters:{
		GetITSubjectList(state){
			// console.log(state)
			return state.ITSubjectList;
		},
		GetTrainerDetailID(state){
			return state.TrainerList.find((value)=>value.id === state.TargetTrainerID);
		},
		GetTrainerProfile(state){
			return state.TrainerProfile;
		},
		GetTrainerList(state){
			return state.TrainerList;
		},
		GetTrendingIT(state){
			return state.Trending;
		},
		IsTrainer(_,getters,rootState){
			const Coaches = getters.GetTrainerList;
			const UserIDList = rootState.TrainerID;
			return Coaches.some((value)=>UserIDList.includes(value.id));
		}
	},
}