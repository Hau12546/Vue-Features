import {
	createStore
} from "vuex";


const ProductModule = {
	namespaced: true,
	state() {
		return {
			products: [{
					id: 'p1',
					image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
					title: 'Book Collection',
					description: 'A collection of must-read books. All-time classics included!',
					price: 99.99,
				},
				{
					id: 'p2',
					image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
					title: 'Mountain Tent',
					description: 'A tent for the ambitious outdoor tourist.',
					price: 129.99,
				},
				{
					id: 'p3',
					image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
					title: 'Food Box',
					description: 'May be partially expired when it arrives but at least it is cheap!',
					price: 6.99,
				},
			],

		}
	},
	mutations: {
		AddProduct(state, payload) {
			console.log(payload)
			const productInCartIndex = payload.cart.items.findIndex(
				(ci) => ci.productId === payload.id
			);

			if (productInCartIndex >= 0) {
				payload.cart.items[productInCartIndex].qty++;
			} else {
				const newItem = {
					productId: payload.id,
					title: payload.title,
					image: payload.image,
					price: payload.price,
					qty: 1,
				};
				payload.cart.items.push(newItem);
			}
			payload.cart.qty++;
			payload.cart.total += payload.price;
		},
		RemoveProduct(state,payload) {
			const productInCartIndex = payload.cart.items.findIndex(
				(cartItem) => cartItem.productId === payload.prodId
			);
			const prodData = payload.cart.items[productInCartIndex];
			payload.cart.items.splice(productInCartIndex, 1);
			payload.cart.qty -= prodData.qty;
			payload.cart.total -= prodData.price * prodData.qty;
		}
	},
	actions: {

	},
	getters: {}
};

const CartModule = {
	namespaced: true,
	state() {
		return {
			cart: {
				items: [],
				total: 0,
				qty: 0
			},
		}
	},
	mutations: {

	},
	actions: {

	},
	getters: {
		CartList(state){
			return state.cart.items
		},
		CartQuantity(state) {
			return state.cart.qty
		},
		cartTotal(state) {
			return state.cart.total.toFixed(2);
		}
	}
}


const RootStore = createStore({
	modules: {
		CartObj: CartModule,
		ProductObj: ProductModule
	},
	state() {
		return {
			isLoggedIn: false,
			userInfo: {
				name: 'HauNT',
				password: '1234'
			},
		}
	},
	mutations: {
		LoggingIn(state, payload) {
			if (state.userInfo.name && state.userInfo.password) {
				state.isLoggedIn = payload['LoggedIn'];
				payload['router'].push('/products');
			}
		},
		LoggingOut(state, payload) {
			state.isLoggedIn = !payload['LoggedOut'];
		}
	},
	actions: {
		LoggedIn(context, payload) {
			context.commit('LoggingIn', payload);
		},
		LoggedOut(context, payload) {
			context.commit('LoggingOut', payload);
		},
		AddProduct(context, payload) {
			context.commit('ProductObj/AddProduct', {
				...payload,
				cart: context.rootState.CartObj.cart
			});
		},
		RemoveProduct(context,payload){
			context.commit('ProductObj/RemoveProduct',{prodId:payload,cart: context.rootState.CartObj.cart})
		}
	},
	getters: {
		LogStateValue(state, getters) {
			return state.isLoggedIn;
		}
	},
});

export default RootStore;