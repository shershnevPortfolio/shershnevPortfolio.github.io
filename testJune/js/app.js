!function(a){function e(e){for(var t,n,i=e[0],o=e[1],l=e[2],c=0,s=[];c<i.length;c++)n=i[c],f[n]&&s.push(f[n][0]),f[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t]);for(d&&d(e);s.length;)s.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var n=u[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==f[l]&&(i=!1)}i&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var n={},f={0:0},u=[];function c(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=a,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="../";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var d=i;u.push([73,1]),r()}({107:function(){},108:function(){},109:function(){},110:function(){},111:function(){},112:function(){},113:function(){},114:function(){},115:function(){},117:function(){},118:function(){},119:function(){},120:function(){},121:function(){},122:function(){},123:function(){},124:function(){},125:function(){},142:function(e){e.exports="./images/extention-cee56b3f.svg"},143:function(e){e.exports="./images/plus-47ea71fb.svg"},144:function(e,t,n){e.exports=n.p+"404.html"},145:function(){},146:function(e,t,n){e.exports=n.p+"index.html"},147:function(e,t,n){"use strict";n.r(t);n(74);var i=n(15),o=n.n(i),l=(n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(43)),c=(n(118),n(119),n(44)),s=(n(121),n(122),n(123),n(124),n(125),n(71));n(144),n(145),n(146);o()(function(){console.log("init layout"),console.log("init blocks"),Object(l.a)(),Object(c.a)(),Object(s.a)(),console.log("init pages")})},43:function(e,t,i){"use strict";(function(n){i(41),i(117),i(67),i(68);t.a=function(){var e=n(".task").find(".task__select").find(".select");e.select2({minimumResultsForSearch:-1}),e.each(function(){var e=n(this).find("option:selected"),t={color:e.data("text"),background:e.data("color")};n(this).parent(".task__select").find(".select2-selection--single").css({background:t.background}),n(this).parent(".task__select").find(".select2-selection__rendered").css({color:t.color}),n(this).parent(".task__select").find(".select2-selection__arrow").append(function(e){return'<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M0.858844 1.57019L0.716869 1.42858L0.858844 1.28698L1.28854 0.858395L1.42978 0.717525L1.57102 0.858395L5.58341 4.86036L9.59581 0.858395L9.73705 0.717525L9.87828 0.858395L10.308 1.28698L10.45 1.42858L10.308 1.57019L5.72465 6.14161L5.58341 6.28248L5.44218 6.14161L0.858844 1.57019Z" fill="'.concat(e,'" stroke="#212121" stroke-width="0.4"/>\n  </svg>\n  ')}(t.color)),n(this).parent(".task__select").find(".select2-results__option").css({color:"red "})})}}).call(this,i(15))},44:function(e,t,n){"use strict";(function(i){n(41),n(120),n(67),n(68);t.a=function(){var n=[{placeholder:"Проект",closeOnSelect:!1,minimumResultsForSearch:-1,data:[{id:"RsDigital",text:"Rs Digital"},{id:"Rocketware",text:"Rocketware"},{id:"Mecto.ru",text:"Mecto.ru"}]},{placeholder:"Статус",closeOnSelect:!1,data:[{id:"in-progress",text:"В работе"},{id:"done",text:"Сделана"},{id:"need-check",text:"Нужна проверка"}]},{placeholder:"Приоритет",closeOnSelect:!1,data:[{id:"max",text:"Максимум"},{id:"high",text:"Высокий"},{id:"intermidiate",text:"Средний"},{id:"min",text:"Минимальный"},{id:"low",text:"Низкий"}]},{placeholder:"Автор",closeOnSelect:!1,data:[{id:"in-progress",text:"В работе"},{id:"done",text:"Сделана"},{id:"need-check",text:"Нужна проверка"}]},{placeholder:"Участие",closeOnSelect:!1,data:[{id:"in-progress",text:"В работе"},{id:"done",text:"Сделана"},{id:"need-check",text:"Нужна проверка"}]}],e=i(".filter").find(".filter__selects").find("select");e.each(function(e){var t=n[e];i(this).select2(t)}),e.on("select2:open",function(){i(".select2-results__options").addClass("with-checkbox")})}}).call(this,n(15))},71:function(e,n,r){"use strict";(function(c){r(126),r(41),r(127),r(129),r(130),r(131),r(134),r(136);function s(e){var t=e.type.split("/"),n=(t[0],e.size/1e6);n=n<1?"".concat((n*=1024).toFixed(0)," Кб"):"".concat(n.toFixed(0)," Мб"),console.log(n);var i=t[1].toUpperCase();console.log();var o=e.name.slice(0,e.name.indexOf(i)-i.length);return l()({},e,{name:o,extention:i,size:n})}var e=r(72),l=r.n(e),a=c(".form"),t=a.find(".file-upload");n.a=function(){t.on("change",function(){var e,t=c(this).prop("files"),n=[];for(var i in console.log("asdasdasdasd"),t)if("length"!==i&&"item"!==i){var o=t[i],l=s(o);n.push((e=l,"\n    <div class='file-label'>\n      <div class='file-label__button file-label__button--colored'>\n      <img src=\"".concat(r(142),'" alt=""/></div><div class="file-label__text">\n      </div>\n      <div class=\'file-label__text\'>\n        <span class=\'file-label__title\'>\n          ').concat(e.name,"\n        </span>\n        <span class='file-label__requires'>\n          ").concat(e.extention,", ").concat(e.size,"\n        </span>\n      </div>\n    </div>\n\n    ")))}a.find(".form__file-component").toggleClass("form__file-component--reversed"),a.find(".form__file-list").append(n),function(e){var t='\n      <label class="file-label file-label--more" for="upload-file">\n      <div class="file-label__button">\n        <img src="'.concat(r(143),'" alt=""/></div><div class="file-label__text">\n        <span class="file-label__title">Загрузить еще</span>\n      </div>\n      <input class="file-upload" type="file" id="upload-file" multiple="multiple" accept=".png, ,jpg, .mp4, .gif"/>\n    </label>\n\n    ');e.parent(".file-label").html(t)}(c(this))})}}).call(this,r(15))},73:function(e,t,n){e.exports=n(147)}});