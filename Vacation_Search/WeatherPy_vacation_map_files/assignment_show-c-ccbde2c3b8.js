(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3738,134,4140],{"5nFh":function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n("17x9")
var d=n.n(l)
var u=n("cClk")
var p=n("BTe1")
var g=n("9yTY")
var _=function(e){var t=e.expanded
return{expanded:!t}}
var h=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(e){var r
Object(a["a"])(this,n)
r=t.call(this)
r.handleToggle=function(e){r.isControlled()||r.setState(_)
r.props.onToggle(e,!r.expanded)}
r.state={expanded:r.isControlled(e)?e.expanded:!!e.defaultExpanded}
r._contentId=Object(p["a"])("Expandable__content")
return r}Object(i["a"])(n,[{key:"isControlled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props
return"boolean"===typeof e.expanded}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,a=t.render,i=void 0===a?n:a
return"function"===typeof i?i({expanded:this.expanded,getToggleProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object(r["a"])({"aria-controls":e._contentId,"aria-expanded":e.expanded,onClick:Object(g["a"])(e.handleToggle,t.onClick)},t)},getDetailsProps:function(t){return{id:e._contentId}}}):null}},{key:"expanded",get:function(){return this.isControlled()?this.props.expanded:this.state.expanded}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"boolean"===typeof e.expanded&&e.expanded!==t.expanded?{expanded:e.expanded}:null}}])
n.displayName="Expandable"
return n}(c["Component"])
h.propTypes={expanded:Object(u["a"])(d.a.bool,"onToggle","defaultExpanded"),defaultExpanded:d.a.bool,onToggle:d.a.func,children:d.a.func,render:d.a.func}
h.defaultProps={defaultExpanded:false,onToggle:function(e,t){},expanded:void 0,children:null,render:void 0}},"6dnZ":function(e,t,n){"use strict"
n.r(t)
var r=n("ANjH")
var a=n("RtDj")
var i=n("q1tI")
var o=n.n(i)
var s=n("i8i4")
var c=n.n(s)
var l=n("/MKj")
var d=n("17x9")
var u=n.n(d)
var p=n("uSnb")
var g=n("HGxv")
var _=n("Z6JD")
var h
const b=Object(g["useScope"])("cyoe_assignment_sidebar_breakdown_graph_bar")
const{string:m,number:f,func:v}=u.a
class y extends o.a.Component{constructor(...e){super(...e)
this.selectRange=e=>{this.props.openSidebar(e.target)
this.props.selectRange(this.props.rangeIndex)}}renderInnerBar(){const e=Math.min(this.props.rangeStudents/this.props.totalStudents*100,100)
const t={width:e+"%"}
return e>0?Object(a["a"])("div",{style:t,className:"crs-bar__horizontal-inside-fill"}):null}render(){const{rangeStudents:e,totalStudents:t}=this.props
return Object(a["a"])("div",{className:"crs-bar__container"},void 0,Object(a["a"])("div",{className:"crs-bar__horizontal-outside"},void 0,h||(h=Object(a["a"])("div",{className:"crs-bar__horizontal-inside"})),this.renderInnerBar()),Object(a["a"])("div",{className:"crs-bar__bottom"},void 0,Object(a["a"])("span",{className:"crs-bar__info"},void 0,b.t("%{lowerBound}+ to %{upperBound}",{upperBound:this.props.upperBound,lowerBound:this.props.lowerBound})),Object(a["a"])("button",{className:"crs-link-button",onClick:this.selectRange,title:b.t("View range student details")},void 0,b.t("%{rangeStudents} out of %{totalStudents} students",{rangeStudents:e,totalStudents:t}))))}}var S=y
const O=Object(g["useScope"])("cyoe_assignment_sidebar_breakdown_graphs")
const{object:R,array:j,func:k,number:w,bool:E}=u.a
class N extends o.a.Component{renderContent(){return this.props.isLoading?Object(a["a"])("div",{className:"crs-breakdown-graph__loading"},void 0,Object(a["a"])(p["a"],{renderTitle:O.t("Loading"),size:"small"}),Object(a["a"])("p",{},void 0,O.t("Loading Data.."))):this.renderBars()}renderBars(){const{ranges:e,assignment:t,enrolled:n,openSidebar:r,selectRange:i}=this.props
return e.map(({size:e,scoring_range:o},s)=>Object(a["a"])(S,{rangeIndex:s,rangeStudents:e,totalStudents:n,upperBound:Object(_["b"])(o.upper_bound,t,true),lowerBound:Object(_["b"])(o.lower_bound,t,false),openSidebar:r,selectRange:i},s))}render(){return Object(a["a"])("div",{className:"crs-breakdown-graph"},void 0,Object(a["a"])("h2",{},void 0,O.t("Mastery Paths Breakdown")),this.renderContent())}}var T=N
var C=n("Xx/m")
var x=n("Ci/e")
var B=n("IRk9")
var I=n("KIj7")
var D=n("n12J")
var M=n("CyXg")
var A=n("HsON")
var G=n("TSYQ")
var L=n.n(G)
const{shape:J,string:z}=u.a
J({course_id:z.isRequired,trigger_assignment:z.isRequired})
const{shape:U,arrayOf:P,string:F,number:W}=u.a
U({course_id:W,name:F,title:F,grading_scheme:F,grading_type:F.isRequired,points_possible:W.isRequired,submission_types:P(F)})
const{shape:q,number:H}=u.a
q({range:H,student:H})
const{shape:V,string:Z,number:K}=u.a
V({id:K.isRequired,name:Z.isRequired,avatar_url:Z})
const Q=Object(g["useScope"])("cyoe_assignment_sidebar_student_range_itme")
class $ extends o.a.Component{constructor(...e){super(...e)
this.selectStudent=()=>{this.props.selectStudent(this.props.studentIndex)}}render(){const e=this.props.student.user.avatar_image_url||"/images/messages/avatar-50.png"
const{trend:t}=this.props.student
const n=L()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===t,"crs-student__trend-icon__neutral":0===t,"crs-student__trend-icon__negative":-1===t})
const r=null!==t&&void 0!==t
return Object(a["a"])("div",{className:"crs-student-range__item"},void 0,Object(a["a"])("img",{src:e,className:"crs-student__avatar",onClick:this.selectStudent}),Object(a["a"])("button",{className:"crs-student__name crs-link-button",onClick:this.selectStudent,"aria-label":Q.t("Select student %{name}",{name:this.props.student.user.name})},void 0,this.props.student.user.name),r&&Object(a["a"])("span",{className:n}))}}const{object:X,func:Y}=u.a
class ee extends o.a.Component{render(){this.props.range.students
return Object(a["a"])("div",{className:"crs-student-range"},void 0,this.props.range.students.map((e,t)=>Object(a["a"])($,{student:e,studentIndex:t,selectStudent:this.props.onStudentSelect},e.user.id)))}}const te=Object(g["useScope"])("cyoe_assignment_sidebar_student_ranges_view")
const{array:ne,func:re,object:ae}=u.a
class ie extends o.a.Component{constructor(e){super()
this.handleToggle=e=>{this.setState({selectedRange:e})}
this.state={selectedRange:e.selectedPath.range}}renderTabs(){return this.props.ranges.map((e,t)=>{const n=this.state.selectedRange===t
const r=Object(_["b"])(e.scoring_range.lower_bound,this.props.assignment,false)
const i=Object(_["b"])(e.scoring_range.upper_bound,this.props.assignment,true)
const o=`> ${r} - ${i}`
return Object(a["a"])(D["a"],{as:"div",padding:"xxx-small"},void 0,Object(a["a"])(I["a"],{variant:"filled",expanded:n,summary:o,onToggle:()=>this.handleToggle(t),size:"large",iconExpanded:M["a"],icon:A["a"]},t,Object(a["a"])(ee,{range:e,onStudentSelect:this.props.selectStudent})))})}render(){const e=!!this.props.student
const t=L()({"crs-ranges-view":true,"crs-ranges-view__hidden":e})
return Object(a["a"])("div",{className:t},void 0,Object(a["a"])("header",{className:"crs-ranges-view__header"},void 0,Object(a["a"])("h4",{},void 0,te.t("Mastery Paths Breakdown"))),this.renderTabs())}}var oe=n("vnQz")
const{object:se,number:ce}=u.a
class le extends o.a.Component{render(){const{trend:e}=this.props
const t=L()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===e,"crs-student__trend-icon__neutral":0===e,"crs-student__trend-icon__negative":-1===e})
const n=null!==e&&void 0!==e
const r=oe["a"].getCategory(this.props.assignment).id
return Object(a["a"])("div",{className:"crs-student-details__assignment"},void 0,Object(a["a"])("i",{className:`icon-${r} crs-student-details__assignment-icon crs-icon-${r}`}),Object(a["a"])("div",{className:"crs-student-details__assignment-name"},void 0,this.props.assignment.name),Object(a["a"])("div",{className:"crs-student-details__assignment-score"},void 0,Object(a["a"])("div",{},void 0,Object(_["b"])(this.props.assignment.score,this.props.assignment,true)),n&&Object(a["a"])("span",{className:t})))}}var de,ue,pe,ge
const _e=Object(g["useScope"])("cyoe_assignment_sidebar_student_details_view")
const{shape:he,string:be,number:me,arrayOf:fe,func:ve,bool:ye}=u.a
class Se extends o.a.Component{componentDidUpdate(e){this.props.student&&!e.student&&setTimeout(()=>this.backButton.focus(),100)}renderHeader(){if(!this.props.student)return null
return Object(a["a"])("header",{className:"crs-student-details__header"},void 0,o.a.createElement("button",{className:"crs-breakdown__link crs-back-button",ref:e=>{this.backButton=e},onClick:this.props.unselectStudent},de||(de=Object(a["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"})),_e.t("Back")))}renderStudentProfile(){const{student:e,triggerAssignment:t}=this.props
const{assignment:n}=t
const r=e.avatar_image_url||"/images/messages/avatar-50.png"
const i=`/conversations?context_id=course_${n.course_id}&user_id=${e.id}&user_name=${e.name}`
return Object(a["a"])("section",{className:"crs-student-details__profile-content"},void 0,Object(a["a"])("button",{className:"Button Button--icon-action student-details__prev-student","aria-label":_e.t("view previous student"),onClick:this.props.selectPrevStudent,type:"button"},void 0,ue||(ue=Object(a["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"}))),Object(a["a"])("div",{className:"crs-student-details__profile-inner-content"},void 0,Object(a["a"])("img",{src:r,"aria-hidden":true,className:"crs-student-details__profile-image"}),Object(a["a"])("h3",{className:"crs-student-details__name"},void 0,e.name),Object(a["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:i,className:"crs-breakdown__link"},void 0,pe||(pe=Object(a["a"])("i",{"aria-hidden":true,className:"icon-email crs-icon-email"})),_e.t("Send Message"))),Object(a["a"])("button",{className:"Button Button--icon-action student-details__next-student","aria-label":_e.t("view next student"),onClick:this.props.selectNextStudent,type:"button"},void 0,ge||(ge=Object(a["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-right"}))))}renderTriggerAssignment(){const{student:e,triggerAssignment:t}=this.props
const{assignment:n,submission:r}=t||{}
const i=`/courses/${n.course_id}/assignments/${n.id}/submissions/${e.id}`
let o=null
o=r?r.submitted_at?_e.l("date.formats.long",new Date(r.submitted_at)):null:_e.t("Not Submitted")
return Object(a["a"])("section",{className:"crs-student-details__score-content"},void 0,Object(a["a"])("h3",{className:"crs-student-details__score-number"},void 0,Object(_["a"])(r.grade,n)),Object(a["a"])("div",{className:"crs-student-details__score-title"},void 0,n.name),o?Object(a["a"])("div",{className:"crs-student-details__score-date"},void 0,_e.t("Submitted: %{submitDate}",{submitDate:o})):null,Object(a["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:i,className:"crs-breakdown__link"},void 0,_e.t("View Submission")))}renderFollowOnAssignments(){const e=this.props.followOnAssignments||[]
return Object(a["a"])("section",{},void 0,e.map((e,t)=>Object(a["a"])(le,{assignment:e.assignment,score:e.score,trend:e.trend},t)))}renderContent(){if(this.props.isLoading)return Object(a["a"])("div",{className:"crs-student-details__loading"},void 0,Object(a["a"])(p["a"],{renderTitle:_e.t("Loading"),size:"small"}),Object(a["a"])("p",{},void 0,_e.t("Loading Data..")))
if(this.props.student)return Object(a["a"])("div",{},void 0,this.renderStudentProfile(),this.renderTriggerAssignment(),this.renderFollowOnAssignments())
return null}render(){const e=!this.props.student
const t=L()({"crs-student-details":true,"crs-student-details__hidden":e})
return Object(a["a"])("div",{className:t},void 0,this.renderHeader(),this.renderContent())}}const Oe=Object(g["useScope"])("cyoe_assignment_sidebar_breakdown_details")
const{array:Re,object:je,func:ke,bool:we}=u.a
class Ee extends o.a.Component{constructor(...e){super(...e)
this.unselectStudent=()=>{this.props.selectStudent(null)}
this.selectPrevStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e>0?e-=1:e=t.size-1
this.props.selectStudent(e)}
this.selectNextStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e<t.size-1?e+=1:e=0
this.props.selectStudent(e)}}render(){const{selectedPath:e,ranges:t,students:n}=this.props
const r=null!==e.student?t[e.range].students[e.student].user:null
const i=null!==e.student&&r?n[r.id]:null
return Object(a["a"])(x["a"],{open:this.props.showDetails,placement:"end",shouldContainFocus:true,defaultFocusElement:()=>this.closeButton},void 0,Object(a["a"])("div",{className:"crs-breakdown-details"},void 0,Object(a["a"])("div",{className:"crs-breakdown-details__content"},void 0,Object(a["a"])("span",{className:"crs-breakdown-details__closeButton"},void 0,o.a.createElement(C["a"],{variant:"icon",ref:e=>{this.closeButton=e},onClick:this.props.closeSidebar},Object(a["a"])("span",{className:"crs-breakdown-details__closeButtonIcon"},void 0,Object(a["a"])(B["a"],{title:Oe.t("Close details sidebar")})))),Object(a["a"])(ie,{assignment:this.props.assignment,ranges:t,selectedPath:e,selectStudent:this.props.selectStudent,student:r}),Object(a["a"])(Se,{isLoading:this.props.isStudentDetailsLoading,student:r,triggerAssignment:i&&i.triggerAssignment,followOnAssignments:i&&i.followOnAssignments,selectPrevStudent:this.selectPrevStudent,selectNextStudent:this.selectNextStudent,unselectStudent:this.unselectStudent}))))}}const Ne=Object(l["b"])(e=>({assignment:e.assignment,ranges:e.ranges,enrolled:e.enrolled,isLoading:e.isInitialDataLoading}))(T)
const Te=Object(l["b"])(e=>({isStudentDetailsLoading:e.isStudentDetailsLoading,selectedPath:e.selectedPath,assignment:e.assignment,ranges:e.ranges,students:e.studentCache,showDetails:e.showDetails}))(Ee)
class Ce{constructor(e,t){this.store=e
this.actions=t}renderGraphs(e){const t={openSidebar:this.actions.openSidebar,selectRange:this.actions.selectRange}
c.a.render(Object(a["a"])(l["a"],{store:this.store},void 0,o.a.createElement(Ne,t)),e)}renderDetails(e){const t={selectRange:this.actions.selectRange,selectStudent:this.actions.selectStudent,closeSidebar:this.actions.closeSidebar}
c.a.render(Object(a["a"])(l["a"],{store:this.store},void 0,o.a.createElement(Te,t)),e)}}var xe=n("sINF")
var Be=n("Y/W1")
var Ie=n.n(Be)
const De=(e,t)=>(n,r)=>{n=void 0===n?t:n
if(e[r.type]){let t=n
Ie.a.isObject(n)?t={...n}:Array.isArray(n)&&(t=n.slice())
return e[r.type](t,r)}return n}
const Me=(e,t)=>t.payload
const Ae=(e="")=>(t,n)=>void 0===t?e:t
var Ge=n("BrAc")
const Le={call:({apiUrl:e,jwt:t},n)=>Object(Ge["a"])({url:e+n,dataType:"json",headers:{Authorization:"Bearer "+t}}).then(e=>e.data),loadInitialData(e){const t="/students_per_range?trigger_assignment="+e.assignment.id
return Le.call(e,t)},loadStudent(e,t){const n=`/student_details?trigger_assignment=${e.assignment.id}&student_id=${t}`
return Le.call(e,n)}}
var Je=Le
function ze(e){const t=e.split("_")
return t.map((e,t)=>0!==t&&e.length?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():e.toLowerCase()).join("")}function Ue(e){const t=t=>({type:e,payload:t})
t.type=e
t.toString=()=>e
return t}function Pe(e){const t={}
const n={}
e.forEach(e=>{const r=Ue(e)
const a=ze(r.type)
n[a]=r
t[r.type]=r.type})
return{actionTypes:t,actions:n}}const Fe=["SET_INITIAL_DATA","SET_SCORING_RANGES","SET_RULE","SET_ENROLLED","SET_ASSIGNMENT","SET_ERRORS","SET_STUDENT_DETAILS","SELECT_RANGE","ADD_STUDENT_TO_CACHE","SELECT_STUDENT","OPEN_SIDEBAR","CLOSE_SIDEBAR","LOAD_INITIAL_DATA_START","LOAD_INITIAL_DATA_END","LOAD_STUDENT_DETAILS_START","LOAD_STUDENT_DETAILS_END"]
const{actions:We,actionTypes:qe}=Pe(Fe)
We.closeSidebarFrd=We.closeSidebar
We.closeSidebar=()=>(e,t)=>{const n=t().sidebarTrigger
e(We.closeSidebarFrd())
n.focus()}
We.loadInitialData=e=>(e,t)=>{e(We.loadInitialDataStart())
Je.loadInitialData(t()).then(t=>{e(We.setInitialData(t))
e(We.loadInitialDataEnd())}).catch(t=>{e(We.setErrors(t))
e(We.loadInitialDataEnd())})}
We.loadStudent=e=>(t,n)=>{t(We.loadStudentDetailsStart())
Je.loadStudent(n(),e).then(n=>{t(We.addStudentToCache({studentId:e,data:n}))
t(We.loadStudentDetailsEnd())}).catch(e=>{t(We.loadStudentDetailsEnd())
t(We.setErrors(e))})}
We.selectStudent=e=>(t,n)=>{t({type:qe.SELECT_STUDENT,payload:e})
const{studentCache:r,ranges:a,selectedPath:i}=n()
const o=a[i.range].students[e]
o&&!r[o.user.id.toString()]&&t(We.loadStudent(o.user.id.toString()))}
const He=De({[qe.ADD_STUDENT_TO_CACHE]:(e,t)=>{const{studentId:n,data:r}=t.payload
e[n]={followOnAssignments:r.follow_on_assignments,triggerAssignment:r.trigger_assignment}
return e}},{})
const Ve=De({[qe.LOAD_INITIAL_DATA_START]:()=>true,[qe.LOAD_INITIAL_DATA_END]:()=>false},false)
const Ze=De({[qe.LOAD_STUDENT_DETAILS_START]:()=>true,[qe.LOAD_STUDENT_DETAILS_END]:()=>false},false)
const Ke=De({[qe.SET_ERRORS]:(e,t)=>[...Array.from(t.payload),...Array.from(e)]},[])
const Qe=De({[qe.SET_INITIAL_DATA]:(e,t)=>t.payload.ranges,[qe.SET_SCORING_RANGES]:Me},[])
const $e=De({[qe.SET_ASSIGNMENT]:Me},{})
const Xe=De({[qe.SET_INITIAL_DATA]:(e,t)=>t.payload.rule,[qe.SET_RULE]:Me},{course_id:"",trigger_assignment:""})
const Ye=De({[qe.SET_INITIAL_DATA]:(e,t)=>t.payload.enrolled,[qe.SET_ENROLLED]:Me},0)
const et=De({[qe.OPEN_SIDEBAR]:(e,t)=>t.payload,[qe.CLOSE_SIDEBAR]:()=>null},null)
const tt=De({[qe.OPEN_SIDEBAR]:()=>true,[qe.CLOSE_SIDEBAR]:()=>false,[qe.SELECT_RANGE]:(e,t)=>null!==t.payload},false)
const nt=De({[qe.SELECT_RANGE]:(e,t)=>{e.range=t.payload
return e},[qe.SELECT_STUDENT]:(e,t)=>{e.student=t.payload
return e},[qe.CLOSE_SIDEBAR]:e=>{e.student=null
return e}},{range:0,student:null})
var rt=Object(r["combineReducers"])({apiUrl:Ae(),jwt:Ae(),studentCache:He,isInitialDataLoading:Ve,isStudentDetailsLoading:Ze,errors:Ke,ranges:Qe,assignment:$e,rule:Xe,enrolled:Ye,sidebarTrigger:et,showDetails:tt,selectedPath:nt})
const at=Object(r["applyMiddleware"])(xe["a"])(r["createStore"])
function it(e){return at(rt,e)}var ot=it
const st={init:(e,t)=>{const n=window.ENV
if(null!=e&&n.CONDITIONAL_RELEASE_SERVICE_ENABLED&&null!=n.CONDITIONAL_RELEASE_ENV.rule){const{assignment:a,stats_url:i}=n.CONDITIONAL_RELEASE_ENV
const o=document.createElement("div")
o.setAttribute("id","crs-details")
t.appendChild(o)
a.submission_types=Array.isArray(a.submission_types)?a.submission_types:[a.submission_types]
const s={assignment:a,apiUrl:i}
const c=ot(s)
const l=Object(r["bindActionCreators"])(We,c.dispatch)
const d=new Ce(c,l)
d.renderGraphs(e)
d.renderDetails(o)
l.loadInitialData()
return d}}}
t["default"]=st},CyXg:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("hPGw")
var u=l.a.createElement("path",{d:"M925.966182,1226.25955 C944.762449,1253.5558 975.234883,1253.55919 994.033486,1226.25955 L1345.1073,716.424242 C1363.90357,689.127987 1352.28747,667 1319.14817,667 L600.851498,667 C567.718398,667 556.093763,689.124596 574.892365,716.424242 L925.966182,1226.25955 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(-1 0 0 1 1920 0)"})
var p=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconMiniArrowDown",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconMiniArrowDownSolid"
return n}(c["Component"])
p.glyphName="mini-arrow-down"
p.variant="Solid"
p.propTypes=Object(r["a"])({},d["a"].propTypes)},FZ6K:function(e,t,n){"use strict"
var r=n("RtDj")
var a=n("q1tI")
var i=n.n(a)
n("17x9")
var o=n("bZJi")
var s=n("HGxv")
const c=Object(s["useScope"])("assignment")
function l(e){return i.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),c.t("SpeedGrader™"))}function d(e){const t=e.className?"icon-speed-grader "+e.className:"icon-speed-grader"
let n={className:t,href:e.href}
e.disabled&&(n={...n,"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}})
return e.disabled?Object(r["a"])(o["a"],{placement:"bottom",renderTip:e.disabledTip,color:"primary"},void 0,l(n)):l(n)}t["a"]=d},HsON:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("hPGw")
var u=l.a.createElement("path",{d:"M925.966182,1226.25955 C944.762449,1253.5558 975.234883,1253.55919 994.033486,1226.25955 L1345.1073,716.424242 C1363.90357,689.127987 1352.28747,667 1319.14817,667 L600.851498,667 C567.718398,667 556.093763,689.124596 574.892365,716.424242 L925.966182,1226.25955 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(0 1 1 0 -.278 .278)"})
var p=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconMiniArrowEnd",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
n.displayName="IconMiniArrowEndSolid"
return n}(c["Component"])
p.glyphName="mini-arrow-end"
p.variant="Solid"
p.propTypes=Object(r["a"])({},d["a"].propTypes)},KIj7:function(e,t,n){"use strict"
n.d(t,"a",(function(){return x}))
var r=n("rePB")
var a=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var s=n("Ji7U")
var c=n("LK+K")
var l=n("q1tI")
var d=n.n(l)
var u=n("17x9")
var p=n.n(u)
var g=n("TSYQ")
var _=n.n(g)
var h=n("Xx/m")
var b=n("rf+m")
var m=n("y2yB")
var f=n("5nFh")
var v=n("J2CL")
var y=n("cClk")
var S=n("jtGx")
var O=n("/UXv")
var R=n("oXx0")
function j(e){var t=e.colors,n=e.spacing,r=e.borders,a=e.typography
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,lineHeight:a.lineHeight,textColor:t.textDarkest,fontSizeSmall:a.fontSizeSmall,fontSizeMedium:a.fontSizeMedium,fontSizeLarge:a.fontSizeLarge,smallIconSize:"0.5rem",mediumIconSize:"0.75rem",largeIconSize:"1rem",iconMargin:n.xxSmall,iconColor:t.textDarkest,togglePadding:n.xxSmall,toggleBorderRadius:r.radiusMedium,toggleBorderWidth:r.widthMedium,toggleBorderStyle:r.style,toggleFocusBorderColor:t.borderBrand,filledBackgroundColor:t.backgroundLight,filledBorderWidth:r.widthSmall,filledBorderStyle:r.style,filledBorderColor:t.borderMedium,filledBorderRadius:r.radiusMedium,filledPadding:n.small}}j["canvas"]=function(e){return{toggleFocusBorderColor:e["ic-brand-primary"],iconColor:e["ic-brand-font-color-dark"],textColor:e["ic-brand-font-color-dark"]}}
var k,w,E,N,T
var C={componentId:"MlJlv",template:function(e){return"\n\n.MlJlv_bGBk{font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit","}\n\n.MlJlv_doqw .MlJlv_ebWM,.MlJlv_doqw .MlJlv_cjSw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.MlJlv_doqw .MlJlv_dnnz{font-size:").concat(e.smallIconSize||"inherit","}\n\n.MlJlv_doqw .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_doqw .MlJlv_dUEG{padding-left:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_doqw .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_ycrn .MlJlv_ebWM,.MlJlv_ycrn .MlJlv_cjSw{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dnnz{font-size:").concat(e.mediumIconSize||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_ycrn .MlJlv_dUEG{padding-left:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_ycrn .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cMDj .MlJlv_ebWM,.MlJlv_cMDj .MlJlv_cjSw{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dnnz{font-size:").concat(e.largeIconSize||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_cMDj .MlJlv_dUEG{padding-left:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_cMDj .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cjSw{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:transparent;border:none;box-sizing:border-box;color:").concat(e.textColor||"inherit",";cursor:pointer;font-family:").concat(e.fontFamily||"inherit",";margin:0;outline:none;overflow:visible;padding:0;position:relative;text-decoration:none;touch-action:manipulation;user-select:none}\n\n.MlJlv_cjSw::-moz-focus-inner{margin:0;padding:0}\n\n.MlJlv_cjSw:before{border:").concat(e.toggleBorderWidth||"inherit"," ").concat(e.toggleBorderStyle||"inherit"," ").concat(e.toggleFocusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",'*1.5);bottom:-0.375rem;content:"";left:-0.375rem;opacity:0;pointer-events:none;position:absolute;right:-0.375rem;top:-0.375rem}\n\n.MlJlv_cjSw:focus:before{opacity:1}\n\n.MlJlv_cjSw:active,.MlJlv_cjSw:focus,.MlJlv_cjSw:hover{color:').concat(e.textColor||"inherit",";text-decoration:none}\n\n.MlJlv_cvfe{display:block;width:100%}\n\n.MlJlv_doNn{align-items:center;box-sizing:border-box;display:flex;position:relative;text-align:start}\n\n[dir=ltr] .MlJlv_doNn{text-align:left}\n\n[dir=rtl] .MlJlv_doNn{text-align:right}\n\n.MlJlv_dnnz{color:").concat(e.iconColor||"inherit","}\n\n.MlJlv_dnnz>svg{display:block}\n\n.MlJlv_fuNk{-webkit-margin-end:").concat(e.iconMargin||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.iconMargin||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .MlJlv_fuNk{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n[dir=rtl] .MlJlv_fuNk{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n.MlJlv_fhZl{-webkit-margin-end:0;-webkit-margin-start:").concat(e.iconMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(e.iconMargin||"inherit","}\n\n[dir=ltr] .MlJlv_fhZl{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .MlJlv_fhZl{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n.MlJlv_btWg{flex-grow:1;min-width:0.0625rem}\n\n.MlJlv_fFWz .MlJlv_btWg{flex:1}\n\n.MlJlv_ebWM{box-sizing:border-box;color:").concat(e.textColor||"inherit",";padding-top:").concat(e.togglePadding||"inherit","}\n\n.MlJlv_eFWP{display:none}\n\n.MlJlv_cMGi{display:block}\n\n@keyframes MlJlv_dFUU{to{opacity:1}}\n\n.MlJlv_caGd{animation-duration:0.3s;animation-fill-mode:forwards;animation-name:MlJlv_dFUU;opacity:0.01}")},root:"MlJlv_bGBk",small:"MlJlv_doqw",details:"MlJlv_ebWM",toggle:"MlJlv_cjSw",icon:"MlJlv_dnnz",indentDetails:"MlJlv_dUEG",medium:"MlJlv_ycrn",large:"MlJlv_cMDj",fluidWidth:"MlJlv_cvfe",summary:"MlJlv_doNn",iconStart:"MlJlv_fuNk",iconEnd:"MlJlv_fhZl",summaryText:"MlJlv_btWg",positionIconAtEnd:"MlJlv_fFWz",hiddenDetails:"MlJlv_eFWP",expandedDetails:"MlJlv_cMGi",content:"MlJlv_caGd",contentAnimation:"MlJlv_dFUU"}
var x=(k=Object(R["a"])(),w=Object(v["j"])(j,C),k(E=w(E=(T=N=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o]
e=t.call.apply(t,[this].concat(a))
e.shouldAnimateContent=false
e.getButtonRef=function(t){return e._button=t}
return e}Object(o["a"])(n,[{key:"focus",value:function(){this._button.focus()}},{key:"componentDidMount",value:function(){this.shouldAnimateContent=true}},{key:"renderSummary",value:function(e){var t=this.props,n=t.summary,r=t.iconPosition
return d.a.createElement("span",{className:C.summary},"start"===r&&this.renderIcon(e),d.a.createElement("span",{className:C.summaryText},n),"end"===r&&this.renderIcon(e))}},{key:"renderToggle",value:function(e,t){var i=this.props,o=i.variant,s=i.fluidWidth
var c=Object(a["a"])({},Object(S["a"])(this.props,n.propTypes),{},e,{children:this.renderSummary()})
var l=this.renderSummary(t)
return"filled"===o?d.a.createElement(h["a"],Object.assign({},c,{display:"block",textAlign:"start",elementRef:this.getButtonRef}),l):c.href?d.a.createElement("a",Object.assign({},c,{className:_()(C.toggle,C[o],Object(r["a"])({},C.fluidWidth,s)),ref:this.getButtonRef}),l):d.a.createElement("button",Object.assign({},c,{type:"button",className:_()(C.toggle,C[o],Object(r["a"])({},C.fluidWidth,s)),ref:this.getButtonRef}),l)}},{key:"renderIcon",value:function(e){var t
var n=this.props.iconPosition
var a=e?this.props.iconExpanded:this.props.icon
return this.props.children?d.a.createElement("span",{className:_()(C.icon,(t={},Object(r["a"])(t,C.iconStart,"start"===n),Object(r["a"])(t,C.iconEnd,"end"===n),t))},d.a.createElement(a,null)):null}},{key:"renderDetails",value:function(e,t){var n
var a=this.props,i=a.children,o=a.size,s=a.iconPosition,c=a.fluidWidth
return d.a.createElement("div",Object.assign({},t,{className:_()(C.details,(n={},Object(r["a"])(n,C[o],o),Object(r["a"])(n,C.hiddenDetails,!e),Object(r["a"])(n,C.expandedDetails,e),Object(r["a"])(n,C.indentDetails,"start"===s&&!c),n))}),i&&e&&this.renderContent())}},{key:"renderContent",value:function(){return d.a.createElement("div",{className:_()(Object(r["a"])({},C.content,this.shouldAnimateContent))},this.props.children)}},{key:"render",value:function(){var e,t=this
var n=this.props,a=n.variant,i=n.iconPosition,o=n.fluidWidth
var s="end"===i&&("filled"===a||o)
var c=(e={},Object(r["a"])(e,C.root,true),Object(r["a"])(e,C[this.props.size],true),Object(r["a"])(e,C.positionIconAtEnd,s),e)
return d.a.createElement(f["a"],Object(S["c"])(this.props,f["a"].propTypes),(function(e){var n=e.expanded,r=e.getToggleProps,a=e.getDetailsProps
return d.a.createElement("div",{className:_()(c)},t.renderToggle(r(),n),t.renderDetails(n,a()))}))}},{key:"focused",get:function(){return Object(O["a"])(this._button)}}])
n.displayName="ToggleDetails"
return n}(l["Component"]),N.propTypes={variant:p.a.oneOf(["default","filled"]),summary:p.a.node.isRequired,expanded:Object(y["a"])(p.a.bool,"onToggle","defaultExpanded"),defaultExpanded:p.a.bool,onToggle:p.a.func,icon:p.a.func,iconExpanded:p.a.func,iconPosition:p.a.oneOf(["start","end"]),fluidWidth:p.a.bool,children:p.a.node,size:p.a.oneOf(["small","medium","large"])},N.defaultProps={variant:"default",size:"medium",fluidWidth:false,icon:b["a"],iconExpanded:m["a"],iconPosition:"start",defaultExpanded:false,onToggle:function(e,t){},children:null,expanded:void 0},T))||E)||E)},QJn8:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("ouhR")
var a=n.n(r)
n("XbwQ")
function i(){return a()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=a()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return a()(t).html()}catch(e){}}})}},QLaP:function(e,t,n){"use strict"
var r=function(e,t,n,r,a,i,o,s){false
if(!e){var c
if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var l=[n,r,a,i,o,s]
var d=0
c=new Error(t.replace(/%s/g,(function(){return l[d++]})))
c.name="Invariant Violation"}c.framesToPop=1
throw c}}
e.exports=r},UWEG:function(e,t,n){"use strict"
var r=n("ouhR")
var a=n.n(r)
n("dhbk")
t["a"]={toggle(e){const t=a()(e).data.bind(a()(e))
return a.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
a()(e).toggleClass("btn-success")
a()("i",e).toggleClass("icon-empty icon-complete")
a()(".mark-done-labels span",e).toggleClass("visible")})}}},VrCy:function(e,t,n){"use strict"
var r=n("RtDj")
var a=n("ouhR")
var i=n.n(a)
var o=n("q1tI")
var s=n.n(o)
n("17x9")
var c=n("i8i4")
var l=n.n(c)
var d=n("HGxv")
n("r2Yr")
var u=n("dDTa")
var p=n("etQE")
var g,_,h
const b=Object(d["useScope"])("moderated_grading")
class m extends s.a.Component{constructor(e){super(e)
this.getMaxIFrameWidth=()=>{if(this.state.tools){let e=0
for(let t=0;t<this.state.tools.length;t++){const n=this.state.tools[t]
const r=this["tool_iframe_"+n.definition_id].offsetWidth
r>e&&(e=r)}return e}return null}
this.handleAlertFocus=e=>{const t={iframeStyle:{border:"2px solid #0374B5",width:this.getMaxIFrameWidth()-4+"px"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.handleAlertBlur=e=>{const t={iframeStyle:{border:"none",width:"100%"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.state={tools:[],beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",iframeStyle:{}}}componentWillMount(){this.getTools()}componentDidMount(){if(this.state.tools)for(let e=0;e<this.state.tools.length;e++){const t=this.state.tools[e]
this["tool_iframe_"+t.definition_id].setAttribute("allow",Object(u["a"])())}}async getTools(){const e=encodeURI(`${this.getDefinitionsUrl()}?placements[]=${this.props.placement}`)
try{const t=Object(p["f"])(e)||fetch(e,p["e"])
const n=await Object(p["b"])(t)
n.forEach(e=>e.launch=this.getLaunch(e))
this.setState({tools:n})}catch(e){i.a.flashError(b.t("Error retrieving assignment external tools"))}}getDefinitionsUrl(){return`/api/v1/courses/${this.props.courseId}/lti_apps/launch_definitions`}getLaunch(e){const t=e.placements[this.props.placement].url
let n=`?borderless=true&url=${encodeURIComponent(t)}&placement=${this.props.placement}`
this.props.assignmentId&&(n+="&assignment_id="+this.props.assignmentId)
const r=`/courses/${this.props.courseId}/external_tools/retrieve`
return r+n}renderTool(e){const t={}
i.a.extend(t,this.state.iframeStyle)
if(e.placements[this.props.placement].launch_height){t.height=e.placements[this.props.placement].launch_height
t.minHeight="unset"}e.placements[this.props.placement].launch_width&&(t.width=e.placements[this.props.placement].launch_width)
return s.a.createElement("iframe",{src:e.launch,className:"tool_launch",style:t,key:e.definition_id,title:b.t("External Tool %{tool_id}",{tool_id:e.definition_id}),ref:t=>{this["tool_iframe_"+e.definition_id]=t},"data-lti-launch":"true"})}renderToolsContainer(){const e="before_external_content_info_alert "+this.state.beforeExternalContentAlertClass
const t="after_external_content_info_alert "+this.state.afterExternalContentAlertClass
return Object(r["a"])("div",{style:{display:"about:blank"===this.state.toolLaunchUrl?"none":"block"}},void 0,Object(r["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,tabIndex:"0"},void 0,Object(r["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,g||(g=Object(r["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(r["a"])("i",{className:"icon-info"}))),b.t("The following content is partner provided"))),this.state.tools.map(e=>this.renderTool(e)),Object(r["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,tabIndex:"0"},void 0,Object(r["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,_||(_=Object(r["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(r["a"])("i",{className:"icon-info"}))),b.t("The preceding content is partner provided"))))}render(){if(0===this.state.tools.length)return h||(h=Object(r["a"])("div",{}))
return Object(r["a"])("div",{},void 0,Object(r["a"])("div",{className:"border border-trbl border-round"},void 0,this.renderToolsContainer()))}}m.defaultProps={assignmentId:void 0}
const f=function(e,t,n,a){const i=Object(r["a"])(m,{placement:t,courseId:n,assignmentId:a})
l.a.render(i,e)}
const v={configTools:m,attach:f}
t["a"]=v},Z6JD:function(e,t,n){"use strict"
n.d(t,"b",(function(){return g}))
n.d(t,"a",(function(){return f}))
var r=n("HGxv")
const a=Object(r["useScope"])("cyoe_assignment_sidebar_grading_types")
const i={points:{get label(){return a.t("points")},key:"points"},percent:{get label(){return a.t("percent")},key:"percent"},letter_grade:{get label(){return a.t("letter grade")},key:"letter_grade"},gpa_scale:{get label(){return a.t("GPA scale")},key:"gpa_scale"},other:{get label(){return a.t("other")},key:"other"}}
var o=i
var s=n("FdVj")
const c=Object(r["useScope"])("cyoe_assignment_sidebar_score")
const l=e=>{const t=s["a"].parse(e)
return!isNaN(t)&&isFinite(t)}
const d=e=>!!e&&!!e.grading_scheme
const u=e=>{const t=e?e.grading_type:o.percent.key
if((t===o.letter_grade.key||t===o.gpa_scale.key)&&!d(e))return o.percent.key
return t}
const p=(e,t)=>{const n=u(t)
return n===o.points.key?h(e,t):n===o.letter_grade.key||n===o.gpa_scale.key?b(e,t):m(e)}
const g=(e,t,n)=>{e||(e=n?"1":"0")
return _(p(e,t),t)}
const _=(e,t)=>{const n=u(t)
return n===o.points.key?c.t("%{score} pts",{score:c.n(e,{precision:2,strip_insignificant_zeros:true})}):n===o.letter_grade.key||n===o.gpa_scale.key?e:c.n(e,{precision:2,percentage:true,strip_insignificant_zeros:true})}
const h=(e,t)=>{if(!l(e))return e
if(0===e)return"0"
const n=s["a"].parse(e)
const r=Number(t.points_possible)||100
return parseFloat((n*r).toFixed(2))}
const b=(e,t)=>{if(""===e)return""
const n=s["a"].parse(e)
const r={letter:null,score:-Infinity}
for(const e in t.grading_scheme){const a=s["a"].parse(t.grading_scheme[e])
if(a<=n&&a>r.score||0===a&&a>n){r.score=a
r.letter=e}}return r.letter?r.letter:n}
const m=e=>{if(!l(e))return e
return Math.floor(100*e)}
const f=(e,t)=>{if("string"===typeof e&&t.grading_type!==o.letter_grade.key&&t.grading_type!==o.gpa_scale.key){const n=s["a"].parse(e.replace(/%$/,""))
if(!isNaN(n))return _(n,t)}return e}},ZbPE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return k}))
var r=n("rePB")
var a=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("17x9")
var u=n.n(d)
var p=n("TSYQ")
var g=n.n(p)
var _=n("J2CL")
var h=n("KgFQ")
var b=n("jtGx")
var m=n("nAyT")
var f=n("VTBJ")
function v(e){var t=e.typography,n=e.colors,r=e.spacing
return Object(f["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(r.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var y,S,O,R
var j={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var k=(y=Object(_["j"])(v,j),y(S=(R=O=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){var e
var t=this.props,a=t.wrap,i=t.weight,o=t.fontStyle,s=t.size,c=t.lineHeight,d=t.letterSpacing,u=t.transform,p=t.color,_=t.children
var m=Object(h["a"])(n,this.props)
return l.a.createElement(m,Object.assign({},Object(b["b"])(this.props),{className:g()((e={},Object(r["a"])(e,j.root,true),Object(r["a"])(e,j[s],s),Object(r["a"])(e,j["wrap-".concat(a)],a),Object(r["a"])(e,j["weight-".concat(i)],i),Object(r["a"])(e,j["style-".concat(o)],o),Object(r["a"])(e,j["transform-".concat(u)],u),Object(r["a"])(e,j["lineHeight-".concat(c)],c),Object(r["a"])(e,j["letterSpacing-".concat(d)],d),Object(r["a"])(e,j["color-".concat(p)],p),e)),ref:this.props.elementRef}),_)}}])
n.displayName="Text"
return n}(c["Component"]),O.propTypes={as:u.a.elementType,children:u.a.node,color:m["a"].deprecatePropValues(u.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:u.a.func,fontStyle:u.a.oneOf(["italic","normal"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:u.a.oneOf(["normal","light","bold"]),wrap:u.a.oneOf(["normal","break-word"])},O.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},R))||S)},bZJi:function(e,t,n){"use strict"
n.d(t,"a",(function(){return B}))
var r=n("Ff2n")
var a=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var s=n("Ji7U")
var c=n("LK+K")
var l=n("q1tI")
var d=n.n(l)
var u=n("17x9")
var p=n.n(u)
var g=n("nAyT")
var _=n("KgFQ")
var h=n("jtGx")
var b=n("sQ3t")
var m=n("E+IV")
var f=n("UCAh")
var v=n("BTe1")
var y=n("J2CL")
var S=n("oXx0")
var O=n("jsCG")
var R=n("AdN2")
var j=function(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:n.small}}
var k,w,E,N,T,C
var x={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var B=(k=Object(g["a"])("8.0.0",{tip:"renderTip",variant:"color"}),w=Object(S["a"])(),E=Object(y["j"])(j,x),k(N=w(N=E(N=(C=T=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o]
e=t.call.apply(t,[this].concat(a))
e._id=Object(v["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(o["a"])(n,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,r=e.as
var i=this.state.hasFocus
var o={"aria-describedby":this._id}
if(r){var s=Object(_["a"])(n,this.props)
var c=Object(h["a"])(this.props,n.propTypes)
return d.a.createElement(s,Object.assign({},c,o),t)}return"function"===typeof t?t({focused:i,getTriggerProps:function(e){return Object(a["a"])({},o,{},e)}}):Object(b["a"])(this.props.children,o)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.renderTip,a=t.isShowingContent,i=t.defaultIsShowingContent,o=t.on,s=t.placement,c=t.mountNode,l=t.constrain,u=t.offsetX,p=t.offsetY,g=t.positionTarget,_=t.onShowContent,b=t.onHideContent,f=t.tip,v=(t.variant,Object(r["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var y=this.props.variant
y=y?"default"===y?"primary-inverse":"primary":this.props.color
return d.a.createElement(O["a"],Object.assign({},Object(h["b"])(v),{isShowingContent:a,defaultIsShowingContent:i,on:o,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:s,color:"primary"===y?"primary-inverse":"primary",mountNode:c,constrain:l,shadow:"none",offsetX:u,offsetY:p,positionTarget:g,renderTrigger:function(){return e.renderTrigger()},onShowContent:_,onHideContent:b,onFocus:this.handleFocus,onBlur:this.handleBlur}),d.a.createElement("span",{id:this._id,className:x.root,role:"tooltip"},n?Object(m["a"])(n):f))}}])
n.displayName="Tooltip"
return n}(l["Component"]),T.propTypes={children:p.a.oneOfType([p.a.node,p.a.func]).isRequired,renderTip:p.a.oneOfType([p.a.node,p.a.func]),isShowingContent:p.a.bool,defaultIsShowingContent:p.a.bool,as:p.a.elementType,on:p.a.oneOfType([p.a.oneOf(["click","hover","focus"]),p.a.arrayOf(p.a.oneOf(["click","hover","focus"]))]),color:p.a.oneOf(["primary","primary-inverse"]),placement:f["a"].placement,mountNode:f["a"].mountNode,constrain:f["a"].constrain,offsetX:p.a.oneOfType([p.a.string,p.a.number]),offsetY:p.a.oneOfType([p.a.string,p.a.number]),positionTarget:p.a.oneOfType([R["a"],p.a.func]),onShowContent:p.a.func,onHideContent:p.a.func,tip:p.a.node,variant:p.a.oneOf(["default","inverse"])},T.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},C))||N)||N)||N)},dDTa:function(e,t,n){"use strict"
const r=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=r},dI71:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n("s4An")
function a(e,t){e.prototype=Object.create(t.prototype)
e.prototype.constructor=e
Object(r["a"])(e,t)}},"dwl/":function(e,t,n){"use strict"
var r=n("RtDj")
n("17x9")
var a=n("sTNg")
var i=n("HGxv")
n("q1tI")
const o=Object(i["useScope"])("assignment")
function s(e){return Object(r["a"])("option",{value:e.id},e.id,e.name)}function c(e){return Object(r["a"])("optgroup",{label:e.name},"group_category_"+e.id,e.groups.map(e=>s(e)))}function l(e){return Object(r["a"])(a["a"],{id:"student-group-filter",label:e.label},void 0,Object(r["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(r["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",o.t("Select One")),e.categories.map(e=>c(e))))}t["a"]=l},jbBh:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("ouhR")
var a=n.n(r)
var i=n("HGxv")
n("Dhso")
const o=Object(i["useScope"])("assignment!reupload_submissions_helper")
const s="re_upload_submissions_form"
function c({submissions_zip:e}){if(!e)return false
if(!e.match(/\.zip$/)){a()(this).formErrors({submissions_zip:o.t("Please upload files as a .zip")})
return false}const t=this.find('button[type="submit"]')
t.attr("disabled",true)
t.text(o.t("Uploading..."))
return true}function l(e){const t=a()("#"+s)
t.find('input[name="submissions_zip"]').remove()
t.removeAttr("enctype")
t.append(`<input type="hidden" name="attachment_id" value="${e.id}">`)
document.getElementById(s).submit()}function d(e){const t=this.find('button[type="submit"]')
t.attr("disabled",false)
t.text(o.t("Upload Files"))
return this}function u(e){return{errorMessage:o.t("Upload error. Please try again.")}}function p(e){const t={fileUpload:true,fileUploadOptions:{context_code:e,formDataTarget:"uploadDataUrl",intent:"submissions_zip_upload",preparedFileUpload:true,singleFile:true,upload_only:true,preferFileValueForInputName:false},object_name:"attachment",beforeSubmit:c,error:d,errorFormatter:u,success:l}
a()("#"+s).formSubmit(t)
return t}},"rf+m":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("hPGw")
var u=l.a.createElement("path",{d:"M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
n.displayName="IconArrowOpenEndSolid"
return n}(c["Component"])
p.glyphName="arrow-open-end"
p.variant="Solid"
p.propTypes=Object(r["a"])({},d["a"].propTypes)},vnQz:function(e,t,n){"use strict"
var r=n("Y/W1")
var a=n.n(r)
var i=n("HGxv")
const o=Object(i["useScope"])("assignment_categories")
const s={label:o.t("Other"),id:"other",submissionTypes:[""]}
const c={list:[{label:o.t("Assignments"),id:"assignment",contentTypeClass:"assignment",submissionTypes:["online_upload","online_text_entry","online_url","on_paper","external_tool","not_graded","media_recording","none"]},{label:o.t("Quizzes"),id:"quiz",contentTypeClass:"quiz",submissionTypes:["online_quiz"]},{label:o.t("Discussions"),id:"discussion",contentTypeClass:"discussion_topic",submissionTypes:["discussion_topic"]},{label:o.t("Wiki"),id:"document",contentTypeClass:"wiki_page",submissionTypes:["wiki_page"]},s]}
c.getCategory=e=>{const t=a.a.find(c.list,t=>e.submission_types.length&&a.a.find(e.submission_types,e=>-1!==t.submissionTypes.indexOf(e)))
return t||s}
t["a"]=c},wx14:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
function r(){r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
return r.apply(this,arguments)}},xHU4:function(e,t,n){"use strict"
n.r(t)
var r=n("RtDj")
var a=n("ik22")
var i=n("HGxv")
var o=n("ouhR")
var s=n.n(o)
n("q1tI")
var c=n("i8i4")
var l=n.n(c)
var d=n("BrAc")
var u=n("Qyje")
var p=n.n(u)
var g=n("ygkh")
var _=n("Vovh")
var h=n("mX+G")
var b=n.n(h)
var m=function(e,t){return function(){return e.apply(t,arguments)}},f=function(e,t){for(var n in t)v.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},v={}.hasOwnProperty
var y=function(e){f(t,e)
function t(){this.toggleSpeedgraderLink=m(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(b.a.View)
var S=n("QJn8")
var O=n("UWEG")
var R=n("6dnZ")
n("Dhso")
var j=n("40dz")
var k=n("VrCy")
var w=n("dwl/")
var E=n("FZ6K")
var N=n("QbG7")
var T=n("Nuch")
var C=n("jbBh")
var x=n("3lLS")
var B=n.n(x)
const I=Object(i["useScope"])("assignment")
B()(()=>{const e=new j["default"]
e.init({itemType:"assignment",page:"show"})})
let D=[]
function M(e){if("0"!==e){const t={selectedStudentGroupId:e}
D.push(t)
ENV.selected_student_group_id=e
G()
A()
d["a"].put(`/api/v1/courses/${ENV.COURSE_ID}/gradebook_settings`,p.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}})).finally(()=>{D=D.filter(e=>e!==t)
A()})}}function A(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&(!ENV.selected_student_group_id||D.length>0)
const t=document.getElementById("speed_grader_link_mount_point")
t&&l.a.render(Object(r["a"])(E["a"],{disabled:e,href:ENV.speed_grader_url,disabledTip:I.t("Must select a student group first")}),t)}function G(){const e=document.getElementById("student_group_filter_mount_point")
e&&l.a.render(Object(r["a"])(w["a"],{categories:ENV.group_categories,label:I.t("Select Group to Grade"),onChange:M,value:ENV.selected_student_group_id}),e)}B()(()=>{const e=document.getElementById("immersive_reader_mount_point")
const t=document.getElementById("immersive_reader_mobile_mount_point");(e||t)&&n.e(139).then(n.bind(null,"AZYJ")).then(n=>{var r
const a=()=>{var e
return null===(e=document.querySelector(".description"))||void 0===e?void 0:e.innerHTML}
const i=null===(r=document.querySelector(".title"))||void 0===r?void 0:r.textContent
e&&n.initializeReaderButton(e,{content:a,title:i})
t&&n.initializeReaderButton(t,{content:a,title:i})}).catch(e=>{console.log("Error loading immersive readers.",e)})})
const L=Promise.all([n.e(9),n.e(195)]).then(n.bind(null,"fY8A"))
s()(()=>{const e=s()("#assignment_publish_button")
if(e.length>0){const t=new g["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new y({model:t,el:"#assignment-speedgrader-link"}).render()
const n=new _["a"]({model:t,el:e})
n.render()
n.on("publish",()=>s()("#moderated_grading_button").show())
n.on("unpublish",()=>s()("#moderated_grading_button").hide())}L.then(()=>{s()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:window.location})})
return Object(S["a"])()})
s()(()=>s()("#content").on("click","#mark-as-done-checkbox",(function(){return O["a"].toggle(this)})))
function J(e,t=true){e&&e.preventDefault()
l.a.render(Object(r["a"])(N["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentShare:{content_type:"assignment",content_id:ENV.ASSIGNMENT_ID},onDismiss:()=>{J(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}function z(e,t=true){e&&e.preventDefault()
l.a.render(Object(r["a"])(T["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentSelection:{assignments:[ENV.ASSIGNMENT_ID]},onDismiss:()=>{z(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}s()(()=>{s()(".direct-share-send-to-menu-item").click(J)
s()(".direct-share-copy-to-menu-item").click(z)})
s()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&G()
A()}})
s()(()=>{s()(".upload_submissions_link").click(e=>{e.preventDefault()
s()("#re_upload_submissions_form").slideToggle()})
s()(".download_submissions_link").click((function(e){e.preventDefault()
a["a"].downloadSubmissions(s()(this).attr("href"))
s()(".upload_submissions_link").slideDown()}))
Object(C["a"])(ENV.USER_ASSET_STRING)
s()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?s()(".assignment_peer_reviews_link").slideDown():s()(".assignment_peer_reviews_link").slideUp()})})
s()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
R["default"].init(e,t)
document.getElementById("assignment_external_tools")&&k["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})
B()(()=>{s()("#accessibility_warning").on("focus",(function(){s()("#accessibility_warning").removeClass("screenreader-only")}))
s()("#accessibility_warning").on("blur",(function(){s()("#accessibility_warning").addClass("screenreader-only")}))})},y2yB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("hPGw")
var u=l.a.createElement("path",{d:"M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(0 1 1 0 .067 -.067)"})
var p=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconArrowOpenDownSolid"
return n}(c["Component"])
p.glyphName="arrow-open-down"
p.variant="Solid"
p.propTypes=Object(r["a"])({},d["a"].propTypes)}}])

//# sourceMappingURL=assignment_show-c-ccbde2c3b8.js.map