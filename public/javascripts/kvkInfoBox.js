(function ($) {
    var init = function ()
    {
        if (!$('#kvkInfoBox').get(0))
        {
            var box = '<div id="kvkInfoBox" class="kvkInfoBox">'+
                        '<div class="ipBorder top"></div>'+
                        '<div class="ipBorder bottom"></div>'+
                        
                        '<div class="cont">'+
        
                            '<div class="leftPart top"></div>'+
                            '<div class="leftPart arrow"></div>'+
                            '<div class="leftPart bottom"></div>'+
                            
                            '<div class="inner">'+
                                
                            '</div><!-- /inner -->'+
                        '</div><!-- /cont -->'+
                    '</div><!-- /kvkInfoBox -->';
        
            $('body').append(box);
        }//if (!$('#kvkInfoBox').get(0))
    };//init
    
    var getAbsPos = function (elem)
    {
        var end  = false;
        var prnt = elem;
        var x    = 0;
        var y    = 0;
        
        while (!end)
        {
            if (prnt != null)
            {
                if (prnt.offsetLeft)
                {
                    x += prnt.offsetLeft;
                }
                
                if (prnt.offsetTop)
                {
                    y  += prnt.offsetTop;
                }
            
                prnt = prnt.offsetParent;
            }
            else
            {
                break;
            }
        }//while
        
        return {Left: x, Top: y};
    };//getAbsPos
    
    //
    
    $.fn.kvkInfoBox = function (options)
    {
        return $(this).each(function () {
            var el = $(this);
            var kv = this;
        
            kv.options  = {
                plainText: true,
                skin: 'lightblue',
                plusTop: 0,
                plusLeft: 0
            };
            
            kv.opts     = $.extend({},kv.options,options);
            
            //
            
            
            init();
            
            
            //
        
            var $this   = $('#kvkInfoBox');
            
            $this.css({
                opacity: 0,
                display: 'block'
            });
            
            //
            
            var cont = (kv.opts.plainText)? '<p>' + kv.opts.cont + '</p>' : kv.opts.cont;
            
            $this.addClass(kv.opts.skin).find('div.inner').html(cont);
    
            //
            
            var pos     = getAbsPos(el.get(0));
            var height  = $this.find('div.cont').height();
            
            //alert(height);
            
            height -= ((height > 27) || (height == 0))? 27 : height;
            
            $this.find('div.leftPart.bottom').css('height',height);
            
            if ((height == 27) || (height == 0))
            {
                $this.find('div.inner p').css('line-height','27px');
            }//if ((height == 27) || ( ...
            
            //
            
            var left    = pos.Left + kv.opts.plusLeft + el.width();
            var top     = pos.Top + kv.opts.plusTop - 6;
            
            $this.css({
                left: left,
                top: top,
                opacity: 0,
                display: 'block'
            }).stop().animate({
                left: left + 10,
                opacity: 1
            },300);
        });
    }//$.fn.kvkInfoBox
})(jQuery);