(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[78],{"6g58":function(n,e,t){"use strict"
var r=t("Y/W1")
var o=t.n(r)
var i=t("mX+G")
var a=t("2gWY")
var c=function(n,e){for(var t in e)l.call(e,t)&&(n[t]=e[t])
function r(){this.constructor=n}r.prototype=e.prototype
n.prototype=new r
n.__super__=e.prototype
return n},l={}.hasOwnProperty
e["a"]=function(n){c(e,n)
function e(){return e.__super__.constructor.apply(this,arguments)}e.mixin(a["a"])
e.prototype.initialize=function(){e.__super__.initialize.apply(this,arguments)
if(o.a.has(this,"url"))return delete this.url}
e.prototype.resourceName="external_tools"
e.prototype.computedAttributes=[{name:"custom_fields_string",deps:["custom_fields"]}]
e.prototype.urlRoot=function(){return"/api/v1/"+this._contextPath()+"/create_tool_with_verification"}
e.prototype.custom_fields_string=function(){var n,e
return function(){var t,r
t=this.get("custom_fields")
r=[]
for(n in t){e=t[n]
r.push(n+"="+e)}return r}.call(this).join("\n")}
e.prototype.launchUrl=function(n,e){var t,r,o,i
null==e&&(e={})
r=function(){var n
n=[]
for(t in e){i=e[t]
n.push(t+"="+i)}return n}()
o="/"+this._contextPath()+"/external_tools/"+this.id+"/resource_selection?launch_type="+n
r.length>0&&(o=o+"&"+r.join("&"))
return o}
e.prototype.assetString=function(){return"context_external_tool_"+this.id}
return e}(i["Model"])},BrAc:function(n,e,t){"use strict"
var r=t("vDqi")
var o=t.n(r)
o.a.defaults.xsrfCookieName="_csrf_token"
o.a.defaults.xsrfHeaderName="X-CSRF-Token"
const i=o.a.defaults.headers.common.Accept
o.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+i
o.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
e["a"]=o.a},HMVb:function(n,e,t){"use strict"
t.d(e,"a",(function(){return g}))
var r=t("ODXe")
var o=t("i/8D")
var i=t("DUTp")
var a=t("IPIv")
var c={}
function l(n,e){if(!o["a"])return 16
var t=n||Object(i["a"])(n).documentElement
if(!e&&c[t])return c[t]
var r=parseInt(Object(a["a"])(t).getPropertyValue("font-size"))
c[t]=r
return r}var s=t("CyAq")
function g(n,e){var t=e||document.body
if(!n||"number"===typeof n)return n
var o=Object(s["a"])(n),i=Object(r["a"])(o,2),a=i[0],c=i[1]
return"rem"===c?a*l():"em"===c?a*l(t):a}},ZbPE:function(n,e,t){"use strict"
t.d(e,"a",(function(){return G}))
var r=t("rePB")
var o=t("1OyB")
var i=t("vuIU")
var a=t("Ji7U")
var c=t("LK+K")
var l=t("q1tI")
var s=t.n(l)
var g=t("17x9")
var u=t.n(g)
var h=t("TSYQ")
var d=t.n(h)
var p=t("J2CL")
var f=t("KgFQ")
var b=t("jtGx")
var m=t("nAyT")
var _=t("VTBJ")
function v(n){var e=n.typography,t=n.colors,r=n.spacing
return Object(_["a"])({},e,{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,dangerColor:t.textDanger,successColor:t.textSuccess,alertColor:t.textAlert,paragraphMargin:"".concat(r.medium," 0")})}v.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"],brandColor:n["ic-brand-primary"]}}
var y,R,w,k
var B={componentId:"enRcg",template:function(n){return"\n\n.enRcg_bGBk{font-family:".concat(n.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(n.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(n.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(n.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(n.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(n.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(n.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(n.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(n.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(n.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(n.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(n.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(n.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(n.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(n.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(n.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(n.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(n.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(n.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(n.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(n.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(n.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(n.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(n.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(n.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(n.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var G=(y=Object(p["j"])(v,B),y(R=(k=w=function(n){Object(a["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(o["a"])(this,t)
return e.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var n
var e=this.props,o=e.wrap,i=e.weight,a=e.fontStyle,c=e.size,l=e.lineHeight,g=e.letterSpacing,u=e.transform,h=e.color,p=e.children
var m=Object(f["a"])(t,this.props)
return s.a.createElement(m,Object.assign({},Object(b["b"])(this.props),{className:d()((n={},Object(r["a"])(n,B.root,true),Object(r["a"])(n,B[c],c),Object(r["a"])(n,B["wrap-".concat(o)],o),Object(r["a"])(n,B["weight-".concat(i)],i),Object(r["a"])(n,B["style-".concat(a)],a),Object(r["a"])(n,B["transform-".concat(u)],u),Object(r["a"])(n,B["lineHeight-".concat(l)],l),Object(r["a"])(n,B["letterSpacing-".concat(g)],g),Object(r["a"])(n,B["color-".concat(h)],h),n)),ref:this.props.elementRef}),p)}}])
t.displayName="Text"
return t}(l["Component"]),w.propTypes={as:u.a.elementType,children:u.a.node,color:m["a"].deprecatePropValues(u.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:u.a.func,fontStyle:u.a.oneOf(["italic","normal"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:u.a.oneOf(["normal","light","bold"]),wrap:u.a.oneOf(["normal","break-word"])},w.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},k))||R)},Zgll:function(n,e,t){"use strict"
t.d(e,"a",(function(){return k}))
var r=t("Ff2n")
var o=t("1OyB")
var i=t("vuIU")
var a=t("Ji7U")
var c=t("LK+K")
var l=t("q1tI")
var s=t.n(l)
var g=t("17x9")
var u=t.n(g)
var h=t("oXx0")
var d=t("J2CL")
var p=t("jtGx")
var f=t("6SzX")
var b=t("C6Zt")
var m=t("tPrY")
var _,v,y,R,w
var k=(_=Object(h["a"])(),v=Object(d["j"])(m["a"]),_(y=v(y=(w=R=function(n){Object(a["a"])(t,n)
var e=Object(c["a"])(t)
function t(){var n
Object(o["a"])(this,t)
for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a]
n=e.call.apply(e,[this].concat(i))
n._baseButton=null
return n}Object(i["a"])(t,[{key:"focus",value:function(){this._baseButton&&this._baseButton.focus()}},{key:"render",value:function(){var n=this
var e=this.props,t=e.children,o=e.renderIcon,i=e.screenReaderLabel,a=e.type,c=e.size,l=e.elementRef,g=e.as,u=e.interaction,h=e.color,d=e.focusColor,m=e.shape,_=e.withBackground,v=e.withBorder,y=e.margin,R=e.cursor,w=e.href,k=Object(r["a"])(e,["children","renderIcon","screenReaderLabel","type","size","elementRef","as","interaction","color","focusColor","shape","withBackground","withBorder","margin","cursor","href"])
var B=this.theme
return s.a.createElement(b["a"],Object.assign({},Object(p["b"])(k),{type:a,size:c,elementRef:l,as:g,interaction:u,color:h,focusColor:d,shape:m,withBackground:_,withBorder:v,margin:y,cursor:R,href:w,renderIcon:t||o,theme:B,ref:function(e){n._baseButton=e}}),s.a.createElement(f["a"],null,i))}},{key:"focused",get:function(){return this._baseButton&&this._baseButton.focused}}])
t.displayName="IconButton"
return t}(l["Component"]),R.propTypes={children:u.a.oneOfType([u.a.node,u.a.func]),renderIcon:u.a.oneOfType([u.a.node,u.a.func]),screenReaderLabel:u.a.string.isRequired,type:u.a.oneOf(["button","submit","reset"]),size:u.a.oneOf(["small","medium","large"]),elementRef:u.a.func,as:u.a.elementType,interaction:u.a.oneOf(["enabled","disabled","readonly"]),color:u.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:u.a.oneOf(["info","inverse"]),shape:u.a.oneOf(["rectangle","circle"]),withBackground:u.a.bool,withBorder:u.a.bool,margin:d["c"].spacing,cursor:u.a.string,href:u.a.string},R.defaultProps={children:null,renderIcon:void 0,type:"button",size:"medium",elementRef:function(n){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",withBackground:true,withBorder:true,margin:"0",cursor:"pointer",href:void 0},w))||y)||y)},cClk:function(n,e,t){"use strict"
t.d(e,"a",(function(){return r}))
function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(r,o,i){var a=n.apply(null,arguments)
if(a)return a
if(r[o]&&"function"!==typeof r[e])return new Error(["You provided a '".concat(o,"' prop without an '").concat(e,"' handler on '").concat(i,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(t,"'. Otherwise, set '").concat(e,"'.")].join(""))}}},dDTa:function(n,e,t){"use strict"
const r=()=>{const n=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return n.join("; ")}
e["a"]=r},eGSd:function(n,e,t){"use strict"
t.d(e,"a",(function(){return r}))
function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r,o,i,a
var c=0
var l=[]
var s=false
if("function"!==typeof n)throw new TypeError("Expected a function")
var g=!!t.leading
var u="maxWait"in t
var h=!("trailing"in t)||!!t.trailing
var d=u?Math.max(+t.maxWait||0,e):0
function p(e){var t=r
var a=o
r=o=void 0
c=e
if(true!==s){i=n.apply(a,t)
return i}}function f(n){c=n
l.push(setTimeout(_,e))
return g?p(n):i}function b(n){var t=n-a
var r=n-c
var o=e-t
return u?Math.min(o,d-r):o}function m(n){var t=n-a
var r=n-c
return"undefined"===typeof a||t>=e||t<0||u&&r>=d}function _(){var n=Date.now()
if(m(n))return v(n)
l.push(setTimeout(_,b(n)))}function v(n){w()
if(h&&r)return p(n)
r=o=void 0
return i}function y(){s=true
w()
c=0
r=a=o=void 0}function R(){return 0===l.length?i:v(Date.now())}function w(){l.forEach((function(n){return clearTimeout(n)}))
l=[]}function k(){var n=Date.now()
var t=m(n)
for(var c=arguments.length,s=new Array(c),g=0;g<c;g++)s[g]=arguments[g]
r=s
o=this
a=n
if(t){if(0===l.length)return f(a)
if(u){l.push(setTimeout(_,e))
return p(a)}}0===l.length&&l.push(setTimeout(_,e))
return i}k.cancel=y
k.flush=R
return k}},gCYW:function(n,e,t){"use strict"
t.d(e,"a",(function(){return c}))
var r=t("QF4Q")
var o=t("i/8D")
var i=t("EgqM")
var a=t("DUTp")
function c(n){var e={top:0,left:0,height:0,width:0}
if(!o["a"])return e
var t=Object(r["a"])(n)
if(!t)return e
if(t===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var l=n===document?document:Object(a["a"])(t)
var s=l&&l.documentElement
if(!s||!Object(i["a"])(s,t))return e
var g=t.getBoundingClientRect()
var u
for(u in g)e[u]=g[u]
if(l!==document){var h=l.defaultView.frameElement
if(h){var d=c(h)
e.top+=d.top
e.bottom+=d.top
e.left+=d.left
e.right+=d.left}}return{top:e.top+(window.pageYOffset||s.scrollTop)-(s.clientTop||0),left:e.left+(window.pageXOffset||s.scrollLeft)-(s.clientLeft||0),width:(null==e.width?t.offsetWidth:e.width)||0,height:(null==e.height?t.offsetHeight:e.height)||0,right:l.body.clientWidth-e.width-e.left,bottom:l.body.clientHeight-e.height-e.top}}},msMH:function(n,e,t){"use strict"
t.d(e,"a",(function(){return S}))
var r=t("rePB")
var o=t("Ff2n")
var i=t("1OyB")
var a=t("vuIU")
var c=t("Ji7U")
var l=t("LK+K")
var s=t("q1tI")
var g=t.n(s)
var u=t("17x9")
var h=t.n(u)
var d=t("TSYQ")
var p=t.n(d)
var f=t("n12J")
var b=t("J2CL")
function m(n,e,t){if("input"===n.as){if("children"===e&&n.children||void 0==n.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(t,' as="input"`'))}else{if("value"===e&&void 0!=n.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(t,' as="input"`'))
if(!n.children)return new Error("Prop `children` should be supplied unless `".concat(t,' as="input"`.'))}return}var _=t("nAyT")
var v=t("KgFQ")
var y=t("jtGx")
var R=t("oXx0")
function w(n){var e=n.borders,t=n.colors,r=n.spacing,o=n.typography
return{lineHeight:o.lineHeightFit,h1FontSize:o.fontSizeXXLarge,h1FontWeight:o.fontWeightLight,h1FontFamily:o.fontFamily,h2FontSize:o.fontSizeXLarge,h2FontWeight:o.fontWeightNormal,h2FontFamily:o.fontFamily,h3FontSize:o.fontSizeLarge,h3FontWeight:o.fontWeightBold,h3FontFamily:o.fontFamily,h4FontSize:o.fontSizeMedium,h4FontWeight:o.fontWeightBold,h4FontFamily:o.fontFamily,h5FontSize:o.fontSizeSmall,h5FontWeight:o.fontWeightNormal,h5FontFamily:o.fontFamily,primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,borderPadding:r.xxxSmall,borderColor:t.borderMedium,borderWidth:e.widthSmall,borderStyle:e.style}}w.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"]}}
w["instructure"]=function(n){var e=n.typography
return{h1FontFamily:e.fontFamilyHeading,h2FontFamily:e.fontFamilyHeading,h3FontWeight:e.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:e.fontWeightBold,h4FontSize:e.fontSizeLarge,h5FontWeight:e.fontWeightBold,h5FontSize:e.fontSizeMedium}}
var k={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var B=Object(b["d"])({map:k,version:"8.0.0"})
var G,F,O,x,C,j
var z={componentId:"blnAQ",template:function(n){return"\n\n.blnAQ_bGBk{line-height:".concat(n.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(n.h1FontFamily||"inherit",";font-size:").concat(n.h1FontSize||"inherit",";font-weight:").concat(n.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(n.h2FontFamily||"inherit",";font-size:").concat(n.h2FontSize||"inherit",";font-weight:").concat(n.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(n.h3FontFamily||"inherit",";font-size:").concat(n.h3FontSize||"inherit",";font-weight:").concat(n.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(n.h4FontFamily||"inherit",";font-size:").concat(n.h4FontSize||"inherit",";font-weight:").concat(n.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(n.h5FontFamily||"inherit",";font-size:").concat(n.h5FontSize||"inherit",";font-weight:").concat(n.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-top:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-bottom:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(n.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(n.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var S=(G=Object(_["a"])("8.0.0",{ellipsis:"<TruncateText />"}),F=Object(R["a"])(),O=Object(b["j"])(w,z,B),G(x=F(x=O(x=(j=C=function(n){Object(c["a"])(t,n)
var e=Object(l["a"])(t)
function t(){Object(i["a"])(this,t)
return e.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){var n
var e=this.props,i=e.border,a=e.children,c=e.color,l=e.level,s=e.margin,u=e.elementRef,h=e.ellipsis,d=Object(o["a"])(e,["border","children","color","level","margin","elementRef","ellipsis"])
var b=Object(v["a"])(t,this.props,(function(){return"reset"===l?"span":l}))
return g.a.createElement(f["a"],Object.assign({},Object(y["b"])(d),{className:p()((n={},Object(r["a"])(n,z.root,true),Object(r["a"])(n,z["level--".concat(l)],true),Object(r["a"])(n,z["color--".concat(c)],c),Object(r["a"])(n,z["border--".concat(i)],"none"!==i),Object(r["a"])(n,z.ellipsis,h),n)),as:b,margin:s,elementRef:u}),a)}}])
t.displayName="Heading"
return t}(s["Component"]),C.propTypes={border:h.a.oneOf(["none","top","bottom"]),children:m,color:h.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:h.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:h.a.elementType,margin:b["c"].spacing,elementRef:h.a.func,ellipsis:h.a.bool},C.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},j))||x)||x)||x)}}])

//# sourceMappingURL=78-c-ae3c1cdfad.js.map