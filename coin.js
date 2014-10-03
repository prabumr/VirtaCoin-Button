
if (typeof CoinWidgetComCounter != 'number')
var CoinWidgetComCounter = 0;

if (typeof CoinWidgetCom != 'object')
var CoinWidgetCom = {
	source: 'http://localhost/button/'
	, config: []
	, go :function(config) {
		config = CoinWidgetCom.validate(config);
		CoinWidgetCom.config[CoinWidgetComCounter] = config;
		CoinWidgetCom.loader.jquery();
if (config.button == 'bb' ) {
		document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container1" class="COINWIDGETCOM_CONTAINER"></span>');}else if (config.button == 'ba' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" class="COINWIDGETCOM_CONTAINER"></span>');}else if (config.button == 'bc' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container2" class="COINWIDGETCOM_CONTAINER"></span>');}
else if (config.button == 'bd' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container3" class="COINWIDGETCOM_CONTAINER1"></span>');}else if (config.button == 'be' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container3" class="COINWIDGETCOM_CONTAINER1"></span>');}else if (config.button == 'bf' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container3" class="COINWIDGETCOM_CONTAINER1"></span>');}else if (config.button == 'bg' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container3" class="COINWIDGETCOM_CONTAINER1"></span>');}else if (config.button == 'bh' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container3" class="COINWIDGETCOM_CONTAINER1"></span>');}else if (config.button == 'bi' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container3" class="COINWIDGETCOM_CONTAINER1"></span>');}else if (config.button == 'bj' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container3" class="COINWIDGETCOM_CONTAINER1"></span>');}else if (config.button == 'bk' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container3" class="COINWIDGETCOM_CONTAINER1"></span>');}else if (config.button == 'bl' ){document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" id="Container3" class="COINWIDGETCOM_CONTAINER1"></span>');}


		CoinWidgetComCounter++;
	}
	, validate: function(config) {
		var $accepted = [];
		$accepted['currencies'] = ['virtacoin'];
		$accepted['counters'] = ['count','amount','hide'];
		$accepted['alignment'] = ['al','ac','ar','bl','bc','br'];
           $accepted['button'] = ['ba','bb','bc','bd','be','bf','bg','bh','bi','bj','bk','bl'];
           $accepted['linked'] = ['yes','no'];
		if (!config.currency || !CoinWidgetCom.in_array(config.currency,$accepted['currencies']))
			config.currency = 'virtacoin';
		if (!config.counter || !CoinWidgetCom.in_array(config.counter,$accepted['counters']))
			config.counter = 'count';
		if (!config.alignment || !CoinWidgetCom.in_array(config.alignment,$accepted['alignment']))
			config.alignment = 'bl';
if (!config.button || !CoinWidgetCom.in_array(config.button,$accepted['button']))
			config.button = 'ba';
if (!config.linked || !CoinWidgetCom.in_array(config.linked,$accepted['linked']))
			config.linked = 'yes';
		if (typeof config.qrcode != 'boolean')
			config.qrcode = true;
        	if (typeof config.auto_show != 'boolean')
			config.auto_show = false;
		if (!config.wallet_address)
			config.wallet_address = 'My '+ config.currency +' wallet_address is missing!';
		if (!config.lbl_button) 
			config.lbl_button = '';
		if (!config.lbl_address)
			config.lbl_address = 'My VirtaCoin Address:';
		if (!config.lbl_count)
			config.lbl_count = 'Donation VirtaCoin';
		if (!config.lbl_amount)
			config.lbl_amount = 'VTA';
		if (typeof config.decimals != 'number' || config.decimals < 0 || config.decimals > 10)
			config.decimals = 4;

		return config;
	}
	, init: function(){
		CoinWidgetCom.loader.stylesheet();
		jQuery(window).resize(function(){
			CoinWidgetCom.window_resize();
		});
		setTimeout(function(){
			/* this delayed start gives the page enough time to 
			   render multiple widgets before pinging for counts.
			*/
			CoinWidgetCom.build();
		},800);		
	}
	, build: function(){
		$containers = jQuery("span[data-coinwidget-instance]");
		$containers.each(function(i,v){
			$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
if ($config.button == 'bb') {
			$counter = $config.counter == 'hide'?'':('<span style="margin-top: -25px; left: 5px; position: absolute;"><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
			$button = '<div id="coin" style="width: 59px; height: 59px;"><img src="'+CoinWidgetCom.source+'icon_'+$config.currency+'_logo.png" style="width: 59px; height: 59px;"/></div><div id="coinbackground"><div id="textarea" spellcheck="false"><input type="text" value="'+$config.wallet_address+'" onclick="this.select();"><a href="virtacoin:'+$config.wallet_address+'" target="_blank"><img src="'+CoinWidgetCom.source+'icon_wallet.png" border="0" id="wallet" title="Send to wallet"></a></div><div id="accepted">'+$config.lbl_button+'<img src="'+CoinWidgetCom.source+'heart.png" style="width: 22px; height: 20px;"/></div></div>'+$counter;}else if ($config.button == 'ba') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
			$button = '<a class="COINWIDGETCOM_BUTTON_'+$config.currency.toUpperCase()+'" href="#"><img src="'+CoinWidgetCom.source+'icon_'+$config.currency+'.png" /><span>'+$config.lbl_button+'<img src="'+CoinWidgetCom.source+'heart.png" style="width: 14px; height: 13px;"/></span></a>'+$counter;
}else if ($config.button == 'bc') {
			$counter = $config.counter == 'hide'?'':('<span style="margin-top: -25px; left: 5px; position: absolute;"><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
			$button = '<div id="coin2" style="width: 59px; height: 59px;"><img src="'+CoinWidgetCom.source+'icon_'+$config.currency+'_logo.png" style="width: 59px; height: 59px;"/></div><div id="coinbackground2"><div id="textarea2" spellcheck="false"><input type="text" value="'+$config.wallet_address+'" onclick="this.select();"><a href="virtacoin:'+$config.wallet_address+'" target="_blank"><img src="'+CoinWidgetCom.source+'icon_wallet.png" border="0" id="wallet" title="Send to wallet"></a></div><div id="accepted2">Donate<br><img src="'+CoinWidgetCom.source+'heart.png" style="width: 22px; height: 20px;"/><br>VTA</div></div>'+$counter;}else if ($config.button == 'bd') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
                $linkh = $config.linked == 'no'?'':('<a href="#" style="text-decoration: none;">');
$linkha = $config.linked == 'no'?'':('</a>');
			$button = ''+$linkh+'<div class="wrapper"><img style="width: 250px; height: 65px;" src="'+CoinWidgetCom.source+'virtacoinribbon.png" ><div class="pulse" style="margin-top: -80px; height: 96px; position: relative;"><img class="logov" src="'+CoinWidgetCom.source+'icon_virtacoin_logov.png" style="width: 68px; height: 72px;"><img class="heart" src="'+CoinWidgetCom.source+'heart.png" style="width: 76px; height: 74px;"></div></div>'+$linkha+'<BR><B>'+$config.lbl_button+'</B><BR>'+$counter;
}else if ($config.button == 'be') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
                $linkh = $config.linked == 'no'?'':('<a href="#" style="text-decoration: none;">');
$linkha = $config.linked == 'no'?'':('</a>');
			$button = ''+$linkh+'<div class="wrapper2"><img class="logovh3" src="'+CoinWidgetCom.source+'icon_virtacoin_logo.png" style="width: 72px; height: 72px; "><div class="pulse" style="margin-top: -100px;"><div class="heart2"><img src="'+CoinWidgetCom.source+'heart.png" style="width: 76px; height: 74px;"></div></div></div>'+$linkha+'<BR><font size="4" face="Cursive">we love <b>VirtaCoin</b></font><BR><B>'+$config.lbl_button+'</B><BR>'+$counter;
}else if ($config.button == 'bf') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
                $linkh = $config.linked == 'no'?'':('<a href="#" style="text-decoration: none;">');
$linkha = $config.linked == 'no'?'':('</a>');
			$button = ''+$linkh+'<div class="wrapper1"><div class="pulse"><div class="heart3"><img src="'+CoinWidgetCom.source+'heart.png" style="width: 110px; height: 100px;"></div><img class="logov1" src="'+CoinWidgetCom.source+'icon_virtacoin_logov.png" style="width: 90px; height: 90px;"><div class="fonth">VirtaCoin</div></div></div>'+$linkha+'<BR><B>'+$config.lbl_button+'</B><BR>'+$counter;
}else if ($config.button == 'bg') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
                $linkh = $config.linked == 'no'?'':('<a href="#" style="text-decoration: none;">');
$linkha = $config.linked == 'no'?'':('</a>');
			$button = ''+$linkh+'<div class="wrapper3"><img class="fonth1" src="'+CoinWidgetCom.source+'I_font_i.png" style="width: 38px; height: 60px; "><img class="logov2" src="'+CoinWidgetCom.source+'icon_virtacoin_logo.png" style="width: 70px; height: 70px; "><div class="pulse"><div class="heart4"><img src="'+CoinWidgetCom.source+'heart.png" style="width: 76px; height: 70px;"></div></div></div>'+$linkha+'<br><B>'+$config.lbl_button+'</B><BR>'+$counter;
}else if ($config.button == 'bh') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
                $linkh = $config.linked == 'no'?'':('<a href="#" style="text-decoration: none;">');
$linkha = $config.linked == 'no'?'':('</a>');
			$button = ''+$linkh+'<div class="rocket_wrap"><div class="rocket_inner"><div id="pageWrap"><svg version="1.1" x="0px" y="0px" width="230px" height="215px" id="rocket"><g class="rocket_wrap"><path class="fire fire_path" id="fireMiddle" d="M148.891,179.906c3.928,0,7.111,3.176,7.111,7.094 c0,7.78-7.111,16-7.111,16s-7.111-8.349-7.111-16C141.78,183.082,144.963,179.906,148.891,179.906z"></path><path class="fire_path fire" id="fireRight" d="M154.063,181.092c3.577-1.624,7.788-0.048,9.408,3.52 c3.216,7.084,0.139,17.508,0.139,17.508s-9.927-4.662-13.09-11.63C148.9,186.923,150.487,182.715,154.063,181.092z"></path><path class="fire_path fire" id="fireLeft" d="M143.392,182.519c3.25,2.207,4.098,6.623,1.896,9.864 c-4.372,6.436-14.873,9.238-14.873,9.238s-1.191-10.902,3.108-17.23C135.725,181.149,140.143,180.312,143.392,182.519z"></path><path class="fire_path fire" id="fireSmallLeft" d="M143.193 187.531c2.226 0.4 3.7 2.6 3.2 4.8 c-0.875 4.407-5.829 8.264-5.829 8.264s-3.09-5.53-2.229-9.865C138.807 188.5 141 187.1 143.2 187.531z"></path><path class="fire_path fire" id="fireSmallRight" d="M152.089 188.599c2.043-0.985 4.496-0.132 5.5 1.9 c1.952 4 0.3 10.1 0.3 10.107s-5.795-2.56-7.713-6.541C149.186 192 150 189.6 152.1 188.599z"></path><path class="rocket_bottom" d="M157.069 171.31h-3.292c-1.562-0.048-3.178-0.076-4.846-0.076 s-3.284 0.028-4.846 0.076h-3.292c-7.277-7.938-12.371-26.182-12.371-47.434c0-28.54 9.182-51.676 20.508-51.676 c11.327 0 20.5 23.1 20.5 51.676C169.44 145.1 164.3 163.4 157.1 171.31z"></path><g id="right_wing_wrap"><path class="wing_base" d="M166.678 127.161c0 0 17.7 3.3 12.9 48.099l-18.06-14.05 L166.678 127.161z"></path><path class="wing_shadow" d="M158.225 140.336c10.481-5.584 22.7 22.2 21.4 34.9 l-18.06-14.05C161.542 161.2 156.1 144.3 158.2 140.336z"></path></g><g id="left_wing_wrap"><path class="wing_base" d="M135.131 161.21l-18.06 14.1 c-4.805-44.793 12.924-48.099 12.924-48.099L135.131 161.21z"></path><path class="wing_shadow" d="M135.131 161.21l-18.06 14.1 c-1.367-12.746 10.896-40.509 21.377-34.924C140.614 144.3 135.1 161.2 135.1 161.21z"></path></g><g id="rocket_body_wrap"><path class="rocket_base" d="M162.728 167.358c-3.778-0.623-8.573-0.996-13.796-0.996 s-10.018 0.373-13.795 0.996c-5.033-10.186-8.257-25.808-8.257-43.338c0-30.688 9.873-55.566 22.052-55.566 s22.053 24.9 22.1 55.566C170.984 141.6 167.8 157.2 162.7 167.358z"></path><path class="rocket_shadow" d="M145.464 166.417c19.578-40.575 7.26-85.229 4.112-98.067 c11.88 0.9 21.4 25.4 21.4 55.525c0 17.529-3.225 33.152-8.257 43.337c0 0-3.786-0.472-8.069-0.697 S145.464 166.4 145.5 166.417z"></path></g><g id="large_window_wrap"><radialGradient id="SVGID_2_" cx="148.9" cy="112.5" r="15.2" fx="139.4853" fy="112.5239" gradientUnits="userSpaceOnUse"><stop offset="0" class="window_grandient"></stop><stop offset="0.5868" class="window_grandient"></stop><stop offset="0.6834" class="window_grandient"></stop><stop offset="0.6845" class="window_grandient1"></stop><stop offset="0.6861" class="window_grandient2"></stop><stop offset="0.6897" class="window_grandient3"></stop></radialGradient><circle class="large_window_path" cx="148.9" cy="111.3" r="10.5"></circle></g><circle class="small_window_path" cx="148.9" cy="132.4" r="5.2"></circle></g></svg></div><img class="coin_rocket" src="'+CoinWidgetCom.source+'icon_virtacoin_logo.png" style="width: 22px; height: 22px;"></div></div>'+$linkha+'<BR><B>'+$config.lbl_button+'</B><BR>'+$counter;
}else if ($config.button == 'bi') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
$linkh = $config.linked == 'no'?'':('<a href="#" style="text-decoration: none;">');
$linkha = $config.linked == 'no'?'':('</a>');
			$button = ''+$linkh+'<div id="pay-with-vta"><div id="logo-vta"><div id="coin-vta"><img src="'+CoinWidgetCom.source+'icon_virtacoin_logo.png" style="width: 40px; height: 40px;margin-left:0px"></div><div class="logo-text-vta"><font color="green">Virta</font><font color="grey">Coin</font></div></div><div class="accept-vta"><B>ACCEPTED HERE</B></div></div>'+$linkha+'<div style="margin-top: -20;"><B>'+$config.lbl_button+'</B></div>'+$counter;
}else if ($config.button == 'bj') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
$linkh = $config.linked == 'no'?'':('<a href="#" style="text-decoration: none;">');
$linkha = $config.linked == 'no'?'':('</a>');
			$button = ''+$linkh+'<div id="pay-with-vta"><div id="logo-vta"><div id="coin-vta"><img src="'+CoinWidgetCom.source+'icon_virtacoin_logo.png" style="width: 40px; height: 40px;margin-left:0px"></div><div class="logo-text-vta"><font color="green">Buy</font><font color="grey">Now</font></div></div><div class="accept-vta"><B>With VirtaCoin</B></div></div>'+$linkha+'<div style="margin-top: -20;"><B>'+$config.lbl_button+'</B></div>'+$counter;
}else if ($config.button == 'bk') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
$linkh = $config.linked == 'no'?'':('<a href="#" style="text-decoration: none;">');
$linkha = $config.linked == 'no'?'':('</a>');
			$button = ''+$linkh+'<div id="pay-with-vta"><div id="logo-vta"><div id="coin-vta"><img src="'+CoinWidgetCom.source+'icon_virtacoin_logo.png" style="width: 40px; height: 40px;margin-left:0px"></div><div class="logo-text-vta"><font color="green">Pay</font><font color="grey">With</font></div></div><div class="accept-vta"><B>VirtaCoin Now</B></div></div>'+$linkha+'<B>'+$config.lbl_button+'</B>'+$counter;
}else if ($config.button == 'bl') {$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
			$counter = $config.counter == 'hide'?'':('<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>');
$linkh = $config.linked == 'no'?'':('<a href="#" style="text-decoration: none;">');
$linkha = $config.linked == 'no'?'':('</a>');
			$button = ''+$linkh+'<div class="pulse1"></div><div class="pulse2"></div><div class="profilepicture"></div>'+$linkha+'<div style="margin-top: 115px;"><B>'+$config.lbl_button+'</B></div>'+$counter;
}



			jQuery(this).html($button);
			jQuery(this).find('> a').unbind('click').click(function(e){
				e.preventDefault();
				CoinWidgetCom.show(this);
			});
		});
		CoinWidgetCom.counters();
	}
	, window_resize: function(){
		jQuery.each(CoinWidgetCom.config,function(i,v){
			CoinWidgetCom.window_position(i);
		});
	}
	, window_position: function($instance){
		$config = CoinWidgetCom.config[$instance];
		coin_window = "#COINWIDGETCOM_WINDOW_"+$instance;

			obj = "span[data-coinwidget-instance='"+$instance+"'] > a";
			/* 	to make alignment relative to the full width of the container instead 
			of just the button change this occurence of jQuery(obj) to jQuery(obj).parent(), 
			do the same for the occurences within the switch statement. */
			$pos = jQuery(obj).offset(); 
			switch ($config.alignment) {
				default:
				case 'al': /* above left */
					$top = $pos.top - jQuery(coin_window).outerHeight() - 10;
					$left = $pos.left; 
					break;
				case 'ac': /* above center */
					$top = $pos.top - jQuery(coin_window).outerHeight() - 10;
					$left = $pos.left + (jQuery(obj).outerWidth()/2) - (jQuery(coin_window).outerWidth()/2);
					break;
				case 'ar': /* above right */
					$top = $pos.top - jQuery(coin_window).outerHeight() - 10;
					$left = $pos.left + jQuery(obj).outerWidth() - jQuery(coin_window).outerWidth();
					break;
				case 'bl': /* bottom left */
					$top = $pos.top + jQuery(obj).outerHeight() + 10;
					$left = $pos.left; 
					break;
				case 'bc': /* bottom center */
					$top = $pos.top + jQuery(obj).outerHeight() + 10;
					$left = $pos.left + (jQuery(obj).outerWidth()/2) - (jQuery(coin_window).outerWidth()/2);
					break;
				case 'br': /* bottom right */
					$top = $pos.top + jQuery(obj).outerHeight() + 10;
					$left = $pos.left + jQuery(obj).outerWidth() - jQuery(coin_window).outerWidth();
					break;
			}
		if (jQuery(coin_window).is(':visible')) {
			jQuery(coin_window).stop().animate({'z-index':99999999999,'top':$top,'left':$left},150);
		} else {
			jQuery(coin_window).stop().css({'z-index':99999999998,'top':$top,'left':$left});
		}
	}
	, counter: []
	, counters: function(){
		$addresses = [];
		jQuery.each(CoinWidgetCom.config,function(i,v){
			$instance = i;
			$config = v;
			if ($config.counter != 'hide')
				$addresses.push($instance+'_'+$config.currency+'_'+$config.wallet_address);
			else {
				if ($config.auto_show) 
					jQuery("span[data-coinwidget-instance='"+i+"']").find('> a').click();
			}
		});
		if ($addresses.length) {
			CoinWidgetCom.loader.script({
				id: 'COINWIDGETCOM_INFO'+Math.random()
				, source: (CoinWidgetCom.source+'lookup.php?data='+$addresses.join('|'))
				, callback: function(){
					if (typeof COINWIDGETCOM_DATA == 'object') {
						CoinWidgetCom.counter = COINWIDGETCOM_DATA;
						jQuery.each(CoinWidgetCom.counter,function(i,v){
							$config = CoinWidgetCom.config[i];
							if (!v.count || v == null) v = {count:0,amount:0};
							jQuery("span[data-coinwidget-instance='"+i+"']").find('> span').html($config.counter=='count'?v.count:(v.amount.toFixed($config.decimals)+' '+$config.lbl_amount));
							if ($config.auto_show) {
								jQuery("span[data-coinwidget-instance='"+i+"']").find('> a').click();
							}
						});
					}
					if (jQuery("span[data-coinwidget-instance] > span img").length > 0) {
						setTimeout(function(){CoinWidgetCom.counters();},2500);
					}
				}
			});
		}
	}
	, show: function(obj) {
		$instance = jQuery(obj).parent().attr('data-coinwidget-instance');
		$config = CoinWidgetCom.config[$instance];
		coin_window = "#COINWIDGETCOM_WINDOW_"+$instance;
		jQuery(".COINWIDGETCOM_WINDOW").css({'z-index':99999999998});
		if (!jQuery(coin_window).length) {

			$sel = !navigator.userAgent.match(/iPhone/i)?'onclick="this.select();"':'onclick="prompt(\'Select all and copy:\',\''+$config.wallet_address+'\');"';

			$html = ''
				  + '<label>'+$config.lbl_address+'</label>'
				  + '<input type="text" readonly '+$sel+'  value="'+$config.wallet_address+'" />'
				  + '<a class="COINWIDGETCOM_CREDITS" href="http://localhost/" target="_blank">localhost</a>'
  				  + '<a class="COINWIDGETCOM_WALLETURI" href="'+$config.currency.toLowerCase()+':'+$config.wallet_address+'" target="_blank" title="Click here to send this address to your wallet (if your wallet is not compatible you will get an empty page, close the white screen and copy the address by hand)" ><img src="'+CoinWidgetCom.source+'icon_wallet.png" /></a>'
  				  + '<a class="COINWIDGETCOM_CLOSER" href="javascript:;" onclick="CoinWidgetCom.hide('+$instance+');" title="Close this window">x</a>'
  				  + '<img class="COINWIDGET_INPUT_ICON" src="'+CoinWidgetCom.source+'icon_'+$config.currency+'.png" width="16" height="16" title="This is a '+$config.currency+' wallet address." />'
				  ;
			if ($config.counter != 'hide') {
				$html += '<span class="COINWIDGETCOM_COUNT">0<small>'+$config.lbl_count+'</small></span>'
				  	  + '<span class="COINWIDGETCOM_AMOUNT end">0.00<small>'+$config.lbl_amount+'</small></span>'
				  	  ;				  
			}
			if ($config.qrcode) {
				$html += '<img class="COINWIDGETCOM_QRCODE" data-coinwidget-instance="'+$instance+'" src="'+CoinWidgetCom.source+'icon_qrcode.png" width="16" height="16" />'
				  	   + '<img class="COINWIDGETCOM_QRCODE_LARGE" src="'+CoinWidgetCom.source+'icon_qrcode.png" width="111" height="111" />'
				  	   ;
			}
			var $div = jQuery('<div></div>');
			jQuery('body').append($div);
			$div.attr({
				'id': 'COINWIDGETCOM_WINDOW_'+$instance
			}).addClass('COINWIDGETCOM_WINDOW COINWIDGETCOM_WINDOW_'+$config.currency.toUpperCase()+' COINWIDGETCOM_WINDOW_'+$config.alignment.toUpperCase()).html($html).unbind('click').bind('click',function(){
				jQuery(".COINWIDGETCOM_WINDOW").css({'z-index':99999999998});
				jQuery(this).css({'z-index':99999999999});
			});
			if ($config.qrcode) {
				jQuery(coin_window).find('.COINWIDGETCOM_QRCODE').bind('mouseenter click',function(){
					$config = CoinWidgetCom.config[jQuery(this).attr('data-coinwidget-instance')];
					$lrg = jQuery(this).parent().find('.COINWIDGETCOM_QRCODE_LARGE');
					if ($lrg.is(':visible')) {
						$lrg.hide();
						return;
					}
					$lrg.attr({
						src: CoinWidgetCom.source +'qr/?address='+$config.wallet_address
					}).show();
				}).bind('mouseleave',function(){
					$lrg = jQuery(this).parent().find('.COINWIDGETCOM_QRCODE_LARGE');
					$lrg.hide();
				});
			}
		} else {
			if (jQuery(coin_window).is(':visible')) {
				CoinWidgetCom.hide($instance);
				return;
			}
		}
		CoinWidgetCom.window_position($instance);
		jQuery(coin_window).show();
		$pos = jQuery(coin_window).find('input').position();
		jQuery(coin_window).find('img.COINWIDGET_INPUT_ICON').css({'top':$pos.top+4,'left':$pos.left+3});
		jQuery(coin_window).find('.COINWIDGETCOM_WALLETURI').css({'top':$pos.top+5,'left':$pos.left+jQuery(coin_window).find('input').outerWidth()+3});
		if ($config.counter != 'hide') {
			$counters = CoinWidgetCom.counter[$instance];
			if ($counters == null) {
				$counters = {
					count: 0,
					amount: 0
				};
			}
		 	if ($counters.count == null) $counters.count = 0;
		 	if ($counters.amount == null) $counters.amount = 0;
			jQuery(coin_window).find('.COINWIDGETCOM_COUNT').html($counters.count+ '<small>'+$config.lbl_count+'</small>');
			jQuery(coin_window).find('.COINWIDGETCOM_AMOUNT').html($counters.amount.toFixed($config.decimals)+ '<small>'+$config.lbl_amount+'</small>');
		}
		if (typeof $config.onShow == 'function') 
			$config.onShow();
	}
	, hide: function($instance) {
		$config = CoinWidgetCom.config[$instance];
		coin_window = "#COINWIDGETCOM_WINDOW_"+$instance;
		jQuery(coin_window).fadeOut();
		if (typeof $config.onHide == 'function') {
			$config.onHide();
		}
	}
	, in_array: function(needle,haystack) {
		for (i=0;i<haystack.length;i++) {
			if (haystack[i] == needle) { 
				return true;
			}
		}
		return false;
	}
	, loader: {
		loading_jquery: false,
		script: function(obj){
			if (!document.getElementById(obj.id)) {
				var x = document.createElement('script');
				x.onreadystatechange = function(){
					switch (this.readyState) {
						case 'complete':
						case 'loaded':
							obj.callback();
							break;
					}
				};
				x.onload = function(){
					obj.callback();
				};
				x.src = obj.source;
				x.id  = obj.id;
				document.lastChild.appendChild(x);
			}
		}
		, stylesheet_loaded: false
		, stylesheet: function(){
			if (!CoinWidgetCom.loader.stylesheet_loaded) {
				CoinWidgetCom.loader.stylesheet_loaded = true;
				var $link = jQuery('<link/>');
				jQuery("head").append($link);
				$link.attr({
					id 		: 'COINWIDGETCOM_STYLESHEET'
					, rel 	: 'stylesheet'
					, type 	: 'text/css'
					, href 	: CoinWidgetCom.source+'coin.css'
				});
			}
		}
		, jquery: function(){
			if (!window.jQuery && !CoinWidgetCom.loader.loading_jquery) {
				$prefix = window.location.protocol=='file:'?'http:':'';
				CoinWidgetCom.loader.script({
					id			: 'COINWIDGETCOM_JQUERY'
					, source 	: $prefix + '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'
					, callback  : function(){
						CoinWidgetCom.init();
					}
				});
				return;
			}
			CoinWidgetCom.init();
		}
	}
};
