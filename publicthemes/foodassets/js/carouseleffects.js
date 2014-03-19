$(function() {
				$("#foo10").carouFredSel({
                                    responsive	: true,
                                    auto 	: true,
                                    circular: true,
				    infinite: false,
                                    scroll		: {
                                            fx		: "uncover",
                                            duration	: 1000,
                                            timeoutDuration : 6000
                                    },
                                    items		: {
                                            visible	: 1,
                                            width	: 632,
                                            height	: 322
                                    },
                                    pagination : {
                                            container	: "#foo10_pag",
                                            keys	: true
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
                                pagination	: "#foo3_pag",
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