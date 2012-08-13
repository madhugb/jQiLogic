/*
 * jQiLogic, jQuery in-line logic operation
 * Copyright(c) 2012 Madhu <madhuvana@gmail.com>
 * https://github.com/madhugb/jQiLogic
 * 
 *  Syntax:
 *    $(element).appendIf(condition,true_case,false_case);
 *             
 *  Example 1:
 *    $('body').appendIf($('div[class=A]').length <= 0, $('<div>',{'class':'A'}));
 *   
 *  Example 2:
 *    $('body').appendIf($('div[class=A]').length <= 0, $('<div>',{'class':'A'}), $('<div>',{'class':'B'}));
 *
 */
 
(function($){  
  $.fn.extend({    
    //
    // Logic If 
    // @args[0] = condition;
    // @args[1] = value to append if condition is true;
    // @args[2] = value to append if condition is false;
    //    
    appendIf: function() {      
      if (arguments[0]) {        
        $(this).append(arguments[1]);
      } else {     
        $(this).append(arguments[2]);     
      }
      return this;
    }    
  });
})(jQuery);
