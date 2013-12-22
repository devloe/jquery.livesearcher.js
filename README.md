jquery.livesearcher.js
==========

jQuery plugin to filter through data on a page as you type

###How to use the plugin

**Note:** As this is a jQuery plugin, you will need to include jQuery prior to using this plugin.

Call `livesearcher()` on the input you wish to search:


    $(".search").livesearcher({
    
        // the set of items to look at (you can use $() too)
        where: ".list > li",
        
        // show the item when found
        found: function(item, index){
		    item.show();
		},
        
        // let's hide all items when start typing
		before: function(items){
			items.hide();
		},
        
        // show all items when the input is empty
		empty: function(items){
			items.show();
		},
        
        // where should we look
		look: function(item){       
			return item.attr("title");
		}
        
    });

###Live demo

You can see the plugin live [here](http://www.devyanlab.com/plugins/jquery.livesearcher.js/demo.html).

###Copyright and license

Copyright 2013 Juan Pablo Lozano on DebyanLab under the MIT license.