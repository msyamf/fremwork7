(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var b=e.$,T=(e.Template7,e.utils),M=(e.device,e.support),o=e.Class,n=(e.Modal,e.ConstructorMethods),a=(e.ModalMethods,function(y){function e(i,e){void 0===e&&(e={}),y.call(this,e,[i]);var r=this,t={};r.useModulesParams(t),r.params=T.extend(t,e);var o=r.params.el;if(!o)return r;var n=b(o);if(0===n.length)return r;if(n[0].f7Toggle)return n[0].f7Toggle;var s,a=n.children('input[type="checkbox"]');T.extend(r,{app:i,$el:n,el:n[0],$inputEl:a,inputEl:a[0],disabled:n.hasClass("disabled")||a.hasClass("disabled")||a.attr("disabled")||a[0].disabled}),Object.defineProperty(r,"checked",{enumerable:!0,configurable:!0,set:function(e){r&&void 0!==r.$inputEl&&r.checked!==e&&(a[0].checked=e,r.$inputEl.trigger("change"))},get:function(){return a[0].checked}}),n[0].f7Toggle=r;var c,l,g,u,d,f={};function h(e){s||r.disabled||(f.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,s=!(l=0),c=void 0,u=T.now(),d=r.checked,g=n[0].offsetWidth,T.nextTick(function(){s&&n.addClass("toggle-active-state")}))}function p(e){if(s&&!r.disabled){var t,o="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,n="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,a=i.rtl?-1:1;if(void 0===c&&(c=!!(c||Math.abs(n-f.y)>Math.abs(o-f.x))),c)s=!1;else e.preventDefault(),(l=o-f.x)*a<0&&Math.abs(l)>g/3&&d&&(t=!0),0<l*a&&Math.abs(l)>g/3&&!d&&(t=!0),t&&(f.x=o,r.checked=!d,d=!d)}}function v(){if(!s||r.disabled)return c&&n.removeClass("toggle-active-state"),void(s=!1);var e,t=i.rtl?-1:1;s=!1,n.removeClass("toggle-active-state"),T.now()-u<300&&(l*t<0&&d&&(e=!0),0<l*t&&!d&&(e=!0),e&&(r.checked=!d))}function m(){r.$el.trigger("toggle:change",r),r.emit("local::change toggleChange",r)}r.attachEvents=function(){if(M.touch){var e=!!M.passiveListener&&{passive:!0};n.on(i.touchEvents.start,h,e),i.on("touchmove",p),i.on("touchend:passive",v)}r.$inputEl.on("change",m)},r.detachEvents=function(){if(M.touch){var e=!!M.passiveListener&&{passive:!0};n.off(i.touchEvents.start,h,e),i.off("touchmove",p),i.off("touchend:passive",v)}r.$inputEl.off("change",m)},r.useModules(),r.init()}return y&&(e.__proto__=y),((e.prototype=Object.create(y&&y.prototype)).constructor=e).prototype.toggle=function(){this.checked=!this.checked},e.prototype.init=function(){this.attachEvents()},e.prototype.destroy=function(){var e=this;e.$el.trigger("toggle:beforedestroy",e),e.emit("local::beforeDestroy toggleBeforeDestroy",e),delete e.$el[0].f7Toggle,e.detachEvents(),T.deleteProps(e),e=null},e}(o)),i={name:"toggle",create:function(){this.toggle=n({defaultSelector:".toggle",constructor:a,app:this,domProp:"f7Toggle"})},static:{Toggle:a},on:{tabMounted:function(e){var o=this;b(e).find(".toggle-init").each(function(e,t){return o.toggle.create({el:t})})},tabBeforeRemove:function(e){b(e).find(".toggle-init").each(function(e,t){t.f7Toggle&&t.f7Toggle.destroy()})},pageInit:function(e){var o=this;e.$el.find(".toggle-init").each(function(e,t){return o.toggle.create({el:t})})},pageBeforeRemove:function(e){e.$el.find(".toggle-init").each(function(e,t){t.f7Toggle&&t.f7Toggle.destroy()})}},vnode:{"toggle-init":{insert:function(e){var t=e.elm;this.toggle.create({el:t})},destroy:function(e){var t=e.elm;t.f7Toggle&&t.f7Toggle.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[i.name])return;e.use(i),e.instance&&(e.instance.useModuleParams(i,e.instance.params),e.instance.useModule(i))}return i}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))