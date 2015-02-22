for(var i = 0; i < 18; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u3'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u6', GetNum('0'), GetNum('120'),'none',500);

}

}

widgetIdToHideFunction['u3'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u6', GetNum('0'), GetNum('-120'),'none',500);

}

}

widgetIdToMoveFunction['u6'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u12','u6');

}

}

widgetIdToShowFunction['u9'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u12', GetNum('0'), GetNum('120'),'none',500);

}

}

widgetIdToHideFunction['u9'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u12', GetNum('0'), GetNum('-120'),'none',500);

}

}
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u11'] = 'center';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	SetPanelVisibility('u15','toggle','none',500);

}
});
gv_vAlignTable['u14'] = 'center';document.getElementById('u1_img').tabIndex = 0;

u1.style.cursor = 'pointer';
$axure.eventManager.click('u1', function(e) {

if (true) {

	SetPanelVisibility('u3','toggle','none',500);

}
});
gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	SetPanelVisibility('u9','toggle','none',500);

}
});
gv_vAlignTable['u8'] = 'center';