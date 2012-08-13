jQiLogic
========

**Introduction**

jQiLogic is a small jquery plugin which is helpful to add inline conditions during jQuery append function.

Lets directly jump to Examples:
  
*Example 1*
<pre>
  $(`body`).appendIf( $(`div[class=A]`).length &lt;= 0, $(`&lt;div&gt;`, { `class` : `A` }));  
</pre>
  
*Example 2*
<pre>
  $(`body`).appendIf($(`div[class=A]`).length &lt;= 0, $(`&lt;div&gt;`,{`class`:`A`}), $(`&lt;div&gt;`,{`class`:`B`}));  
</pre>