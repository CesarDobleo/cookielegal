(function($) {
	$.cookielegal = function(options){
		$.cookielegal.opc = $.extend( $.cookielegal.opc_default, options );
		if($.cookielegal.getCookie($.cookielegal.opc.cookiename)!='accepted'){
			$('body').prepend($.cookielegal.css());
			$('body').prepend($.cookielegal.container());
			setTimeout("$.cookielegal.hideMsg();", $.cookielegal.opc.timeshow);
		} else {
			$.cookielegal.setCookie($.cookielegal.opc.cookiename,'accepted',365)
		}
	};
	$.cookielegal.opc;
	
	$.cookielegal.opc_default = {
		cookiename:'cookielegal',
		timeshow:10000,
		privacy_url:false,
		texts:{
			disclaimer:'Utilizamos cookies propias y de terceros para mejorar nuestros servicios y poder realizar mediciones de navegaci&oacute;n dentro de nuestro site.<br>Si contin&uacute;a navegando, consideramos que acepta su uso.'
		}
	};
	$.cookielegal.css = function(){
		var out = '<style>';
		out+='.cookielegal{width:100%;position:fixed;top:0px;background-color:rgba(0,0,0,0.7);color:#fff;z-index:999999;}'
		out+='.cookielegal > .cont{padding:25px 20px;font-family:sans-serif;font-size:12px;text-align:center;}';
		out+='.cookielegalbut{-moz-box-shadow:inset 0px 1px 0px 0px #ffffff;-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;box-shadow:inset 0px 1px 0px 0px #ffffff;background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf) );background:-moz-linear-gradient( center top, #ededed 5%, #dfdfdf 100% );filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ededed", endColorstr="#dfdfdf");background-color:#ededed;-moz-border-radius:6px;-webkit-border-radius:6px;border-radius:6px;border:1px solid #dcdcdc;display:inline-block;color:#777777 !important;font-family:arial;font-size:12px;font-weight:bold;padding:6px 18px;text-decoration:none;text-shadow:1px 1px 0px #ffffff;}';
		out+='.cookielegalbut:hover{background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #dfdfdf), color-stop(1, #ededed) );background:-moz-linear-gradient( center top, #dfdfdf 5%, #ededed 100% );filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dfdfdf", endColorstr="#ededed");background-color:#dfdfdf;}';
		out+='.cookielegalbut:active {position:relative;top:1px;}';
		out+='.marg-left{margin-left:30px;}';
		out+='.cont u{color:#fff;text-decoration:underline;}'
		out+='</style>';
		return out;
	}
	$.cookielegal.container = function(){
		var out = '<div class="cookielegal">';
		out+='<div class="cont">';
		out+='<span class="marg-left">';
		out+=$.cookielegal.opc.texts.disclaimer;
		if($.cookielegal.opc_default.privacy_url){
			out+=' <a href="'+$.cookielegal.opc_default.privacy_url+'"><u>Pol&iacute;tica de cookies</u></a>'
		}
		out+='</span>';
		out+='<br>';
		out+='<span class="marg-left">';
		out+='<a href="#" onclick="$.cookielegal.acceptTerms();" class="cookielegalbut">Aceptar</a>';
		out+='</span>';
		out+='<span class="marg-left">';
		out+='<a href="#" onclick="$.cookielegal.declineTerms();" class="cookielegalbut">Cerrar</a>';
		out+='</span>';
		out+='</div>';
		out+='</div>';
		return out;
	}
	$.cookielegal.acceptTerms = function(){
		$.cookielegal.hideMsg();
		//$.cookielegal.setCookie($.cookielegal.opc.cookiename,'accepted',365)
	}
	$.cookielegal.declineTerms = function(){
		$.cookielegal.hideMsg();
	}
	
	$.cookielegal.hideMsg = function(){
		$('.cookielegal').fadeOut(200);
	}
	$.cookielegal.setCookie = function(c_name,value,exdays){
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie=c_name + "=" + c_value;
	}
	$.cookielegal.getCookie = function(c_name){
		var c_value = document.cookie;
		var c_start = c_value.indexOf(" " + c_name + "=");
		if (c_start == -1){
		  c_start = c_value.indexOf(c_name + "=");
		}
		if (c_start == -1){
			c_value = null;
		} else {
			c_start = c_value.indexOf("=", c_start) + 1;
			var c_end = c_value.indexOf(";", c_start);
			if (c_end == -1){
				c_end = c_value.length;
			}
			c_value = unescape(c_value.substring(c_start,c_end));
		}
		return c_value;
	}
})(jQuery);

$(document).ready(function(){
	$.cookielegal();
});