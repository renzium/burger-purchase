(this.webpackJsonpmodule5webpack=this.webpackJsonpmodule5webpack||[]).push([[3],{102:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),l=a(8),i=a(7),o=a(0),c=a.n(o),u=a(3),d=a(14),s=a(53),p=a(33),m=a(97),h=a.n(m),v=function(e){return c.a.createElement("div",{className:h.a.CheckoutSummary},c.a.createElement("h1",null,"We hope it tastes well!"),c.a.createElement("div",{style:{width:"100%",margin:"auto"}},c.a.createElement(s.a,{ingredients:e.ingredients})),c.a.createElement(p.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),c.a.createElement(p.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},g=a(24),f=a(41),C=a(98),b=a.n(C),y=a(18),E=a(95),k=a(42),j=a(15),I=a(2),O=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:a,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,a){var n=Object(I.b)(e.state.orderForm[a],{value:t.target.value,valid:Object(I.a)(t.target.value,e.state.orderForm[a].validation),touched:!0}),r=Object(I.b)(e.state.orderForm,Object(g.a)({},a,n)),l=!0;for(var i in r)l=r[i].valid&&l;e.setState({orderForm:r,formIsValid:l})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=c.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return c.a.createElement(E.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),c.a.createElement(p.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=c.a.createElement(f.a,null)),c.a.createElement("div",{className:b.a.ContactData},c.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),a}(o.Component),_=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(j.g(t,a))}}}))(Object(k.a)(O,y.a)),N=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=c.a.createElement(u.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?c.a.createElement(u.a,{to:"/"}):null;e=c.a.createElement("div",null,t,c.a.createElement(v,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),c.a.createElement(u.b,{path:this.props.match.path+"/contact-data",component:_}))}return e}}]),a}(o.Component);t.default=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(N)},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(96),i=a.n(l);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),t)}},96:function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},97:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},98:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__20AK_"}}}]);
//# sourceMappingURL=3.045d7286.chunk.js.map