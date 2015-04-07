require("insert-css")(require('./style.css'));

var Vue = require('vue');

/**
 * 定义系统子组件。"非CMD规范"
 * 弹出窗
 */
Vue.component("seven-modal", {
	template: '一个自定义的弹出窗',
	compiled: function(){
		console.log("compiled");
	}
});

module.exports = {
	template: require('./template.html'),
	replace: true,
	data: function(){
		return {
			title: "魅族产品",
			items: [{
				name: "MX",
				stock: 0
			},{
				name: "MX2",
				stock: 100
			},{
				name: "MX3",
				stock: 43
			},{
				name: "MX4",
				stock: 7867
			},{
				name: "MX4 Pro",
				stock: 3223
			},{
				name: "Meilan Note",
				stock: 33
			}],
			selected: false,
			typeShowFlag: false
		}
	},
	methods: {
		clickHandler: function(){
			console.log(this);
			var _this = this;
			// ajax lib superagent
			var request = require("superagent");
			
			request.get("./data/products.json", 
				{
					activityId: 121,
					cache: true
				},
				function(err, resp){
					//_this.$data.phones = resp.body;
					console.log(_this.$add("phones", resp.body))
				}
			)
		},
		phoneHandler: function(phone){
			console.log("phoneHandler: ", arguments)
			console.log(this.$set("types", phone.types))
			this.typeHandler(phone.types[0])
		},
		typeHandler: function(type){
			this.$set("colors", type.colors)
		}
	},
	ready: function(){
		console.log("ready");
		//test
		this.clickHandler()
	},
	components: []
}




