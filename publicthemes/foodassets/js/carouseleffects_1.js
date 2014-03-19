$(function() {
				var $imgs = $('#images .carousel'),
					$capt = $('#captions .carousel'),
					$timr = $('#timer');

				$imgs.carouFredSel({
					circular: false,
					scroll: {
						easing: 'quadratic',
						duration: 800,
						timeoutDuration: 6000,
                                                fx	       : "uncover-fade",
						onBefore: function( data ) {
							$capt.trigger( 'slideTo', [ '.' + data.items.visible.first().attr( 'alt' ) ] );
							$timr.stop().animate({
								opacity: 0
							}, data.scroll.duration);
						},
						onAfter: function() {
							$timr.stop().animate({
								opacity: 1
							}, 150);
						}
					},
					auto: {
						progress: '#timer'
					},
					pagination: {
						container: '.pager',
						anchorBuilder: function( i ) {
							return '<a class="p' + i + ' loadButtons" href="#"></a>';
						}
					}
				});
				$capt.carouFredSel({
					circular: false,
					auto: false,
					scroll: {
						easing: 'quadratic',
						duration: 800
					}
				});
                                
                                
                                $("#foo1").carouFredSel({
				width: 560,
                                height:180,
				circular: true,
				infinite: false,
				auto 	: false,
				prev	: {	
					button	: "#foo1_prev",
					key	: "left"
				},
				next	: { 
					button	: "#foo1_next",
					key	: "right"
				},
				scroll : {
				duration : 1000,
				},
				items : {
					visible : 4,
				}
                                });
                                
                                
                                $("#foo2").carouFredSel({
				width: 860,
                                height:180,
				circular: true,
				infinite: false,
				auto 	: false,
				prev	: {	
					button	: "#foo2_prev",
					key	: "left"
				},
				next	: { 
					button	: "#foo2_next",
					key	: "right"
				},
				scroll : {
                                easing: 'quadratic',
				duration : 1000,
				},
				items : {
					visible : 6,
				}
                                });
                                
                                
                                $("#foo3").carouFredSel({
				width: 280,
                                height: 120,
				circular: false,
				infinite: false,
				auto 	: false,
                                pagination	: "#foo2_pag",
				prev	: {	
					button	: "#foo3_prev",
					key	: "left"
				},
				next	: { 
					button	: "#foo3_next",
					key	: "right"
				},
				scroll : {
                                items           : 1,
                                fx			: "uncover-fade",
				duration        : 500,
                                timeoutDuration : 6000,
				},
				items : {
					visible : 1,
				}
                                });
			});