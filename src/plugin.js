import { SweetModal, SweetModalTab } from './main.js'

export default {
	install: function(Vue, options) {
		Vue.component('SweetModal', SweetModal)
		Vue.component('SweetModalTab', SweetModalTab)
	}
}
