(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[40,4281],{"08kA":function(e,t,r){"use strict"
var n=r("s4NR"),a=r("CxY0"),o=r("U6jy")
function s(e){return e&&e.rel}function i(e,t){function r(r){e[r]=o(t,{rel:r})}t.rel.split(/\s+/).forEach(r)
return e}function c(e,t){var r=t.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
r&&(e[r[1]]=r[2])
return e}function u(e){try{var t=e.match(/<?([^>]*)>(.*)/),r=t[1],s=t[2].split(";"),i=a.parse(r),u=n.parse(i.query)
s.shift()
var d=s.reduce(c,{})
d=o(u,d)
d.url=r
return d}catch(e){return null}}e.exports=function(e){if(!e)return null
return e.split(/,\s*</).map(u).filter(s).reduce(i,{})}},"4uX5":function(e,t,r){"use strict"
r.d(t,"a",(function(){return f}))
var n=r("RtDj")
var a=r("q1tI")
var o=r.n(a)
var s=r("mrSG")
var i=r("gtzJ")
var c=r("3CEA")
var u=r("9/Zf")
var d=r("8LbN")
r("2mql")
var l=Object(u["f"])(a["version"])
var v={componentStack:null,error:null,eventId:null}
var p=function(e){Object(s["__extends"])(t,e)
function t(){var t=null!==e&&e.apply(this,arguments)||this
t.state=v
t.resetErrorBoundary=function(){var e=t.props.onReset
var r=t.state,n=r.error,a=r.componentStack,o=r.eventId
e&&e(n,a,o)
t.setState(v)}
return t}t.prototype.componentDidCatch=function(e,t){var r=this
var n=t.componentStack
var a=this.props,o=a.beforeCapture,u=a.onError,d=a.showDialog,v=a.dialogOptions
Object(i["c"])((function(t){if(l.major&&l.major>=17){var a=new Error(e.message)
a.name="React ErrorBoundary "+a.name
a.stack=n
e.cause=a}o&&o(t,e,n)
var p=Object(i["a"])(e,{contexts:{react:{componentStack:n}}})
u&&u(e,n,p)
d&&Object(c["b"])(Object(s["__assign"])(Object(s["__assign"])({},v),{eventId:p}))
r.setState({error:e,componentStack:n,eventId:p})}))}
t.prototype.componentDidMount=function(){var e=this.props.onMount
e&&e()}
t.prototype.componentWillUnmount=function(){var e=this.state,t=e.error,r=e.componentStack,n=e.eventId
var a=this.props.onUnmount
a&&a(t,r,n)}
t.prototype.render=function(){var e=this.props,t=e.fallback,r=e.children
var n=this.state,o=n.error,s=n.componentStack,i=n.eventId
if(o){var c=void 0
c="function"===typeof t?t({error:o,componentStack:s,resetError:this.resetErrorBoundary,eventId:i}):t
if(a["isValidElement"](c))return c
t&&d["b"].warn("fallback did not produce a valid ReactElement")
return null}if("function"===typeof r)return r()
return r}
return t}(a["Component"])
class f extends o.a.Component{constructor(...e){super(...e)
this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error(e,t)}render(){if(this.state.error)return"function"===typeof this.props.errorComponent?this.props.errorComponent({error:this.state.error,componentStack:null,eventId:null,resetError:()=>this.setState({error:null})}):this.props.errorComponent
return Object(n["a"])(p,{fallback:this.props.errorComponent},void 0,this.props.children)}}},BrAc:function(e,t,r){"use strict"
var n=r("vDqi")
var a=r.n(n)
a.a.defaults.xsrfCookieName="_csrf_token"
a.a.defaults.xsrfHeaderName="X-CSRF-Token"
const o=a.a.defaults.headers.common.Accept
a.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+o
a.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=a.a},HeaX:function(e,t,r){"use strict"
r.d(t,"a",(function(){return h}))
var n=r("RtDj")
var a=r("HGxv")
var o=r("q1tI")
var s=r.n(o)
r("17x9")
var i=r("Mmr1")
var c=r("n12J")
var u=r("TstA")
var d=r("msMH")
var l=r("Dibh")
var v=r("4uX5")
var p=r("qwzJ")
var f=r("1sWr")
var b=r.n(f)
const m=Object(a["useScope"])("canvas_modal")
h.defaultProps={padding:"small",errorImageUrl:b.a,footer:null,title:null,closeButtonSize:"small"}
function h({padding:e,errorSubject:t,errorCategory:r,errorImageUrl:a,label:o,title:f,onDismiss:b,children:h,footer:g,closeButtonSize:j,...O}){null==f&&(f=o)
return s.a.createElement(l["a"],Object.assign({label:o,onDismiss:b},O),Object(n["a"])(l["a"].Header,{},void 0,Object(n["a"])(u["a"],{},void 0,Object(n["a"])(u["a"].Item,{grow:true},void 0,Object(n["a"])(d["a"],{},void 0,f)),Object(n["a"])(u["a"].Item,{},void 0,Object(n["a"])(i["a"],{onClick:b,size:j,screenReaderLabel:m.t("Close")})))),Object(n["a"])(l["a"].Body,{padding:e},void 0,Object(n["a"])(c["a"],{as:"div",height:"100%"},void 0,Object(n["a"])(v["a"],{errorComponent:Object(n["a"])(p["a"],{imageUrl:a,errorSubject:t,errorCategory:r})},void 0,h))),g&&Object(n["a"])(l["a"].Footer,{},void 0,"function"===typeof g?g():g))}},Ipg6:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r("ouhR")
var a=r.n(n)
var o=r("FOCd")
var s=r("08kA")
var i=r.n(s)
var c=r("etQE")
function u({path:e,params:t}){const r=a.a.param(t)
if(!r.length)return e
return`${e}?${r}`}async function d({path:e,method:t="GET",headers:r={},params:n={},body:a,fetchOpts:s={}}){const d={...c["e"]}
d.headers["X-CSRF-Token"]=Object(o["a"])("_csrf_token")
if(a&&"string"!==typeof a){a=JSON.stringify(a)
d.headers["Content-Type"]="application/json"}Object.assign(d.headers,r)
Object.assign(d,s)
const l=u({path:e,params:n})
const v=await fetch(l,{body:a,method:t,...d})
if(!v.ok){const e=new Error(`doFetchApi received a bad response: ${v.status} ${v.statusText}`)
Object.assign(e,{response:v})
throw e}const p=v.headers.get("Link")
const f=p&&i()(p)||void 0
const b=await v.text()
const m=b.length>0?JSON.parse(b):void 0
return{json:m,response:v,link:f}}},Nuch:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r("RtDj")
var a=r("HGxv")
var o=r("q1tI")
var s=r.n(o)
var i=r("l0h0")
const c=Object(a["useScope"])("direct_share_course_tray")
const u=Object(o["lazy"])(()=>Promise.all([r.e(5),r.e(7),r.e(10),r.e(119),r.e(4193)]).then(r.bind(null,"dpkT")))
function d({sourceCourseId:e,contentSelection:t,onDismiss:r,...a}){return s.a.createElement(i["a"],Object.assign({label:c.t("Copy To..."),placement:"end",onDismiss:r,padding:"medium"},a),Object(n["a"])(u,{sourceCourseId:e,contentSelection:t,onCancel:r}))}},QbG7:function(e,t,r){"use strict"
r.d(t,"a",(function(){return m}))
var n=r("RtDj")
var a=r("HGxv")
var o=r("q1tI")
var s=r.n(o)
r("17x9")
var i=r("L+/K")
var c=r("Xx/m")
var u=r("uSnb")
var d=r("n12J")
var l=r("HeaX")
r("XFtX")
var v=r("uloQ")
var p=r("Ipg6")
const f=Object(a["useScope"])("direct_share_user_modal")
const b=Object(o["lazy"])(()=>Promise.all([r.e(5),r.e(7),r.e(10),r.e(4153)]).then(r.bind(null,"pdP4")))
function m({contentShare:e,courseId:t,...r}){const[a,m]=Object(o["useState"])([])
const[h,g]=Object(o["useState"])(null)
const j=Object(o["useRef"])(r.open)
function O(){m([])
g(null)}function y(e){a.find(t=>t.id===e.id)||m(a.concat([e]))}function S(e){m(a.filter(t=>t.id!==e.id))}function k(){return Object(p["a"])({method:"POST",path:"/api/v1/users/self/content_shares",body:{...e,receiver_ids:a.map(e=>e.id)}})}function _(){g("info")
k().then(C).catch(e=>{console.error(e)
e.response&&console.error(e.response)
g("error")})}function C(){Object(v["d"])(f.t("Content share started successfully"))()
r.onDismiss()}function x(){return s.a.createElement(s.a.Fragment,null,Object(n["a"])(c["a"],{onClick:r.onDismiss},void 0,f.t("Cancel")),Object(n["a"])(c["a"],{disabled:0===a.length||"info"===h,color:"primary",margin:"0 0 0 x-small",onClick:_},void 0,f.t("Send")))}const R=Object(n["a"])(d["a"],{as:"div",textAlign:"center"},void 0,Object(n["a"])(u["a"],{renderTitle:f.t("Loading")}))
if(r.open!==j.current){j.current=r.open
O()}let q=""
"info"===h?q=f.t("Starting content share"):"error"===h&&(q=f.t("Error starting content share"))
const I=q?Object(n["a"])(i["a"],{variant:h},void 0,Object(n["a"])("div",{role:"alert","aria-live":"assertive","aria-atomic":true},void 0,q),"info"===h?Object(n["a"])(u["a"],{renderTitle:q,size:"x-small"}):null):null
return s.a.createElement(l["a"],Object.assign({label:f.t("Send To..."),size:"medium"},r,{footer:Object(n["a"])(x,{})}),Object(n["a"])(o["Suspense"],{fallback:R},void 0,I,Object(n["a"])(b,{courseId:t,selectedUsers:a,onUserSelected:y,onUserRemoved:S})))}},U6jy:function(e,t){e.exports=n
var r=Object.prototype.hasOwnProperty
function n(){var e={}
for(var t=0;t<arguments.length;t++){var n=arguments[t]
for(var a in n)r.call(n,a)&&(e[a]=n[a])}return e}},XFtX:function(e,t,r){"use strict"
var n=r("17x9")
var a=r("lNsk")
const o=Object(n["shape"])({id:n["string"],display_name:n["string"],url:n["string"]})
var s=o
const i=Object(n["shape"])({id:n["string"].isRequired,progress_url:n["string"],user_id:n["string"],workflow_state:Object(n["oneOf"])(["created","exporting","exported","failed"]),attachment:s})
var c=i
const u=["assignment","attachment","discussion_topic","page","quiz","module","module_item"]
Object(n["shape"])({id:n["string"].isRequired,name:n["string"].isRequired,content_type:Object(n["oneOf"])(u).isRequired,created_at:n["string"].isRequired,updated_at:n["string"].isRequired,read_state:n["string"].isRequired,sender:a["b"].isRequired,content_export:c})},bJGz:function(e,t,r){"use strict"
r.d(t,"a",(function(){return g}))
var n=r("RtDj")
var a=r("HGxv")
var o=r("q1tI")
var s=r.n(o)
r("17x9")
var i=r("Mmr1")
var c=r("n12J")
var u=r("TstA")
var d=r("msMH")
var l=r("Ci/e")
var v=r("4uX5")
var p=r("qwzJ")
var f=r("1sWr")
var b=r.n(f)
var m=r("/656")
const h=Object(a["useScope"])("tray")
g.defaultProps={padding:"small",contentPadding:"0",errorImageUrl:b.a}
function g({padding:e,headerPadding:t,contentPadding:r,errorSubject:a,errorCategory:o,errorImageUrl:f,label:b,title:g,onDismiss:j,children:O,...y}){var S,k
null==t&&(t=`0 0 ${e} 0`)
null==g&&(g=b)
function _(){return Object(n["a"])(u["a"],{as:"div",padding:t},void 0,Object(n["a"])(u["a"].Item,{grow:true},void 0,Object(n["a"])(d["a"],{},void 0,Object(n["a"])(m["a"],{},void 0,g))),Object(n["a"])(u["a"].Item,{},void 0,Object(n["a"])(i["a"],{onClick:j,size:"small",screenReaderLabel:h.t("Close")})))}function C(){return Object(n["a"])(v["a"],{errorComponent:S||(S=Object(n["a"])(p["a"],{imageUrl:f,errorSubject:a,errorCategory:o}))},void 0,k||(k=Object(n["a"])(c["a"],{as:"div",padding:r,width:"100%",height:"100%"},void 0,O)))}return s.a.createElement(l["a"],Object.assign({label:b,onDismiss:j},y),Object(n["a"])(c["a"],{as:"div",padding:e,position:"absolute",insetBlockStart:"0",insetBlockEnd:"0",insetInlineStart:"0",insetInlineEnd:"0"},void 0,Object(n["a"])("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"}},void 0,_(),Object(n["a"])("div",{style:{position:"relative",flex:1}},void 0,C()))))}},dKDz:function(e,t,r){"use strict"
var n=/["'&<>]/
e.exports=a
function a(e){var t=""+e
var r=n.exec(t)
if(!r)return t
var a
var o=""
var s=0
var i=0
for(s=r.index;s<t.length;s++){switch(t.charCodeAt(s)){case 34:a="&quot;"
break
case 38:a="&amp;"
break
case 39:a="&#39;"
break
case 60:a="&lt;"
break
case 62:a="&gt;"
break
default:continue}i!==s&&(o+=t.substring(i,s))
i=s+1
o+=a}return i!==s?o+t.substring(i,s):o}},l0h0:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n=r("RtDj")
var a=r("HGxv")
var o=r("q1tI")
var s=r.n(o)
var i=r("bJGz")
var c=r("uSnb")
var u=r("n12J")
const d=Object(a["useScope"])("canvas_lazy_tray")
function l({children:e,...t}){const r=Object(n["a"])(u["a"],{as:"div",textAlign:"center"},void 0,Object(n["a"])(c["a"],{renderTitle:d.t("Loading...")}))
return s.a.createElement(i["a"],t,Object(n["a"])(o["Suspense"],{fallback:r},void 0,e))}},lNsk:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r("17x9")
const a=Object(n["shape"])({id:n["string"].isRequired,display_name:n["string"].isRequired,avatar_image_url:n["string"]})
t["b"]=a
Object(n["shape"])({id:n["string"].isRequired,name:n["string"].isRequired,avatar_url:n["string"],email:n["string"]})
const o=Object(n["shape"])({id:n["string"].isRequired,name:n["string"].isRequired,avatar_image_url:n["string"],html_url:n["string"].isRequired})}}])

//# sourceMappingURL=40-c-d3496c2744.js.map