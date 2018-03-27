
(function($) {
    function SpreadDiv(option) {
        this.$plusbtn =$(option.pulsid);
        this.$minusbtn = $(option.minusid);
        this.$spreaddiv = $(option.spreaddiv);
        this.init();
    }
    SpreadDiv.prototype.init = function() {
        var $spread = this.$spreaddiv;
        this.$plusbtn.on('click', function() {
            $spread.animate({
                height: 0
            }, 500, function() {
                $('spreaddivs').hide();
            });
        });
        this.$minusbtn.on('click', function() {
            var $spread = this.$spreaddiv;
              $spread.animate({
                height: 0
            }, 0, function() {}
            );
        });
    }
    $.fn.spreadPannel= function(option){
    	this.each(function(index){
    		var panel=new SpreadDiv({
    			plusid:option.plusid,
    			minusid:option.minusid,
    			spreaddiv:$(this)
    		})
    	});
    	return this;
    }
})(jQuery)