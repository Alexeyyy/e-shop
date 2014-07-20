function makesure() {
 if (confirm(functions_sure_delete)) {
  return true;
 } else {
  return false;
 }
}		

function flexToggle(el) {
  if (el.className == 'flexOpen') {
    el.className = 'flexShut';
  } else {
    el.className = 'flexOpen';
  }
}

function ge()
{
  var ea;
  for( var i = 0; i < arguments.length; i++ ) {
    var e = arguments[i];
    if( typeof e == 'string' )
      e = document.getElementById(e);
    if( arguments.length == 1 )
      return e;
    if( !ea )
      ea = new Array();
    ea[ea.length] = e;
  }
  return ea;
}

function show()
{
  for( var i = 0; i < arguments.length; i++ ) {
    var element = ge(arguments[i]);
    if (element && element.style) element.style.display = 'block';
  }
}

function show2()
{
  for( var i = 0; i < arguments.length; i++ ) {
    var element = ge(arguments[i]);
   	if (element && element.style) element.style.display = "inline";
  }
  return false;
}

function hide()
{
  for( var i = 0; i < arguments.length; i++ ) {
    var element = ge(arguments[i]);
    if (element && element.style) element.style.display = 'none';
  }
}

function shown(el) {
    el = ge(el);
    return (el.style.display != 'none');
}

function shide(el) {if (shown(el)) {hide(el);} else {show(el);}}

function textLimit(ta, count) {
  var text = ge(ta);
  if(text.value.length > count) {
    text.value = text.value.substring(0,count);
    if(arguments.length>2) { // id of an error block is defined
      ge(arguments[2]).style.display='block';
    }
  }
}

function isIE() {
 return (navigator.userAgent.toLowerCase().indexOf("msie") != -1);
}   

function placeholderSetup(id) {
	var el = ge(id);
	if(!el) return;
	if(el.type != 'text') return;
	if(el.type != 'text') return;
	
	var ph = el.getAttribute("placeholder");
	if( ph && ph != "" ) {
		el.value = ph;
		el.style.color = '#b9b9b9';
		el.is_focused = 0;
		el.onfocus = placeholderFocus;
		el.onblur = placeholderBlur;
	}
}

function placeholderFocus() {
  if(!this.is_focused) {
    this.is_focused = 1;
    this.value = '';
    this.style.color = '#b9b9b9';

    var rs = this.getAttribute("radioselect");
    if( rs && rs != "" ) {
      var re = document.getElementById(rs);
      if(!re) { return; }
      if(re.type != 'radio') return;

      re.checked=true;
    }
  }
}

function placeholderBlur() {
  var ph = this.getAttribute("placeholder")
  if( this.is_focused && ph && this.value == "" ) {
		this.is_focused = 0;
    this.value = ph;
    this.style.color = '#b9b9b9';
  }
}