/*
 * Simple Video Player for JQuery Javascript Library
 * http://www.christiangomez.me/projects/3
 *
 * Copyright (c) 2014 - 2015
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 *
 * Author: Christian Gomez
 * Version: 1.0.0.2
 * Date: 11th April 2015
 */

 $.fn.simpleVideo = function(sources, options, callback) {
	
	var el          = 	this;
	var current 	= 	el[0]; //current node
	var timeHide 	=   null; //for controls

	//create nodes
	var _sVideo 	   =	document.createElement('video');
	var _sControls     = 	document.createElement('div');
	var _ul 		   =    document.createElement('ul');
	var _sPlay         =    document.createElement('li');
	var _sCenterP 	   =    document.createElement('div');
	var _playButton    =    document.createElement('i');
	var _sProgress	   =    document.createElement('li');
	var _sAlign        =    document.createElement('div');
	var _sAlignDiv     =    document.createElement('div');
	var _sTime		   =    document.createElement('span');
	var _sBarAlign     =    document.createElement('div');
	var _sBarProgress  =    document.createElement('div');
	var _sBarBuffer	   = 	document.createElement('div');
	var _sBarPercent   =    document.createElement('div');
	var _sVolume	   =    document.createElement('li');
	var _sCenterV	   =    document.createElement('div');
	var _volumeButton  =    document.createElement('i');
	var _expandButton  =    document.createElement('i');

	//assign class names
	current.className	     =    "svContainer";
	_sVideo.className        =    "sVideo";
	_sControls.className     =	  "svControls";
	_sPlay.className		 =    "sPlay";
	_sCenterP.className		 = 	  "sCenter";
	_playButton.className	 =    "fa fa-play";
	_sProgress.className 	 =    "sProgress";
	_sAlign.className 		 =    "sAlign";
	_sBarAlign.className	 =    "sBarAlign";
	_sBarProgress.className  =    "sBarProgress";
	_sBarBuffer.className	 = 	  "sBarBuffer";
	_sBarPercent.className 	 =    "sBarPercent";
	_sVolume.className	     = 	  "sVolume";
	_sCenterV.className		 = 	  "sCenter";
	_volumeButton.className	 =    "fa fa-volume-up";
	_expandButton.className	 =    "fa fa-expand";

	//append children
	current.appendChild(_sVideo);
	current.appendChild(_sControls);
	_sControls.appendChild(_ul);
	_ul.appendChild(_sPlay);
	_sPlay.appendChild(_sCenterP);
	_sCenterP.appendChild(_playButton);
	_ul.appendChild(_sProgress);
	_sProgress.appendChild(_sAlign);
	_sAlign.appendChild(_sAlignDiv);
	_sAlignDiv.appendChild(_sTime);
	_sProgress.appendChild(_sBarAlign);
	_sBarAlign.appendChild(_sBarProgress);
	_sBarProgress.appendChild(_sBarPercent);
	_sBarProgress.appendChild(_sBarBuffer);
	_ul.appendChild(_sVolume);
	_sVolume.appendChild(_sCenterV);
	_sCenterV.appendChild(_volumeButton);
	_sCenterV.appendChild(_expandButton);


	_sTime.innerHTML = "00:00";

	/* Initialize Video Player */
	el.init  = function()
	{
		//display loading screen

		//load sources
		el.loadSources(sources);
	} 

	//play video
	el.play = function()
	{
		_sVideo.play();
		_playButton.className = "fa fa-pause";
	}

	//stop video playing
	el.stop  = function()
	{
		_sVideo.pause();
		_playButton.className = "fa fa-play";
	}

	//toggles video play state
	el.toggleState = function()
	{
		if(_sVideo.paused){
			el.play();
		}
		else {
			el.stop();
		}
	}

	//change volume
	el.changeVolume = function(volume)
	{

	}

	//show controls
	el.showControls = function(e)
	{
       e.preventDefault();
       clearTimeout(timeHide);
       $(_sControls).addClass('active');
	}

	//hide controls
	el.hideControls = function(e)
	{
		e.preventDefault();
	    timeHide = setTimeout(function(){ 
	        $(_sControls).removeClass('active');
	    }, 500); 
	}

	//skip to #seconds
	el.skip = function(e)
	{
		var left = e.offsetX;
		var w = $(_sBarProgress).width();
		var percent = left/w;

		var seconds = Math.round(_sVideo.duration * percent);

		//show buffering
		_sVideo.currentTime = seconds;
	}

	//toggles the volume bar from showing
	el.toggleVolume = function()
	{

	}

	//changes the volume
	el.changeVolume = function()
	{

	}

	//show loading
	el.showLoader = function()
	{

	}
	//hide loading screen
	el.hideLoader = function()
	{

	}

	//updates time text
	el.updateTime = function()
	{
		var seconds = _sVideo.currentTime;
		//greater than 60 mins
		if(seconds > 3600){

		}
		//set time text
		var minutes = Math.floor(seconds/60);
		var remainder = Math.floor(seconds - (minutes * 60));
		var time = ((minutes < 10) ? '0' + minutes : minutes) 
				+ ":" + ((remainder < 10) ? '0' + remainder: remainder); 
		_sTime.innerHTML = time;


		var percent = Math.round((seconds/_sVideo.duration) * 100);
		$(_sBarPercent).css('width', percent + '%');

		//update buffered percent
		var buff = _sVideo.buffered;
        var buffer_percent = Math.round((buff.end(0)/_sVideo.duration)*100);
        $(_sBarBuffer).css('width', buffer_percent + "%");
	}	
	
	//load sources
	//accepts array of tracks
	el.loadSources = function(tracks) 
	{
		//load all tracks
		var max = 0;
		for(var i = 0; i < tracks.length; i++){
			var track = tracks[i];
			if(track){
				//create source nodes
				if(max < 3){
					var s = document.createElement('source');
					//append to video node
					s.src = track;
					_sVideo.appendChild(s);
					max++;
				}
			}
		}

	}
	el.init();
	/* Event Listeners */
	_sPlay.addEventListener('click', el.toggleState, false);
	_volumeButton.addEventListener('click', el.toggleVolume, false);
	_sVideo.ontimeupdate = el.updateTime;
	_sVideo.onended = el.stop;
	_sBarProgress.addEventListener('click', el.skip, false);

	//show controls on hover
	current.addEventListener('mouseover', el.showControls, false);
	current.addEventListener('mouseout', el.hideControls, false);
 }