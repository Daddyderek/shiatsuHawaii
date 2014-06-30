$(function(){
  
  var links = new Array();
  $("#slideshow > a.slideimage_link").each(function(){
    links.push($(this).attr("href"));
  });
  
  var captions = new Array();
  $("#feature .caption").each(function(){
    captions.push($(this).html());
  });
  
  $('#slideshow').crossSlide({
      sleep: 8,
      fade: 1
    }, 
    $('#slideshow a.slideimage_link img'), function(idx, img, idxOut, imgOut) {
      $(img).wrap("<a href='"+links[idx]+"' />")
      $("#slideshow_caption").html(captions[idx]);
  	}
	);
});