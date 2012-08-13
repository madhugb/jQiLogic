jQiLogic
========
*Introduction*:
  jQiLogic is a small jquery plugin which is helpful to add inline conditions during jQuery append function.
  
  Lets directly jump to Examples:
  
  *Example 1* :
    $('body').appendIf($('div[class=A]').length <= 0,$('<div>',{'class':'A'}));  
  
  *Example 2* :
    $('body').appendIf($('div[class=A]').length <= 0,$('<div>',{'class':'A'}), $('<div>',{'class':'B'}));  