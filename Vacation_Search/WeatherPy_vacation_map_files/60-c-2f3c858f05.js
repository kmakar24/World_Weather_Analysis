(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[60],{"2mql":function(t,e,i){"use strict"
var s=i("TOwV")
var n={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true}
var o={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true}
var r={$$typeof:true,render:true,defaultProps:true,displayName:true,propTypes:true}
var l={$$typeof:true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true}
var a={}
a[s.ForwardRef]=r
a[s.Memo]=l
function u(t){if(s.isMemo(t))return l
return a[t["$$typeof"]]||n}var h=Object.defineProperty
var c=Object.getOwnPropertyNames
var p=Object.getOwnPropertySymbols
var f=Object.getOwnPropertyDescriptor
var d=Object.getPrototypeOf
var b=Object.prototype
function m(t,e,i){if("string"!==typeof e){if(b){var s=d(e)
s&&s!==b&&m(t,s,i)}var n=c(e)
p&&(n=n.concat(p(e)))
var r=u(t)
var l=u(e)
for(var a=0;a<n.length;++a){var y=n[a]
if(!o[y]&&!(i&&i[y])&&!(l&&l[y])&&!(r&&r[y])){var g=f(e,y)
try{h(t,y,g)}catch(t){}}}}return t}t.exports=m},"65NJ":function(t,e,i){"use strict"
var s=i("ouhR")
var n=i.n(s)
i("w2hD")
n.a.fn.scrollToVisible=function(t){const e={}
const i=n()(t)
if(0===i.length)return
let s=i.offset(),o=i.outerWidth(),r=i.outerHeight(),l=s.top,a=l+r,u=s.left,h=u+o,c="html,body"==this.selector?n.a.windowScrollTop():this.scrollTop(),p=this.scrollLeft(),f=this.outerHeight(),d=this.outerWidth()
if("html,body"!=this.selector){let t=n()("body").offset()
this.each((function(){try{t=n()(this).offset()
return false}catch(t){}}))
l-=t.top
a-=t.top
u-=t.left
h-=t.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){f=n()(window).height()
n()("#wizard_box:visible").length>0&&(f-=n()("#wizard_box:visible").height())
d=n()(window).width()
l-=c
u-=p
a-=c
h-=p}l<0||f<r&&a>f?e.scrollTop=l+c:a>f&&(e.scrollTop=a+c-f+20)
u<0?e.scrollLeft=u+p:h>d&&(e.scrollLeft=h+p-d+20)
1==e.scrollTop&&(e.scrollTop=0)
1==e.scrollLeft&&(e.scrollLeft=0)
this.scrollTop(e.scrollTop)
this.scrollLeft(e.scrollLeft)
return this}},TOwV:function(t,e,i){"use strict"
t.exports=i("qT12")},Vovh:function(t,e,i){"use strict"
var s=i("HGxv")
var n=i("ouhR")
var o=i.n(n)
var r=i("mX+G")
var l=i.n(r)
var a=i("gI0r")
i("Dhso")
var u,h=function(t,e){for(var i in e)c.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},c={}.hasOwnProperty
u=Object(s["useScope"])("publish_btn_module")
e["a"]=function(t){h(e,t)
function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.disabledClass="disabled"
e.prototype.publishClass="btn-publish"
e.prototype.publishedClass="btn-published"
e.prototype.unpublishClass="btn-unpublish"
e.optionProperty("title")
e.optionProperty("publishText")
e.optionProperty("unpublishText")
e.optionProperty("disabledForModeration")
e.prototype.tagName="button"
e.prototype.className="btn"
e.prototype.events={click:"click",hover:"hover"}
e.prototype.els={i:"$icon",".publish-text":"$text"}
e.prototype.initialize=function(){var t
e.__super__.initialize.apply(this,arguments)
return null!=(t=this.model)?t.on("change:unpublishable",(i=this,function(){if(!i.model.get("unpublishable")&&i.model.get("published"))return i.disable()})):void 0
var i}
e.prototype.setElement=function(){e.__super__.setElement.apply(this,arguments)
this.$el.attr("data-tooltip","")
if(!this.model.get("unpublishable")&&this.model.get("published"))return this.disable()}
e.prototype.hover=function(t){var e
e=t.type
if("mouseenter"===e){if(this.keepState||this.isPublish()||this.isDisabled())return
this.renderUnpublish()
return this.keepState=true}this.keepState=false
if(!(this.isPublish()||this.isDisabled()))return this.renderPublished()}
e.prototype.click=function(t){t.preventDefault()
t.stopPropagation()
if(this.isDisabled())return
this.keepState=true
if(this.isPublish())return this.publish()
if(this.isUnpublish()||this.isPublished())return this.unpublish()}
e.prototype.addAriaLabel=function(t){var e
e=this.$el.find("span.screenreader-only.accessible_label")
e.length||(e=o()('<span class="screenreader-only accessible_label"></span>').appendTo(this.$el))
e.text(t)
return this.$el.attr("aria-label",t)}
e.prototype.setFocusToElement=function(){return this.$el.focus()}
e.prototype.publish=function(t){this.renderPublishing()
return this.model.publish().always((e=this,function(){e.trigger("publish")
e.enable()
e.render()
return e.setFocusToElement()}))
var e}
e.prototype.unpublish=function(t){this.renderUnpublishing()
return this.model.unpublish().done((e=this,function(){e.trigger("unpublish")
e.disable()
e.render()
return e.setFocusToElement()})).fail(function(t){return function(e){403===e.status&&o.a.flashError(t.model.disabledMessage())
t.disable()
t.renderPublished()
return t.setFocusToElement()}}(this))
var e}
e.prototype.isPublish=function(){return this.$el.hasClass(this.publishClass)}
e.prototype.isPublished=function(){return this.$el.hasClass(this.publishedClass)}
e.prototype.isUnpublish=function(){return this.$el.hasClass(this.unpublishClass)}
e.prototype.isDisabled=function(){return this.$el.hasClass(this.disabledClass)}
e.prototype.disable=function(){return this.$el.addClass(this.disabledClass)}
e.prototype.enable=function(){return this.$el.removeClass(this.disabledClass)}
e.prototype.reset=function(){this.$el.removeClass(this.publishClass+" "+this.publishedClass+" "+this.unpublishClass)
this.$icon.removeClass("icon-publish icon-unpublish icon-unpublished")
return this.$el.removeAttr("aria-label")}
e.prototype.publishLabel=function(){if(this.publishText)return this.publishText
if(this.title)return u.t("Unpublished.  Click to publish %{title}.",{title:this.title})
return u.t("Unpublished.  Click to publish.")}
e.prototype.unpublishLabel=function(){if(this.unpublishText)return this.unpublishText
if(this.title)return u.t("Published.  Click to unpublish %{title}.",{title:this.title})
return u.t("Published.  Click to unpublish.")}
e.prototype.render=function(){this.$el.is("button")||this.$el.attr("role","button")
this.$el.attr("tabindex","0")
this.$el.html('<i></i><span class="publish-text"></span>')
this.cacheEls()
this.$text.attr("tabindex","-1")
this.model.get("published")?this.renderPublished():this.renderPublish()
return this}
e.prototype.renderPublish=function(){return this.renderState({text:u.t("buttons.publish","Publish"),label:this.publishLabel(),buttonClass:this.publishClass,iconClass:"icon-unpublish"})}
e.prototype.renderPublished=function(){return this.renderState({text:u.t("buttons.published","Published"),label:this.unpublishLabel(),buttonClass:this.publishedClass,iconClass:"icon-publish icon-Solid"})}
e.prototype.renderUnpublish=function(){var t
t=u.t("buttons.unpublish","Unpublish")
return this.renderState({text:t,buttonClass:this.unpublishClass,iconClass:"icon-unpublish"})}
e.prototype.renderPublishing=function(){var t
this.disable()
t=u.t("buttons.publishing","Publishing...")
return this.renderState({text:t,buttonClass:this.publishClass,iconClass:"icon-publish icon-Solid"})}
e.prototype.renderUnpublishing=function(){var t
this.disable()
t=u.t("buttons.unpublishing","Unpublishing...")
return this.renderState({text:t,buttonClass:this.unpublishClass,iconClass:"icon-unpublished"})}
e.prototype.renderState=function(t){this.reset()
this.$el.addClass(t.buttonClass)
this.$el.attr("aria-pressed",t.buttonClass===this.publishedClass)
this.$icon.addClass(t.iconClass)
this.$text.html("&nbsp;"+Object(a["a"])(t.text))
if(this.model.get("disabledForModeration"))return this.disableWithMessage("You do not have permissions to edit this moderated assignment")
if(null==this.model.get("unpublishable")||this.model.get("unpublishable")){this.enable()
this.$el.data("tooltip","left")
this.$el.attr("title",t.text)
if(t.label)return this.addAriaLabel(t.label)}else if(this.model.get("published"))return this.disableWithMessage(this.model.disabledMessage())}
e.prototype.disableWithMessage=function(t){this.disable()
this.$el.attr("aria-disabled",true)
this.$el.attr("title",t)
this.$el.data("tooltip","left")
return this.addAriaLabel(t)}
return e}(l.a.View)},aq8L:function(t,e,i){"use strict"
var s=i("HGxv")
var n=i("ouhR")
var o=i.n(n)
var r=i("gI0r")
var l=i("3PZ/")
i("dhbk")
i("ESjL")
i("65NJ")
i("w2hD")
const a=Object(s["useScope"])("instructure_misc_plugins")
o.a.fn.setOptions=function(t,e){let i=t?"<option value=''>"+Object(r["a"])(t)+"</option>":""
null==e&&(e=[])
e.forEach(t=>{const e=Object(r["a"])(t)
i+='<option value="'+e+'">'+e+"</option>"})
return this.html(o.a.raw(i))}
o.a.fn.ifExists=function(t){this.length&&t.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){const t=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),e=t.find("div")
const i=e.innerWidth()
t.css("overflow-y","scroll")
const s=e.innerWidth()
t.remove()
return i-s}
o.a.fn.dim=function(t){return this.animate({opacity:.4},t)}
o.a.fn.undim=function(t){return this.animate({opacity:1},t)}
o.a.fn.confirmDelete=function(t){t=o.a.extend({},o.a.fn.confirmDelete.defaults,t)
const e=this
let i=null
let s=true
t.noMessage=t.noMessage||t.no_message
const n=function(){if(!s){t.cancelled&&o.a.isFunction(t.cancelled)&&t.cancelled.call(e)
return}t.confirmed||(t.confirmed=function(){e.dim()})
t.confirmed.call(e)
if(t.url){t.success||(t.success=function(t){e.fadeOut("slow",()=>{e.remove()})})
const s=t.prepareData?t.prepareData.call(e,i):{}
s.authenticity_token=Object(l["a"])()
o.a.ajaxJSON(t.url,"DELETE",s,i=>{t.success.call(e,i)},(i,s,n,r)=>{t.error&&o.a.isFunction(t.error)?t.error.call(e,i,s,n,r):o.a.ajaxJSON.unhandledXHRs.push(s)})}else{t.success||(t.success=function(){e.fadeOut("slow",()=>{e.remove()})})
t.success.call(e)}}
if(t.message&&!t.noMessage&&!o.a.skipConfirmations){if(t.dialog){s=false
const e="object"===typeof t.dialog?t.dialog:{}
const r=t.url.includes("assignments")?"btn-danger":"btn-primary"
i=o()(t.message).dialog(o.a.extend({},{modal:true,close:n,buttons:[{text:a.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:a.t("#buttons.delete","Delete"),class:r,click(){s=true
o()(this).dialog("close")}}]},e))
return}s=confirm(t.message)}n()}
o.a.fn.confirmDelete.defaults={get message(){return a.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(t){if(t&&true!==t){const i=(window.location.search||"").replace(/^\?/,"").split("&")
let s=null
for(var e=0;e<i.length;e++){const t=i[e]
t&&0===t.indexOf("hash=")&&(s="#"+t.substring(5))}this.bind("document_fragment_change",t)
const n=this
let r=false
for(e=0;e<o.a._checkFragments.fragmentList.length;e++){const t=o.a._checkFragments.fragmentList[e]
t.doc[0]==n[0]&&(r=true)}r||o.a._checkFragments.fragmentList.push({doc:n,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{s&&s.length>0?n.triggerHandler("document_fragment_change",s):n&&n[0]&&n[0].location&&n[0].location.hash.length>0&&n.triggerHandler("document_fragment_change",n[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){const t=o.a._checkFragments.fragmentList
for(let e=0;e<t.length;e++){const i=t[e]
const s=i.doc
if(s[0].location.hash!=i.fragment){s.triggerHandler("document_fragment_change",s[0].location.hash)
i.fragment=s[0].location.hash
o.a._checkFragments.fragmentList[e]=i}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){const t=this.eq(0)
t.hasClass("disabled_link")||t.click()}
o.a.fn.showIf=function(t){if(o.a.isFunction(t))return this.each((function(e){o()(this).showIf(t.call(this))}))
t?this.show():this.hide()
return this}
o.a.fn.disableIf=function(t){o.a.isFunction(t)&&(t=t.call(this))
this.prop("disabled",!!t)
return this}
o.a.fn.indicate=function(t){t=t||{}
let e
if("remove"==t){e=this.data("indicator")
e&&e.remove()
return}o()(".indicator_box").remove()
let i=this.offset()
t&&t.offset&&(i=t.offset)
const s=this.width()
const n=this.height()
const r=(t.container||this).zIndex()
e=o()(document.createElement("div"))
e.css({width:s+6,height:n+6,top:i.top-3,left:i.left-3,zIndex:r+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
e.addClass("indicator_box")
e.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",e)
o()("body").append(e)
t&&t.singleFlash?e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()}))
t&&t.scroll&&o()("html,body").scrollToVisible(e)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(t){console.log("%s: %o",t,this)
return this}
o.a.fn.fillWindowWithMe=function(t){const e=o.a.extend({minHeight:400},t),i=o()(this),s=o()("#wrapper"),n=o()("#main"),r=o()("#not_right_side"),l=o()(window),a=o()(this).add(e.alsoResize)
function u(){a.height(0)
const t=l.height()-(s.offset().top+s.outerHeight())+(n.height()-r.height()),u=Math.max(400,t)
a.height(u)
o.a.isFunction(e.onResize)&&e.onResize.call(i,u)}u()
l.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",u)
return this}
o.a.fn.autoGrowInput=function(t){t=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},t)
this.filter("input:text").each((function(){let e=t.minWidth||o()(this).width(),i="",s=o()(this),n=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:s.css("fontSize"),fontFamily:s.css("fontFamily"),fontWeight:s.css("fontWeight"),letterSpacing:s.css("letterSpacing"),whiteSpace:"nowrap"}),r=function(){setTimeout(()=>{if(i===(i=s.val()))return
n.text(i)
const o=n.width(),r=o+t.comfortZone>=e?o+t.comfortZone:e,l=s.width(),a=r<l&&r>=e||r>e&&r<t.maxWidth
a&&s.width(r)})}
n.insertAfter(s)
o()(this).bind("keyup keydown blur update change",r)}))
return this}
o.a},qT12:function(t,e,i){"use strict"
var s="function"===typeof Symbol&&Symbol.for,n=s?Symbol.for("react.element"):60103,o=s?Symbol.for("react.portal"):60106,r=s?Symbol.for("react.fragment"):60107,l=s?Symbol.for("react.strict_mode"):60108,a=s?Symbol.for("react.profiler"):60114,u=s?Symbol.for("react.provider"):60109,h=s?Symbol.for("react.context"):60110,c=s?Symbol.for("react.async_mode"):60111,p=s?Symbol.for("react.concurrent_mode"):60111,f=s?Symbol.for("react.forward_ref"):60112,d=s?Symbol.for("react.suspense"):60113,b=s?Symbol.for("react.suspense_list"):60120,m=s?Symbol.for("react.memo"):60115,y=s?Symbol.for("react.lazy"):60116,g=s?Symbol.for("react.block"):60121,v=s?Symbol.for("react.fundamental"):60117,w=s?Symbol.for("react.responder"):60118,x=s?Symbol.for("react.scope"):60119
function C(t){if("object"===typeof t&&null!==t){var e=t.$$typeof
switch(e){case n:switch(t=t.type,t){case c:case p:case r:case a:case l:case d:return t
default:switch(t=t&&t.$$typeof,t){case h:case f:case y:case m:case u:return t
default:return e}}case o:return e}}}function $(t){return C(t)===p}e.AsyncMode=c
e.ConcurrentMode=p
e.ContextConsumer=h
e.ContextProvider=u
e.Element=n
e.ForwardRef=f
e.Fragment=r
e.Lazy=y
e.Memo=m
e.Portal=o
e.Profiler=a
e.StrictMode=l
e.Suspense=d
e.isAsyncMode=function(t){return $(t)||C(t)===c}
e.isConcurrentMode=$
e.isContextConsumer=function(t){return C(t)===h}
e.isContextProvider=function(t){return C(t)===u}
e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===n}
e.isForwardRef=function(t){return C(t)===f}
e.isFragment=function(t){return C(t)===r}
e.isLazy=function(t){return C(t)===y}
e.isMemo=function(t){return C(t)===m}
e.isPortal=function(t){return C(t)===o}
e.isProfiler=function(t){return C(t)===a}
e.isStrictMode=function(t){return C(t)===l}
e.isSuspense=function(t){return C(t)===d}
e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===r||t===p||t===a||t===l||t===d||t===b||"object"===typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===u||t.$$typeof===h||t.$$typeof===f||t.$$typeof===v||t.$$typeof===w||t.$$typeof===x||t.$$typeof===g)}
e.typeOf=C}}])

//# sourceMappingURL=60-c-2f3c858f05.js.map