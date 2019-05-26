"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"toInteger",{enumerable:true,get:function get(){return _.toInteger;}});Object.defineProperty(exports,"calculateTotalPages",{enumerable:true,get:function get(){return _.calculateTotalPages;}});Object.defineProperty(exports,"calculatePageNumber",{enumerable:true,get:function get(){return _.calculatePageNumber;}});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactRouter=require("react-router");var _=require("./");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function currentPageClassName(pageNumber,currentPageNumber){if(pageNumber===currentPageNumber)return'currentPage';}var pageKey=function pageKey(currentPageKey){return"pagination-".concat(currentPageKey);};var pageLinkPath=function pageLinkPath(path,currentPageNumber){return"".concat(path,"/").concat(currentPageNumber);};var Pagination=function(_Component){_inherits(Pagination,_Component);function Pagination(){var _getPrototypeOf2;var _this;_classCallCheck(this,Pagination);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2,[this].concat(args)));_defineProperty(_assertThisInitialized(_this),"state",{pageNumber:(0,_.toInteger)(_this.props.pageNumber),totalPages:(0,_.toInteger)(_this.props.totalPages)});_defineProperty(_assertThisInitialized(_this),"handleClick",function(pageNumber){return _this.props.onClick(pageNumber);});return _this;}_createClass(Pagination,[{key:"x",value:function x(){return 0;}},{key:"y",value:function y(){return 0;}},{key:"z",value:function z(){return 0;}},{key:"zeroIndex",value:function zeroIndex(){return 0;}},{key:"lastIndex",value:function lastIndex(){return 0;}},{key:"hasReversePageLink",value:function hasReversePageLink(pageNumber,totalPages){return this.zeroIndex(pageNumber,totalPages)-1>0;}},{key:"hasForwardPageLink",value:function hasForwardPageLink(pageNumber,totalPages){return this.lastIndex(pageNumber,totalPages)+1<totalPages;}},{key:"hasZeroPageLink",value:function hasZeroPageLink(pageNumber,totalPages){return this.zeroIndex(pageNumber,totalPages)>0;}},{key:"hasLastPageLink",value:function hasLastPageLink(pageNumber,totalPages){return this.lastIndex(pageNumber,totalPages)<totalPages;}},{key:"reversePageLinkItem",value:function reversePageLinkItem(path,pageNumber,totalPages){var _this2=this;if(this.hasReversePageLink(pageNumber,totalPages)){var n=this.zeroIndex(pageNumber,totalPages);return _react.default.createElement("li",{key:pageKey('reverse'),className:"reversePage"},_react.default.createElement(_reactRouter.Link,{to:pageLinkPath(path,n),onClick:function onClick(){return _this2.handleClick(n);}},_react.default.createElement("span",{className:"reverse"},"\xAB")));}return null;}},{key:"forwardPageLinkItem",value:function forwardPageLinkItem(path,pageNumber,totalPages){var _this3=this;if(this.hasForwardPageLink(pageNumber,totalPages)){var n=this.lastIndex(pageNumber,totalPages)+1;return _react.default.createElement("li",{key:pageKey('forward'),className:"forwardPage"},_react.default.createElement(_reactRouter.Link,{to:pageLinkPath(path,n),onClick:function onClick(){return _this3.handleClick(n);}},_react.default.createElement("span",{className:"forwardPage"},"\xBB")));}return null;}},{key:"zeroPageLinkItem",value:function zeroPageLinkItem(path,pageNumber,totalPages){var _this4=this;if(this.hasZeroPageLink(pageNumber,totalPages)){var n=1;return _react.default.createElement("li",{key:pageKey(n),className:"zeroPage"},_react.default.createElement(_reactRouter.Link,{to:pageLinkPath(path,n),onClick:function onClick(){return _this4.handleClick(n);}},_react.default.createElement("span",{className:"pageNumber"},n)));}return null;}},{key:"lastPageLinkItem",value:function lastPageLinkItem(path,pageNumber,totalPages){var _this5=this;if(this.hasLastPageLink(pageNumber,totalPages)){var n=totalPages;return _react.default.createElement("li",{key:pageKey(n),className:"lastPage"},_react.default.createElement(_reactRouter.Link,{to:pageLinkPath(path,n),onClick:function onClick(){return _this5.handleClick(n);}},_react.default.createElement("span",{className:"pageNumber"},n)));}return null;}},{key:"pageLinkItems",value:function pageLinkItems(path,pageNumber,totalPages){var _this6=this;var i=this.zeroIndex(pageNumber,totalPages);var j=this.lastIndex(pageNumber,totalPages);var a=[];var _loop=function _loop(){var n=i+1;a.push(_react.default.createElement("li",{key:pageKey(n),className:currentPageClassName(pageNumber,n)},_react.default.createElement(_reactRouter.Link,{to:pageLinkPath(path,n),onClick:function onClick(){return _this6.handleClick(n);}},_react.default.createElement("span",{className:"pageNumber"},n))));};for(i,j;i<j;i=i+1){_loop();}return a;}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(_ref){var pageNumber=_ref.pageNumber,totalPages=_ref.totalPages;this.setState({pageNumber:(0,_.toInteger)(pageNumber),totalPages:(0,_.toInteger)(totalPages)});}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(props){return props.pageNumber!==this.props.pageNumber||props.totalPages!==this.props.totalPages||props.path!==this.props.path;}},{key:"render",value:function render(){var totalPages=this.state.totalPages;if(totalPages>1){var path=this.props.path;var pageNumber=this.state.pageNumber;var page=(0,_.calculatePageNumber)(pageNumber,totalPages);if(totalPages>this.z()){return _react.default.createElement("ul",{className:"pagination"},this.zeroPageLinkItem(path,page,totalPages),this.reversePageLinkItem(path,page,totalPages),this.pageLinkItems(path,page,totalPages),this.forwardPageLinkItem(path,page,totalPages),this.lastPageLinkItem(path,page,totalPages));}else{return _react.default.createElement("ul",{className:"pagination"},this.pageLinkItems(path,page,totalPages));}}return null;}}]);return Pagination;}(_react.Component);exports.default=Pagination;_defineProperty(Pagination,"calculateTotalPages",_.calculateTotalPages);_defineProperty(Pagination,"calculatePageNumber",_.calculatePageNumber);Pagination.propTypes={onClick:_propTypes.default.func,pageNumber:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.number]).isRequired,path:_propTypes.default.string,totalPages:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.number]).isRequired};Pagination.defaultProps={onClick:function onClick(){},pageNumber:0,path:'',totalPages:0};