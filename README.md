jquery.livesearcher.js
==========

jQuery plugin to filter through data on a page as you type

###How to use the plugin

**Note:** As this is a jQuery plugin, you will need to include jQuery prior to using this plugin.

You will also need the [String.score()](http://cdnjs.cloudflare.com/ajax/libs/string_score/0.1.20/string_score.min.js) library.


    $(".search").livesearcher({
    
        // the set of items to look at (you can use $() too)
        where: ".list > li",
        
        // show the item when found - Default: empty callback
        found: function(item, index){
		    item.show();
		},
        
        // let's hide all items when start typing - Default: empty callback
		before: function(items){
			items.hide();
		},
        
        // show all items when the input is empty - Default: empty callback
		empty: function(items){
			items.show();
		},
        
        // where should we look - Default: empty callback
		look: function(item){       
			return item.attr("title");
		},
        
        // 0 (less strict) to 1 (more strict) - Default: 0.5
        score: 0.8,
        
        // delay before start searching - Default: 500
        delay: 300
        
    });

###Live demo

You can see the plugin live [here](http://jsbin.com/iJALAqAf/27/).

###Copyright and license

Copyright 2013 Juan Pablo Lozano on [DebyanLab](http://devyanlab.com) under the MIT license.