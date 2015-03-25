(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 660,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Background.jpg", id:"Background"},
		{src:"images/ball1.png", id:"ball1"},
		{src:"images/ball.png", id:"ball"},
		{src:"images/Belarmfist.png", id:"Belarmfist"},
		{src:"images/Belarmlean.png", id:"Belarmlean"},
		{src:"images/Belarmnormal2.png", id:"Belarmnormal2"},
		{src:"images/Belarmnormal.png", id:"Belarmnormal"},
		{src:"images/Belarmwave.png", id:"Belarmwave"},
		{src:"images/Belbody.png", id:"Belbody"},
		{src:"images/Belconfusedblink.png", id:"Belconfusedblink"},
		{src:"images/Belconfuseddown.png", id:"Belconfuseddown"},
		{src:"images/Belconfused.png", id:"Belconfused"},
		{src:"images/Belheaddownlaughblink.png", id:"Belheaddownlaughblink"},
		{src:"images/Belheaddownlaugh.png", id:"Belheaddownlaugh"},
		{src:"images/Belheaddownsmileblink.png", id:"Belheaddownsmileblink"},
		{src:"images/Belheaddownsmile.png", id:"Belheaddownsmile"},
		{src:"images/Belheadlaughblink.png", id:"Belheadlaughblink"},
		{src:"images/Belheadlaugh.png", id:"Belheadlaugh"},
		{src:"images/Belheadsideblink.png", id:"Belheadsideblink"},
		{src:"images/Belheadside.png", id:"Belheadside"},
		{src:"images/Belheadsmileblink.png", id:"Belheadsmileblink"},
		{src:"images/Belheadsmile.png", id:"Belheadsmile"},
		{src:"images/Beljoyblink.png", id:"Beljoyblink"},
		{src:"images/BGCupboard.png", id:"BGCupboard"},
		{src:"images/BGkitchenlight.jpg", id:"BGkitchenlight"},
		{src:"images/BGkitchen.jpg", id:"BGkitchen"},
		{src:"images/block1.png", id:"block1"},
		{src:"images/blocks.png", id:"blocks"},
		{src:"images/book.png", id:"book"},
		{src:"images/cake.png", id:"cake"},
		{src:"images/car.png", id:"car"},
		{src:"images/Chamkiarmfolded.png", id:"Chamkiarmfolded"},
		{src:"images/Chamkiarmstraight.png", id:"Chamkiarmstraight"},
		{src:"images/Chamkiarmwave.png", id:"Chamkiarmwave"},
		{src:"images/Chamkiarmsclap.png", id:"Chamkiarmsclap"},
		{src:"images/Chamkibodyhandsonhips.png", id:"Chamkibodyhandsonhips"},
		{src:"images/Chamkibody.png", id:"Chamkibody"},
		{src:"images/Chamkiheadconfusedblink.png", id:"Chamkiheadconfusedblink"},
		{src:"images/Chamkiheadconfuseddownblink.png", id:"Chamkiheadconfuseddownblink"},
		{src:"images/Chamkiheadconfuseddown.png", id:"Chamkiheadconfuseddown"},
		{src:"images/Chamkiheadconfusedside.png", id:"Chamkiheadconfusedside"},
		{src:"images/Chamkiheadconfused.png", id:"Chamkiheadconfused"},
		{src:"images/Chamkiheadlaughblink.png", id:"Chamkiheadlaughblink"},
		{src:"images/Chamkiheadlaugh.png", id:"Chamkiheadlaugh"},
		{src:"images/Chamkiheadlookingdown.png", id:"Chamkiheadlookingdown"},
		{src:"images/Chamkiheadsmileblink.png", id:"Chamkiheadsmileblink"},
		{src:"images/Chamkiheadsmile.png", id:"Chamkiheadsmile"},
		{src:"images/Chamki_01.png", id:"Chamki_01"},
		{src:"images/Cookiearmthinking.png", id:"Cookiearmthinking"},
		{src:"images/Cookiearm.png", id:"Cookiearm"},
		{src:"images/Cookiebody1.png", id:"Cookiebody1"},
		{src:"images/Cookieheadconfusedblink.png", id:"Cookieheadconfusedblink"},
		{src:"images/Cookieheadconfused.png", id:"Cookieheadconfused"},
		{src:"images/Cookieheadgrinblink.png", id:"Cookieheadgrinblink"},
		{src:"images/Cookieheadgrin.png", id:"Cookieheadgrin"},
		{src:"images/Cookieheadlookingdownblink.png", id:"Cookieheadlookingdownblink"},
		{src:"images/Cookieheadlookingdown.png", id:"Cookieheadlookingdown"},
		{src:"images/Cookieheadsmileblink.png", id:"Cookieheadsmileblink"},
		{src:"images/Cookieheadsmile.png", id:"Cookieheadsmile"},
		{src:"images/Cookieheadsurprisedownblink.png", id:"Cookieheadsurprisedownblink"},
		{src:"images/Cookieheadsurprisedown.png", id:"Cookieheadsurprisedown"},
		{src:"images/cookie.png", id:"cookie"},
		{src:"images/Cookie_04.png", id:"Cookie_04"},
		{src:"images/cupboard.png", id:"cupboard"},
		{src:"images/Elmoarm.png", id:"Elmoarm"},
		{src:"images/Elmobody2.png", id:"Elmobody2"},
		{src:"images/Elmobodyarmless.png", id:"Elmobodyarmless"},
		{src:"images/Elmobody.png", id:"Elmobody"},
		{src:"images/Elmoheadconfusedblink.png", id:"Elmoheadconfusedblink"},
		{src:"images/Elmoheadconfused.png", id:"Elmoheadconfused"},
		{src:"images/Elmoheadfrontblink.png", id:"Elmoheadfrontblink"},
		{src:"images/Elmoheadfront.png", id:"Elmoheadfront"},
		{src:"images/Elmoheadhappy.png", id:"Elmoheadhappy"},
		{src:"images/Elmoheadlaugh.png", id:"Elmoheadlaugh"},
		{src:"images/Elmoheadlookdownblink.png", id:"Elmoheadlookdownblink"},
		{src:"images/Elmoheadlookdown.png", id:"Elmoheadlookdown"},
		{src:"images/Elmoheadsideblink.png", id:"Elmoheadsideblink"},
		{src:"images/Elmoheadside.png", id:"Elmoheadside"},
		{src:"images/Elmoheadsurpriseblink.png", id:"Elmoheadsurpriseblink"},
		{src:"images/Elmoheadsurprise.png", id:"Elmoheadsurprise"},
		{src:"images/Elmo_03.png", id:"Elmo_03"},
		{src:"images/firetruck.png", id:"firetruck"},
		{src:"images/gradient.png", id:"gradient"},
		{src:"images/homebutton.png", id:"homebutton"},
		{src:"images/horse.png", id:"horse"},
		{src:"images/hotzone.png", id:"hotzone"},
		{src:"images/Lilyarmcup.png", id:"Lilyarmcup"},
		{src:"images/Lilyarmfist.png", id:"Lilyarmfist"},
		{src:"images/Lilyarmlimp.png", id:"Lilyarmlimp"},
		{src:"images/Lilyarmwave.png", id:"Lilyarmwave"},
		{src:"images/Lilybodyarms.png", id:"Lilybodyarms"},
		{src:"images/Lilybody.png", id:"Lilybody"},
		{src:"images/Lilyheadconfusedblink.png", id:"Lilyheadconfusedblink"},
		{src:"images/Lilyheadconfuseddown.png", id:"Lilyheadconfuseddown"},
		{src:"images/Lilyheadconfusedopenmouthed.png", id:"Lilyheadconfusedopenmouthed"},
		{src:"images/Lilyheadconfused.png", id:"Lilyheadconfused"},
		{src:"images/Lilyheadgrin.png", id:"Lilyheadgrin"},
		{src:"images/Lilyheadlaughblink.png", id:"Lilyheadlaughblink"},
		{src:"images/Lilyheadlaughdown.png", id:"Lilyheadlaughdown"},
		{src:"images/LilyheadlaughL.png", id:"LilyheadlaughL"},
		{src:"images/LilyheadlaughR.png", id:"LilyheadlaughR"},
		{src:"images/Lilyheadlaugh.png", id:"Lilyheadlaugh"},
		{src:"images/Lilyheadsmileblink.png", id:"Lilyheadsmileblink"},
		{src:"images/Lilyheadsmiledown.png", id:"Lilyheadsmiledown"},
		{src:"images/LilyheadsmileL.png", id:"LilyheadsmileL"},
		{src:"images/LilyheadsmileR.png", id:"LilyheadsmileR"},
		{src:"images/Lilyheadsmile.png", id:"Lilyheadsmile"},
		{src:"images/Lilyheadteeth.png", id:"Lilyheadteeth"},
		{src:"images/orange.png", id:"orange"},
		{src:"images/ring0.png", id:"ring0"},
		{src:"images/ring1.png", id:"ring1"},
		{src:"images/ringsbottom.png", id:"ringsbottom"},
		{src:"images/ringsring1.png", id:"ringsring1"},
		{src:"images/ringsring2.png", id:"ringsring2"},
		{src:"images/ringsring3.png", id:"ringsring3"},
		{src:"images/ringsring4.png", id:"ringsring4"},
		{src:"images/ringstop.png", id:"ringstop"},
		{src:"images/rings.png", id:"rings"},
		{src:"images/SelectionBel.png", id:"SelectionBel"},
		{src:"images/SelectionChamki.png", id:"SelectionChamki"},
		{src:"images/SelectionCookie.png", id:"SelectionCookie"},
		{src:"images/SelectionElmo.png", id:"SelectionElmo"},
		{src:"images/SelectionLily.png", id:"SelectionLily"},
		{src:"images/Table.png", id:"Table"},
		{src:"sounds/_01_Welcome.mp3", id:"_01_Welcome"},
		{src:"sounds/Clicktoytodivide.mp3", id:"Clicktoytodivide"},
		{src:"sounds/Distributetoys.mp3", id:"Distributetoys"},
		{src:"sounds/Fantasticletspickanothertoy.mp3", id:"Fantasticletspickanothertoy"},
		{src:"sounds/Moveapiecetoallyourfriends.mp3", id:"Moveapiecetoallyourfriends"},
		{src:"sounds/Muppetaww.mp3", id:"Muppetaww"},
		{src:"sounds/Muppethmm.mp3", id:"Muppethmm"},
		{src:"sounds/Muppetyay.mp3", id:"Muppetyay"},
		{src:"sounds/NameBel.mp3", id:"NameBel"},
		{src:"sounds/NameCookieMonster.mp3", id:"NameCookieMonster"},
		{src:"sounds/NameElmo.mp3", id:"NameElmo"},
		{src:"sounds/NameGrover.mp3", id:"NameGrover"},
		{src:"sounds/NameLola.mp3", id:"NameLola"},
		{src:"sounds/Picksomethingprompt.mp3", id:"Picksomethingprompt"},
		{src:"sounds/Picksomethingtoshare.mp3", id:"Picksomethingtoshare"},
		{src:"sounds/Sharethesameamount.mp3", id:"Sharethesameamount"},
		{src:"sounds/Sharetoyprompt.mp3", id:"Sharetoyprompt"},
		{src:"sounds/Welldoneplayagainquery.mp3", id:"Welldoneplayagainquery"},
		{src:"sounds/Yourfriendsareherepicksomethingtoshare.mp3", id:"Yourfriendsareherepicksomethingtoshare"},
		{src:"sounds/Yourfriendsareheresharethesameamount.mp3", id:"Yourfriendsareheresharethesameamount"}
	]
};

// stage content:
(lib.sharing = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{item_select:0,share:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		console.log("Starting at " + createjs.Ticker.getTime(false));
		
		if (!this.hasEventListener("tick"))
			this.addEventListener("tick", updateLoop.bind(this));
		
		var playDelayedSoundAt = -1;
		var delayedSoundName = "";
		var restarted, completed;
		
		function updateLoop() {
			if (playDelayedSoundAt > 0 ? createjs.Ticker.getTicks(true) >= playDelayedSoundAt : false) {
				this.Sounds.gotoAndStop(delayedSoundName);
				playDelayedSoundAt = -1;
			}
			
			if (pickedPiece != null)
				dragPiece(pickedPiece);
		}
		
		function PlayDelayedSound (soundName, delaySeconds) {
			console.log("Playing delayed sound " + soundName);
			delayedSoundName = soundName;
			playDelayedSoundAt = createjs.Ticker.getTicks(true) + delaySeconds * createjs.Ticker.getFPS();
		}
		
		function CancelDelayedSound() {
			playDelayedSoundAt = -1;
		}
		
		createjs.Sound.stop();
		this.Sounds.gotoAndStop(completed ? "Pick another toy" : "Friends are here");
		if (completed)
			completed = false;
		PlayDelayedSound("Pick something prompt", 12);
		
		var shareableIndex = -1;
		
		// The indices in these arrays correspond to each other
		var buttons_all = [this.Button_Ball, this.Button_Blocks, this.Button_Ring, this.Button_Horse, this.Button_Car, this.Button_Firetruck]; //, this.Button_Book, this.Button_Cake, this.Button_Cookie, this.Button_Orange];
		var shareables_all = [this.Shareable_Balls, this.Shareable_Blocks, this.Shareable_Rings, this.Shareable_Horse, this.Shareable_Cars, this.Shareable_Firetrucks];
		
		var shareable_names = ["Ball", "Block", "Ring", "Horse", "Car", "Firetruck"]; //, "Book", "Cake", "Cookie", "Orange"];
		var button_positions = [this.Btn1, this.Btn2, this.Btn3, this.Btn4, this.Btn5, this.Btn6];
		var shareable = null;
		
		if (!buttons_all[0].hasEventListener("click")) for (var btn = 0; btn < buttons_all.length; btn++) {
			buttons_all[btn].addEventListener("click", selectShareable.bind(this));
			buttons_all[btn].btnNum = btn;
		}
		
		// Choose buttons to display in a random order
		
		var buttons_order = [];
		var buttonPage = 0;
		
		randomizeButtons();
		
		function randomizeButtons() {
			var buttons_now = buttons_all.slice(0);
			var btnPosNum = 0;
			while (buttons_now.length > 0) {
				var currBtnIndex = Math.floor(Math.random() * buttons_now.length);
				var currButton = buttons_now[currBtnIndex];
				buttons_now.splice(currBtnIndex, 1);
				buttons_order.splice(btnPosNum, 0, currButton);
				var btnIndex = btnPosNum % button_positions.length;
				currButton.x = button_positions[btnIndex].x;
				currButton.y = button_positions[btnIndex].y;
				currButton.visible = btnPosNum < button_positions.length;
				btnPosNum++;
			}
		}
		
		// Set up item selection pages
		
		if (!this.Itemselect_next.hasEventListener("click"))
			this.Itemselect_next.addEventListener("click", changePage.bind(this));
		this.Itemselect_next.visible = buttons_all.length > button_positions.length;
		this.Itemselect_next.showNextPage = true;
		
		if (!this.Itemselect_last.hasEventListener("click"))
			this.Itemselect_last.addEventListener("click", changePage.bind(this));
		this.Itemselect_last.visible = false;
		this.Itemselect_last.showNextPage = false;
		
		function changePage(evt) {
			buttonPage += evt.currentTarget.showNextPage ? 1 : -1;
			var minBtnNum = buttonPage * button_positions.length;
			var maxBtnNum = minBtnNum + button_positions.length - 1;
			for (var b=0; b < buttons_order.length; b++)
				buttons_order[b].visible = b >= minBtnNum && b <= maxBtnNum;
			this.Itemselect_next.visible = buttons_order.length > button_positions.length * (buttonPage + 1);
			this.Itemselect_last.visible = buttonPage > 0;
		}
		
		// Item selection event
		
		var characters;
		var characters_active;
		var character_scale = [1.4, 1.3, 1];
		
		function selectShareable(evt) {
			createjs.Sound.stop();
			playDelayedSoundAt = -1;
			this.Sounds.gotoAndStop("Click toy to divide");
			restarted = true;
			
			this.gotoAndStop("share");
			characters = [this.Onscreen_Cookie, this.Onscreen_Elmo, this.Onscreen_Lily, this.Onscreen_Bel];
			var numCharacters = 2 + Math.min(2, Math.floor(Math.random() * 3));
			var charPositions;
			switch (numCharacters) {
				case 2: charPositions = [320, 704]; break;
				case 3: charPositions = [200, 512, 824]; break;
				case 4: charPositions = [167, 400, 640, 860]; break;
				default: break;
			}
			var unusedCharacters = characters.slice(0);
			characters_active = [];
			var c=0;
			while (unusedCharacters.length > 0) {
				var chosenC = Math.floor(Math.random() * unusedCharacters.length);
				unusedCharacters[chosenC].itemArray = [];
				if (c < numCharacters) {
					unusedCharacters[chosenC].visible = true;
					unusedCharacters[chosenC].x = charPositions[c];
					characters_active.splice(c, 0, unusedCharacters[chosenC]);
				}
				else
					unusedCharacters[chosenC].visible = false;
				unusedCharacters.splice(chosenC, 1);
				c++;
			}
			console.log("Characters: " + characters_active.length);
			
			var obj_scale = character_scale[numCharacters - 2];
			for (c=0; c < characters_active.length; c++) {
				characters_active[c].Hotzone.visible = false;
				characters_active[c].scaleX = characters_active[c].scaleY = obj_scale;
			}
			
			shareableIndex = evt.currentTarget.btnNum;
			if (shareableIndex < 0)
				shareableIndex = 0;
			shareable = shareables_all[shareableIndex];
			shareable.scaleX = shareable.scaleY = obj_scale;
			
			for (var s=0; s < shareables_all.length; s++)
				shareables_all[s].visible = s == shareableIndex;
			
			shareable.gotoAndStop("whole" + numCharacters.toString());
			shareable.on("click", function (evt) {
				createjs.Sound.stop();
				CancelDelayedSound();
				this.parent.Sounds.gotoAndStop("Distribute pieces");
				PlayDelayedSound("Distribute prompt", 10);
				shareable.gotoAndStop("sliced" + numCharacters.toString());
				shareable.removeAllEventListeners("click");
				shareablePieces = [shareable.Piece1, shareable.Piece2, shareable.Piece3, shareable.Piece4];
				
				for (var sp=0; sp < 4; sp++) {
					shareablePieces[sp].origLocation = new createjs.Point(shareablePieces[sp].x, shareablePieces[sp].y);
					if (!shareablePieces[sp].hasEventListener("click"))
						shareablePieces[sp].addEventListener("click", pickPiece.bind(this));
					shareablePieces[sp].visible = true;
					shareablePieces[sp].givenTo = null;
				}
			});
			
			numItemsDistributed = 0;
			
			// this.Button_BackToItems.visible = false;
			this.Button_BackToItems.on("click", backToStart.bind(this));
		}
		
		var shareablePieces = [];
		
		function backToStart() {
			this.gotoAndStop("item_select");
			for (var sp=0; sp < shareablePieces.length; sp++) {
				if (shareablePieces[sp].origLocation) {
					shareablePieces[sp].x = shareablePieces[sp].origLocation.x;
					shareablePieces[sp].y = shareablePieces[sp].origLocation.y;
				}
			}
		}
		
		// Sharing stuff (frame 'share')
		
		var draggingPiece = false;
		var pickedPiece = null;
		var ticksToNextOutlineUpdate = 5;
		var numItemsDistributed = 0;
		
		function pickPiece(evt) {
			if (pickedPiece == null) {
				pickedPiece = evt.currentTarget;
				PlayDelayedSound("Distribute prompt", 8);
				for (c=0; c < characters_active.length; c++)
					characters_active[c].Hotzone.visible = true;
			}
			else if (pickedPiece == evt.currentTarget) {
				dropPiece(pickedPiece);
				pickedPiece = null;
				for (c=0; c < characters_active.length; c++)
					characters_active[c].Hotzone.visible = false;
			}
		}
		
		function dragPiece(piece) {
			//stage.enableMouseOver(10);
			if (!draggingPiece) {
				draggingPiece = true;
				piece.gotoAndStop(0);
				if (piece.givenTo) {
					numItemsDistributed--;
					var takingFrom = piece.givenTo;
					takingFrom.itemArray.splice(takingFrom.itemArray.length - 1, 1);
					if (takingFrom.itemArray.length > 0)
						takingFrom.itemArray[takingFrom.itemArray.length - 1].visible = true;
					else
						takingFrom.gotoAndStop(0);
					piece.givenTo = null;
				}
			}
			var newPos = piece.parent.globalToLocal(stage.mouseX, stage.mouseY);
			piece.x = newPos.x;
			piece.y = newPos.y;
			// Update selection indicators
			ticksToNextOutlineUpdate--;
			if (ticksToNextOutlineUpdate > 0) return;
			for (c = 0; c < characters_active.length; c++) {
				var hitpt = characters_active[c].globalToLocal(stage.mouseX, stage.mouseY);
				characters_active[c].Selection.visible = characters_active[c].hitTest(hitpt.x, hitpt.y);
			}
			ticksToNextOutlineUpdate = 5;
		}
		
		function dropPiece(piece) {
			//var affectedObjs = stage.getObjectsUnderPoint(stage.mouseX, stage.mouseY);
			if (!draggingPiece) return;
			draggingPiece = false;
			for (c = 0; c < characters_active.length; c++) {
				var hitpt = characters_active[c].globalToLocal(stage.mouseX, stage.mouseY);
				characters_active[c].Selection.visible = false;
			}
			ticksToNextOutlineUpdate = 5;
			// Hit tests
			for (c = 0; c < characters_active.length; c++) {
				var hitpt = characters_active[c].globalToLocal(stage.mouseX, stage.mouseY);
				if (characters_active[c].hitTest(hitpt.x, hitpt.y)) {
					characters_active[c].gotoAndStop("Wait");
					//characters_active[c].gotoAndStop(shareable_names[shareableIndex] + "_play");
					var movePt = characters_active[c].localToLocal(characters_active[c].WaitPos.x, characters_active[c].WaitPos.y, piece.parent);
					piece.x = movePt.x;
					piece.y = movePt.y;
					characters_active[c].WaitPos.visible = false;
					piece.givenTo = characters_active[c];
					if (characters_active[c].itemArray.length > 0)
						characters_active[c].itemArray[characters_active[c].itemArray.length - 1].visible = false;
					characters_active[c].itemArray.splice(characters_active[c].itemArray.length, 0, piece);
					piece.gotoAndStop(characters_active[c].itemArray.length - 1);
					numItemsDistributed++;
					
					// Check if all items are distributed and react accordingly
					if (numItemsDistributed == characters_active.length) {
						var allShared = true;
						for (var ch=0; ch < characters_active.length; ch++) {
							if (characters_active[ch].itemArray.length == 0) {
								characters_active[ch].gotoAndStop("Confused");
								allShared = false;
							}
						}
						if (allShared) { // Equal distribution
							for (ch=0; ch < characters_active.length; ch++) {
								characters_active[ch].gotoAndStop(shareable_names[shareableIndex] + "_play");
								// Make the shared items invisible, as the characters' playing animation should take over
								characters_active[ch].itemArray[0].visible = false;
							}
							completed = true;
							createjs.Sound.stop();
							CancelDelayedSound();
							PlayDelayedSound("Well done", 1);
						}
						else {
							createjs.Sound.stop();
							CancelDelayedSound();
							PlayDelayedSound("Unfair share", 1);
						}
					}
					return;
				}
			}
			// Not dropped on a character, return to original spot
			createjs.Tween.get(piece, {
				loop: false
			}).to({
				x: piece.origLocation.x,
				y: piece.origLocation.y
			}, 300, createjs.Ease.cubicOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Actions
	this.Sounds = new lib.Sounds();
	this.Sounds.setTransform(-200.1,378.3,1,1,0,0,0,1.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.Sounds).wait(2));

	// Items
	this.Button_Firetruck = new lib.Button_Firetruck();
	this.Button_Firetruck.setTransform(1415.4,-141.9,0.821,0.821,0,0,0,86.3,71.7);
	new cjs.ButtonHelper(this.Button_Firetruck, 0, 1, 1);

	this.Button_Car = new lib.Button_Car();
	this.Button_Car.setTransform(934.6,-152.9,1,1,0,0,0,98.5,64.5);
	new cjs.ButtonHelper(this.Button_Car, 0, 1, 1);

	this.Button_Horse = new lib.Button_Horse();
	this.Button_Horse.setTransform(648.2,-157.4,1,1,0,0,0,80,80.5);
	new cjs.ButtonHelper(this.Button_Horse, 0, 1, 1);

	this.Button_Ring = new lib.Button_Rings();
	this.Button_Ring.setTransform(1182.2,-158.2,0.816,0.816,0,0,0,85,85.5);
	new cjs.ButtonHelper(this.Button_Ring, 0, 1, 1);

	this.Itemselect_last = new lib.Button_arrow();
	this.Itemselect_last.setTransform(60.4,356,1,1,180);
	new cjs.ButtonHelper(this.Itemselect_last, 0, 1, 1);

	this.Itemselect_next = new lib.Button_arrow();
	this.Itemselect_next.setTransform(963.7,356);
	new cjs.ButtonHelper(this.Itemselect_next, 0, 1, 1);

	this.Button_Orange = new lib.Button_Orange();
	this.Button_Orange.setTransform(382,-390.5,0.925,0.925);
	new cjs.ButtonHelper(this.Button_Orange, 0, 1, 1);

	this.Button_Cookie = new lib.Button_Cookie();
	this.Button_Cookie.setTransform(176.2,-387.3,0.925,0.925);
	new cjs.ButtonHelper(this.Button_Cookie, 0, 1, 1);

	this.Button_Cake = new lib.Button_Cake();
	this.Button_Cake.setTransform(-74.6,-389.1,0.925,0.925);
	new cjs.ButtonHelper(this.Button_Cake, 0, 1, 1);

	this.Button_Book = new lib.Button_Book();
	this.Button_Book.setTransform(385.7,-161.4,0.925,0.925);
	new cjs.ButtonHelper(this.Button_Book, 0, 1, 1);

	this.Button_Blocks = new lib.Button_Blocks();
	this.Button_Blocks.setTransform(141.8,-169.3,0.925,0.925);
	new cjs.ButtonHelper(this.Button_Blocks, 0, 1, 1);

	this.Button_Ball = new lib.Button_Ball();
	this.Button_Ball.setTransform(-82.3,-170.5,0.856,0.856);
	new cjs.ButtonHelper(this.Button_Ball, 0, 1, 1);

	this.Btn6 = new lib.Button_ref();
	this.Btn6.setTransform(779.2,508.5,1,1.073);

	this.Btn5 = new lib.Button_ref();
	this.Btn5.setTransform(512,508.5,1,1.073);

	this.Btn4 = new lib.Button_ref();
	this.Btn4.setTransform(244.8,508.5,1,1.073);

	this.Btn3 = new lib.Button_ref();
	this.Btn3.setTransform(779.2,206.1,1,1.073);

	this.Btn2 = new lib.Button_ref();
	this.Btn2.setTransform(512,206.1,1,1.073);

	this.Btn1 = new lib.Button_ref();
	this.Btn1.setTransform(244.8,206.1,1,1.073);

	this.Shareable_Firetrucks = new lib.Shareable_Firetrucks();
	this.Shareable_Firetrucks.setTransform(512.4,541.4,1,1,0,0,0,-0.1,-0.8);

	this.Shareable_Cars = new lib.Shareable_Cars();
	this.Shareable_Cars.setTransform(507.6,540.7,1,1,0,0,0,-0.1,-0.8);

	this.Shareable_Horse = new lib.Shareable_Horses();
	this.Shareable_Horse.setTransform(513.2,572.6,1,1,0,0,0,23.6,26.3);

	this.Button_BackToItems = new lib.Button_back();
	this.Button_BackToItems.setTransform(927.6,73.4,0.617,0.617);
	new cjs.ButtonHelper(this.Button_BackToItems, 0, 1, 1);

	this.Shareable_Balls = new lib.Shareable_Balls();
	this.Shareable_Balls.setTransform(513.2,572.6,1,1,0,0,0,23.6,26.3);

	this.Shareable_Rings = new lib.Shareable_Rings();
	this.Shareable_Rings.setTransform(509.8,550.9,1,1,0,0,0,27.3,3.8);

	this.Shareable_Blocks = new lib.Shareable_Blocks();
	this.Shareable_Blocks.setTransform(512.7,541.4,1,1,0,0,0,-0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Btn1},{t:this.Btn2},{t:this.Btn3},{t:this.Btn4},{t:this.Btn5},{t:this.Btn6},{t:this.Button_Ball},{t:this.Button_Blocks},{t:this.Button_Book},{t:this.Button_Cake},{t:this.Button_Cookie},{t:this.Button_Orange},{t:this.Itemselect_next},{t:this.Itemselect_last},{t:this.Button_Ring},{t:this.Button_Horse},{t:this.Button_Car},{t:this.Button_Firetruck}]}).to({state:[{t:this.Shareable_Blocks},{t:this.Shareable_Rings},{t:this.Shareable_Balls},{t:this.Button_BackToItems},{t:this.Shareable_Horse},{t:this.Shareable_Cars},{t:this.Shareable_Firetrucks}]},1).wait(1));

	// Characters
	this.Onscreen_Lily = new lib.Lily();
	this.Onscreen_Lily.setTransform(2198.9,428.4);

	this.Onscreen_Bel = new lib.Bel();
	this.Onscreen_Bel.setTransform(1877.7,428.4);

	this.Onscreen_Chamki = new lib.Chamki();
	this.Onscreen_Chamki.setTransform(2583.2,427.6);

	this.Onscreen_Elmo = new lib.Elmo();
	this.Onscreen_Elmo.setTransform(1246.9,428.5);

	this.Onscreen_Cookie = new lib.Cookie();
	this.Onscreen_Cookie.setTransform(1542.7,430.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Onscreen_Cookie},{t:this.Onscreen_Elmo},{t:this.Onscreen_Chamki},{t:this.Onscreen_Bel},{t:this.Onscreen_Lily}]},1).wait(1));

	// FG
	this.instance = new lib.Table();
	this.instance.setTransform(-16,426.6,0.825,0.825);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// BG
	this.instance_1 = new lib.BGCupboard();
	this.instance_1.setTransform(-16,0,0.825,0.825);

	this.instance_2 = new lib.Background();
	this.instance_2.setTransform(-16,0,0.825,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(207.4,-129,1811,1119);


// symbols:
(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.ball1 = function() {
	this.initialize(img.ball1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,171);


(lib.Belarmfist = function() {
	this.initialize(img.Belarmfist);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,40);


(lib.Belarmlean = function() {
	this.initialize(img.Belarmlean);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,72);


(lib.Belarmnormal2 = function() {
	this.initialize(img.Belarmnormal2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,88);


(lib.Belarmnormal = function() {
	this.initialize(img.Belarmnormal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.Belarmwave = function() {
	this.initialize(img.Belarmwave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,50);


(lib.Belbody = function() {
	this.initialize(img.Belbody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,145);


(lib.Belconfusedblink = function() {
	this.initialize(img.Belconfusedblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belconfuseddown = function() {
	this.initialize(img.Belconfuseddown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belconfused = function() {
	this.initialize(img.Belconfused);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belheaddownlaughblink = function() {
	this.initialize(img.Belheaddownlaughblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belheaddownlaugh = function() {
	this.initialize(img.Belheaddownlaugh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belheaddownsmileblink = function() {
	this.initialize(img.Belheaddownsmileblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belheaddownsmile = function() {
	this.initialize(img.Belheaddownsmile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belheadlaughblink = function() {
	this.initialize(img.Belheadlaughblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belheadlaugh = function() {
	this.initialize(img.Belheadlaugh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belheadsideblink = function() {
	this.initialize(img.Belheadsideblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,137);


(lib.Belheadside = function() {
	this.initialize(img.Belheadside);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,137);


(lib.Belheadsmileblink = function() {
	this.initialize(img.Belheadsmileblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Belheadsmile = function() {
	this.initialize(img.Belheadsmile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,133);


(lib.Beljoyblink = function() {
	this.initialize(img.Beljoyblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,279);


(lib.BGCupboard = function() {
	this.initialize(img.BGCupboard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.BGkitchenlight = function() {
	this.initialize(img.BGkitchenlight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.BGkitchen = function() {
	this.initialize(img.BGkitchen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.block1 = function() {
	this.initialize(img.block1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,179);


(lib.blocks = function() {
	this.initialize(img.blocks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,161);


(lib.book = function() {
	this.initialize(img.book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,144);


(lib.cake = function() {
	this.initialize(img.cake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,145);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,129);


(lib.Chamkiarmfolded = function() {
	this.initialize(img.Chamkiarmfolded);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,45);


(lib.Chamkiarmstraight = function() {
	this.initialize(img.Chamkiarmstraight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,62);


(lib.Chamkiarmwave = function() {
	this.initialize(img.Chamkiarmwave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,45);


(lib.Chamkiarmsclap = function() {
	this.initialize(img.Chamkiarmsclap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,35);


(lib.Chamkibodyhandsonhips = function() {
	this.initialize(img.Chamkibodyhandsonhips);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,127);


(lib.Chamkibody = function() {
	this.initialize(img.Chamkibody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,126);


(lib.Chamkiheadconfusedblink = function() {
	this.initialize(img.Chamkiheadconfusedblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Chamkiheadconfuseddownblink = function() {
	this.initialize(img.Chamkiheadconfuseddownblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Chamkiheadconfuseddown = function() {
	this.initialize(img.Chamkiheadconfuseddown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Chamkiheadconfusedside = function() {
	this.initialize(img.Chamkiheadconfusedside);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,122);


(lib.Chamkiheadconfused = function() {
	this.initialize(img.Chamkiheadconfused);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Chamkiheadlaughblink = function() {
	this.initialize(img.Chamkiheadlaughblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Chamkiheadlaugh = function() {
	this.initialize(img.Chamkiheadlaugh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Chamkiheadlookingdown = function() {
	this.initialize(img.Chamkiheadlookingdown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Chamkiheadsmileblink = function() {
	this.initialize(img.Chamkiheadsmileblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Chamkiheadsmile = function() {
	this.initialize(img.Chamkiheadsmile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Chamki_01 = function() {
	this.initialize(img.Chamki_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,198);


(lib.Cookiearmthinking = function() {
	this.initialize(img.Cookiearmthinking);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,59);


(lib.Cookiearm = function() {
	this.initialize(img.Cookiearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,112);


(lib.Cookiebody1 = function() {
	this.initialize(img.Cookiebody1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,191);


(lib.Cookieheadconfusedblink = function() {
	this.initialize(img.Cookieheadconfusedblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,104);


(lib.Cookieheadconfused = function() {
	this.initialize(img.Cookieheadconfused);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,104);


(lib.Cookieheadgrinblink = function() {
	this.initialize(img.Cookieheadgrinblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,104);


(lib.Cookieheadgrin = function() {
	this.initialize(img.Cookieheadgrin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,104);


(lib.Cookieheadlookingdownblink = function() {
	this.initialize(img.Cookieheadlookingdownblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,93);


(lib.Cookieheadlookingdown = function() {
	this.initialize(img.Cookieheadlookingdown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,93);


(lib.Cookieheadsmileblink = function() {
	this.initialize(img.Cookieheadsmileblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,104);


(lib.Cookieheadsmile = function() {
	this.initialize(img.Cookieheadsmile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,104);


(lib.Cookieheadsurprisedownblink = function() {
	this.initialize(img.Cookieheadsurprisedownblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,93);


(lib.Cookieheadsurprisedown = function() {
	this.initialize(img.Cookieheadsurprisedown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,93);


(lib.cookie = function() {
	this.initialize(img.cookie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,141);


(lib.Cookie_04 = function() {
	this.initialize(img.Cookie_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,264);


(lib.cupboard = function() {
	this.initialize(img.cupboard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,168);


(lib.Elmoarm = function() {
	this.initialize(img.Elmoarm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,33);


(lib.Elmobody2 = function() {
	this.initialize(img.Elmobody2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,108);


(lib.Elmobodyarmless = function() {
	this.initialize(img.Elmobodyarmless);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,104);


(lib.Elmobody = function() {
	this.initialize(img.Elmobody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,108);


(lib.Elmoheadconfusedblink = function() {
	this.initialize(img.Elmoheadconfusedblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,124);


(lib.Elmoheadconfused = function() {
	this.initialize(img.Elmoheadconfused);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,124);


(lib.Elmoheadfrontblink = function() {
	this.initialize(img.Elmoheadfrontblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,124);


(lib.Elmoheadfront = function() {
	this.initialize(img.Elmoheadfront);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,124);


(lib.Elmoheadhappy = function() {
	this.initialize(img.Elmoheadhappy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,126);


(lib.Elmoheadlaugh = function() {
	this.initialize(img.Elmoheadlaugh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,126);


(lib.Elmoheadlookdownblink = function() {
	this.initialize(img.Elmoheadlookdownblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,119);


(lib.Elmoheadlookdown = function() {
	this.initialize(img.Elmoheadlookdown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,119);


(lib.Elmoheadsideblink = function() {
	this.initialize(img.Elmoheadsideblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,134);


(lib.Elmoheadside = function() {
	this.initialize(img.Elmoheadside);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,134);


(lib.Elmoheadsurpriseblink = function() {
	this.initialize(img.Elmoheadsurpriseblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,119);


(lib.Elmoheadsurprise = function() {
	this.initialize(img.Elmoheadsurprise);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,119);


(lib.Elmo_03 = function() {
	this.initialize(img.Elmo_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,214);


(lib.firetruck = function() {
	this.initialize(img.firetruck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,119);


(lib.gradient = function() {
	this.initialize(img.gradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.homebutton = function() {
	this.initialize(img.homebutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,199);


(lib.horse = function() {
	this.initialize(img.horse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,159);


(lib.hotzone = function() {
	this.initialize(img.hotzone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Lilyarmcup = function() {
	this.initialize(img.Lilyarmcup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,38);


(lib.Lilyarmfist = function() {
	this.initialize(img.Lilyarmfist);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,45);


(lib.Lilyarmlimp = function() {
	this.initialize(img.Lilyarmlimp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,91);


(lib.Lilyarmwave = function() {
	this.initialize(img.Lilyarmwave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,45);


(lib.Lilybodyarms = function() {
	this.initialize(img.Lilybodyarms);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,140);


(lib.Lilybody = function() {
	this.initialize(img.Lilybody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,140);


(lib.Lilyheadconfusedblink = function() {
	this.initialize(img.Lilyheadconfusedblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadconfuseddown = function() {
	this.initialize(img.Lilyheadconfuseddown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadconfusedopenmouthed = function() {
	this.initialize(img.Lilyheadconfusedopenmouthed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadconfused = function() {
	this.initialize(img.Lilyheadconfused);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadgrin = function() {
	this.initialize(img.Lilyheadgrin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadlaughblink = function() {
	this.initialize(img.Lilyheadlaughblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadlaughdown = function() {
	this.initialize(img.Lilyheadlaughdown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.LilyheadlaughL = function() {
	this.initialize(img.LilyheadlaughL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.LilyheadlaughR = function() {
	this.initialize(img.LilyheadlaughR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadlaugh = function() {
	this.initialize(img.Lilyheadlaugh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadsmileblink = function() {
	this.initialize(img.Lilyheadsmileblink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadsmiledown = function() {
	this.initialize(img.Lilyheadsmiledown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.LilyheadsmileL = function() {
	this.initialize(img.LilyheadsmileL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.LilyheadsmileR = function() {
	this.initialize(img.LilyheadsmileR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadsmile = function() {
	this.initialize(img.Lilyheadsmile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.Lilyheadteeth = function() {
	this.initialize(img.Lilyheadteeth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.orange = function() {
	this.initialize(img.orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,148);


(lib.ring0 = function() {
	this.initialize(img.ring0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,84);


(lib.ring1 = function() {
	this.initialize(img.ring1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,171);


(lib.ringsbottom = function() {
	this.initialize(img.ringsbottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,61);


(lib.ringsring1 = function() {
	this.initialize(img.ringsring1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,67);


(lib.ringsring2 = function() {
	this.initialize(img.ringsring2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,67);


(lib.ringsring3 = function() {
	this.initialize(img.ringsring3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,67);


(lib.ringsring4 = function() {
	this.initialize(img.ringsring4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,67);


(lib.ringstop = function() {
	this.initialize(img.ringstop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,45);


(lib.rings = function() {
	this.initialize(img.rings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.SelectionBel = function() {
	this.initialize(img.SelectionBel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,310);


(lib.SelectionChamki = function() {
	this.initialize(img.SelectionChamki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,332);


(lib.SelectionCookie = function() {
	this.initialize(img.SelectionCookie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,372);


(lib.SelectionElmo = function() {
	this.initialize(img.SelectionElmo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,312);


(lib.SelectionLily = function() {
	this.initialize(img.SelectionLily);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,301);


(lib.Table = function() {
	this.initialize(img.Table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,281);


(lib.Tween92 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(12.8,-42.9,0.37,0.37,0,-28.5,151.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.7,-42.9,77.8,77.8);


(lib.Tween91ring = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ring1();
	this.instance.setTransform(-32.8,-29.8,0.375,0.375,-0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.8,-30.4,64.7,64.7);


(lib.Tween91firetruck = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(-48.5,-9,0.5,0.5,-25.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.5,-56.4,126.3,101.3);


(lib.Tween91car = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(-48.5,-9,0.5,0.5,-25.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.5,-50.9,116.6,100.3);


(lib.Tween91block = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.block1();
	this.instance.setTransform(-42.2,-14.4,0.35,0.35,-23.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.2,-40.7,85.1,83.7);


(lib.Tween91 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(12.8,-42.9,0.37,0.37,0,-28.5,151.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.7,-42.9,77.8,77.8);


(lib.Tween902 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.LilyheadlaughR();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween90 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.LilyheadlaughL();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween89 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.LilyheadsmileL();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween88ring = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ring1();
	this.instance.setTransform(-67.9,-43.1,0.375,0.375,-0.5);

	this.instance_1 = new lib.Lilyarmwave();
	this.instance_1.setTransform(-35.8,-26.9,1.063,1.063,-0.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.9,-43.7,133.7,64.7);


(lib.Tween88horse = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.horse();
	this.instance.setTransform(-18.6,-56.6,0.459,0.459,35.5);

	this.instance_1 = new lib.Lilyarmwave();
	this.instance_1.setTransform(-35.8,-26.9,1.063,1.063,-0.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-56.6,126.7,101.4);


(lib.Tween88firetruck = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(-49.5,-42.2,0.5,0.5,36);

	this.instance_1 = new lib.Lilyarmwave();
	this.instance_1.setTransform(-35.8,-26.9,1.063,1.063,-0.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.4,-42.2,150.2,113.6);


(lib.Tween88car = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(-49.5,-42.2,0.5,0.5,36);

	this.instance_1 = new lib.Lilyarmwave();
	this.instance_1.setTransform(-35.8,-26.9,1.063,1.063,-0.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.4,-42.2,153.2,110.1);


(lib.Tween88block = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.block1();
	this.instance.setTransform(-81.5,-24,0.35,0.35,-23.7);

	this.instance_1 = new lib.Lilyarmwave();
	this.instance_1.setTransform(-35.8,-26.9,1.063,1.063,-0.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.5,-50.3,147.3,83.7);


(lib.Tween88ball = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(-2.5,-31.9,0.37,0.37,0,-0.5,179.5);

	this.instance_1 = new lib.Lilyarmwave();
	this.instance_1.setTransform(-35.8,-26.9,1.063,1.063,-0.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-31.9,125.7,57.9);


(lib.Tween88 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hotzone();
	this.instance.setTransform(-100,-100);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.Tween873 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadconfused();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween872 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadconfuseddown();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween87 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadconfusedblink();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween86 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadconfusedopenmouthed();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween85 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadconfusedopenmouthed();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween84 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyarmwave();
	this.instance.setTransform(-54.5,-12.2,1.063,1.063,-12.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-34.4,109.1,68.9);


(lib.Tween83 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyarmwave();
	this.instance.setTransform(54.6,-12.2,1.063,1.063,0,12.7,-167.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-34.4,109.1,68.9);


(lib.Tween82new = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadgrin();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween82blink = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadlaughblink();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween82 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadlaughdown();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween812 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilybodyarms();
	this.instance.setTransform(-83,-69.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-69.5,160,140);


(lib.Tween81 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilybody();
	this.instance.setTransform(-75,-69.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-69.5,152,140);


(lib.Tween80 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyarmlimp();
	this.instance.setTransform(-21.5,-45.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-45.5,43,91);


(lib.Tween79 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyarmlimp();
	this.instance.setTransform(21.5,-45.5,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-45.5,43,91);


(lib.Tween78blink = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadsmileblink();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween78 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Lilyheadsmile();
	this.instance.setTransform(-71.5,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-64,143,128);


(lib.Tween77 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(-66.7,-91.2,0.37,0.37,0,0,180);

	this.instance_1 = new lib.Beljoyblink();
	this.instance_1.setTransform(-102,-139.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.1,-139.5,254.1,279);


(lib.Tween76ring = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ring1();
	this.instance.setTransform(-130.8,-91.2,0.375,0.375);

	this.instance_1 = new lib.Beljoyblink();
	this.instance_1.setTransform(-102,-139.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-130.8,-139.5,260.9,279);


(lib.Tween76horse = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.horse();
	this.instance.setTransform(-149.5,-100.9,0.5,0.5,-18.7);

	this.instance_1 = new lib.Beljoyblink();
	this.instance_1.setTransform(-102,-139.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149.5,-139.5,279.5,279);


(lib.Tween76firetruck = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(-53.7,-64.5,0.401,0.401,129.6);

	this.instance_1 = new lib.Beljoyblink();
	this.instance_1.setTransform(-102,-139.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147.4,-139.5,277.4,279);


(lib.Tween76car = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(-53.7,-64.5,0.401,0.401,129.6);

	this.instance_1 = new lib.Beljoyblink();
	this.instance_1.setTransform(-102,-139.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.8,-139.5,273.9,279);


(lib.Tween76block = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.block1();
	this.instance.setTransform(-100.5,-130.9,0.4,0.4,37.2);

	this.instance_1 = new lib.Beljoyblink();
	this.instance_1.setTransform(-102,-139.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.9,-139.5,273.9,279);


(lib.Tween76 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(-66.7,-91.2,0.37,0.37,0,0,180);

	this.instance_1 = new lib.Beljoyblink();
	this.instance_1.setTransform(-102,-139.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.1,-139.5,254.1,279);


(lib.Tween75ring = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ring1();
	this.instance.setTransform(-68.4,-42.8,0.375,0.375);

	this.instance_1 = new lib.Belarmwave();
	this.instance_1.setTransform(-30.3,-22.1,1,1,8.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.4,-42.8,136,84.7);


(lib.Tween75horse = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.horse();
	this.instance.setTransform(-95.4,-37.9,0.5,0.5,-33.7);

	this.instance_1 = new lib.Belarmwave();
	this.instance_1.setTransform(-30.3,-22.1,1,1,8.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.4,-81.7,163,123.7);


(lib.Tween75firetruck = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(4.5,-34.2,0.401,0.401,105.4);

	this.instance_1 = new lib.Belarmwave();
	this.instance_1.setTransform(-30.3,-22.1,1,1,8.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.1,-46.8,132.7,98.8);


(lib.Tween75car = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(4.5,-34.2,0.401,0.401,105.4);

	this.instance_1 = new lib.Belarmwave();
	this.instance_1.setTransform(-30.3,-22.1,1,1,8.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.3,-47.9,133.9,89.8);


(lib.Tween75block = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.block1();
	this.instance.setTransform(-69.4,-49.1,0.35,0.35);

	this.instance_1 = new lib.Belarmwave();
	this.instance_1.setTransform(-30.3,-22.1,1,1,8.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.4,-49.1,137,91.1);


(lib.Tween75 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(-4.3,-41.9,0.37,0.37,0,0,180);

	this.instance_1 = new lib.Belarmwave();
	this.instance_1.setTransform(-30.3,-22.1,1,1,8.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.7,-41.9,129.3,83.9);


(lib.Tween74blink = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belheadsideblink();
	this.instance.setTransform(-106,-68.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-68.5,212,137);


(lib.Tween74 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belheadside();
	this.instance.setTransform(-106,-68.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-68.5,212,137);


(lib.Tween73 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belarmlean();
	this.instance.setTransform(-44,-41.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44,-41.3,75,72);


(lib.Tween72 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belarmnormal2();
	this.instance.setTransform(-31,-44);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31,-44,62,88);


(lib.Tween71lookup = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belconfused();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween71blink = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belconfusedblink();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween71 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belconfuseddown();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween70 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belarmfist();
	this.instance.setTransform(-41.5,-20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-20,83,40);


(lib.Tween69blink = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belheadlaughblink();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween69 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belheadlaugh();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween68blink = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belheaddownlaughblink();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween68 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belheaddownlaugh();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween67 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belheaddownsmileblink();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween66 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belbody();
	this.instance.setTransform(-56,-72.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-72.5,112,145);


(lib.Tween65 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belarmnormal();
	this.instance.setTransform(-35,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35,-40,70,80);


(lib.Tween64 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belarmnormal();
	this.instance.setTransform(35,-40,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35,-40,70,80);


(lib.Tween63blink = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belheadsmileblink();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween63 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belheadsmile();
	this.instance.setTransform(-117,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117,-66.5,234,133);


(lib.Tween62 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookiebody1();
	this.instance.setTransform(-70.6,-101,1,1,4.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.9,-101,169.9,202.1);


(lib.Tween61 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkibodyhandsonhips();
	this.instance.setTransform(-60.5,-63.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.5,-63.5,121,127);


(lib.Tween60copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadconfusedblink();
	this.instance.setTransform(-86,-58);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86,-58,195,120);


(lib.Tween60 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadconfused();
	this.instance.setTransform(-86,-58);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86,-58,195,120);


(lib.Tween58 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadconfusedside();
	this.instance.setTransform(-95.5,-61);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.5,-61,191,122);


(lib.Tween57 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadconfuseddownblink();
	this.instance.setTransform(-97.5,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-60,195,120);


(lib.Tween56 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkibody();
	this.instance.setTransform(-51,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-63,102,126);


(lib.Tween55 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmstraight();
	this.instance.setTransform(-25,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-31,50,62);


(lib.Tween54 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmstraight();
	this.instance.setTransform(25,-31,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-31,50,62);


(lib.Tween47 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadconfuseddown();
	this.instance.setTransform(-97.5,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-60,195,120);


(lib.Tween46 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmsclap();
	this.instance.setTransform(-39,-17.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-17.5,78,35);


(lib.Tween45 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkibody();
	this.instance.setTransform(-51,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-63,102,126);


(lib.Tween44 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadlookingdown();
	this.instance.setTransform(-97.5,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-60,195,120);


(lib.Tween43 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmstraight();
	this.instance.setTransform(-25,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-31,50,62);


(lib.Tween42 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmstraight();
	this.instance.setTransform(25,-31,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-31,50,62);


(lib.Tween41 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkibody();
	this.instance.setTransform(-51,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-63,102,126);


(lib.Tween40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmstraight();
	this.instance.setTransform(-25,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-31,50,62);


(lib.Tween39 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmstraight();
	this.instance.setTransform(25,-31,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-31,50,62);


(lib.Tween38ring = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ring1();
	this.instance.setTransform(-62.4,-48.3,0.336,0.336);

	this.instance_1 = new lib.Chamkiarmwave();
	this.instance_1.setTransform(-36,-22.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.4,-48.3,98.4,70.9);


(lib.Tween38block = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.block1();
	this.instance.setTransform(-55.6,-71,0.343,0.343,21);

	this.instance_1 = new lib.Chamkiarmwave();
	this.instance_1.setTransform(-36,-22.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.6,-71,113.6,93.6);


(lib.Tween38ball = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(-68.8,-51.5,0.37,0.37);

	this.instance_1 = new lib.Chamkiarmwave();
	this.instance_1.setTransform(-36,-22.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.8,-51.5,104.9,74.1);


(lib.Tween38 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmwave();
	this.instance.setTransform(-36,-22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36,-22.5,72,45);


(lib.Tween37 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkibody();
	this.instance.setTransform(-51,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-63,102,126);


(lib.Tween36 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmstraight();
	this.instance.setTransform(-25,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-31,50,62);


(lib.Tween35 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiarmstraight();
	this.instance.setTransform(25,-31,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-31,50,62);


(lib.Tween34copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadlaughblink();
	this.instance.setTransform(-97.5,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-60,195,120);


(lib.Tween34 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadlaugh();
	this.instance.setTransform(-97.5,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-60,195,120);


(lib.Tween33copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadsmileblink();
	this.instance.setTransform(-97.5,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-60,195,120);


(lib.Tween33 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadsmile();
	this.instance.setTransform(-97.5,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-60,195,120);


(lib.Tween32 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Chamkiheadsmile();
	this.instance.setTransform(-97.5,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-60,195,120);


(lib.Tween30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookiearmthinking();
	this.instance.setTransform(-48,-29.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-29.5,96,59);


(lib.Tween29 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookiearmthinking();
	this.instance.setTransform(-48,-29.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-29.5,96,59);


(lib.Tween28 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookiebody1();
	this.instance.setTransform(-70.6,-101,1,1,4.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.9,-101,169.9,202.1);


(lib.Tween27copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadconfusedblink();
	this.instance.setTransform(-64.7,-55,1,1,-1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.7,-58.6,128,107.6);


(lib.Tween27 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadconfused();
	this.instance.setTransform(-64.7,-55,1,1,-1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.7,-58.6,128,107.6);


(lib.Tween26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookiebody1();
	this.instance.setTransform(-78,-95.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-95.5,156,191);


(lib.Tween25copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadsurprisedownblink();
	this.instance.setTransform(-63.8,-44.6,1,1,-1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.8,-48.3,127.7,96.6);


(lib.Tween25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadsurprisedown();
	this.instance.setTransform(-63.8,-44.6,1,1,-1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.8,-48.3,127.7,96.6);


(lib.Tween24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadlookingdownblink();
	this.instance.setTransform(-63.8,-44.6,1,1,-1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.8,-48.3,127.7,96.6);


(lib.Tween23 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookiearm();
	this.instance.setTransform(45.5,-56,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-56,91,112);


(lib.Tween22ring = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ring1();
	this.instance.setTransform(-62.1,12.1,0.41,0.41);

	this.instance_1 = new lib.Cookiearm();
	this.instance_1.setTransform(-45.5,-56);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.1,-56,107.7,138.2);


(lib.Tween22horse = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.horse();
	this.instance.setTransform(-19,116,0.5,0.5,-149.7);

	this.instance_1 = new lib.Cookiearm();
	this.instance_1.setTransform(-45.5,-56);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.2,-56,132.8,172);


(lib.Tween22firetruck = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(28.7,88.8,0.5,0.5,180);

	this.instance_1 = new lib.Cookiearm();
	this.instance_1.setTransform(-45.5,-56);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.8,-56,128.4,144.8);


(lib.Tween22car = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(28.7,88.8,0.5,0.5,180);

	this.instance_1 = new lib.Cookiearm();
	this.instance_1.setTransform(-45.5,-56);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.8,-56,115.4,144.8);


(lib.Tween22block = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.block1();
	this.instance.setTransform(18.4,59.4,0.392,0.392,148);

	this.instance_1 = new lib.Cookiearm();
	this.instance_1.setTransform(-45.5,-56);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.8,-56,126.4,154.3);


(lib.Tween22ball = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(-55.7,15.8,0.398,0.398);

	this.instance_1 = new lib.Cookiearm();
	this.instance_1.setTransform(-45.5,-56);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.7,-56,101.3,133.5);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookiearm();
	this.instance.setTransform(-45.5,-56);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-56,91,112);


(lib.Tween21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadlookingdown();
	this.instance.setTransform(-63.8,-44.6,1,1,-1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.8,-48.3,127.7,96.6);


(lib.Tween20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadgrinblink();
	this.instance.setTransform(-49.7,-64.3,1,1,12.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,-64.3,144.6,128.7);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadgrin();
	this.instance.setTransform(-64,-50.1,1,1,-1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-53.8,128,107.6);


(lib.Tween18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadsmile();
	this.instance.setTransform(-64,-50.1,1,1,-1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-53.8,128,107.6);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookiearm();
	this.instance.setTransform(113,-80.5,1,1,0,0,180);

	this.instance_1 = new lib.Cookiearm();
	this.instance_1.setTransform(-113,-77.3);

	this.instance_2 = new lib.Cookiebody1();
	this.instance_2.setTransform(-77.1,-95.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113,-95.5,226,191);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Cookieheadsmileblink();
	this.instance.setTransform(-64,-50.1,1,1,-1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-53.8,128,107.6);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadconfused();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,120.1,102.7);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadconfusedblink();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,120.1,102.7);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmobody();
	this.instance.setTransform(-36.4,-39.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.4,-39.3,73.7,89.5);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadlookdown();
	this.instance.setTransform(-60,-49.2,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-49.2,120.1,98.6);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadsurpriseblink();
	this.instance.setTransform(-60,-49.2,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-49.2,120.1,98.6);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadsurprise();
	this.instance.setTransform(-60,-49.2,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-49.2,120.1,98.6);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadfrontblink();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,120.1,102.7);


(lib.Tween6ring = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ring1();
	this.instance.setTransform(-66,-53.8,0.375,0.375);

	this.instance_1 = new lib.Elmoarm();
	this.instance_1.setTransform(-42,-16.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66,-53.8,108,70.4);


(lib.Tween6horse = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.horse();
	this.instance.setTransform(-91.5,-62.1,0.536,0.536,-13.2);

	this.instance_1 = new lib.Elmoarm();
	this.instance_1.setTransform(-42,-16.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.5,-81.5,133.6,102.5);


(lib.Tween6firetruck = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(-105.2,-46.7,0.5,0.5,-11.5);

	this.instance_1 = new lib.Elmoarm();
	this.instance_1.setTransform(-42,-16.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.2,-68.8,147.2,85.4);


(lib.Tween6car = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(-105.2,-46.7,0.5,0.5,-11.5);

	this.instance_1 = new lib.Elmoarm();
	this.instance_1.setTransform(-42,-16.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.2,-66.3,147.2,82.8);


(lib.Tween6block = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.block1();
	this.instance.setTransform(-79.6,-52.7,0.362,0.362);

	this.instance_1 = new lib.Elmoarm();
	this.instance_1.setTransform(-42,-16.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.6,-52.7,121.6,69.3);


(lib.Tween6ball = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(-65.9,-54.7,0.38,0.38);

	this.instance_1 = new lib.Elmoarm();
	this.instance_1.setTransform(-42,-16.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.9,-54.7,107.9,71.2);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoarm();
	this.instance.setTransform(-42,-16.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-16.5,84,33);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadfront();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,120.1,102.7);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadfront();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,120.1,102.7);


(lib.Tween3copy4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadhappy();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,121.8,104.4);


(lib.Tween3copy3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadside();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,122.6,111);


(lib.Tween3copy2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadsideblink();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,122.6,111);


(lib.Tween3copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadfront();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,120.1,102.7);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadfrontblink();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,120.1,102.7);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Elmoheadfrontblink();
	this.instance.setTransform(-60,-51.3,0.828,0.828);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-51.3,120.1,102.7);


(lib.Sounds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Welcome:1,"Pick something":2,"Pick something prompt":3,"Friends are here":4,"Share equally reminder":5,"Click toy to divide":6,"Distribute pieces":7,"Distribute prompt":8,"Unfair share":9,"Well done":10,"Pick another toy":11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_01_Welcome");
	}
	this.frame_2 = function() {
		playSound("Picksomethingtoshare");
	}
	this.frame_3 = function() {
		playSound("Picksomethingprompt");
	}
	this.frame_4 = function() {
		playSound("Yourfriendsareherepicksomethingtoshare");
	}
	this.frame_5 = function() {
		playSound("Sharethesameamount");
	}
	this.frame_6 = function() {
		playSound("Clicktoytodivide");
	}
	this.frame_7 = function() {
		playSound("Distributetoys");
	}
	this.frame_8 = function() {
		playSound("Moveapiecetoallyourfriends");
	}
	this.frame_9 = function() {
		playSound("Sharethesameamount");
	}
	this.frame_10 = function() {
		playSound("Welldoneplayagainquery");
	}
	this.frame_11 = function() {
		playSound("Fantasticletspickanothertoy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// Layer 1
	this.text = new cjs.Text("Sounds", "48px 'Segoe UI Semibold'", "#CC3300");
	this.text.textAlign = "center";
	this.text.lineHeight = 50;
	this.text.lineWidth = 161;
	this.text.setTransform(-2,-33.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,0,0.996)").s().dr(-104.5,-38,209,76);
	this.shape.setTransform(1.5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-40,209,76);


(lib.Ring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.ring0();
	this.instance.setTransform(-38.6,-16.6,0.542,0.542);

	this.instance_1 = new lib.ring0();
	this.instance_1.setTransform(-38.6,-16.6,0.542,0.542);

	this.instance_2 = new lib.ring0();
	this.instance_2.setTransform(-38.6,-16.6,0.542,0.542);

	this.instance_3 = new lib.ring0();
	this.instance_3.setTransform(-38.6,-16.6,0.542,0.542);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-16.6}}]}).to({state:[{t:this.instance_1,p:{y:-16.6}},{t:this.instance,p:{y:-37.4}}]},1).to({state:[{t:this.instance_2,p:{y:-16.6}},{t:this.instance_1,p:{y:-37.4}},{t:this.instance,p:{y:-57.2}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{y:-37.4}},{t:this.instance_1,p:{y:-57.2}},{t:this.instance,p:{y:-78.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-16.6,75.9,45.6);


(lib.Horse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.horse();
	this.instance.setTransform(-36.6,-42.6,0.5,0.5,0.3);

	this.instance_1 = new lib.horse();
	this.instance_1.setTransform(-36.6,-42.6,0.5,0.5,0.3);

	this.instance_2 = new lib.horse();
	this.instance_2.setTransform(-36.6,-42.6,0.5,0.5,0.3);

	this.instance_3 = new lib.horse();
	this.instance_3.setTransform(-36.9,-45.9,0.5,0.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-36.6,y:-42.6}}]}).to({state:[{t:this.instance_1,p:{x:-36.6,y:-42.6}},{t:this.instance,p:{x:-14,y:-35.7}}]},1).to({state:[{t:this.instance_2,p:{x:-36.6,y:-42.6}},{t:this.instance_1,p:{x:-14,y:-35.7}},{t:this.instance,p:{x:-28.5,y:-30.5}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-56.6,y:-34.7}},{t:this.instance_1,p:{x:-14,y:-35.7}},{t:this.instance,p:{x:-28.5,y:-30.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-42.6,79.4,79.9);


(lib.Firetruck = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(-34.5,-23.9,0.371,0.371);

	this.instance_1 = new lib.firetruck();
	this.instance_1.setTransform(-34.5,-23.9,0.371,0.371);

	this.instance_2 = new lib.firetruck();
	this.instance_2.setTransform(-24.2,-23.9,0.371,0.371);

	this.instance_3 = new lib.firetruck();
	this.instance_3.setTransform(-17.5,-24.6,0.371,0.371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-34.5,y:-23.9}}]}).to({state:[{t:this.instance_1,p:{x:-34.5}},{t:this.instance,p:{x:-44.3,y:-22.1}}]},1).to({state:[{t:this.instance_2,p:{x:-24.2}},{t:this.instance_1,p:{x:-34.5}},{t:this.instance,p:{x:-44.3,y:-22.1}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-27.8}},{t:this.instance_1,p:{x:-38.1}},{t:this.instance,p:{x:-47.9,y:-22.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-23.9,82.8,44.2);


(lib.Car = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(-34.5,-23.9,0.371,0.371);

	this.instance_1 = new lib.car();
	this.instance_1.setTransform(-34.5,-23.9,0.371,0.371);

	this.instance_2 = new lib.car();
	this.instance_2.setTransform(-24.2,-23.9,0.371,0.371);

	this.instance_3 = new lib.car();
	this.instance_3.setTransform(-17.5,-24.6,0.371,0.371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-34.5,y:-23.9}}]}).to({state:[{t:this.instance_1,p:{x:-34.5}},{t:this.instance,p:{x:-44.3,y:-22.1}}]},1).to({state:[{t:this.instance_2,p:{x:-24.2}},{t:this.instance_1,p:{x:-34.5}},{t:this.instance,p:{x:-44.3,y:-22.1}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-27.8}},{t:this.instance_1,p:{x:-38.1}},{t:this.instance,p:{x:-47.9,y:-22.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-23.9,73.2,47.9);


(lib.Block = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.block1();
	this.instance.setTransform(-25.4,-24.4,0.273,0.273);

	this.instance_1 = new lib.block1();
	this.instance_1.setTransform(-25.4,-24.4,0.273,0.273);

	this.instance_2 = new lib.block1();
	this.instance_2.setTransform(-25.4,-24.4,0.273,0.273);

	this.instance_3 = new lib.block1();
	this.instance_3.setTransform(-25.4,-24.4,0.273,0.273);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-25.4,y:-24.4}}]}).to({state:[{t:this.instance_1,p:{x:-25.4,y:-24.4}},{t:this.instance,p:{x:-56.8,y:-17.4}}]},1).to({state:[{t:this.instance_2,p:{x:-25.4,y:-24.4}},{t:this.instance_1,p:{x:-56.8,y:-17.4}},{t:this.instance,p:{x:0,y:-14.9}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-56.8,y:-17.4}},{t:this.instance_1,p:{x:0,y:-14.9}},{t:this.instance,p:{x:-28.3,y:-7.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.4,-24.4,51,48.8);


(lib.Ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(-28.9,-28.9,0.339,0.339);

	this.instance_1 = new lib.ball1();
	this.instance_1.setTransform(7.1,-36.9,0.339,0.339);

	this.instance_2 = new lib.ball1();
	this.instance_2.setTransform(7.1,-36.9,0.339,0.339);

	this.instance_3 = new lib.ball1();
	this.instance_3.setTransform(7.1,-36.9,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:7.1,y:-36.9}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{x:7.1}},{t:this.instance_1,p:{x:-66.9,y:-36.9}},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-66.9}},{t:this.instance_1,p:{x:-28.9,y:-72.9}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-28.9,52.5,52.5);


(lib.Button_Rings = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rings();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.Button_ref = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660066").ss(3,1,1).p("AuftZIc/AAQDIAAAADIIAAUjQAADIjIAAI8/AAQjIAAAAjIIAA0jQAAjIDIAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666699").s().p("AueNaQjIAAAAjIIAA0jQAAjIDIAAIc9AAQDIAAAADIIAAUjQAADIjIAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.3,-87.3,228.6,174.7);


(lib.Button_Orange = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.orange();
	this.instance.setTransform(-67,-74);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67,-74,134,148);


(lib.Button_Horse = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.horse();
	this.instance.setTransform(0.1,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,158.1,159.1);


(lib.Button_Firetruck = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(-26,10);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,10,223,119);


(lib.Button_Cookie = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cookie();
	this.instance.setTransform(-70.5,-70.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,-70.5,141,141);


(lib.Button_Car = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197,129);


(lib.Button_Cake = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cake();
	this.instance.setTransform(-87.5,-72.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-72.5,175,145);


(lib.Button_Book = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.book();
	this.instance.setTransform(-95.5,-72);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.5,-72,191,144);


(lib.Button_Blocks = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.blocks();
	this.instance.setTransform(-83.5,-80.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.5,-80.5,167,161);


(lib.Button_Ball = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball();
	this.instance.setTransform(-85.5,-85.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.5,-85.5,171,171);


(lib.Button_back = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.homebutton();
	this.instance.setTransform(-143,-99.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143,-99.5,286,199);


(lib.Button_arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AjWDZIDajaIjVjXIBnhnIFCFCIk8E9g");
	this.shape.setTransform(3.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFCC00").ss(10,1,1).p("AJbAAQAAD6ixCwQixCxj5AAQj5AAixixQiwiwAAj6QAAj4CwiyQCxiwD5AAQD5AACxCwQCxCyAAD4g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AmpGqQixiwAAj6QAAj4CxixQCwixD5AAQD5AACxCxQCxCxAAD4QAAD6ixCwQixCxj5AAQj5AAiwixg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.3,-65.3,130.7,130.7);


(lib.Tween91horse = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Horse();
	this.instance.setTransform(-2.5,-5.8,1,1,-7.5,0,0,2.6,-2.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47,-50.5,89.2,89.6);


(lib.Shareable_Rings = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{whole2:0,whole3:1,whole4:2,sliced2:3,sliced3:4,sliced4:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.ringstop();
	this.instance.setTransform(20,-53.5,0.841,0.841);

	this.instance_1 = new lib.ringsring2();
	this.instance_1.setTransform(-18.1,-32.2,0.718,0.718);

	this.instance_2 = new lib.ringsring1();
	this.instance_2.setTransform(-20.4,-10.4,0.751,0.751);

	this.instance_3 = new lib.ringsbottom();
	this.instance_3.setTransform(-29.7,11.4,0.734,0.734);

	this.instance_4 = new lib.ringsring3();
	this.instance_4.setTransform(-15.5,-53.7,0.68,0.68);

	this.instance_5 = new lib.ringsring4();
	this.instance_5.setTransform(-13.2,-75.8,0.65,0.65);

	this.Piece3 = new lib.Ring();
	this.Piece3.setTransform(-52.2,258.2,1.262,1.262);

	this.Piece4 = new lib.Ring();
	this.Piece4.setTransform(78.7,258.2,1.262,1.262);

	this.Piece2 = new lib.Ring();
	this.Piece2.setTransform(139.9,14.5,1.262,1.262);

	this.Piece1 = new lib.Ring();
	this.Piece1.setTransform(-138,14.5,1.262,1.262);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{y:-53.5}}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_4},{t:this.instance,p:{y:-73}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_4},{t:this.instance_5},{t:this.instance,p:{y:-97.7}}]},1).to({state:[{t:this.Piece1,p:{x:-138}},{t:this.Piece2,p:{x:139.9}},{t:this.Piece4,p:{x:78.7,y:258.2}},{t:this.Piece3,p:{x:-52.2,y:258.2}}]},1).to({state:[{t:this.Piece1,p:{x:-167.3}},{t:this.Piece2,p:{x:195.6}},{t:this.Piece4,p:{x:13.3,y:14.5}},{t:this.Piece3,p:{x:13.3,y:244}}]},1).to({state:[{t:this.Piece1,p:{x:-185.2}},{t:this.Piece2,p:{x:207.5}},{t:this.Piece4,p:{x:76.6,y:14.5}},{t:this.Piece3,p:{x:-54.3,y:14.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-53.5,124.7,109.7);


(lib.Shareable_Horses = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"whole2":0,"whole3":1,"whole4":2,"sliced2":3,"sliced3":4,"sliced4":5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.horse();
	this.instance.setTransform(48.9,-17.4,0.5,0.5,0,2.5,-177.5);

	this.instance_1 = new lib.horse();
	this.instance_1.setTransform(21.7,-26.7,0.5,0.5,10);

	this.instance_2 = new lib.horse();
	this.instance_2.setTransform(-45.9,-19.3,0.5,0.5,10);

	this.instance_3 = new lib.horse();
	this.instance_3.setTransform(-69.1,-26.7,0.5,0.5);

	this.Piece4 = new lib.Horse();
	this.Piece4.setTransform(-89.6,219.8,1,1,0,-6.5,173.5);

	this.Piece3 = new lib.Horse();
	this.Piece3.setTransform(137.4,219.8,1,1,6.5);

	this.Piece1 = new lib.Horse();
	this.Piece1.setTransform(-100.1,5.8,1,1,0,-6.5,173.5);

	this.Piece2 = new lib.Horse();
	this.Piece2.setTransform(127.7,5.8,1,1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:10,skewX:0,skewY:0,x:21.7,y:-26.7}},{t:this.instance,p:{skewX:2.5,skewY:-177.5,x:48.9,y:-17.4}}]}).to({state:[{t:this.instance_2,p:{rotation:10,x:-45.9,y:-19.3}},{t:this.instance_1,p:{rotation:0,skewX:-11.3,skewY:168.7,x:98.6,y:-20.1}},{t:this.instance,p:{skewX:-13.7,skewY:166.3,x:50.5,y:-83.1}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{rotation:-86.7,x:31.7,y:57.5}},{t:this.instance_1,p:{rotation:0,skewX:-37,skewY:143,x:36.5,y:-35.3}},{t:this.instance,p:{skewX:37.3,skewY:-142.8,x:84.3,y:-44.1}}]},1).to({state:[{t:this.Piece2,p:{x:127.7,y:5.8}},{t:this.Piece1,p:{x:-100.1,y:5.8}},{t:this.Piece3,p:{rotation:6.5,skewX:0,skewY:0,x:137.4,y:219.8}},{t:this.Piece4,p:{rotation:0,skewX:-6.5,skewY:173.5,x:-89.6,y:219.8}}]},1).to({state:[{t:this.Piece2,p:{x:19.6,y:1.6}},{t:this.Piece1,p:{x:-154.4,y:1.6}},{t:this.Piece3,p:{rotation:0,skewX:-6.5,skewY:173.5,x:194.5,y:1.6}},{t:this.Piece4,p:{rotation:6.5,skewX:0,skewY:0,x:11,y:204.1}}]},1).to({state:[{t:this.Piece2,p:{x:103.7,y:5.8}},{t:this.Piece1,p:{x:254.6,y:5.8}},{t:this.Piece3,p:{rotation:0,skewX:-6.5,skewY:173.5,x:-52.1,y:5.8}},{t:this.Piece4,p:{rotation:6.5,skewX:0,skewY:0,x:-202.1,y:5.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-26.7,133,92);


(lib.Shareable_Firetrucks = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"whole2":0,"whole3":1,"whole4":2,"sliced2":3,"sliced3":4,"sliced4":5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(-83.5,5.7,0.5,0.5);

	this.instance_1 = new lib.firetruck();
	this.instance_1.setTransform(-33.6,-4.6,0.5,0.5);

	this.instance_2 = new lib.firetruck();
	this.instance_2.setTransform(-28.2,-13,0.5,0.5);

	this.instance_3 = new lib.firetruck();
	this.instance_3.setTransform(-11.2,-16.9,0.5,0.5);

	this.Piece4 = new lib.Firetruck();
	this.Piece4.setTransform(112.8,234.9,1.5,1.5);

	this.Piece3 = new lib.Firetruck();
	this.Piece3.setTransform(-91.9,234.9,1.5,1.5);

	this.Piece2 = new lib.Firetruck();
	this.Piece2.setTransform(112.8,26.1,1.5,1.5);

	this.Piece1 = new lib.Firetruck();
	this.Piece1.setTransform(-91.9,26.1,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:-33.6,y:-4.6}},{t:this.instance,p:{x:-83.5,y:5.7}}]}).to({state:[{t:this.instance_2,p:{x:-28.2,y:-13}},{t:this.instance_1,p:{x:-59.6,y:-4.6}},{t:this.instance,p:{x:-94,y:5.7}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-38.7,y:-8.8}},{t:this.instance_1,p:{x:-67.1,y:0.7}},{t:this.instance,p:{x:-97.4,y:7.4}}]},1).to({state:[{t:this.Piece1,p:{x:-91.9}},{t:this.Piece2,p:{x:112.8}},{t:this.Piece3,p:{x:-91.9,y:234.9}},{t:this.Piece4,p:{x:112.8,y:234.9}}]},1).to({state:[{t:this.Piece1,p:{x:-196.7}},{t:this.Piece2,p:{x:7.9}},{t:this.Piece3,p:{x:222.5,y:26.1}},{t:this.Piece4,p:{x:7.9,y:231.8}}]},1).to({state:[{t:this.Piece1,p:{x:-217.7}},{t:this.Piece2,p:{x:-73}},{t:this.Piece3,p:{x:77.1,y:26.1}},{t:this.Piece4,p:{x:232.1,y:26.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-4.6,161.5,69.8);


(lib.Shareable_Cars = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"whole2":0,"whole3":1,"whole4":2,"sliced2":3,"sliced3":4,"sliced4":5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(-83.5,5.7,0.5,0.5);

	this.instance_1 = new lib.car();
	this.instance_1.setTransform(-33.6,-4.6,0.5,0.5);

	this.instance_2 = new lib.car();
	this.instance_2.setTransform(-28.2,-13,0.5,0.5);

	this.instance_3 = new lib.car();
	this.instance_3.setTransform(-11.2,-16.9,0.5,0.5);

	this.Piece4 = new lib.Car();
	this.Piece4.setTransform(112.8,234.9,1.5,1.5);

	this.Piece3 = new lib.Car();
	this.Piece3.setTransform(-91.9,234.9,1.5,1.5);

	this.Piece2 = new lib.Car();
	this.Piece2.setTransform(112.8,26.1,1.5,1.5);

	this.Piece1 = new lib.Car();
	this.Piece1.setTransform(-91.9,26.1,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:-33.6,y:-4.6}},{t:this.instance,p:{x:-83.5,y:5.7}}]}).to({state:[{t:this.instance_2,p:{x:-28.2,y:-13}},{t:this.instance_1,p:{x:-59.6,y:-4.6}},{t:this.instance,p:{x:-94,y:5.7}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-38.7,y:-8.8}},{t:this.instance_1,p:{x:-67.1,y:0.7}},{t:this.instance,p:{x:-97.4,y:7.4}}]},1).to({state:[{t:this.Piece1,p:{x:-91.9}},{t:this.Piece2,p:{x:112.8}},{t:this.Piece3,p:{x:-91.9,y:234.9}},{t:this.Piece4,p:{x:112.8,y:234.9}}]},1).to({state:[{t:this.Piece1,p:{x:-196.7}},{t:this.Piece2,p:{x:7.9}},{t:this.Piece3,p:{x:222.5,y:26.1}},{t:this.Piece4,p:{x:7.9,y:231.8}}]},1).to({state:[{t:this.Piece1,p:{x:-217.7}},{t:this.Piece2,p:{x:-73}},{t:this.Piece3,p:{x:77.1,y:26.1}},{t:this.Piece4,p:{x:232.1,y:26.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-4.6,148.5,74.8);


(lib.Shareable_Blocks = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"whole2":0,"whole3":1,"whole4":2,"sliced2":3,"sliced3":4,"sliced4":5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.block1();
	this.instance.setTransform(-13.4,-55.4,0.409,0.409);

	this.instance_1 = new lib.block1();
	this.instance_1.setTransform(-30.1,-3,0.409,0.409);

	this.instance_2 = new lib.block1();
	this.instance_2.setTransform(-62.6,-3,0.409,0.409);

	this.instance_3 = new lib.block1();
	this.instance_3.setTransform(-62.6,-3,0.409,0.409);

	this.Piece3 = new lib.Block();
	this.Piece3.setTransform(34.3,197.1);

	this.Piece4 = new lib.Block();
	this.Piece4.setTransform(183.9,197.1);

	this.Piece1 = new lib.Block();
	this.Piece1.setTransform(-81.4,24.6,1.5,1.5);

	this.Piece2 = new lib.Block();
	this.Piece2.setTransform(88,24.6,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:-30.1,y:-3}},{t:this.instance,p:{x:-13.4,y:-55.4}}]}).to({state:[{t:this.instance_2,p:{x:-62.6}},{t:this.instance_1,p:{x:8,y:-3}},{t:this.instance,p:{x:-45.9,y:-55.4}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:8}},{t:this.instance_1,p:{x:-45.9,y:-55.4}},{t:this.instance,p:{x:-31.6,y:-106}}]},1).to({state:[{t:this.Piece2,p:{regX:0,x:88,y:24.6}},{t:this.Piece1,p:{x:-81.4,y:24.6}},{t:this.Piece4,p:{regX:0,regY:0,x:183.9,y:197.1,scaleX:1,scaleY:1}},{t:this.Piece3,p:{scaleX:1,scaleY:1,x:34.3,y:197.1}}]},1).to({state:[{t:this.Piece2,p:{regX:0.1,x:0.3,y:23.7}},{t:this.Piece1,p:{x:-194.2,y:23.7}},{t:this.Piece4,p:{regX:35.3,regY:39,x:199.9,y:243.9,scaleX:1,scaleY:1}},{t:this.Piece3,p:{scaleX:1.5,scaleY:1.5,x:203.1,y:23.7}}]},1).to({state:[{t:this.Piece2,p:{regX:0,x:-69.9,y:21.7}},{t:this.Piece1,p:{x:-200.2,y:21.7}},{t:this.Piece4,p:{regX:0,regY:0,x:197.1,y:21.7,scaleX:1.5,scaleY:1.5}},{t:this.Piece3,p:{scaleX:1.5,scaleY:1.5,x:66.8,y:21.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-55.4,93.2,125.6);


(lib.Shareable_Balls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"whole2":0,"whole3":1,"whole4":2,"sliced2":3,"sliced3":4,"sliced4":5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.ball1();
	this.instance.setTransform(28.8,-10.1,0.338,0.338,30);

	this.instance_1 = new lib.ball1();
	this.instance_1.setTransform(-29.6,-7.5,0.339,0.339);

	this.instance_2 = new lib.ball1();
	this.instance_2.setTransform(-59.4,12.7,0.339,0.339,-32.7);

	this.instance_3 = new lib.ball1();
	this.instance_3.setTransform(-48.3,-7.5,0.339,0.339);

	this.Piece3 = new lib.Ball();
	this.Piece3.setTransform(-51.8,197);

	this.Piece4 = new lib.Ball();
	this.Piece4.setTransform(52,197);

	this.Piece2 = new lib.Ball();
	this.Piece2.setTransform(100.5,3.9,1,1,19.2);

	this.Piece1 = new lib.Ball();
	this.Piece1.setTransform(-119.8,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:0,x:-29.6,y:-7.5,scaleX:0.339,scaleY:0.339}},{t:this.instance,p:{scaleX:0.338,scaleY:0.338,rotation:30,x:28.8,y:-10.1}}]}).to({state:[{t:this.instance_2,p:{rotation:-32.7,x:-59.4,y:12.7}},{t:this.instance_1,p:{rotation:17.7,x:44.4,y:-14.9,scaleX:0.339,scaleY:0.339}},{t:this.instance,p:{scaleX:0.339,scaleY:0.339,rotation:0,x:-8.3,y:0.5}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{rotation:-25.2,x:24.6,y:7.6}},{t:this.instance_1,p:{rotation:33.2,x:12.2,y:-53.6,scaleX:0.338,scaleY:0.338}},{t:this.instance,p:{scaleX:0.338,scaleY:0.338,rotation:-45,x:-20.3,y:29.4}}]},1).to({state:[{t:this.Piece1,p:{rotation:0,x:-119.8}},{t:this.Piece2,p:{rotation:19.2,x:100.5}},{t:this.Piece4,p:{x:52,y:197}},{t:this.Piece3,p:{x:-51.8,y:197,rotation:0}}]},1).to({state:[{t:this.Piece1,p:{rotation:-13.4,x:-143}},{t:this.Piece2,p:{rotation:30.7,x:144.6}},{t:this.Piece4,p:{x:0.1,y:3.9}},{t:this.Piece3,p:{x:0.1,y:185.8,rotation:0}}]},1).to({state:[{t:this.Piece1,p:{rotation:-22.5,x:-157.2}},{t:this.Piece2,p:{rotation:-11,x:154.1}},{t:this.Piece4,p:{x:50.3,y:3.9}},{t:this.Piece3,p:{x:-53.4,y:3.9,rotation:24.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-10.1,103.8,71.7);


(lib.Hotzone = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween88("synched",0);
	this.instance.setTransform(100,100);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(210,83,0,0.047)").s().p("AqQKRQkRkQAAmBQAAl/ERkRQEQkRGAAAQGBAAEQERQERERAAF/QAAGBkREQQkQERmBAAQmAAAkQkRg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Lilyreceive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Loop start":31});

	// timeline functions:
	this.frame_63 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween82("synched",0);
	this.instance.setTransform(0,-60.8);

	this.instance_1 = new lib.Tween82blink("synched",0);
	this.instance_1.setTransform(0,-61.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween82new("synched",0);
	this.instance_2.setTransform(0,-56.8);
	this.instance_2._off = true;

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-65.8},9,cjs.Ease.get(-0.5)).to({y:-61.8},10,cjs.Ease.get(0.75)).to({_off:true},5).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({_off:true,y:-56.8},6,cjs.Ease.get(-1)).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},6,cjs.Ease.get(-1)).to({rotation:7,x:12.8,y:-69.5},9,cjs.Ease.get(0.75)).to({rotation:0,x:0,y:-56.8},8,cjs.Ease.get(-0.75)).to({rotation:-5.2,x:-11.2,y:-69.5},8,cjs.Ease.get(0.75)).to({rotation:0,x:0,y:-56.8},8,cjs.Ease.get(-0.75)).wait(1));

	// Rarm
	this.instance_3 = new lib.Tween79("synched",0);
	this.instance_3.setTransform(24.2,-4.5,1,1,0,0,0,-12,-34.4);

	this.instance_4 = new lib.Tween83("synched",0);
	this.instance_4.setTransform(24.3,5.5,1,1,0,0,0,-41,-10);
	this.instance_4._off = true;

	this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-41.5,x:22.1,y:-6.5},9,cjs.Ease.get(-0.5)).to({rotation:-21,x:22.2},10,cjs.Ease.get(0.75)).wait(5).to({startPosition:0},0).to({rotation:-40.5,x:24.1,y:-0.4},6,cjs.Ease.get(-1)).to({_off:true,regX:-41,regY:-10,rotation:0,x:24.3,y:5.5},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},1).to({regX:-40.9,rotation:-25.2,x:29.3,y:-4.8},8,cjs.Ease.get(0.75)).to({rotation:-2.4,x:24.3,y:5.4},8,cjs.Ease.get(-0.75)).to({regX:-41,rotation:-37.4,x:18.6,y:-9.7},8,cjs.Ease.get(0.75)).to({regX:-40.9,rotation:-2.4,x:24.3,y:5.4},8,cjs.Ease.get(-0.75)).wait(1));

	// Larm
	this.instance_5 = new lib.Tween80("synched",0);
	this.instance_5.setTransform(-23,-6.1,1,1,0,0,0,12,-36);

	this.instance_6 = new lib.Tween84("synched",0);
	this.instance_6.setTransform(-22.6,5.2,1,1,0,0,0,41.5,-9.3);
	this.instance_6._off = true;

	this.instance_5.mask = this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:48.4,x:-20.9,y:-8.1},9,cjs.Ease.get(-0.5)).to({regY:-35.9,rotation:25.7,x:-21},10,cjs.Ease.get(0.75)).wait(5).to({startPosition:0},0).to({regY:-36,rotation:37.7,x:-22.9,y:-1.1},6,cjs.Ease.get(-1)).to({_off:true,regX:41.5,regY:-9.3,rotation:0,x:-22.6,y:5.2},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},1).to({regY:-9.5,rotation:35,x:-17.1,y:-10.8},8,cjs.Ease.get(0.75)).to({regX:41.6,regY:-9.4,rotation:-0.5,x:-22.6,y:5.1},8,cjs.Ease.get(-0.75)).to({regX:41.5,rotation:22.8,x:-28.1,y:-5.8},8,cjs.Ease.get(0.75)).to({regX:41.6,rotation:-0.5,x:-22.6,y:5.1},8,cjs.Ease.get(-0.75)).wait(1));

	// Body
	this.instance_7 = new lib.Tween81("synched",0);
	this.instance_7.setTransform(18.5,37.6);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:33.6},9,cjs.Ease.get(-0.5)).to({y:35.6},10,cjs.Ease.get(0.75)).wait(5).to({startPosition:0},0).to({y:40.6},6,cjs.Ease.get(-1)).to({rotation:7,x:19.3,y:29.4},9,cjs.Ease.get(0.75)).to({rotation:0,x:18.5,y:40.6},8,cjs.Ease.get(-0.75)).to({rotation:-5.2,x:16.1,y:25.8},8,cjs.Ease.get(0.75)).to({rotation:0,x:18.5,y:40.6},8,cjs.Ease.get(-0.75)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.6,-129,195.1,183.9);


(lib.Lilyidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween78("synched",0);
	this.instance.setTransform(0,-16,1,1,0,0,0,0,44.8);

	this.instance_1 = new lib.Lilyheadsmileblink();
	this.instance_1.setTransform(-60.8,-131.1,1,1,5.4);

	this.instance_2 = new lib.Tween78blink("synched",0);
	this.instance_2.setTransform(0,-12.8,1,1,0,0,0,0,44.8);
	this.instance_2._off = true;

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},18).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance}]},4).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:0},0).to({y:-24},9,cjs.Ease.get(1)).to({rotation:5.4,y:-16},7,cjs.Ease.get(-1)).to({_off:true},18).wait(5).to({_off:false},0).wait(20).to({startPosition:0},0).to({rotation:0},9).wait(13).to({startPosition:0},0).to({_off:true,y:-12.8},4).to({_off:false,y:-16},4).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},4).to({_off:true,y:-16},4).wait(21));

	// Rarm
	this.instance_3 = new lib.Tween79("synched",0);
	this.instance_3.setTransform(24.2,-4.5,1,1,0,0,0,-12,-34.4);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},10).to({rotation:-33.5},9,cjs.Ease.get(1)).to({scaleY:0.79,rotation:-8.1,x:24.1,y:-4.4},6,cjs.Ease.get(-1)).to({_off:true},1).wait(43).to({_off:false,rotation:-8.1},0).to({scaleY:1,rotation:0,x:24.2,y:-4.5},9).wait(42));

	// Larm
	this.instance_4 = new lib.Tween80("synched",0);
	this.instance_4.setTransform(-23,-6.1,1,1,0,0,0,12,-36);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},10).to({regX:12.1,rotation:31.2,x:-22.9},9,cjs.Ease.get(1)).to({regY:-35.9,scaleY:0.8,rotation:8.8,x:-23,y:-5.9},6,cjs.Ease.get(-1)).to({_off:true},1).wait(43).to({_off:false},0).to({regX:12,regY:-36,scaleY:1,rotation:0,y:-6.1},9).wait(42));

	// Body
	this.instance_5 = new lib.Tween81("synched",0);
	this.instance_5.setTransform(18.5,37.6);

	this.instance_6 = new lib.Lilybodyarms();
	this.instance_6.setTransform(-65.5,-31.9);

	this.instance_5.mask = this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},26).to({state:[{t:this.instance_5}]},43).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-124.8,167,179.7);


(lib.Lilyconfused = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Loop start":44});

	// timeline functions:
	this.frame_89 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween85("synched",0);
	this.instance.setTransform(0,-62.1);

	this.instance_1 = new lib.Tween86("synched",0);
	this.instance_1.setTransform(0,-68.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween87("synched",0);
	this.instance_2.setTransform(0,-68.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween872("synched",0);
	this.instance_3.setTransform(0,-69.9);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween873("synched",0);
	this.instance_4.setTransform(0,-70.2);
	this.instance_4._off = true;

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-68.6},11,cjs.Ease.get(1)).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},11,cjs.Ease.get(1)).to({_off:true},3).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},3).to({_off:true,y:-69.9},10,cjs.Ease.get(1)).wait(40).to({_off:false,y:-60.8},0).to({_off:true},5).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},10,cjs.Ease.get(1)).to({_off:true,y:-70.2},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},1).to({y:-63.4},8,cjs.Ease.get(-1)).to({y:-54.3},5,cjs.Ease.get(0.75)).to({y:-60.8},6,cjs.Ease.get(-0.75)).to({_off:true},20).wait(5).to({_off:false},0).wait(21));

	// Rarm
	this.instance_5 = new lib.Tween79("synched",0);
	this.instance_5.setTransform(24.2,-4.5,1,1,0,0,0,-12,-34.4);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-15,x:24.1,y:-11},11,cjs.Ease.get(1)).to({startPosition:0},3).to({regY:-34.5,rotation:-44.2,y:-12.3},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:-12.5},1).to({rotation:-28.1,x:24.2,y:-7.2},7,cjs.Ease.get(-1)).to({_off:true},1).wait(57));

	// Larm
	this.instance_6 = new lib.Tween80("synched",0);
	this.instance_6.setTransform(-23,-6.1,1,1,0,0,0,12,-36);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:15,y:-12.6},11,cjs.Ease.get(1)).to({startPosition:0},3).to({regX:12.1,regY:-36.1,rotation:43.5,x:-22.9,y:-13.9},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:43.4,y:-14.2},1).to({rotation:27.1,y:-8.7},7,cjs.Ease.get(-1)).to({_off:true},1).wait(57));

	// Body
	this.instance_7 = new lib.Tween81("synched",0);
	this.instance_7.setTransform(18.5,37.6);

	this.instance_8 = new lib.Tween812("synched",0);
	this.instance_8.setTransform(18.5,36.3);
	this.instance_8._off = true;

	this.instance_7.mask = this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:31.1},11,cjs.Ease.get(1)).to({startPosition:0},3).to({y:29.8},10,cjs.Ease.get(1)).to({y:29.5},1).to({_off:true,y:36.3},8,cjs.Ease.get(-1)).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},8,cjs.Ease.get(-1)).to({y:42.8},5,cjs.Ease.get(0.75)).to({y:38.9},6,cjs.Ease.get(-0.75)).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,-132.5,171.7,187.5);


(lib.Lilyring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Loop start":30});

	// timeline functions:
	this.frame_63 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Block
	this.instance = new lib.Tween91ring("synched",0);
	this.instance.setTransform(-66,59.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({rotation:149.2,x:55.6},8,cjs.Ease.get(1)).to({rotation:169.7,x:63.6},3).to({rotation:149.2,x:55.6},3).wait(3).to({startPosition:0},0).to({rotation:-28.8,x:-48.4},8).to({rotation:-55.5,x:-56.4},3).to({rotation:-28.8,x:-48.4},3).wait(3).to({startPosition:0},0).to({rotation:149.2,x:55.6},8,cjs.Ease.get(1)).wait(1));

	// Head
	this.instance_1 = new lib.Tween89("synched",0);
	this.instance_1.setTransform(0,-60.8);

	this.instance_2 = new lib.Tween902("synched",0);
	this.instance_2.setTransform(0,-11.2,1,1,0,0,0,0,49.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween90("synched",0);
	this.instance_3.setTransform(-0.1,-11.1,1,1,-6.5,0,0,-0.1,49.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.2,x:3.9,y:-58.7},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:0.9,y:-60.3},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({rotation:-6.5,y:-11.1},8,cjs.Ease.get(1)).to({startPosition:0},6).to({_off:true},3).wait(17).to({_off:false,regX:-0.1,rotation:7.8,x:-0.1},0).to({regX:0,rotation:-6.5,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).to({rotation:7.8},8,cjs.Ease.get(1)).to({rotation:7.8},6).to({_off:true},3).wait(9));

	// Rarm
	this.instance_4 = new lib.Tween79("synched",0);
	this.instance_4.setTransform(27.1,3.2,1,1,-29.5,0,0,-12,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-34.3,rotation:-42.2,x:24.7,y:4.2},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-32.4,x:26.6,y:3.4},7,cjs.Ease.get(-0.75)).wait(1).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-29.5,x:27.1,y:3.2},0).to({regX:-11.9,rotation:-35.9},8,cjs.Ease.get(1)).to({regY:-34.3,scaleX:1,scaleY:1,rotation:-41.3,x:27.2,y:3.3},3).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-35.9,x:27.1,y:3.2},3).wait(3).to({startPosition:0},0).to({regY:-34.3,rotation:-0.3,x:27.2,y:3.3},8,cjs.Ease.get(1)).to({rotation:-0.3},6).wait(3).to({startPosition:0},0).to({regY:-34.4,rotation:-35.9,x:27.1,y:3.2},8,cjs.Ease.get(1)).wait(1));

	// Larm
	this.instance_5 = new lib.Tween88ring("synched",0);
	this.instance_5.setTransform(-21.6,5.5,1,1,-5.5,0,0,58.6,-4);

	this.instance_6 = new lib.Tween79("synched",0);
	this.instance_6.setTransform(-25.8,3.3,1,1,0,44.4,-135.6,-12,-34.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15.7,x:-22.6,y:5.9},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-17.6,x:-21.9,y:5.7},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({skewX:1.7,skewY:-178.3},8,cjs.Ease.get(1)).to({skewX:1.7},6).wait(3).to({startPosition:0},0).to({regX:-11.9,regY:-34.5,skewX:27.7,skewY:-152.3,y:3.2},8,cjs.Ease.get(1)).to({skewX:36.7,skewY:-143.3},3).to({skewX:27.7,skewY:-152.3},3).wait(3).to({startPosition:0},0).to({regX:-12,regY:-34.4,skewX:1.7,skewY:-178.3,y:3.3},8,cjs.Ease.get(1)).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Body
	this.instance_7 = new lib.Tween81("synched",0);
	this.instance_7.setTransform(18.5,37.6);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:4.2,x:15.1,y:40.8},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:17.7,y:38.3},7,cjs.Ease.get(-0.75)).wait(1).to({rotation:0,x:18.5,y:37.6},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.3,-127.6,254.2,205.1);


(lib.Lilyhorse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Loop start":30});

	// timeline functions:
	this.frame_63 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Block
	this.instance = new lib.Tween91horse("synched",0);
	this.instance.setTransform(-66,59.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({rotation:24.5,x:52.9,y:59.7},8,cjs.Ease.get(1)).to({rotation:13,x:59.4},3).to({rotation:7.5,x:52.9},3).wait(3).to({startPosition:0},0).to({rotation:24.5,x:-44.6},8).to({rotation:11.5,x:-51.1},3).to({rotation:-9,x:-44.6},3).wait(3).to({startPosition:0},0).to({rotation:24.5,x:52.9},8,cjs.Ease.get(1)).wait(1));

	// Head
	this.instance_1 = new lib.Tween89("synched",0);
	this.instance_1.setTransform(0,-60.8);

	this.instance_2 = new lib.Tween902("synched",0);
	this.instance_2.setTransform(0,-11.2,1,1,0,0,0,0,49.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween90("synched",0);
	this.instance_3.setTransform(-0.1,-11.1,1,1,-6.5,0,0,-0.1,49.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.2,x:3.9,y:-58.7},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:0.9,y:-60.3},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({rotation:-6.5,y:-11.1},8,cjs.Ease.get(1)).to({startPosition:0},6).to({_off:true},3).wait(17).to({_off:false,regX:-0.1,rotation:7.8,x:-0.1},0).to({regX:0,rotation:-6.5,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).to({rotation:7.8},8,cjs.Ease.get(1)).to({rotation:7.8},6).to({_off:true},3).wait(9));

	// Rarm
	this.instance_4 = new lib.Tween79("synched",0);
	this.instance_4.setTransform(27.1,3.2,1,1,-29.5,0,0,-12,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-34.3,rotation:-42.2,x:24.7,y:4.2},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-32.4,x:26.6,y:3.4},7,cjs.Ease.get(-0.75)).wait(1).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-29.5,x:27.1,y:3.2},0).to({regX:-11.9,rotation:-35.9},8,cjs.Ease.get(1)).to({regY:-34.3,scaleX:1,scaleY:1,rotation:-41.3,x:27.2,y:3.3},3).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-35.9,x:27.1,y:3.2},3).wait(3).to({startPosition:0},0).to({regY:-34.3,rotation:-0.3,x:27.2,y:3.3},8,cjs.Ease.get(1)).to({rotation:-0.3},6).wait(3).to({startPosition:0},0).to({regY:-34.4,rotation:-35.9,x:27.1,y:3.2},8,cjs.Ease.get(1)).wait(1));

	// Larm
	this.instance_5 = new lib.Tween88horse("synched",0);
	this.instance_5.setTransform(-21.6,5.5,1,1,-5.5,0,0,58.6,-4);

	this.instance_6 = new lib.Tween79("synched",0);
	this.instance_6.setTransform(-25.8,3.3,1,1,0,44.4,-135.6,-12,-34.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15.7,x:-22.6,y:5.9},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-17.6,x:-21.9,y:5.7},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({skewX:1.7,skewY:-178.3},8,cjs.Ease.get(1)).to({skewX:1.7},6).wait(3).to({startPosition:0},0).to({regX:-11.9,regY:-34.5,skewX:27.7,skewY:-152.3,y:3.2},8,cjs.Ease.get(1)).to({skewX:36.7,skewY:-143.3},3).to({skewX:27.7,skewY:-152.3},3).wait(3).to({startPosition:0},0).to({regX:-12,regY:-34.4,skewX:1.7,skewY:-178.3,y:3.3},8,cjs.Ease.get(1)).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Body
	this.instance_7 = new lib.Tween81("synched",0);
	this.instance_7.setTransform(18.5,37.6);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:4.2,x:15.1,y:40.8},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:17.7,y:38.3},7,cjs.Ease.get(-0.75)).wait(1).to({rotation:0,x:18.5,y:37.6},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.6,-127.6,244.5,205.1);


(lib.Lilyfiretruck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Loop start":30});

	// timeline functions:
	this.frame_63 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Block
	this.instance = new lib.Tween91firetruck("synched",0);
	this.instance.setTransform(-66,59.6,1,1,23.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({rotation:24.5,x:52.9,y:59.7},8,cjs.Ease.get(1)).to({x:59.4},3).to({x:52.9},3).wait(3).to({startPosition:0},0).to({x:-44.6},8,cjs.Ease.get(0.75)).to({x:-51.1},3).to({x:-44.6},3).wait(3).to({startPosition:0},0).to({x:52.9},8,cjs.Ease.get(0.75)).wait(1));

	// Head
	this.instance_1 = new lib.Tween89("synched",0);
	this.instance_1.setTransform(0,-60.8);

	this.instance_2 = new lib.Tween902("synched",0);
	this.instance_2.setTransform(0,-11.2,1,1,0,0,0,0,49.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween90("synched",0);
	this.instance_3.setTransform(-0.1,-11.1,1,1,-6.5,0,0,-0.1,49.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.2,x:3.9,y:-58.7},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:0.9,y:-60.3},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({rotation:-6.5,y:-11.1},8,cjs.Ease.get(1)).to({startPosition:0},6).to({_off:true},3).wait(17).to({_off:false,regX:-0.1,rotation:7.8,x:-0.1},0).to({regX:0,rotation:-6.5,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).to({rotation:7.8},8,cjs.Ease.get(1)).to({rotation:7.8},6).to({_off:true},3).wait(9));

	// Rarm
	this.instance_4 = new lib.Tween79("synched",0);
	this.instance_4.setTransform(27.1,3.2,1,1,-29.5,0,0,-12,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-34.3,rotation:-42.2,x:24.7,y:4.2},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-32.4,x:26.6,y:3.4},7,cjs.Ease.get(-0.75)).wait(1).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-29.5,x:27.1,y:3.2},0).to({regX:-11.9,rotation:-35.9},8,cjs.Ease.get(1)).to({regY:-34.3,scaleX:1,scaleY:1,rotation:-41.3,x:27.2,y:3.3},3).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-35.9,x:27.1,y:3.2},3).wait(3).to({startPosition:0},0).to({regY:-34.3,rotation:-0.3,x:27.2,y:3.3},8,cjs.Ease.get(1)).to({rotation:-0.3},6).wait(3).to({startPosition:0},0).to({regY:-34.4,rotation:-35.9,x:27.1,y:3.2},8,cjs.Ease.get(1)).wait(1));

	// Larm
	this.instance_5 = new lib.Tween88firetruck("synched",0);
	this.instance_5.setTransform(-21.6,5.5,1,1,-5.5,0,0,58.6,-4);

	this.instance_6 = new lib.Tween79("synched",0);
	this.instance_6.setTransform(-25.8,3.3,1,1,0,44.4,-135.6,-12,-34.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15.7,x:-22.6,y:5.9},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-17.6,x:-21.9,y:5.7},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({skewX:1.7,skewY:-178.3},8,cjs.Ease.get(1)).to({skewX:1.7},6).wait(3).to({startPosition:0},0).to({regX:-11.9,regY:-34.5,skewX:27.7,skewY:-152.3,y:3.2},8,cjs.Ease.get(1)).to({skewX:36.7,skewY:-143.3},3).to({skewX:27.7,skewY:-152.3},3).wait(3).to({startPosition:0},0).to({regX:-12,regY:-34.4,skewX:1.7,skewY:-178.3,y:3.3},8,cjs.Ease.get(1)).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Body
	this.instance_7 = new lib.Tween81("synched",0);
	this.instance_7.setTransform(18.5,37.6);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:4.2,x:15.1,y:40.8},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:17.7,y:38.3},7,cjs.Ease.get(-0.75)).wait(1).to({rotation:0,x:18.5,y:37.6},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.3,-127.6,268.2,213.3);


(lib.Lilycar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Loop start":30});

	// timeline functions:
	this.frame_63 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Block
	this.instance = new lib.Tween91car("synched",0);
	this.instance.setTransform(-66,59.6,1,1,23.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({rotation:24.5,x:52.9,y:59.7},8,cjs.Ease.get(1)).to({x:59.4},3).to({x:52.9},3).wait(3).to({startPosition:0},0).to({x:-44.6},8,cjs.Ease.get(0.75)).to({x:-51.1},3).to({x:-44.6},3).wait(3).to({startPosition:0},0).to({x:52.9},8,cjs.Ease.get(0.75)).wait(1));

	// Head
	this.instance_1 = new lib.Tween89("synched",0);
	this.instance_1.setTransform(0,-60.8);

	this.instance_2 = new lib.Tween902("synched",0);
	this.instance_2.setTransform(0,-11.2,1,1,0,0,0,0,49.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween90("synched",0);
	this.instance_3.setTransform(-0.1,-11.1,1,1,-6.5,0,0,-0.1,49.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.2,x:3.9,y:-58.7},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:0.9,y:-60.3},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({rotation:-6.5,y:-11.1},8,cjs.Ease.get(1)).to({startPosition:0},6).to({_off:true},3).wait(17).to({_off:false,regX:-0.1,rotation:7.8,x:-0.1},0).to({regX:0,rotation:-6.5,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).to({rotation:7.8},8,cjs.Ease.get(1)).to({rotation:7.8},6).to({_off:true},3).wait(9));

	// Rarm
	this.instance_4 = new lib.Tween79("synched",0);
	this.instance_4.setTransform(27.1,3.2,1,1,-29.5,0,0,-12,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-34.3,rotation:-42.2,x:24.7,y:4.2},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-32.4,x:26.6,y:3.4},7,cjs.Ease.get(-0.75)).wait(1).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-29.5,x:27.1,y:3.2},0).to({regX:-11.9,rotation:-35.9},8,cjs.Ease.get(1)).to({regY:-34.3,scaleX:1,scaleY:1,rotation:-41.3,x:27.2,y:3.3},3).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-35.9,x:27.1,y:3.2},3).wait(3).to({startPosition:0},0).to({regY:-34.3,rotation:-0.3,x:27.2,y:3.3},8,cjs.Ease.get(1)).to({rotation:-0.3},6).wait(3).to({startPosition:0},0).to({regY:-34.4,rotation:-35.9,x:27.1,y:3.2},8,cjs.Ease.get(1)).wait(1));

	// Larm
	this.instance_5 = new lib.Tween88car("synched",0);
	this.instance_5.setTransform(-21.6,5.5,1,1,-5.5,0,0,58.6,-4);

	this.instance_6 = new lib.Tween79("synched",0);
	this.instance_6.setTransform(-25.8,3.3,1,1,0,44.4,-135.6,-12,-34.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15.7,x:-22.6,y:5.9},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-17.6,x:-21.9,y:5.7},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({skewX:1.7,skewY:-178.3},8,cjs.Ease.get(1)).to({skewX:1.7},6).wait(3).to({startPosition:0},0).to({regX:-11.9,regY:-34.5,skewX:27.7,skewY:-152.3,y:3.2},8,cjs.Ease.get(1)).to({skewX:36.7,skewY:-143.3},3).to({skewX:27.7,skewY:-152.3},3).wait(3).to({startPosition:0},0).to({regX:-12,regY:-34.4,skewX:1.7,skewY:-178.3,y:3.3},8,cjs.Ease.get(1)).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Body
	this.instance_7 = new lib.Tween81("synched",0);
	this.instance_7.setTransform(18.5,37.6);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:4.2,x:15.1,y:40.8},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:17.7,y:38.3},7,cjs.Ease.get(-0.75)).wait(1).to({rotation:0,x:18.5,y:37.6},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.6,-127.6,271.5,211);


(lib.Lilyblock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Loop start":30});

	// timeline functions:
	this.frame_63 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Block
	this.instance = new lib.Tween91block("synched",0);
	this.instance.setTransform(-66,59.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({rotation:24.5,x:52.9,y:59.7},8,cjs.Ease.get(1)).to({x:59.4},3).to({x:52.9},3).wait(3).to({startPosition:0},0).to({x:-44.6},8).to({x:-51.1},3).to({x:-44.6},3).wait(3).to({startPosition:0},0).to({x:52.9},8,cjs.Ease.get(1)).wait(1));

	// Head
	this.instance_1 = new lib.Tween89("synched",0);
	this.instance_1.setTransform(0,-60.8);

	this.instance_2 = new lib.Tween902("synched",0);
	this.instance_2.setTransform(0,-11.2,1,1,0,0,0,0,49.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween90("synched",0);
	this.instance_3.setTransform(-0.1,-11.1,1,1,-6.5,0,0,-0.1,49.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.2,x:3.9,y:-58.7},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:0.9,y:-60.3},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({rotation:-6.5,y:-11.1},8,cjs.Ease.get(1)).to({startPosition:0},6).to({_off:true},3).wait(17).to({_off:false,regX:-0.1,rotation:7.8,x:-0.1},0).to({regX:0,rotation:-6.5,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).to({rotation:7.8},8,cjs.Ease.get(1)).to({rotation:7.8},6).to({_off:true},3).wait(9));

	// Rarm
	this.instance_4 = new lib.Tween79("synched",0);
	this.instance_4.setTransform(27.1,3.2,1,1,-29.5,0,0,-12,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-34.3,rotation:-42.2,x:24.7,y:4.2},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-32.4,x:26.6,y:3.4},7,cjs.Ease.get(-0.75)).wait(1).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-29.5,x:27.1,y:3.2},0).to({regX:-11.9,rotation:-35.9},8,cjs.Ease.get(1)).to({regY:-34.3,scaleX:1,scaleY:1,rotation:-41.3,x:27.2,y:3.3},3).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-35.9,x:27.1,y:3.2},3).wait(3).to({startPosition:0},0).to({regY:-34.3,rotation:-0.3,x:27.2,y:3.3},8,cjs.Ease.get(1)).to({rotation:-0.3},6).wait(3).to({startPosition:0},0).to({regY:-34.4,rotation:-35.9,x:27.1,y:3.2},8,cjs.Ease.get(1)).wait(1));

	// Larm
	this.instance_5 = new lib.Tween88block("synched",0);
	this.instance_5.setTransform(-21.6,5.5,1,1,-5.5,0,0,58.6,-4);

	this.instance_6 = new lib.Tween79("synched",0);
	this.instance_6.setTransform(-25.8,3.3,1,1,0,44.4,-135.6,-12,-34.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15.7,x:-22.6,y:5.9},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-17.6,x:-21.9,y:5.7},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({skewX:1.7,skewY:-178.3},8,cjs.Ease.get(1)).to({skewX:1.7},6).wait(3).to({startPosition:0},0).to({regX:-11.9,regY:-34.5,skewX:27.7,skewY:-152.3,y:3.2},8,cjs.Ease.get(1)).to({skewX:36.7,skewY:-143.3},3).to({skewX:27.7,skewY:-152.3},3).wait(3).to({startPosition:0},0).to({regX:-12,regY:-34.4,skewX:1.7,skewY:-178.3,y:3.3},8,cjs.Ease.get(1)).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Body
	this.instance_7 = new lib.Tween81("synched",0);
	this.instance_7.setTransform(18.5,37.6);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:4.2,x:15.1,y:40.8},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:17.7,y:38.3},7,cjs.Ease.get(-0.75)).wait(1).to({rotation:0,x:18.5,y:37.6},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163,-127.6,265.9,205.1);


(lib.Lilyball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Loop start":30});

	// timeline functions:
	this.frame_63 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Ball
	this.instance = new lib.Tween91("synched",0);
	this.instance.setTransform(-66,59.6);
	this.instance._off = true;

	this.instance_1 = new lib.Tween92("synched",0);
	this.instance_1.setTransform(55.6,59.6,1,1,149.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({_off:true,rotation:149.2,x:55.6},8,cjs.Ease.get(1)).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},8,cjs.Ease.get(1)).to({rotation:169.7,x:63.6},3).to({rotation:149.2,x:55.6},3).wait(3).to({startPosition:0},0).to({rotation:-28.8,x:-48.4},8).to({rotation:-55.5,x:-56.4},3).to({rotation:-28.8,x:-48.4},3).wait(3).to({startPosition:0},0).to({rotation:149.2,x:55.6},8,cjs.Ease.get(1)).wait(1));

	// Head
	this.instance_2 = new lib.Tween89("synched",0);
	this.instance_2.setTransform(0,-60.8);

	this.instance_3 = new lib.Tween902("synched",0);
	this.instance_3.setTransform(0,-11.2,1,1,0,0,0,0,49.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween90("synched",0);
	this.instance_4.setTransform(-0.1,-11.1,1,1,-6.5,0,0,-0.1,49.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4.2,x:3.9,y:-58.7},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:0.9,y:-60.3},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({rotation:-6.5,y:-11.1},8,cjs.Ease.get(1)).to({startPosition:0},6).to({_off:true},3).wait(17).to({_off:false,regX:-0.1,rotation:7.8,x:-0.1},0).to({regX:0,rotation:-6.5,x:0},8,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).to({rotation:7.8},8,cjs.Ease.get(1)).to({rotation:7.8},6).to({_off:true},3).wait(9));

	// Rarm
	this.instance_5 = new lib.Tween79("synched",0);
	this.instance_5.setTransform(27.1,3.2,1,1,-29.5,0,0,-12,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-34.3,rotation:-42.2,x:24.7,y:4.2},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-32.4,x:26.6,y:3.4},7,cjs.Ease.get(-0.75)).wait(1).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-29.5,x:27.1,y:3.2},0).to({regX:-11.9,rotation:-35.9},8,cjs.Ease.get(1)).to({regY:-34.3,scaleX:1,scaleY:1,rotation:-41.3,x:27.2,y:3.3},3).to({regY:-34.4,scaleX:1,scaleY:1,rotation:-35.9,x:27.1,y:3.2},3).wait(3).to({startPosition:0},0).to({regY:-34.3,rotation:-0.3,x:27.2,y:3.3},8,cjs.Ease.get(1)).to({rotation:-0.3},6).wait(3).to({startPosition:0},0).to({regY:-34.4,rotation:-35.9,x:27.1,y:3.2},8,cjs.Ease.get(1)).wait(1));

	// Larm
	this.instance_6 = new lib.Tween88ball("synched",0);
	this.instance_6.setTransform(-21.6,5.5,1,1,-5.5,0,0,58.6,-4);

	this.instance_7 = new lib.Tween79("synched",0);
	this.instance_7.setTransform(-25.8,3.3,1,1,0,44.4,-135.6,-12,-34.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:15.7,x:-22.6,y:5.9},11,cjs.Ease.get(1)).to({startPosition:0},2).to({scaleX:1,scaleY:1,rotation:-17.6,x:-21.9,y:5.7},7,cjs.Ease.get(-0.75)).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({skewX:1.7,skewY:-178.3},8,cjs.Ease.get(1)).to({skewX:1.7},6).wait(3).to({startPosition:0},0).to({regX:-11.9,regY:-34.5,skewX:27.7,skewY:-152.3,y:3.2},8,cjs.Ease.get(1)).to({skewX:36.7,skewY:-143.3},3).to({skewX:27.7,skewY:-152.3},3).wait(3).to({startPosition:0},0).to({regX:-12,regY:-34.4,skewX:1.7,skewY:-178.3,y:3.3},8,cjs.Ease.get(1)).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Body
	this.instance_8 = new lib.Tween81("synched",0);
	this.instance_8.setTransform(18.5,37.6);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:4.2,x:15.1,y:40.8},11,cjs.Ease.get(1)).to({startPosition:0},2).to({rotation:0.8,x:17.7,y:38.3},7,cjs.Ease.get(-0.75)).wait(1).to({rotation:0,x:18.5,y:37.6},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.1,-127.6,247,205.1);


(lib.Elmoidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.Elmoheadfront();
	this.instance.setTransform(11.5,7.1,0.828,0.828);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(71.5,58.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(71.5,60.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween3copy("synched",0);
	this.instance_3.setTransform(71.5,58.4);

	this.instance_4 = new lib.Tween3copy2("synched",0);
	this.instance_4.setTransform(71.5,60.8,1,1,-4.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween3copy3("synched",0);
	this.instance_5.setTransform(78,51.4);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(71.5,62.4);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween5("synched",0);
	this.instance_7.setTransform(71.5,58.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},22).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_1}]},35).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_4}]},25).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_4}]},24).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},6).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({_off:true,y:60.8},3).wait(38).to({_off:false,y:58.4},0).to({_off:true,rotation:-4.2,y:60.8},3).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},3).to({_off:true,y:58.4},3).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},3).to({_off:true,rotation:0,x:78,y:51.4},3).wait(34).to({_off:false,rotation:4.7},0).to({rotation:0.1,x:72.4,y:60.9},5,cjs.Ease.get(-0.66)).to({_off:true},1).wait(29).to({_off:false,rotation:0,skewY:180,x:66.8,y:51.4},0).to({skewX:7.9,skewY:187.9,x:74.8,y:57.8},4,cjs.Ease.get(0.66)).to({_off:true},2).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66).to({_off:false},3).to({rotation:4.7},9,cjs.Ease.get(1)).to({_off:true},25).wait(6).to({_off:false,rotation:0,skewX:9.4,skewY:-170.6,x:72.4,y:60.9},0).to({skewX:0,skewY:-180,x:66.8,y:51.4},5,cjs.Ease.get(0.66)).to({_off:true},24).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).to({_off:true,y:58.4},6).wait(25));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Body
	this.instance_8 = new lib.Elmobody();
	this.instance_8.setTransform(34.7,103.5,0.828,0.828);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.5,7.1,120.1,127.4);


(lib.Elmohappy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.Elmoheadhappy();
	this.instance.setTransform(11.5,7.1,0.828,0.828);

	this.instance_1 = new lib.Elmoheadlaugh();
	this.instance_1.setTransform(11.5,7.1,0.828,0.828);

	this.instance_2 = new lib.Tween12("synched",0);
	this.instance_2.setTransform(71.5,60.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.Elmoheadlookdownblink();
	this.instance_3.setTransform(11.5,18.9,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_2}]},16).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},22).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance}]},2).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(2).to({_off:false},0).to({_off:true},4).wait(2).to({_off:false},0).to({_off:true},16).wait(63).to({_off:false},1).to({_off:true},20).wait(2).to({_off:false},0).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({y:68.1},7,cjs.Ease.get(-0.5)).to({_off:true},22).wait(3).to({_off:false},0).wait(22).to({startPosition:0},0).to({y:60.9},9,cjs.Ease.get(-0.75)).to({_off:true,scaleX:0.83,scaleY:0.83,x:11.5,y:7.1},1).wait(41));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Body
	this.instance_4 = new lib.Elmobody();
	this.instance_4.setTransform(34.7,103.5,0.828,0.828);

	this.instance_5 = new lib.Tween13("synched",0);
	this.instance_5.setTransform(71.2,142.9);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},34).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},47).to({state:[{t:this.instance_5}]},9).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({y:146.5},7,cjs.Ease.get(-0.5)).wait(47).to({startPosition:0},0).to({y:142.9},9,cjs.Ease.get(-0.75)).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.5,7.1,121.7,127.4);


(lib.Elmoconfused = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":19});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Head
	this.instance = new lib.Tween15("synched",0);
	this.instance.setTransform(71.5,58.4);

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.setTransform(71.5,63.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{rotation:0,x:71.5,y:63.9}}]},5).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance_1,p:{rotation:9.7,x:83.3,y:59.4}}]},20).to({state:[{t:this.instance}]},3).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:63.9},5,cjs.Ease.get(0.75)).wait(3).to({_off:false},0).to({rotation:9.7,x:83.3,y:59.4},11,cjs.Ease.get(1)).to({_off:true},20).wait(3).to({_off:false},0).wait(18));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Body
	this.instance_2 = new lib.Elmobody();
	this.instance_2.setTransform(34.7,103.5,0.828,0.828);

	this.instance_3 = new lib.Elmobody2();
	this.instance_3.setTransform(27.8,103.5,0.828,0.828);

	this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},8).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.5,7.1,120.1,127.4);


(lib.Elmoring_within = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.Elmoheadlaugh();
	this.instance.setTransform(11.5,7.1,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Body
	this.instance_1 = new lib.Elmobodyarmless();
	this.instance_1.setTransform(34.7,100.8,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// Rarm
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(61.2,112.2,1,1,-26,0,0,37.4,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:25.5,x:60.6,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-20.8,x:61.2,y:112.5},5,cjs.Ease.get(0.5)).wait(1));

	// Larm
	this.instance_3 = new lib.Tween6ring("synched",0);
	this.instance_3.setTransform(80.6,112.1,1,1,0,15.3,-164.7,37.3,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:37.4,regY:-6.1,skewX:-27,skewY:-207,x:83,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,skewX:11,skewY:-169,x:80.7,y:112.4},5,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7.1,214.3,176);


(lib.Elmoring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Elmo
	this.instance = new lib.Elmoring_within();
	this.instance.setTransform(65.7,95,1,1,0,0,0,72.5,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:95.1,rotation:-5.2,x:54.3,y:72.1},5,cjs.Ease.get(1)).wait(1).to({regY:95,rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1).to({rotation:4.2,x:74.5,y:73.1},5,cjs.Ease.get(1)).wait(1).to({rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7,207.5,127.5);


(lib.Elmohorse_within = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.Elmoheadlaugh();
	this.instance.setTransform(11.5,7.1,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Body
	this.instance_1 = new lib.Elmobodyarmless();
	this.instance_1.setTransform(34.7,100.8,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// Rarm
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(61.2,112.2,1,1,-26,0,0,37.4,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:25.5,x:60.6,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-20.8,x:61.2,y:112.5},5,cjs.Ease.get(0.5)).wait(1));

	// Larm
	this.instance_3 = new lib.Tween6horse("synched",0);
	this.instance_3.setTransform(80.6,112.1,1,1,0,15.3,-164.7,37.3,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:37.4,regY:-6.1,skewX:-27,skewY:-207,x:83,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,skewX:11,skewY:-169,x:80.7,y:112.4},5,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7.1,241.2,176);


(lib.Elmohorse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Elmo
	this.instance = new lib.Elmohorse_within();
	this.instance.setTransform(65.7,95,1,1,0,0,0,72.5,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:95.1,rotation:-5.2,x:54.3,y:72.1},5,cjs.Ease.get(1)).wait(1).to({regY:95,rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1).to({rotation:4.2,x:74.5,y:73.1},5,cjs.Ease.get(1)).wait(1).to({rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7,239.5,127.5);


(lib.Elmofiretruck_within = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.Elmoheadlaugh();
	this.instance.setTransform(11.5,7.1,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Body
	this.instance_1 = new lib.Elmobodyarmless();
	this.instance_1.setTransform(34.7,100.8,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// Rarm
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(61.2,112.2,1,1,-26,0,0,37.4,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:25.5,x:60.6,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-20.8,x:61.2,y:112.5},5,cjs.Ease.get(0.5)).wait(1));

	// Larm
	this.instance_3 = new lib.Tween6firetruck("synched",0);
	this.instance_3.setTransform(80.6,112.1,1,1,0,15.3,-164.7,37.3,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:37.4,regY:-6.1,skewX:-27,skewY:-207,x:83,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,skewX:11,skewY:-169,x:80.7,y:112.4},5,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7.1,250.3,176);


(lib.Elmofiretruck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Elmo
	this.instance = new lib.Elmofiretruck_within();
	this.instance.setTransform(65.7,95,1,1,0,0,0,72.5,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:95.1,rotation:-5.2,x:54.3,y:72.1},5,cjs.Ease.get(1)).wait(1).to({regY:95,rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1).to({rotation:4.2,x:74.5,y:73.1},5,cjs.Ease.get(1)).wait(1).to({rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7,249.3,127.5);


(lib.Elmocar_within = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.Elmoheadlaugh();
	this.instance.setTransform(11.5,7.1,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Body
	this.instance_1 = new lib.Elmobodyarmless();
	this.instance_1.setTransform(34.7,100.8,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// Rarm
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(61.2,112.2,1,1,-26,0,0,37.4,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:25.5,x:60.6,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-20.8,x:61.2,y:112.5},5,cjs.Ease.get(0.5)).wait(1));

	// Larm
	this.instance_3 = new lib.Tween6car("synched",0);
	this.instance_3.setTransform(80.6,112.1,1,1,0,15.3,-164.7,37.3,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:37.4,regY:-6.1,skewX:-27,skewY:-207,x:83,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,skewX:11,skewY:-169,x:80.7,y:112.4},5,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7.1,250.3,176);


(lib.Elmocar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Elmo
	this.instance = new lib.Elmocar_within();
	this.instance.setTransform(65.7,95,1,1,0,0,0,72.5,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:95.1,rotation:-5.2,x:54.3,y:72.1},5,cjs.Ease.get(1)).wait(1).to({regY:95,rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1).to({rotation:4.2,x:74.5,y:73.1},5,cjs.Ease.get(1)).wait(1).to({rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7,248.7,127.5);


(lib.Elmoblock_within = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.Elmoheadlaugh();
	this.instance.setTransform(11.5,7.1,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Body
	this.instance_1 = new lib.Elmobodyarmless();
	this.instance_1.setTransform(34.7,100.8,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// Rarm
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(61.2,112.2,1,1,-26,0,0,37.4,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:25.5,x:60.6,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-20.8,x:61.2,y:112.5},5,cjs.Ease.get(0.5)).wait(1));

	// Larm
	this.instance_3 = new lib.Tween6block("synched",0);
	this.instance_3.setTransform(80.6,112.1,1,1,0,15.3,-164.7,37.3,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:37.4,regY:-6.1,skewX:-27,skewY:-207,x:83,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,skewX:11,skewY:-169,x:80.7,y:112.4},5,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7.1,227.2,176);


(lib.Elmoblock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Elmo
	this.instance = new lib.Elmoblock_within();
	this.instance.setTransform(65.7,95,1,1,0,0,0,72.5,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:95.1,rotation:-5.2,x:54.3,y:72.1},5,cjs.Ease.get(1)).wait(1).to({regY:95,rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1).to({rotation:4.2,x:74.5,y:73.1},5,cjs.Ease.get(1)).wait(1).to({rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7,220.4,127.5);


(lib.Elmoball_within = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.Elmoheadlaugh();
	this.instance.setTransform(11.5,7.1,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Body
	this.instance_1 = new lib.Elmobodyarmless();
	this.instance_1.setTransform(34.7,100.8,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// Rarm
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(61.2,112.2,1,1,-26,0,0,37.4,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:25.5,x:60.6,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-20.8,x:61.2,y:112.5},5,cjs.Ease.get(0.5)).wait(1));

	// Larm
	this.instance_3 = new lib.Tween6ball("synched",0);
	this.instance_3.setTransform(80.6,112.1,1,1,0,15.3,-164.7,37.3,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:37.4,regY:-6.1,skewX:-27,skewY:-207,x:83,y:115.5},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,skewX:11,skewY:-169,x:80.7,y:112.4},5,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7.1,214.5,176);


(lib.Elmoball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Elmo
	this.instance = new lib.Elmoball_within();
	this.instance.setTransform(65.7,95,1,1,0,0,0,72.5,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:95.1,rotation:-5.2,x:54.3,y:72.1},5,cjs.Ease.get(1)).wait(1).to({regY:95,rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1).to({rotation:4.2,x:74.5,y:73.1},5,cjs.Ease.get(1)).wait(1).to({rotation:0,x:65.7,y:95},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,7,207.7,127.5);


(lib.Cookiereceive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Loop start":28});

	// timeline functions:
	this.frame_69 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Head
	this.instance = new lib.Tween21("synched",0);
	this.instance.setTransform(97.9,49.1);

	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.setTransform(97.9,56.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween19("synched",0);
	this.instance_2.setTransform(97.9,55.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.Cookieheadgrinblink();
	this.instance_3.setTransform(33.9,-3.1,1,1,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},21).to({state:[{t:this.instance_2}]},2).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:59.1},5).to({y:56.1},4).to({_off:true},5).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:60.1},3,cjs.Ease.get(0.66)).to({_off:true},2).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({y:39},4).to({y:47},5,cjs.Ease.get(0.75)).to({_off:true},21).wait(2).to({_off:false},0).wait(19));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9EZ1MAAAgzpMA6JAAAMAAAAzpg");
	var mask_graphics_14 = new cjs.Graphics().p("A9EZ1MAAAgzpMA6JAAAMAAAAzpg");
	var mask_graphics_28 = new cjs.Graphics().p("A9EZ1MAAAgzpMA6JAAAMAAAAzpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:107.9,y:41.4}).wait(14).to({graphics:mask_graphics_14,x:107.9,y:41.4}).wait(14).to({graphics:mask_graphics_28,x:107.9,y:41.4}).wait(42));

	// Rarm
	this.instance_4 = new lib.Tween22("synched",0);
	this.instance_4.setTransform(65.3,107.3,1,1,0,0,0,33.1,-41.1);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:33.2,regY:-41.2,rotation:19.4,x:55.3,y:111},7,cjs.Ease.get(0.75)).wait(7).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({regY:-41.1,rotation:-7.5,y:111.1},9,cjs.Ease.get(1)).wait(42));

	// Larm
	this.instance_5 = new lib.Tween23("synched",0);
	this.instance_5.setTransform(134.1,101,1,1,0,0,0,-33.1,-44.1);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-16.7,x:145.2,y:104.8},7,cjs.Ease.get(0.75)).wait(7).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({rotation:5.4,x:145.1},9,cjs.Ease.get(1)).wait(42));

	// Body
	this.instance_6 = new lib.Cookiebody1();
	this.instance_6.setTransform(22.6,74.2);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,0.8,296.7,206);


(lib.Cookieidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.Tween16("synched",0);
	this.instance.setTransform(98.1,42.6);

	this.instance_1 = new lib.Tween18("synched",0);
	this.instance_1.setTransform(98.1,50.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween19("synched",0);
	this.instance_2.setTransform(96.6,48.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween20("synched",0);
	this.instance_3.setTransform(119,42.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:50.6},5,cjs.Ease.get(0.75)).wait(45).to({_off:false,x:96.6,y:47.3},4,cjs.Ease.get(0.66)).to({_off:true,y:48.9},3,cjs.Ease.get(0.5)).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},5,cjs.Ease.get(0.75)).to({x:96.6,y:39.3},5,cjs.Ease.get(0.75)).to({y:44.9},9,cjs.Ease.get(0.5)).wait(31).to({startPosition:0},0).to({_off:true,y:47.3},4,cjs.Ease.get(0.66)).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},3,cjs.Ease.get(0.5)).to({rotation:14.2,x:119,y:42.5},13,cjs.Ease.get(1)).to({_off:true},17).wait(4).to({_off:false,rotation:6,x:113.4,y:46.5},0).to({rotation:-6.7,x:85.3,y:38.5},14,cjs.Ease.get(1)).wait(16).to({rotation:-6.7},0).to({rotation:-0.3,x:97.2,y:42.3},13,cjs.Ease.get(-1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({rotation:-6.9,x:113.4,y:46.5},3,cjs.Ease.get(0.75)).to({_off:true},1).wait(44));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9EZ1MAAAgzpMA6JAAAMAAAAzpg");
	var mask_graphics_50 = new cjs.Graphics().p("A9EZ1MAAAgzpMA6JAAAMAAAAzpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:107.9,y:41.4}).wait(50).to({graphics:mask_graphics_50,x:107.9,y:41.4}).wait(85));

	// Body
	this.instance_4 = new lib.Tween17("synched",0);
	this.instance_4.setTransform(99.7,169.7);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:175.1},5,cjs.Ease.get(1)).to({y:164.7},5,cjs.Ease.get(0.75)).to({y:169.7},9,cjs.Ease.get(0.5)).wait(31).to({startPosition:0},0).wait(7).to({startPosition:0},0).to({rotation:3.9},13,cjs.Ease.get(1)).wait(21).to({startPosition:0},0).to({rotation:-3.5},14,cjs.Ease.get(1)).wait(16).to({rotation:-3.5},0).to({rotation:0},13,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-11.2,226,218);


(lib.Cookieconfused = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":86});

	// timeline functions:
	this.frame_129 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

	// Thinking arm
	this.instance = new lib.Tween29("synched",0);
	this.instance.setTransform(83.1,133.7,1,1,37);
	this.instance._off = true;

	this.instance_1 = new lib.Tween30("synched",0);
	this.instance_1.setTransform(65.1,103.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},80).to({state:[{t:this.instance_1}]},6).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).to({_off:true,rotation:0,x:65.1,y:103.7},6,cjs.Ease.get(1)).wait(44));

	// Head
	this.instance_2 = new lib.Tween25copy("synched",0);
	this.instance_2.setTransform(97.9,52.1);

	this.instance_3 = new lib.Tween25("synched",0);
	this.instance_3.setTransform(97.9,44.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween27("synched",0);
	this.instance_4.setTransform(97.9,111.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween27copy("synched",0);
	this.instance_5.setTransform(97.9,45.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_4}]},2).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:44.1},3).wait(33).to({_off:false,rotation:9.5,x:147.4,y:133.8},0).to({_off:true},2).wait(26).to({_off:false,rotation:0,x:97.9,y:105.2},7,cjs.Ease.get(0.66)).to({_off:true,y:111.2},4,cjs.Ease.get(0.75)).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},3).to({y:116.2},9,cjs.Ease.get(0.66)).to({y:110.2},5,cjs.Ease.get(-0.5)).wait(7).to({startPosition:0},0).to({rotation:9.5,x:147.4,y:133.8},9,cjs.Ease.get(1)).to({_off:true},3).wait(2).to({_off:false},0).wait(3).to({startPosition:0},0).to({rotation:-6,x:39,y:135.5},10,cjs.Ease.get(0.75)).wait(13).to({startPosition:0},0).to({_off:true,rotation:0,x:97.9,y:105.2},7,cjs.Ease.get(0.66)).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},4,cjs.Ease.get(0.75)).to({y:45.2},9,cjs.Ease.get(1)).to({_off:true},18).wait(2).to({_off:false},0).to({_off:true},9).wait(2).to({_off:false},0).wait(15));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9EZ1MAAAgzpMA6JAAAMAAAAzpg");
	var mask_graphics_71 = new cjs.Graphics().p("A9EZ1MAAAgzpMA6JAAAMAAAAzpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:107.9,y:41.4}).wait(71).to({graphics:mask_graphics_71,x:107.9,y:41.4}).wait(59));

	// Rarm
	this.instance_6 = new lib.Tween22("synched",0);
	this.instance_6.setTransform(65.3,107.3,1,1,0,0,0,33.1,-41.1);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({startPosition:0},0).to({x:66.3,y:163.4},9,cjs.Ease.get(0.66)).wait(12).to({startPosition:0},0).to({rotation:9.5,x:107.5,y:181.1},9,cjs.Ease.get(1)).wait(8).to({startPosition:0},0).to({rotation:-6,x:13.2,y:191.7},10,cjs.Ease.get(0.75)).wait(13).to({startPosition:0},0).to({rotation:0,x:66.3,y:163.4},7,cjs.Ease.get(0.66)).wait(4).to({startPosition:0},0).to({regX:33,regY:-41.4,scaleY:0.82,skewX:-79.4,skewY:-68.2,x:63.5,y:107.9},4,cjs.Ease.get(-0.66)).to({_off:true},1).wait(50));

	// Larm
	this.instance_7 = new lib.Tween23("synched",0);
	this.instance_7.setTransform(134.1,101,1,1,0,0,0,-33.1,-44.1);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({startPosition:0},0).to({x:135.1,y:157.1},9,cjs.Ease.get(0.66)).wait(12).to({startPosition:0},0).to({rotation:9.5,x:176.4,y:186.2},9,cjs.Ease.get(1)).wait(8).to({startPosition:0},0).to({rotation:-6,x:80.9,y:178.3},10,cjs.Ease.get(0.75)).wait(13).to({startPosition:0},0).to({rotation:0,x:135.1,y:157.1},7,cjs.Ease.get(0.66)).wait(4).to({startPosition:0},0).to({x:134.1,y:101},9,cjs.Ease.get(1)).wait(46));

	// Body
	this.instance_8 = new lib.Cookiebody1();
	this.instance_8.setTransform(22.6,74.2);

	this.instance_9 = new lib.Tween26("synched",0);
	this.instance_9.setTransform(100.6,169.7);
	this.instance_9._off = true;

	this.instance_8.mask = this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},12).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_9}]},13).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_9}]},9).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({x:101.6,y:225.8},9,cjs.Ease.get(0.66)).wait(12).to({startPosition:0},0).to({rotation:9.5,x:132,y:248.5},9,cjs.Ease.get(1)).wait(8).to({startPosition:0},0).to({rotation:-6,x:54.8,y:250.1},10,cjs.Ease.get(0.75)).wait(13).to({startPosition:0},0).to({rotation:0,x:101.6,y:225.8},7,cjs.Ease.get(0.66)).wait(4).to({startPosition:0},0).to({y:175.8},9,cjs.Ease.get(1)).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-1.6,226,208.4);


(lib.Cookiering = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9EZ2MAAAgzrMA6JAAAMAAAAzrg");
	mask.setTransform(7.2,-90.3);

	// Head
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(2.7,-81.4,1,1,4.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.3,x:9.6,y:-78.1},9,cjs.Ease.get(1)).wait(1).to({rotation:9.2,x:9.5,y:-78.2},0).wait(1).to({rotation:9,x:9.2,y:-78.3},0).wait(1).to({rotation:8.6,x:8.7,y:-78.6},0).wait(1).to({rotation:8.1,x:7.9,y:-78.9},0).wait(1).to({rotation:7.5,x:7,y:-79.4},0).wait(1).to({rotation:6.7,x:6,y:-79.8},0).wait(1).to({rotation:6,x:5,y:-80.3},0).wait(1).to({rotation:5.3,x:4,y:-80.8},0).wait(1).to({rotation:4.7,x:3.3,y:-81.2},0).wait(1).to({rotation:4.4,x:2.9,y:-81.4},0).wait(1).to({rotation:4.3,x:2.7},0).wait(2));

	// Rarm
	this.instance_1 = new lib.Tween22ring("synched",0);
	this.instance_1.setTransform(-43,-25.7,1,1,0,154.1,-25.9,33.1,-41.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:191,skewY:11,x:-40.8,y:-26.6},9,cjs.Ease.get(1)).wait(1).to({regX:-8.3,regY:13.1,skewX:190.5,skewY:10.5,x:-71.6,y:-87.4},0).wait(1).to({skewX:188.9,skewY:8.9,x:-73.4,y:-86.5},0).wait(1).to({skewX:186.2,skewY:6.2,x:-76.4,y:-84.8},0).wait(1).to({skewX:182.4,skewY:2.4,x:-80.5,y:-82.3},0).wait(1).to({skewX:177.5,skewY:-2.5,x:-85.3,y:-78.6},0).wait(1).to({skewX:172.1,skewY:-7.9,x:-90.4,y:-74.1},0).wait(1).to({skewX:166.5,skewY:-13.5,x:-95.2,y:-69},0).wait(1).to({skewX:161.4,skewY:-18.6,x:-99.1,y:-64},0).wait(1).to({skewX:157.4,skewY:-22.6,x:-101.9,y:-59.9},0).wait(1).to({skewX:154.9,skewY:-25.1,x:-103.4,y:-57.3},0).wait(1).to({regX:33.1,regY:-41.1,skewX:154.1,skewY:-25.9,x:-43,y:-25.7},0).wait(2));

	// Larm
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(35,-26.9,1,1,4.3,0,0,-33,-44.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:9.3,x:36.9,y:-20.9},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,rotation:9.2,x:62.4,y:27.7},0).wait(1).to({rotation:9,x:62.5,y:27.4},0).wait(1).to({rotation:8.6,x:62.6,y:26.8},0).wait(1).to({rotation:8.1,x:62.9,y:25.9},0).wait(1).to({rotation:7.5,x:63.2,y:24.9},0).wait(1).to({rotation:6.7,x:63.5,y:23.6},0).wait(1).to({rotation:6,x:63.8,y:22.4},0).wait(1).to({rotation:5.3,x:64.1,y:21.2},0).wait(1).to({rotation:4.7,x:64.4,y:20.3},0).wait(1).to({rotation:4.4,x:64.5,y:19.7},0).wait(1).to({regX:-33,regY:-44.1,rotation:4.3,x:35,y:-26.9},0).wait(2));

	// Body
	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.setTransform(-3.7,39.1);

	this.instance_4 = new lib.Tween62("synched",0);
	this.instance_4.setTransform(-7.3,41.4,1,1,5);
	this.instance_4._off = true;

	this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,rotation:5,x:-7.3,y:41.4},9,cjs.Ease.get(1)).wait(11).to({_off:false,rotation:0,x:-3.7,y:39.1},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},9,cjs.Ease.get(1)).wait(1).to({rotation:4.9,y:41.3},0).wait(1).to({rotation:4.7,x:-7.1,y:41.2},0).wait(1).to({rotation:4.3,x:-6.9,y:41},0).wait(1).to({rotation:3.8,x:-6.5,y:40.8},0).wait(1).to({rotation:3.2,x:-6,y:40.5},0).wait(1).to({rotation:2.4,x:-5.5,y:40.2},0).wait(1).to({rotation:1.7,x:-4.9,y:39.8},0).wait(1).to({rotation:1,x:-4.4,y:39.5},0).wait(1).to({rotation:0.4,x:-4,y:39.3},0).wait(1).to({rotation:0.1,x:-3.8,y:39.1},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.9,-165.2,295.2,240.3);


(lib.Cookiehorse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9EZ2MAAAgzrMA6JAAAMAAAAzrg");
	mask.setTransform(7.2,-90.3);

	// Head
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(2.7,-81.4,1,1,4.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.3,x:9.6,y:-78.1},9,cjs.Ease.get(1)).wait(1).to({rotation:9.2,x:9.5,y:-78.2},0).wait(1).to({rotation:9,x:9.2,y:-78.3},0).wait(1).to({rotation:8.6,x:8.7,y:-78.6},0).wait(1).to({rotation:8.1,x:7.9,y:-78.9},0).wait(1).to({rotation:7.5,x:7,y:-79.4},0).wait(1).to({rotation:6.7,x:6,y:-79.8},0).wait(1).to({rotation:6,x:5,y:-80.3},0).wait(1).to({rotation:5.3,x:4,y:-80.8},0).wait(1).to({rotation:4.7,x:3.3,y:-81.2},0).wait(1).to({rotation:4.4,x:2.9,y:-81.4},0).wait(1).to({rotation:4.3,x:2.7},0).wait(2));

	// Rarm
	this.instance_1 = new lib.Tween22horse("synched",0);
	this.instance_1.setTransform(-43,-25.7,1,1,0,154.1,-25.9,33.1,-41.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:191,skewY:11,x:-40.8,y:-26.6},9,cjs.Ease.get(1)).wait(1).to({regX:-20.9,regY:30,skewX:190.5,skewY:10.5,x:-80.9,y:-106.3},0).wait(1).to({skewX:188.9,skewY:8.9,x:-83.3,y:-105.2},0).wait(1).to({skewX:186.2,skewY:6.2,x:-87.1,y:-103},0).wait(1).to({skewX:182.4,skewY:2.4,x:-92.4,y:-99.6},0).wait(1).to({skewX:177.5,skewY:-2.5,x:-98.7,y:-94.9},0).wait(1).to({skewX:172.1,skewY:-7.9,x:-105.3,y:-89.1},0).wait(1).to({skewX:166.5,skewY:-13.5,x:-111.4,y:-82.4},0).wait(1).to({skewX:161.4,skewY:-18.6,x:-116.5,y:-76},0).wait(1).to({skewX:157.4,skewY:-22.6,x:-120,y:-70.6},0).wait(1).to({skewX:154.9,skewY:-25.1,x:-122,y:-67.2},0).wait(1).to({regX:33.1,regY:-41.1,skewX:154.1,skewY:-25.9,x:-43,y:-25.7},0).wait(2));

	// Larm
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(35,-26.9,1,1,4.3,0,0,-33,-44.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:9.3,x:36.9,y:-20.9},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,rotation:9.2,x:62.4,y:27.7},0).wait(1).to({rotation:9,x:62.5,y:27.4},0).wait(1).to({rotation:8.6,x:62.6,y:26.8},0).wait(1).to({rotation:8.1,x:62.9,y:25.9},0).wait(1).to({rotation:7.5,x:63.2,y:24.9},0).wait(1).to({rotation:6.7,x:63.5,y:23.6},0).wait(1).to({rotation:6,x:63.8,y:22.4},0).wait(1).to({rotation:5.3,x:64.1,y:21.2},0).wait(1).to({rotation:4.7,x:64.4,y:20.3},0).wait(1).to({rotation:4.4,x:64.5,y:19.7},0).wait(1).to({regX:-33,regY:-44.1,rotation:4.3,x:35,y:-26.9},0).wait(2));

	// Body
	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.setTransform(-3.7,39.1);

	this.instance_4 = new lib.Tween62("synched",0);
	this.instance_4.setTransform(-7.3,41.4,1,1,5);
	this.instance_4._off = true;

	this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,rotation:5,x:-7.3,y:41.4},9,cjs.Ease.get(1)).wait(11).to({_off:false,rotation:0,x:-3.7,y:39.1},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},9,cjs.Ease.get(1)).wait(1).to({rotation:4.9,y:41.3},0).wait(1).to({rotation:4.7,x:-7.1,y:41.2},0).wait(1).to({rotation:4.3,x:-6.9,y:41},0).wait(1).to({rotation:3.8,x:-6.5,y:40.8},0).wait(1).to({rotation:3.2,x:-6,y:40.5},0).wait(1).to({rotation:2.4,x:-5.5,y:40.2},0).wait(1).to({rotation:1.7,x:-4.9,y:39.8},0).wait(1).to({rotation:1,x:-4.4,y:39.5},0).wait(1).to({rotation:0.4,x:-4,y:39.3},0).wait(1).to({rotation:0.1,x:-3.8,y:39.1},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.9,-190.5,295.2,265.6);


(lib.Cookiefiretruck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9EZ2MAAAgzrMA6JAAAMAAAAzrg");
	mask.setTransform(7.2,-90.3);

	// Head
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(2.7,-81.4,1,1,4.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.3,x:9.6,y:-78.1},9,cjs.Ease.get(1)).wait(1).to({rotation:9.2,x:9.5,y:-78.2},0).wait(1).to({rotation:9,x:9.2,y:-78.3},0).wait(1).to({rotation:8.6,x:8.7,y:-78.6},0).wait(1).to({rotation:8.1,x:7.9,y:-78.9},0).wait(1).to({rotation:7.5,x:7,y:-79.4},0).wait(1).to({rotation:6.7,x:6,y:-79.8},0).wait(1).to({rotation:6,x:5,y:-80.3},0).wait(1).to({rotation:5.3,x:4,y:-80.8},0).wait(1).to({rotation:4.7,x:3.3,y:-81.2},0).wait(1).to({rotation:4.4,x:2.9,y:-81.4},0).wait(1).to({rotation:4.3,x:2.7},0).wait(2));

	// Rarm
	this.instance_1 = new lib.Tween22firetruck("synched",0);
	this.instance_1.setTransform(-43,-25.7,1,1,0,154.1,-25.9,33.1,-41.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:191,skewY:11,x:-40.8,y:-26.6},9,cjs.Ease.get(1)).wait(1).to({regX:-18.7,regY:16.4,skewX:190.5,skewY:10.5,x:-81.3,y:-92.5},0).wait(1).to({skewX:188.9,skewY:8.9,x:-83.2,y:-91.4},0).wait(1).to({skewX:186.2,skewY:6.2,x:-86.4,y:-89.2},0).wait(1).to({skewX:182.4,skewY:2.4,x:-90.7,y:-86},0).wait(1).to({skewX:177.5,skewY:-2.5,x:-95.9,y:-81.5},0).wait(1).to({skewX:172.1,skewY:-7.9,x:-101.2,y:-75.9},0).wait(1).to({skewX:166.5,skewY:-13.5,x:-106.1,y:-69.7},0).wait(1).to({skewX:161.4,skewY:-18.6,x:-110,y:-63.8},0).wait(1).to({skewX:157.4,skewY:-22.6,x:-112.7,y:-58.9},0).wait(1).to({skewX:154.9,skewY:-25.1,x:-114.3,y:-55.9},0).wait(1).to({regX:33.1,regY:-41.1,skewX:154.1,skewY:-25.9,x:-43,y:-25.7},0).wait(2));

	// Larm
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(35,-26.9,1,1,4.3,0,0,-33,-44.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:9.3,x:36.9,y:-20.9},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,rotation:9.2,x:62.4,y:27.7},0).wait(1).to({rotation:9,x:62.5,y:27.4},0).wait(1).to({rotation:8.6,x:62.6,y:26.8},0).wait(1).to({rotation:8.1,x:62.9,y:25.9},0).wait(1).to({rotation:7.5,x:63.2,y:24.9},0).wait(1).to({rotation:6.7,x:63.5,y:23.6},0).wait(1).to({rotation:6,x:63.8,y:22.4},0).wait(1).to({rotation:5.3,x:64.1,y:21.2},0).wait(1).to({rotation:4.7,x:64.4,y:20.3},0).wait(1).to({rotation:4.4,x:64.5,y:19.7},0).wait(1).to({regX:-33,regY:-44.1,rotation:4.3,x:35,y:-26.9},0).wait(2));

	// Body
	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.setTransform(-3.7,39.1);

	this.instance_4 = new lib.Tween62("synched",0);
	this.instance_4.setTransform(-7.3,41.4,1,1,5);
	this.instance_4._off = true;

	this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,rotation:5,x:-7.3,y:41.4},9,cjs.Ease.get(1)).wait(11).to({_off:false,rotation:0,x:-3.7,y:39.1},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},9,cjs.Ease.get(1)).wait(1).to({rotation:4.9,y:41.3},0).wait(1).to({rotation:4.7,x:-7.1,y:41.2},0).wait(1).to({rotation:4.3,x:-6.9,y:41},0).wait(1).to({rotation:3.8,x:-6.5,y:40.8},0).wait(1).to({rotation:3.2,x:-6,y:40.5},0).wait(1).to({rotation:2.4,x:-5.5,y:40.2},0).wait(1).to({rotation:1.7,x:-4.9,y:39.8},0).wait(1).to({rotation:1,x:-4.4,y:39.5},0).wait(1).to({rotation:0.4,x:-4,y:39.3},0).wait(1).to({rotation:0.1,x:-3.8,y:39.1},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.9,-175.4,295.2,250.5);


(lib.Cookiecar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9EZ2MAAAgzrMA6JAAAMAAAAzrg");
	mask.setTransform(7.2,-90.3);

	// Head
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(2.7,-81.4,1,1,4.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.3,x:9.6,y:-78.1},9,cjs.Ease.get(1)).wait(1).to({rotation:9.2,x:9.5,y:-78.2},0).wait(1).to({rotation:9,x:9.2,y:-78.3},0).wait(1).to({rotation:8.6,x:8.7,y:-78.6},0).wait(1).to({rotation:8.1,x:7.9,y:-78.9},0).wait(1).to({rotation:7.5,x:7,y:-79.4},0).wait(1).to({rotation:6.7,x:6,y:-79.8},0).wait(1).to({rotation:6,x:5,y:-80.3},0).wait(1).to({rotation:5.3,x:4,y:-80.8},0).wait(1).to({rotation:4.7,x:3.3,y:-81.2},0).wait(1).to({rotation:4.4,x:2.9,y:-81.4},0).wait(1).to({rotation:4.3,x:2.7},0).wait(2));

	// Rarm
	this.instance_1 = new lib.Tween22car("synched",0);
	this.instance_1.setTransform(-43,-25.7,1,1,0,154.1,-25.9,33.1,-41.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:191,skewY:11,x:-40.8,y:-26.6},9,cjs.Ease.get(1)).wait(1).to({regX:-12.2,regY:16.4,skewX:190.5,skewY:10.5,x:-74.9,y:-91.4},0).wait(1).to({skewX:188.9,skewY:8.9,x:-76.8,y:-90.4},0).wait(1).to({skewX:186.2,skewY:6.2,x:-80,y:-88.5},0).wait(1).to({skewX:182.4,skewY:2.4,x:-84.2,y:-85.7},0).wait(1).to({skewX:177.5,skewY:-2.5,x:-89.4,y:-81.8},0).wait(1).to({skewX:172.1,skewY:-7.9,x:-94.8,y:-76.8},0).wait(1).to({skewX:166.5,skewY:-13.5,x:-99.8,y:-71.3},0).wait(1).to({skewX:161.4,skewY:-18.6,x:-103.9,y:-65.9},0).wait(1).to({skewX:157.4,skewY:-22.6,x:-106.7,y:-61.4},0).wait(1).to({skewX:154.9,skewY:-25.1,x:-108.4,y:-58.6},0).wait(1).to({regX:33.1,regY:-41.1,skewX:154.1,skewY:-25.9,x:-43,y:-25.7},0).wait(2));

	// Larm
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(35,-26.9,1,1,4.3,0,0,-33,-44.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:9.3,x:36.9,y:-20.9},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,rotation:9.2,x:62.4,y:27.7},0).wait(1).to({rotation:9,x:62.5,y:27.4},0).wait(1).to({rotation:8.6,x:62.6,y:26.8},0).wait(1).to({rotation:8.1,x:62.9,y:25.9},0).wait(1).to({rotation:7.5,x:63.2,y:24.9},0).wait(1).to({rotation:6.7,x:63.5,y:23.6},0).wait(1).to({rotation:6,x:63.8,y:22.4},0).wait(1).to({rotation:5.3,x:64.1,y:21.2},0).wait(1).to({rotation:4.7,x:64.4,y:20.3},0).wait(1).to({rotation:4.4,x:64.5,y:19.7},0).wait(1).to({regX:-33,regY:-44.1,rotation:4.3,x:35,y:-26.9},0).wait(2));

	// Body
	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.setTransform(-3.7,39.1);

	this.instance_4 = new lib.Tween62("synched",0);
	this.instance_4.setTransform(-7.3,41.4,1,1,5);
	this.instance_4._off = true;

	this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,rotation:5,x:-7.3,y:41.4},9,cjs.Ease.get(1)).wait(11).to({_off:false,rotation:0,x:-3.7,y:39.1},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},9,cjs.Ease.get(1)).wait(1).to({rotation:4.9,y:41.3},0).wait(1).to({rotation:4.7,x:-7.1,y:41.2},0).wait(1).to({rotation:4.3,x:-6.9,y:41},0).wait(1).to({rotation:3.8,x:-6.5,y:40.8},0).wait(1).to({rotation:3.2,x:-6,y:40.5},0).wait(1).to({rotation:2.4,x:-5.5,y:40.2},0).wait(1).to({rotation:1.7,x:-4.9,y:39.8},0).wait(1).to({rotation:1,x:-4.4,y:39.5},0).wait(1).to({rotation:0.4,x:-4,y:39.3},0).wait(1).to({rotation:0.1,x:-3.8,y:39.1},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.9,-173,295.2,248.1);


(lib.Cookieblock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9EZ2MAAAgzrMA6JAAAMAAAAzrg");
	mask.setTransform(7.2,-90.3);

	// Head
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(2.7,-81.4,1,1,4.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.3,x:9.6,y:-78.1},9,cjs.Ease.get(1)).wait(1).to({rotation:9.2,x:9.5,y:-78.2},0).wait(1).to({rotation:9,x:9.2,y:-78.3},0).wait(1).to({rotation:8.7,x:8.8,y:-78.5},0).wait(1).to({rotation:8.3,x:8.2,y:-78.8},0).wait(1).to({rotation:7.7,x:7.4,y:-79.2},0).wait(1).to({rotation:7.1,x:6.5,y:-79.6},0).wait(1).to({rotation:6.4,x:5.6,y:-80.1},0).wait(1).to({rotation:5.7,x:4.7,y:-80.5},0).wait(1).to({rotation:5.1,x:3.8,y:-80.9},0).wait(1).to({rotation:4.7,x:3.2,y:-81.2},0).wait(1).to({rotation:4.4,x:2.8,y:-81.4},0).wait(1).to({rotation:4.3,x:2.7},0).wait(1));

	// Rarm
	this.instance_1 = new lib.Tween22block("synched",0);
	this.instance_1.setTransform(-43,-25.7,1,1,0,154.1,-25.9,33.1,-41.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:191,skewY:11,x:-40.8,y:-26.6},9,cjs.Ease.get(1)).wait(1).to({regX:-17.7,regY:21.1,skewX:190.6,skewY:10.6,x:-79.3,y:-97.1},0).wait(1).to({skewX:189.3,skewY:9.3,x:-81,y:-96.1},0).wait(1).to({skewX:187,skewY:7,x:-83.9,y:-94.4},0).wait(1).to({skewX:183.8,skewY:3.8,x:-87.8,y:-91.8},0).wait(1).to({skewX:179.7,skewY:-0.3,x:-92.7,y:-88.2},0).wait(1).to({skewX:174.9,skewY:-5.1,x:-98,y:-83.6},0).wait(1).to({skewX:169.7,skewY:-10.3,x:-103.2,y:-78.2},0).wait(1).to({skewX:164.7,skewY:-15.3,x:-107.8,y:-72.5},0).wait(1).to({skewX:160.3,skewY:-19.7,x:-111.4,y:-67.2},0).wait(1).to({skewX:156.9,skewY:-23.1,x:-114,y:-63},0).wait(1).to({skewX:154.8,skewY:-25.2,x:-115.4,y:-60.3},0).wait(1).to({regX:33.1,regY:-41.1,skewX:154.1,skewY:-25.9,x:-43,y:-25.7},0).wait(1));

	// Larm
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(35,-26.9,1,1,4.3,0,0,-33,-44.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:9.3,x:36.9,y:-20.9},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,rotation:9.2,x:62.4,y:27.8},0).wait(1).to({rotation:9,x:62.5,y:27.5},0).wait(1).to({rotation:8.7,x:62.6,y:27},0).wait(1).to({rotation:8.3,x:62.8,y:26.2},0).wait(1).to({rotation:7.7,x:63.1,y:25.3},0).wait(1).to({rotation:7.1,x:63.3,y:24.3},0).wait(1).to({rotation:6.4,x:63.6,y:23.1},0).wait(1).to({rotation:5.7,x:63.9,y:22},0).wait(1).to({rotation:5.1,x:64.2,y:21},0).wait(1).to({rotation:4.7,x:64.4,y:20.2},0).wait(1).to({rotation:4.4,x:64.5,y:19.7},0).wait(1).to({regX:-33,regY:-44.1,rotation:4.3,x:35,y:-26.9},0).wait(1));

	// Body
	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.setTransform(-3.7,39.1);

	this.instance_4 = new lib.Tween62("synched",0);
	this.instance_4.setTransform(-7.3,41.4,1,1,5);
	this.instance_4._off = true;

	this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,rotation:5,x:-7.3,y:41.4},9,cjs.Ease.get(1)).wait(12).to({_off:false,rotation:0,x:-3.7,y:39.1},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},9,cjs.Ease.get(1)).wait(1).to({rotation:4.9,y:41.3},0).wait(1).to({rotation:4.7,x:-7.2,y:41.2},0).wait(1).to({rotation:4.4,x:-7,y:41.1},0).wait(1).to({rotation:4,x:-6.6,y:40.9},0).wait(1).to({rotation:3.4,x:-6.2,y:40.6},0).wait(1).to({rotation:2.8,x:-5.8,y:40.3},0).wait(1).to({rotation:2.1,x:-5.2,y:40},0).wait(1).to({rotation:1.4,x:-4.7,y:39.7},0).wait(1).to({rotation:0.8,x:-4.3,y:39.4},0).wait(1).to({rotation:0.4,x:-4,y:39.2},0).wait(1).to({rotation:0.1,x:-3.8,y:39.1},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.9,-177.5,295.2,252.6);


(lib.Cookieball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9EZ2MAAAgzrMA6JAAAMAAAAzrg");
	mask.setTransform(7.2,-90.3);

	// Head
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(2.7,-81.4,1,1,4.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.3,x:9.6,y:-78.1},9,cjs.Ease.get(1)).wait(1).to({rotation:9.2,x:9.5,y:-78.2},0).wait(1).to({rotation:9,x:9.2,y:-78.3},0).wait(1).to({rotation:8.7,x:8.8,y:-78.5},0).wait(1).to({rotation:8.3,x:8.2,y:-78.8},0).wait(1).to({rotation:7.7,x:7.4,y:-79.2},0).wait(1).to({rotation:7.1,x:6.5,y:-79.6},0).wait(1).to({rotation:6.4,x:5.6,y:-80.1},0).wait(1).to({rotation:5.7,x:4.7,y:-80.5},0).wait(1).to({rotation:5.1,x:3.8,y:-80.9},0).wait(1).to({rotation:4.7,x:3.2,y:-81.2},0).wait(1).to({rotation:4.4,x:2.8,y:-81.4},0).wait(1).to({rotation:4.3,x:2.7},0).wait(1));

	// Rarm
	this.instance_1 = new lib.Tween22ball("synched",0);
	this.instance_1.setTransform(-43,-25.7,1,1,0,154.1,-25.9,33.1,-41.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:191,skewY:11,x:-40.8,y:-26.6},9,cjs.Ease.get(1)).wait(1).to({regX:-5.1,regY:10.7,skewX:190.6,skewY:10.6,x:-68.9,y:-84.5},0).wait(1).to({skewX:189.3,skewY:9.3,x:-70.3,y:-83.8},0).wait(1).to({skewX:187,skewY:7,x:-72.7,y:-82.5},0).wait(1).to({skewX:183.8,skewY:3.8,x:-76,y:-80.6},0).wait(1).to({skewX:179.7,skewY:-0.3,x:-80,y:-77.9},0).wait(1).to({skewX:174.9,skewY:-5.1,x:-84.5,y:-74.4},0).wait(1).to({skewX:169.7,skewY:-10.3,x:-88.9,y:-70.2},0).wait(1).to({skewX:164.7,skewY:-15.3,x:-92.9,y:-65.8},0).wait(1).to({skewX:160.3,skewY:-19.7,x:-96.1,y:-61.7},0).wait(1).to({skewX:156.9,skewY:-23.1,x:-98.3,y:-58.4},0).wait(1).to({skewX:154.8,skewY:-25.2,x:-99.6,y:-56.3},0).wait(1).to({regX:33.1,regY:-41.1,skewX:154.1,skewY:-25.9,x:-43,y:-25.7},0).wait(1));

	// Larm
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(35,-26.9,1,1,4.3,0,0,-33,-44.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:9.3,x:36.9,y:-20.9},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,rotation:9.2,x:62.4,y:27.8},0).wait(1).to({rotation:9,x:62.5,y:27.5},0).wait(1).to({rotation:8.7,x:62.6,y:27},0).wait(1).to({rotation:8.3,x:62.8,y:26.2},0).wait(1).to({rotation:7.7,x:63.1,y:25.3},0).wait(1).to({rotation:7.1,x:63.3,y:24.3},0).wait(1).to({rotation:6.4,x:63.6,y:23.1},0).wait(1).to({rotation:5.7,x:63.9,y:22},0).wait(1).to({rotation:5.1,x:64.2,y:21},0).wait(1).to({rotation:4.7,x:64.4,y:20.2},0).wait(1).to({rotation:4.4,x:64.5,y:19.7},0).wait(1).to({regX:-33,regY:-44.1,rotation:4.3,x:35,y:-26.9},0).wait(1));

	// Body
	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.setTransform(-3.7,39.1);

	this.instance_4 = new lib.Tween62("synched",0);
	this.instance_4.setTransform(-7.3,41.4,1,1,5);
	this.instance_4._off = true;

	this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,rotation:5,x:-7.3,y:41.4},9,cjs.Ease.get(1)).wait(12).to({_off:false,rotation:0,x:-3.7,y:39.1},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},9,cjs.Ease.get(1)).wait(1).to({rotation:4.9,y:41.3},0).wait(1).to({rotation:4.7,x:-7.2,y:41.2},0).wait(1).to({rotation:4.4,x:-7,y:41.1},0).wait(1).to({rotation:4,x:-6.6,y:40.9},0).wait(1).to({rotation:3.4,x:-6.2,y:40.6},0).wait(1).to({rotation:2.8,x:-5.8,y:40.3},0).wait(1).to({rotation:2.1,x:-5.2,y:40},0).wait(1).to({rotation:1.4,x:-4.7,y:39.7},0).wait(1).to({rotation:0.8,x:-4.3,y:39.4},0).wait(1).to({rotation:0.4,x:-4,y:39.2},0).wait(1).to({rotation:0.1,x:-3.8,y:39.1},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.8,-159.4,291.1,234.5);


(lib.Chamkireceive = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":19});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Rarm
	this.instance = new lib.Tween42("synched",0);
	this.instance.setTransform(23.2,19.2,1,1,0,0,0,-18.6,-22.2);

	this.instance_1 = new lib.Tween46("synched",0);
	this.instance_1.setTransform(0,29.8);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-23.2,y:9.2},5).to({rotation:-11.2,y:11.7},9,cjs.Ease.get(1)).wait(5).to({startPosition:0},0).to({rotation:55,y:16.7},5,cjs.Ease.get(-0.5)).to({_off:true,regX:0,regY:0,rotation:0,x:0,y:29.8},1).wait(35).to({_off:false,regX:-18.6,regY:-22.2,rotation:55,x:23.2,y:10.7},0).to({rotation:-11.2,y:14.2},5,cjs.Ease.get(0.66)).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},1).to({y:24.8},2).wait(1).to({y:24.3},0).wait(1).to({y:22.7},0).wait(1).to({y:19.9},0).wait(1).to({y:16.3},0).wait(1).to({y:12.8},0).wait(1).to({y:10.5},0).wait(1).to({y:9.8},0).to({y:24.8},5,cjs.Ease.get(-0.75)).to({y:9.8},5,cjs.Ease.get(0.75)).to({y:24.8},5,cjs.Ease.get(-0.75)).to({y:9.8},5,cjs.Ease.get(0.75)).to({y:15.3},5).to({_off:true},1).wait(20));

	// Larm
	this.instance_2 = new lib.Tween43("synched",0);
	this.instance_2.setTransform(-23.7,19.2,1,1,0,0,0,18.1,-22.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:26,x:-23.6,y:9.3},5).to({regX:18,regY:-22.1,rotation:12.3,x:-23.7,y:11.8},9,cjs.Ease.get(1)).wait(5).to({startPosition:0},0).to({regX:18.1,rotation:-57.2,x:-23.6,y:16.8},5,cjs.Ease.get(-0.5)).to({_off:true},1).wait(35).to({_off:false,regX:18,rotation:-58.4,x:-24.2,y:11.5},0).to({regX:17.9,rotation:12.8,y:14.5},5,cjs.Ease.get(0.66)).wait(15));

	// Head
	this.instance_3 = new lib.Tween44("synched",0);
	this.instance_3.setTransform(0,-44);

	this.instance_4 = new lib.Tween34copy("synched",0);
	this.instance_4.setTransform(0,-51.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween34("synched",0);
	this.instance_5.setTransform(0,-51.1);

	this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-53.6},5).to({y:-51.1},9,cjs.Ease.get(1)).to({_off:true},5).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({y:-46.1},8,cjs.Ease.get(0.66)).wait(1).to({y:-46.6},0).wait(1).to({y:-48.2},0).wait(1).to({y:-50.9},0).wait(1).to({y:-54.5},0).wait(1).to({y:-58},0).wait(1).to({y:-60.4},0).wait(1).to({y:-61.1},0).to({y:-46.1},5,cjs.Ease.get(-0.75)).to({y:-61.1},5,cjs.Ease.get(0.75)).to({y:-46.1},5,cjs.Ease.get(-0.75)).to({y:-61.1},5,cjs.Ease.get(0.75)).wait(1).to({y:-60.9},0).wait(1).to({y:-60.2},0).wait(1).to({y:-59.2},0).wait(1).to({y:-58},0).wait(1).to({y:-56.6},0).wait(1).to({y:-55.2},0).wait(1).to({y:-53.9},0).wait(1).to({y:-52.8},0).wait(1).to({y:-51.9},0).wait(1).to({y:-51.3},0).to({_off:true},1).wait(15));

	// Body
	this.instance_6 = new lib.Tween45("synched",0);
	this.instance_6.setTransform(0,71);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:63},5).to({y:65.5},9,cjs.Ease.get(1)).wait(5).to({startPosition:0},0).to({y:70.5},8,cjs.Ease.get(0.66)).wait(1).to({y:70},0).wait(1).to({y:68.4},0).wait(1).to({y:65.7},0).wait(1).to({y:62.1},0).wait(1).to({y:58.6},0).wait(1).to({y:56.2},0).wait(1).to({y:55.5},0).to({y:70.5},5,cjs.Ease.get(-0.75)).to({y:55.5},5,cjs.Ease.get(0.75)).to({y:70.5},5,cjs.Ease.get(-0.75)).to({y:55.5},5,cjs.Ease.get(0.75)).wait(1).to({y:55.7},0).wait(1).to({y:56.4},0).wait(1).to({y:57.4},0).wait(1).to({y:58.6},0).wait(1).to({y:60},0).wait(1).to({y:61.4},0).wait(1).to({y:62.7},0).wait(1).to({y:63.8},0).wait(1).to({y:64.7},0).wait(1).to({y:65.3},0).wait(1).to({y:65.5},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-111.7,195,166.6);


(lib.Chamkiidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Rarm
	this.instance = new lib.Chamkiarmstraight();
	this.instance.setTransform(66.8,10.4,1,1,0,0,180);

	this.instance_1 = new lib.Tween35("synched",0);
	this.instance_1.setTransform(41.8,41.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween39("synched",0);
	this.instance_2.setTransform(41.8,41.4);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},106).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_2}]},10).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(106).to({_off:false},0).to({rotation:5,x:44.6,y:45.2},10,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).to({_off:true,rotation:0,x:41.8,y:41.4},10,cjs.Ease.get(1)).wait(14));

	// Larm
	this.instance_3 = new lib.Chamkiarmstraight();
	this.instance_3.setTransform(-66.8,10.4);

	this.instance_4 = new lib.Tween36("synched",0);
	this.instance_4.setTransform(-24.1,17.2,1,1,0,0,0,17.7,-24.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween38("synched",0);
	this.instance_5.setTransform(-21,14.3,1,1,0,0,0,28.8,4.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween40("synched",0);
	this.instance_6.setTransform(-49.4,22.1,1,1,39.2);
	this.instance_6._off = true;

	this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},106).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},10).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(106).to({_off:false},0).to({rotation:40.4,x:-21,y:13.3},5).to({_off:true,regX:28.8,regY:4.6,rotation:0,y:14.3},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},1).to({rotation:18.7},4).to({rotation:-14.3},5).to({rotation:18.7},5).to({rotation:-14.3},5).to({rotation:18.7},5).to({rotation:-14.3},7,cjs.Ease.get(0.5)).to({_off:true},3).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(146).to({_off:false},0).to({rotation:0,x:-41.8,y:41.4},10,cjs.Ease.get(1)).wait(14));

	// Head
	this.instance_7 = new lib.Tween32("synched",0);
	this.instance_7.setTransform(0,-44);

	this.instance_8 = new lib.Tween33copy("synched",0);
	this.instance_8.setTransform(0,-44);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween33("synched",0);
	this.instance_9.setTransform(0,-44);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween34("synched",0);
	this.instance_10.setTransform(0,-40);
	this.instance_10._off = true;

	this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},19).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_8}]},35).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_8}]},33).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_9}]},30).to({state:[{t:this.instance_9}]},10).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({y:-40.8},3).to({_off:true,y:-44},3).wait(35).to({_off:false},0).to({y:-40.8},3).to({_off:true,y:-44},3).wait(33).to({_off:false},0).to({y:-40},6,cjs.Ease.get(1)).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},3).to({_off:true},35).wait(3).to({_off:false},3).to({_off:true},33).wait(47).to({_off:false,rotation:5,x:10.6,y:-45.9},0).to({rotation:0,x:0,y:-44},10,cjs.Ease.get(1)).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(105).to({_off:false},1).to({rotation:5,x:10.6,y:-45.9},10,cjs.Ease.get(1)).to({_off:true},30).wait(24));

	// Body
	this.instance_11 = new lib.Chamkibody();
	this.instance_11.setTransform(-51,8);

	this.instance_12 = new lib.Tween37("synched",0);
	this.instance_12.setTransform(0,71);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween41("synched",0);
	this.instance_13.setTransform(0,71);

	this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},106).to({state:[{t:this.instance_12}]},10).to({state:[{t:this.instance_12}]},30).to({state:[{t:this.instance_13}]},10).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(106).to({_off:false},0).to({rotation:5,x:0.4,y:71.1},10,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).to({_off:true,rotation:0,x:0,y:71},10,cjs.Ease.get(1)).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-104,195,158.9);


(lib.Chamkiconfused = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":88});

	// timeline functions:
	this.frame_139 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween47("synched",0);
	this.instance.setTransform(0,-44);

	this.instance_1 = new lib.Tween57("synched",0);
	this.instance_1.setTransform(0,-34);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween58("synched",0);
	this.instance_2.setTransform(23,-31);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween60copy("synched",0);
	this.instance_3.setTransform(-11.4,-40.5);

	this.instance_4 = new lib.Tween60("synched",0);
	this.instance_4.setTransform(-11.4,-40.5);
	this.instance_4._off = true;

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3,p:{y:-40.5}}]},1).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},11).to({state:[{t:this.instance_3,p:{y:-54.5}}]},48).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-34},9,cjs.Ease.get(1)).to({_off:true},7).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({y:-32},4,cjs.Ease.get(0.66)).to({_off:true,x:23,y:-31},1).wait(25).to({_off:false,x:0,y:-39},0).to({y:-37},2).to({_off:true},2).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},1).to({y:-46},8,cjs.Ease.get(0.75)).wait(11).to({regX:-24.2,regY:2.1,x:-1.2,y:-43.9},0).to({y:-41.5},5).to({_off:true},1).wait(4).to({_off:false,skewY:180,y:-40.4},0).to({y:-43.4},5).wait(11).to({startPosition:0},0).to({y:-39.4},5).to({_off:true,regX:0,regY:0,skewY:0,x:-11.4,y:-40.5},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(77).to({_off:false},0).to({y:-54.5},11,cjs.Ease.get(1)).to({_off:true},48).wait(4));

	// Rarm
	this.instance_5 = new lib.Tween54("synched",0);
	this.instance_5.setTransform(24.7,18.7,1,1,0,0,0,-17.1,-22.7);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-16.2,x:24.8,y:23.7},9,cjs.Ease.get(1)).wait(12).to({startPosition:0},0).to({regY:-22.8,rotation:7.3,y:18.7},8,cjs.Ease.get(0.75)).wait(37).to({rotation:7.3},0).to({y:23.7},5).to({_off:true},6).wait(63));

	// Larm
	this.instance_6 = new lib.Tween55("synched",0);
	this.instance_6.setTransform(-23.7,19.2,1,1,0,0,0,18.1,-22.2);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:15.2,y:24.2},9,cjs.Ease.get(1)).wait(12).to({startPosition:0},0).to({rotation:-7,x:-23.8,y:19.2},8,cjs.Ease.get(0.75)).wait(37).to({startPosition:0},0).to({y:24.2},5).to({_off:true},6).wait(63));

	// Body
	this.instance_7 = new lib.Tween56("synched",0);
	this.instance_7.setTransform(0,71);

	this.instance_8 = new lib.Tween61("synched",0);
	this.instance_8.setTransform(0,76);
	this.instance_8._off = true;

	this.instance_7.mask = this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:76},9,cjs.Ease.get(1)).wait(12).to({startPosition:0},0).to({y:71},8,cjs.Ease.get(0.75)).wait(37).to({startPosition:0},0).to({y:76},5).to({_off:true},6).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(77).to({_off:false},0).to({y:67},11,cjs.Ease.get(1)).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-104,195,158.9);


(lib.Chamkiring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Rarm
	this.instance = new lib.Tween38ring("synched",0);
	this.instance.setTransform(28.6,18.1,1,1,0,0,180,26.6,5.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26.5,skewX:-19.9,skewY:160.1,x:28.8,y:-5.1},7,cjs.Ease.get(1)).to({regX:26.6,skewX:0,skewY:180,x:28.6,y:18.1},7,cjs.Ease.get(-1)).to({y:24.6},3,cjs.Ease.get(1)).to({y:18.1},3).wait(4));

	// Head
	this.instance_1 = new lib.Tween34("synched",0);
	this.instance_1.setTransform(0,-44);

	this.instance_2 = new lib.Tween34copy("synched",0);
	this.instance_2.setTransform(0,-44);
	this.instance_2._off = true;

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4,x:-4,y:-62.4},7,cjs.Ease.get(1)).to({_off:true,rotation:0,x:0,y:-44},7,cjs.Ease.get(-1)).wait(3).to({_off:false},3).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},7,cjs.Ease.get(-1)).to({y:-37.5},3,cjs.Ease.get(1)).to({_off:true,y:-44},3).wait(4));

	// Larm
	this.instance_3 = new lib.Tween55("synched",0);
	this.instance_3.setTransform(-23.7,19.2,1,1,0,0,0,18.1,-22.2);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:18.5,x:-23.3,y:2.3},7,cjs.Ease.get(1)).to({rotation:0,x:-23.7,y:19.2},7,cjs.Ease.get(-1)).to({rotation:-15.7,y:25.7},3,cjs.Ease.get(1)).to({rotation:0,y:19.2},3).wait(4));

	// Body
	this.instance_4 = new lib.Tween56("synched",0);
	this.instance_4.setTransform(0,71);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-4,x:3.9,y:52.3},7,cjs.Ease.get(1)).to({rotation:0,x:0,y:71},7,cjs.Ease.get(-1)).to({y:77.5},3,cjs.Ease.get(1)).to({y:71},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.1,-128.3,222.7,183.3);


(lib.Chamkiblock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Rarm
	this.instance = new lib.Tween38block("synched",0);
	this.instance.setTransform(28.6,18.1,1,1,0,0,180,26.6,5.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26.5,skewX:-19.9,skewY:160.1,x:28.8,y:-5.1},7,cjs.Ease.get(1)).to({regX:26.6,skewX:0,skewY:180,x:28.6,y:18.1},7,cjs.Ease.get(-1)).to({y:24.6},3,cjs.Ease.get(1)).to({y:18.1},3).wait(4));

	// Head
	this.instance_1 = new lib.Tween34("synched",0);
	this.instance_1.setTransform(0,-44);

	this.instance_2 = new lib.Tween34copy("synched",0);
	this.instance_2.setTransform(0,-44);
	this.instance_2._off = true;

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4,x:-4,y:-62.4},7,cjs.Ease.get(1)).to({_off:true,rotation:0,x:0,y:-44},7,cjs.Ease.get(-1)).wait(3).to({_off:false},3).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},7,cjs.Ease.get(-1)).to({y:-37.5},3,cjs.Ease.get(1)).to({_off:true,y:-44},3).wait(4));

	// Larm
	this.instance_3 = new lib.Tween55("synched",0);
	this.instance_3.setTransform(-23.7,19.2,1,1,0,0,0,18.1,-22.2);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:18.5,x:-23.3,y:2.3},7,cjs.Ease.get(1)).to({rotation:0,x:-23.7,y:19.2},7,cjs.Ease.get(-1)).to({rotation:-15.7,y:25.7},3,cjs.Ease.get(1)).to({rotation:0,y:19.2},3).wait(4));

	// Body
	this.instance_4 = new lib.Tween56("synched",0);
	this.instance_4.setTransform(0,71);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-4,x:3.9,y:52.3},7,cjs.Ease.get(1)).to({rotation:0,x:0,y:71},7,cjs.Ease.get(-1)).to({y:77.5},3,cjs.Ease.get(1)).to({y:71},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.1,-128.3,237.9,183.3);


(lib.Chamkiball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Rarm
	this.instance = new lib.Tween38ball("synched",0);
	this.instance.setTransform(28.6,18.1,1,1,0,0,180,26.6,5.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26.5,skewX:-19.9,skewY:160.1,x:28.8,y:-5.1},7,cjs.Ease.get(1)).to({regX:26.6,skewX:0,skewY:180,x:28.6,y:18.1},7,cjs.Ease.get(-1)).to({y:24.6},3,cjs.Ease.get(1)).to({y:18.1},3).wait(4));

	// Head
	this.instance_1 = new lib.Tween34("synched",0);
	this.instance_1.setTransform(0,-44);

	this.instance_2 = new lib.Tween34copy("synched",0);
	this.instance_2.setTransform(0,-44);
	this.instance_2._off = true;

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4,x:-4,y:-62.4},7,cjs.Ease.get(1)).to({_off:true,rotation:0,x:0,y:-44},7,cjs.Ease.get(-1)).wait(3).to({_off:false},3).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},7,cjs.Ease.get(-1)).to({y:-37.5},3,cjs.Ease.get(1)).to({_off:true,y:-44},3).wait(4));

	// Larm
	this.instance_3 = new lib.Tween55("synched",0);
	this.instance_3.setTransform(-23.7,19.2,1,1,0,0,0,18.1,-22.2);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:18.5,x:-23.3,y:2.3},7,cjs.Ease.get(1)).to({rotation:0,x:-23.7,y:19.2},7,cjs.Ease.get(-1)).to({rotation:-15.7,y:25.7},3,cjs.Ease.get(1)).to({rotation:0,y:19.2},3).wait(4));

	// Body
	this.instance_4 = new lib.Tween56("synched",0);
	this.instance_4.setTransform(0,71);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-4,x:3.9,y:52.3},7,cjs.Ease.get(1)).to({rotation:0,x:0,y:71},7,cjs.Ease.get(-1)).to({y:77.5},3,cjs.Ease.get(1)).to({y:71},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.1,-128.3,229.2,183.3);


(lib.Belreceive = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":32});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween67("synched",0);
	this.instance.setTransform(0,-68);

	this.instance_1 = new lib.Tween68("synched",0);
	this.instance_1.setTransform(0,-65);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween68blink("synched",0);
	this.instance_2.setTransform(0,-71);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween69("synched",0);
	this.instance_3.setTransform(0,-64);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween69blink("synched",0);
	this.instance_4.setTransform(0,-64);
	this.instance_4._off = true;

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-65},6,cjs.Ease.get(1)).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},6,cjs.Ease.get(1)).to({y:-79},4).to({y:-71},8,cjs.Ease.get(0.66)).to({_off:true},7).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({_off:true,y:-64},7,cjs.Ease.get(1)).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},7,cjs.Ease.get(1)).to({rotation:11.2,x:24.2,y:-80.3},6,cjs.Ease.get(0.75)).to({rotation:0,x:0,y:-64},9,cjs.Ease.get(1)).to({startPosition:0},1,cjs.Ease.get(0.75)).to({rotation:11.2,x:24.2,y:-80.3},6,cjs.Ease.get(0.75)).to({rotation:0,x:0,y:-64},9,cjs.Ease.get(1)).to({startPosition:0},1,cjs.Ease.get(0.75)).to({rotation:11.2,x:24.2,y:-80.3},6,cjs.Ease.get(0.75)).to({rotation:0,x:0,y:-64},9,cjs.Ease.get(1)).to({_off:true},16).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).to({y:-61.6},4,cjs.Ease.get(0.75)).wait(1));

	// Larm
	this.instance_5 = new lib.Tween64("synched",0);
	this.instance_5.setTransform(26.4,-0.5,1,1,0,0,0,-24.9,-32.9);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-18,y:-0.4},6,cjs.Ease.get(1)).to({regY:-32.8,rotation:2.5,y:-14.4},4).to({rotation:-3.3,x:26.5,y:-6.4},8,cjs.Ease.get(0.66)).wait(7).to({startPosition:0},0).to({y:0.6},7,cjs.Ease.get(1)).to({rotation:-16.6,x:32.4,y:-10.4},6,cjs.Ease.get(0.75)).to({rotation:-3.3,x:26.5,y:0.6},9,cjs.Ease.get(1)).to({rotation:-3.3},1,cjs.Ease.get(0.75)).to({rotation:-16.6,x:32.4,y:-10.4},6,cjs.Ease.get(0.75)).to({rotation:-3.3,x:26.5,y:0.6},9,cjs.Ease.get(1)).to({rotation:-3.3},1,cjs.Ease.get(0.75)).to({rotation:-16.6,x:32.4,y:-10.4},6,cjs.Ease.get(0.75)).to({rotation:-3.3,x:26.5,y:0.6},9,cjs.Ease.get(1)).wait(21));

	// Rarm
	this.instance_6 = new lib.Tween65("synched",0);
	this.instance_6.setTransform(-22.5,-0.5,1,1,0,0,0,24.9,-32.9);

	this.instance_7 = new lib.Tween70("synched",0);
	this.instance_7.setTransform(-20.3,2.8,1,1,-11.2,0,0,32.3,-7.7);
	this.instance_7._off = true;

	this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-32.8,rotation:20.2,y:-0.4},6,cjs.Ease.get(1)).to({rotation:-6.7,x:-21.5,y:-14.4},4).to({regY:-32.9,rotation:2.8,y:-6.5},8,cjs.Ease.get(0.66)).wait(7).to({rotation:2.8},0).to({y:0.5},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({regY:-7.8,rotation:42.5,x:-14.4,y:-12.6},6,cjs.Ease.get(0.75)).to({regX:32.2,rotation:6.1,x:-20.4,y:2.8},9,cjs.Ease.get(1)).to({rotation:6.1},1,cjs.Ease.get(0.75)).to({regX:32.3,rotation:42.5,x:-14.4,y:-12.6},6,cjs.Ease.get(0.75)).to({regX:32.2,rotation:6.1,x:-20.4,y:2.8},9,cjs.Ease.get(1)).to({rotation:6.1},1,cjs.Ease.get(0.75)).to({regX:32.3,rotation:42.5,x:-14.4,y:-12.6},6,cjs.Ease.get(0.75)).to({regX:32.2,rotation:6.1,x:-20.4,y:2.8},9,cjs.Ease.get(1)).wait(11).to({rotation:5.8,x:-20.3},0).to({regX:32.3,regY:-7.7,rotation:-11.2},9).wait(1));

	// Body
	this.instance_8 = new lib.Tween66("synched",0);
	this.instance_8.setTransform(2.5,50.6);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},6,cjs.Ease.get(1)).to({y:36.6},4).to({y:44.6},8,cjs.Ease.get(0.66)).wait(7).to({startPosition:0},0).to({y:51.6},7,cjs.Ease.get(1)).to({rotation:5.4,x:3.7,y:38.2},6,cjs.Ease.get(0.75)).to({rotation:0,x:2.5,y:51.6},9,cjs.Ease.get(1)).to({startPosition:0},1,cjs.Ease.get(0.75)).to({rotation:5.4,x:3.7,y:38.2},6,cjs.Ease.get(0.75)).to({rotation:0,x:2.5,y:51.6},9,cjs.Ease.get(1)).to({startPosition:0},1,cjs.Ease.get(0.75)).to({rotation:5.4,x:3.7,y:38.2},6,cjs.Ease.get(0.75)).to({rotation:0,x:2.5,y:51.6},9,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-134.5,234,189.4);


(lib.Belidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween63("synched",0);
	this.instance.setTransform(0,-14.3,1,1,0,0,0,0,53.7);

	this.instance_1 = new lib.Tween63blink("synched",0);
	this.instance_1.setTransform(0,-10.9,1,1,0,0,0,0,53.7);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({startPosition:0},0).to({y:-6.3},9,cjs.Ease.get(0.75)).wait(2).to({startPosition:0},0).to({_off:true,y:-10.9},4,cjs.Ease.get(-1)).to({_off:false,y:-24.7},4).to({y:-14.3},10,cjs.Ease.get(0.75)).to({_off:true},36).wait(3).to({_off:false},3).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},4,cjs.Ease.get(-1)).to({_off:true,y:-24.7},4).wait(46).to({_off:false,y:-14.3},0).to({y:-11.1},3).to({_off:true,y:-14.3},3).wait(30));

	// Rarm
	this.instance_2 = new lib.Tween64("synched",0);
	this.instance_2.setTransform(26.4,-0.5,1,1,0,0,0,-24.9,-32.9);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({startPosition:0},0).to({regX:-24.8,rotation:-19.7,y:7.5},9,cjs.Ease.get(0.75)).wait(2).to({startPosition:0},0).to({rotation:11.5,y:-8.4},8,cjs.Ease.get(-1)).to({regX:-24.9,rotation:0,y:-0.5},10,cjs.Ease.get(0.75)).wait(72));

	// Larm
	this.instance_3 = new lib.Tween65("synched",0);
	this.instance_3.setTransform(-22.5,-0.5,1,1,0,0,0,24.9,-32.9);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({startPosition:0},0).to({regY:-32.8,rotation:20,y:7.6},9,cjs.Ease.get(0.75)).wait(2).to({startPosition:0},0).to({rotation:-12.5,y:-8.5},8,cjs.Ease.get(-1)).to({regY:-32.9,rotation:0,y:-0.5},10,cjs.Ease.get(0.75)).wait(72));

	// Body
	this.instance_4 = new lib.Tween66("synched",0);
	this.instance_4.setTransform(2.5,50.6);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({startPosition:0},0).to({y:58.6},9,cjs.Ease.get(0.75)).wait(2).to({startPosition:0},0).to({y:42.6},8,cjs.Ease.get(-1)).to({y:50.6},10,cjs.Ease.get(0.75)).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-134.5,234,189.4);


(lib.Belconfused_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":69});

	// timeline functions:
	this.frame_189 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(189).call(this.frame_189).wait(1));

	// Head
	this.instance = new lib.Tween71("synched",0);
	this.instance.setTransform(0,-65);

	this.instance_1 = new lib.Tween71blink("synched",0);
	this.instance_1.setTransform(0,-65.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween71lookup("synched",0);
	this.instance_2.setTransform(0,-62.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-70.6},9,cjs.Ease.get(1)).to({y:-60.6},9,cjs.Ease.get(0.5)).to({y:-65.6},5,cjs.Ease.get(0.75)).to({_off:true},26).wait(59).to({_off:false,y:-66.1},0).to({y:-61.1},6,cjs.Ease.get(1)).to({_off:true},23).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({y:-60.6},8,cjs.Ease.get(1)).to({_off:true,y:-62.8},6,cjs.Ease.get(-1)).wait(41).to({_off:false,y:-66.1},0).to({_off:true},4).wait(29).to({_off:false,y:-61.1},0).to({_off:true},4).wait(38).to({_off:false,y:-66.1},0).to({_off:true,y:-64.1},5).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({_off:false},6,cjs.Ease.get(-1)).to({y:-66.1},6,cjs.Ease.get(1)).to({_off:true},35).wait(37).to({_off:false,y:-61.1},0).to({y:-66.1},8,cjs.Ease.get(1)).to({_off:true},30).to({_off:false,y:-64.1},5).to({y:-66.1},5).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-110.5}).wait(10).to({graphics:null,x:0,y:0}).wait(180));

	// Larm
	this.instance_3 = new lib.Tween72("synched",0);
	this.instance_3.setTransform(24.4,0.9,1,1,0,0,180,23.3,-35.5);

	this.instance_4 = new lib.Tween73("synched",0);
	this.instance_4.setTransform(19.8,-0.1,1,1,0,1.3,-178.7,23.3,-35.5);

	this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},8).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,skewX:-0.6,skewY:179.4,x:48,y:36.1},0).wait(1).to({skewX:-2.6,skewY:177.4,x:49,y:35},0).wait(1).to({skewX:-5.7,skewY:174.3,x:50.7,y:33.2},0).wait(1).to({skewX:-9.9,skewY:170.1,x:52.7,y:30.6},0).wait(1).to({skewX:-14.4,skewY:165.6,x:54.8,y:27.7},0).wait(1).to({skewX:-18.5,skewY:161.5,x:56.5,y:24.8},0).wait(1).to({skewX:-21.7,skewY:158.3,x:57.6,y:22.6},0).wait(1).to({skewX:-23.6,skewY:156.4,x:58.3,y:21.1},0).wait(1).to({regX:23.3,regY:-35.5,skewX:-24.2,skewY:155.8,x:22.8,y:-2.1},0).to({startPosition:0},1).to({_off:true,skewX:1.3,skewY:181.3,x:19.8,y:-0.1},8).wait(172));

	// Rarm
	this.instance_5 = new lib.Tween72("synched",0);
	this.instance_5.setTransform(-21.1,1,1,1,0,0,0,22.6,-35.4);

	this.instance_6 = new lib.Tween73("synched",0);
	this.instance_6.setTransform(-16.1,0.2,1,1,-2.8,0,0,22.6,-35.4);

	this.instance_5.mask = this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},8).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,rotation:0.7,x:-44.1,y:36.1},0).wait(1).to({rotation:2.7,x:-45.2,y:35},0).wait(1).to({rotation:6,x:-46.8,y:33.2},0).wait(1).to({rotation:10.3,x:-48.9,y:30.7},0).wait(1).to({rotation:14.9,x:-50.9,y:27.7},0).wait(1).to({rotation:19.2,x:-52.6,y:24.8},0).wait(1).to({rotation:22.5,x:-53.8,y:22.5},0).wait(1).to({rotation:24.5,x:-54.4,y:21.1},0).wait(1).to({regX:22.6,regY:-35.3,rotation:25.2,x:-19.1,y:-1.8},0).to({startPosition:0},1).to({_off:true,regY:-35.4,rotation:-2.8,x:-16.1,y:0.2},8).wait(172));

	// Mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask_1.setTransform(0,-110.5);

	// Body
	this.instance_7 = new lib.Tween66("synched",0);
	this.instance_7.setTransform(2.5,50.6);

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-137.1,234,192);


(lib.Belring = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":17});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween74("synched",0);
	this.instance.setTransform(1.4,-1.4,1,1,0,0,0,-11.6,64.7);

	this.instance_1 = new lib.Tween74blink("synched",0);
	this.instance_1.setTransform(1.5,-1.9,1,1,-1.5,0,0,-11.5,64.6);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11.5,rotation:5.4,x:1.5},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({_off:true,regY:64.6,rotation:-1.5,y:-1.9},7,cjs.Ease.get(-1)).wait(28).to({_off:false,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:8,x:15.5,y:-9.9},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({rotation:-1.5,x:1.5,y:8.1},4).to({_off:true,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));

	// Larm
	this.instance_2 = new lib.Tween72("synched",0);
	this.instance_2.setTransform(17.2,6.3,1,1,0,1.5,-178.5,23.3,-35.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-35.4,skewX:-23.7,skewY:-203.7,y:6.4},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({y:5.9},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({skewX:-4.8,skewY:-184.8,x:20.3,y:-2.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,skewX:-4.8},0).to({skewX:-23.7,skewY:-203.7,x:17.2,y:15.9},4).to({y:6.4},4,cjs.Ease.get(0.5)).wait(4));

	// Rarm
	this.instance_3 = new lib.Tween75ring("synched",0);
	this.instance_3.setTransform(-19.4,6.2,1,1,-23.7,0,0,55,18.1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.2,x:-19.5},11,cjs.Ease.get(1)).wait(6).to({rotation:4.2},0).to({rotation:-11,y:5.7},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:21.2,x:-14.5,y:-6.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,rotation:21.2},0).to({rotation:-11,x:-19.5,y:15.7},4).to({rotation:4.2,y:6.2},4,cjs.Ease.get(0.5)).wait(4));

	// Body
	this.instance_4 = new lib.Tween66("synched",0);
	this.instance_4.setTransform(2.5,60.6);

	this.instance_5 = new lib.Tween76ring("synched",0);
	this.instance_5.setTransform(14.2,-19.3);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({startPosition:0},0).to({y:60.1},7,cjs.Ease.get(-1)).wait(2).to({startPosition:0},0).to({y:57.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({y:70.1},4).to({y:60.6},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({rotation:9.2,y:-64.8},8,cjs.Ease.get(1)).to({rotation:0,y:-19.3},8,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.9,-142.7,287.7,197.6);


(lib.Belhorse = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":17});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween74("synched",0);
	this.instance.setTransform(1.4,-1.4,1,1,0,0,0,-11.6,64.7);

	this.instance_1 = new lib.Tween74blink("synched",0);
	this.instance_1.setTransform(1.5,-1.9,1,1,-1.5,0,0,-11.5,64.6);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11.5,rotation:5.4,x:1.5},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({_off:true,regY:64.6,rotation:-1.5,y:-1.9},7,cjs.Ease.get(-1)).wait(28).to({_off:false,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:8,x:15.5,y:-9.9},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({rotation:-1.5,x:1.5,y:8.1},4).to({_off:true,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));

	// Larm
	this.instance_2 = new lib.Tween72("synched",0);
	this.instance_2.setTransform(17.2,6.3,1,1,0,1.5,-178.5,23.3,-35.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-35.4,skewX:-23.7,skewY:-203.7,y:6.4},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({y:5.9},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({skewX:-4.8,skewY:-184.8,x:20.3,y:-2.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,skewX:-4.8},0).to({skewX:-23.7,skewY:-203.7,x:17.2,y:15.9},4).to({y:6.4},4,cjs.Ease.get(0.5)).wait(4));

	// Rarm
	this.instance_3 = new lib.Tween75horse("synched",0);
	this.instance_3.setTransform(-19.4,6.2,1,1,-23.7,0,0,55,18.1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.2,x:-19.5},11,cjs.Ease.get(1)).wait(6).to({rotation:4.2},0).to({rotation:-11,y:5.7},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:21.2,x:-14.5,y:-6.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,rotation:21.2},0).to({rotation:-11,x:-19.5,y:15.7},4).to({rotation:4.2,y:6.2},4,cjs.Ease.get(0.5)).wait(4));

	// Body
	this.instance_4 = new lib.Tween66("synched",0);
	this.instance_4.setTransform(2.5,60.6);

	this.instance_5 = new lib.Tween76horse("synched",0);
	this.instance_5.setTransform(14.2,-19.3);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({startPosition:0},0).to({y:60.1},7,cjs.Ease.get(-1)).wait(2).to({startPosition:0},0).to({y:57.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({y:70.1},4).to({y:60.6},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({rotation:9.2,y:-64.8},8,cjs.Ease.get(1)).to({rotation:0,y:-19.3},8,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.4,-142.7,290.2,197.6);


(lib.Belfiretruck = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":17});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween74("synched",0);
	this.instance.setTransform(1.4,-1.4,1,1,0,0,0,-11.6,64.7);

	this.instance_1 = new lib.Tween74blink("synched",0);
	this.instance_1.setTransform(1.5,-1.9,1,1,-1.5,0,0,-11.5,64.6);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11.5,rotation:5.4,x:1.5},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({_off:true,regY:64.6,rotation:-1.5,y:-1.9},7,cjs.Ease.get(-1)).wait(28).to({_off:false,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:8,x:15.5,y:-9.9},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({rotation:-1.5,x:1.5,y:8.1},4).to({_off:true,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));

	// Larm
	this.instance_2 = new lib.Tween72("synched",0);
	this.instance_2.setTransform(17.2,6.3,1,1,0,1.5,-178.5,23.3,-35.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-35.4,skewX:-23.7,skewY:-203.7,y:6.4},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({y:5.9},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({skewX:-4.8,skewY:-184.8,x:20.3,y:-2.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,skewX:-4.8},0).to({skewX:-23.7,skewY:-203.7,x:17.2,y:15.9},4).to({y:6.4},4,cjs.Ease.get(0.5)).wait(4));

	// Rarm
	this.instance_3 = new lib.Tween75firetruck("synched",0);
	this.instance_3.setTransform(-19.4,6.2,1,1,-23.7,0,0,55,18.1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.2,x:-19.5},11,cjs.Ease.get(1)).wait(6).to({rotation:4.2},0).to({rotation:-11,y:5.7},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:21.2,x:-14.5,y:-6.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,rotation:21.2},0).to({rotation:-11,x:-19.5,y:15.7},4).to({rotation:4.2,y:6.2},4,cjs.Ease.get(0.5)).wait(4));

	// Body
	this.instance_4 = new lib.Tween66("synched",0);
	this.instance_4.setTransform(2.5,60.6);

	this.instance_5 = new lib.Tween76firetruck("synched",0);
	this.instance_5.setTransform(14.2,-19.3);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({startPosition:0},0).to({y:60.1},7,cjs.Ease.get(-1)).wait(2).to({startPosition:0},0).to({y:57.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({y:70.1},4).to({y:60.6},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({rotation:9.2,y:-64.8},8,cjs.Ease.get(1)).to({rotation:0,y:-19.3},8,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.8,-142.7,271.6,197.6);


(lib.Belcar = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":17});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween74("synched",0);
	this.instance.setTransform(1.4,-1.4,1,1,0,0,0,-11.6,64.7);

	this.instance_1 = new lib.Tween74blink("synched",0);
	this.instance_1.setTransform(1.5,-1.9,1,1,-1.5,0,0,-11.5,64.6);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11.5,rotation:5.4,x:1.5},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({_off:true,regY:64.6,rotation:-1.5,y:-1.9},7,cjs.Ease.get(-1)).wait(28).to({_off:false,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:8,x:15.5,y:-9.9},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({rotation:-1.5,x:1.5,y:8.1},4).to({_off:true,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));

	// Larm
	this.instance_2 = new lib.Tween72("synched",0);
	this.instance_2.setTransform(17.2,6.3,1,1,0,1.5,-178.5,23.3,-35.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-35.4,skewX:-23.7,skewY:-203.7,y:6.4},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({y:5.9},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({skewX:-4.8,skewY:-184.8,x:20.3,y:-2.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,skewX:-4.8},0).to({skewX:-23.7,skewY:-203.7,x:17.2,y:15.9},4).to({y:6.4},4,cjs.Ease.get(0.5)).wait(4));

	// Rarm
	this.instance_3 = new lib.Tween75car("synched",0);
	this.instance_3.setTransform(-19.4,6.2,1,1,-23.7,0,0,55,18.1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.2,x:-19.5},11,cjs.Ease.get(1)).wait(6).to({rotation:4.2},0).to({rotation:-11,y:5.7},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:21.2,x:-14.5,y:-6.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,rotation:21.2},0).to({rotation:-11,x:-19.5,y:15.7},4).to({rotation:4.2,y:6.2},4,cjs.Ease.get(0.5)).wait(4));

	// Body
	this.instance_4 = new lib.Tween66("synched",0);
	this.instance_4.setTransform(2.5,60.6);

	this.instance_5 = new lib.Tween76car("synched",0);
	this.instance_5.setTransform(14.2,-19.3);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({startPosition:0},0).to({y:60.1},7,cjs.Ease.get(-1)).wait(2).to({startPosition:0},0).to({y:57.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({y:70.1},4).to({y:60.6},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({rotation:9.2,y:-64.8},8,cjs.Ease.get(1)).to({rotation:0,y:-19.3},8,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-142.7,272,197.6);


(lib.Belblock = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":17});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween74("synched",0);
	this.instance.setTransform(1.4,-1.4,1,1,0,0,0,-11.6,64.7);

	this.instance_1 = new lib.Tween74blink("synched",0);
	this.instance_1.setTransform(1.5,-1.9,1,1,-1.5,0,0,-11.5,64.6);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11.5,rotation:5.4,x:1.5},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({_off:true,regY:64.6,rotation:-1.5,y:-1.9},7,cjs.Ease.get(-1)).wait(28).to({_off:false,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:8,x:15.5,y:-9.9},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({rotation:-1.5,x:1.5,y:8.1},4).to({_off:true,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));

	// Larm
	this.instance_2 = new lib.Tween72("synched",0);
	this.instance_2.setTransform(17.2,6.3,1,1,0,1.5,-178.5,23.3,-35.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-35.4,skewX:-23.7,skewY:-203.7,y:6.4},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({y:5.9},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({skewX:-4.8,skewY:-184.8,x:20.3,y:-2.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,skewX:-4.8},0).to({skewX:-23.7,skewY:-203.7,x:17.2,y:15.9},4).to({y:6.4},4,cjs.Ease.get(0.5)).wait(4));

	// Rarm
	this.instance_3 = new lib.Tween75block("synched",0);
	this.instance_3.setTransform(-19.4,6.2,1,1,-23.7,0,0,55,18.1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.2,x:-19.5},11,cjs.Ease.get(1)).wait(6).to({rotation:4.2},0).to({rotation:-11,y:5.7},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:21.2,x:-14.5,y:-6.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,rotation:21.2},0).to({rotation:-11,x:-19.5,y:15.7},4).to({rotation:4.2,y:6.2},4,cjs.Ease.get(0.5)).wait(4));

	// Body
	this.instance_4 = new lib.Tween66("synched",0);
	this.instance_4.setTransform(2.5,60.6);

	this.instance_5 = new lib.Tween76block("synched",0);
	this.instance_5.setTransform(14.2,-19.3);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({startPosition:0},0).to({y:60.1},7,cjs.Ease.get(-1)).wait(2).to({startPosition:0},0).to({y:57.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({y:70.1},4).to({y:60.6},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({rotation:9.2,y:-64.8},8,cjs.Ease.get(1)).to({rotation:0,y:-19.3},8,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.4,-142.7,290.2,197.6);


(lib.Belball = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Loop start":17});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("Loop start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z1MAAAgzqMAxzAAAMAAAAzqg");
	mask.setTransform(0,-110.5);

	// Head
	this.instance = new lib.Tween74("synched",0);
	this.instance.setTransform(1.4,-1.4,1,1,0,0,0,-11.6,64.7);

	this.instance_1 = new lib.Tween74blink("synched",0);
	this.instance_1.setTransform(1.5,-1.9,1,1,-1.5,0,0,-11.5,64.6);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11.5,rotation:5.4,x:1.5},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({_off:true,regY:64.6,rotation:-1.5,y:-1.9},7,cjs.Ease.get(-1)).wait(28).to({_off:false,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:8,x:15.5,y:-9.9},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({rotation:-1.5,x:1.5,y:8.1},4).to({_off:true,regY:64.7,rotation:5.4,y:-1.4},4,cjs.Ease.get(0.5)).wait(4));

	// Larm
	this.instance_2 = new lib.Tween72("synched",0);
	this.instance_2.setTransform(17.2,6.3,1,1,0,1.5,-178.5,23.3,-35.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-35.4,skewX:-23.7,skewY:-203.7,y:6.4},11,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({y:5.9},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({skewX:-4.8,skewY:-184.8,x:20.3,y:-2.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,skewX:-4.8},0).to({skewX:-23.7,skewY:-203.7,x:17.2,y:15.9},4).to({y:6.4},4,cjs.Ease.get(0.5)).wait(4));

	// Rarm
	this.instance_3 = new lib.Tween75("synched",0);
	this.instance_3.setTransform(-19.4,6.2,1,1,-23.7,0,0,55,18.1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.2,x:-19.5},11,cjs.Ease.get(1)).wait(6).to({rotation:4.2},0).to({rotation:-11,y:5.7},7,cjs.Ease.get(-1)).to({startPosition:0},2).to({rotation:21.2,x:-14.5,y:-6.3},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,rotation:21.2},0).to({rotation:-11,x:-19.5,y:15.7},4).to({rotation:4.2,y:6.2},4,cjs.Ease.get(0.5)).wait(4));

	// Body
	this.instance_4 = new lib.Tween66("synched",0);
	this.instance_4.setTransform(2.5,60.6);

	this.instance_5 = new lib.Tween76("synched",0);
	this.instance_5.setTransform(14.2,-19.3);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween77("synched",0);
	this.instance_6.setTransform(14.2,-64.8,1,1,9.2);
	this.instance_6._off = true;

	this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({startPosition:0},0).to({y:60.1},7,cjs.Ease.get(-1)).wait(2).to({startPosition:0},0).to({y:57.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).to({y:70.1},4).to({y:60.6},4,cjs.Ease.get(0.5)).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({_off:true,rotation:9.2,y:-64.8},8,cjs.Ease.get(1)).to({_off:false,rotation:0,y:-19.3},8,cjs.Ease.get(-1)).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},8,cjs.Ease.get(1)).to({_off:true,rotation:0,y:-19.3},8,cjs.Ease.get(-1)).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-142.7,281.2,197.6);


(lib.SelectionLily_1 = function() {
	this.initialize();

	// Layer 1
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(-1.6,128.7,0.736,0.287,0,0,0,100,100.1);

	this.instance = new lib.SelectionLily();
	this.instance.setTransform(-140.6,-151.2);

	this.addChild(this.instance,this.Hotzone);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.6,-151.2,295,308.7);


(lib.SelectionElmo_1 = function() {
	this.initialize();

	// Layer 1
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(163.4,302,0.736,0.287,0,0,0,100.1,100.1);

	this.instance = new lib.SelectionElmo();
	this.instance.setTransform(12.5,49.2);

	this.addChild(this.instance,this.Hotzone);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.5,49.2,302,312);


(lib.SelectionCookie_1 = function() {
	this.initialize();

	// Layer 1
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(165.1,300.9,0.717,0.264,0,0,0,99.9,99.9);

	this.instance = new lib.SelectionCookie();
	this.instance.setTransform(-20.8,-23.5);

	this.addChild(this.instance,this.Hotzone);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.8,-23.5,372,372);


(lib.SelectionChamki_1 = function() {
	this.initialize();

	// Layer 1
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(159.6,309.1,0.736,0.287,0,0,0,100.1,99.9);

	this.instance = new lib.SelectionChamki();
	this.instance.setTransform(-13.6,20.1);

	this.addChild(this.instance,this.Hotzone);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,20.1,338,332);


(lib.SelectionBel_1 = function() {
	this.initialize();

	// Layer 1
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(0.9,128.8,0.736,0.287,0,0,0,100,100.1);

	this.instance = new lib.SelectionBel();
	this.instance.setTransform(-172,-155);

	this.addChild(this.instance,this.Hotzone);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-172,-155,344,312.5);


(lib.Lily = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{Idle:0,Wait:1,Confused:2,Ball_play:3,Block_play:4,Ring_play:5,Horse_play:6,Car_play:7,Firetruck_play:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.Selection.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.instance = new lib.Lilyidle();
	this.instance.setTransform(0,-139.1,1,1,0,0,0,0,-84);

	this.WaitPos = new lib.Ball();
	this.WaitPos.setTransform(0,26.3);

	this.instance_1 = new lib.Lilyreceive();
	this.instance_1.setTransform(0,-139.1,1,1,0,0,0,0,-84);

	this.instance_2 = new lib.Lilyconfused();
	this.instance_2.setTransform(0,-139.1,1,1,0,0,0,0,-84);

	this.instance_3 = new lib.Lilyball();
	this.instance_3.setTransform(0,-139.1,1,1,0,0,0,0,-84);

	this.instance_4 = new lib.Lilyblock();
	this.instance_4.setTransform(0,-139.1,1,1,0,0,0,0,-84);

	this.instance_5 = new lib.Lilyring();
	this.instance_5.setTransform(0,-139.1,1,1,0,0,0,0,-84);

	this.instance_6 = new lib.Lilyhorse();
	this.instance_6.setTransform(0,-139.1,1,1,0,0,0,0,-84);

	this.instance_7 = new lib.Lilycar();
	this.instance_7.setTransform(0,-139.1,1,1,0,0,0,0,-84);

	this.instance_8 = new lib.Lilyfiretruck();
	this.instance_8.setTransform(0,-139.1,1,1,0,0,0,0,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.WaitPos}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Hotzone
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(0,36.1,0.736,0.287,0,0,0,100,99.9);

	this.timeline.addTween(cjs.Tween.get(this.Hotzone).wait(9));

	// Layer 2
	this.Selection = new lib.SelectionLily_1();
	this.Selection.setTransform(1.3,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.Selection).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.4,-331,318.9,395.8);


(lib.Elmoreceive = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(1));

	// Head
	this.instance = new lib.Tween9("synched",0);
	this.instance.setTransform(71.5,58.4);

	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.setTransform(71.5,64.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween11("synched",0);
	this.instance_2.setTransform(71.5,62.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween3copy4("synched",0);
	this.instance_3.setTransform(71.5,65.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.Elmohappy();
	this.instance_4.setTransform(72.2,-7.1,1,1,0,0,0,72.2,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:62.9},2,cjs.Ease.get(0.75)).to({_off:true,y:64.4},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},1).to({y:59},4).to({y:62.6},7,cjs.Ease.get(0.75)).to({_off:true},10).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({_off:true,y:65.3},4,cjs.Ease.get(-0.75)).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},4,cjs.Ease.get(-0.75)).to({y:58.4},6,cjs.Ease.get(1)).to({_off:true,regX:72.2,regY:-7.1,x:72.2,y:-7.1,mode:"independent"},1).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A45Z2MAAAgzrMAxzAAAMAAAAzrg");
	mask.setTransform(72.2,-30.9);

	// Body
	this.instance_5 = new lib.Elmobody();
	this.instance_5.setTransform(34.7,103.5,0.828,0.828);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.5,7.1,120.1,127.4);


(lib.Elmo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Wait":1,"Confused":2,"Ball_play":3,"Block_play":4,"Ring_play":5,"Horse_play":6,"Car_play":7,"Firetruck_play":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.Selection.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.instance = new lib.Elmoidle();
	this.instance.setTransform(0.8,-148.5,1.049,1.049,0,0,0,72.2,-7.1);

	this.instance_1 = new lib.Elmoreceive();
	this.instance_1.setTransform(0.8,-148.5,1.049,1.049,0,0,0,72.2,-7.1);

	this.WaitPos = new lib.Ball();
	this.WaitPos.setTransform(0,26.7);

	this.instance_2 = new lib.Elmoconfused();
	this.instance_2.setTransform(0.8,-148.5,1.049,1.049,0,0,0,72.2,-7.1);

	this.instance_3 = new lib.Elmoball();
	this.instance_3.setTransform(9.1,-141.5,1,1,0,0,0,72.2,-6.7);

	this.instance_4 = new lib.Elmoblock();
	this.instance_4.setTransform(9.1,-141.5,1,1,0,0,0,72.2,-6.7);

	this.instance_5 = new lib.Elmoring();
	this.instance_5.setTransform(9.1,-141.5,1,1,0,0,0,72.2,-6.7);

	this.instance_6 = new lib.Elmohorse();
	this.instance_6.setTransform(9.1,-141.5,1,1,0,0,0,72.2,-6.7);

	this.instance_7 = new lib.Elmocar();
	this.instance_7.setTransform(9.1,-141.5,1,1,0,0,0,72.2,-6.7);

	this.instance_8 = new lib.Elmofiretruck();
	this.instance_8.setTransform(9.1,-141.5,1,1,0,0,0,72.2,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.WaitPos},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Hotzone
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(0,36.1,0.736,0.287,0,0,0,100,99.9);

	this.timeline.addTween(cjs.Tween.get(this.Hotzone).wait(9));

	// Layer 2
	this.Selection = new lib.SelectionElmo_1();
	this.Selection.setTransform(0.8,-70,1,1,0,0,0,164.3,195.8);

	this.timeline.addTween(cjs.Tween.get(this.Selection).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.6,-347,334.5,442.5);


(lib.Cookie = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Wait":1,"Confused":2,"Ball_play":3,"Block_play":4,"Ring_play":5,"Horse_play":6,"Car_play":7,"Firetruck_play":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.Selection.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.instance = new lib.Cookieidle();
	this.instance.setTransform(8.3,-137.1,1,1,0,0,0,107.9,70.5);

	this.instance_1 = new lib.Cookiereceive();
	this.instance_1.setTransform(86.5,-42.2,1,1,0,0,0,186.1,165.4);

	this.WaitPos = new lib.Ball();
	this.WaitPos.setTransform(0,22.6);

	this.instance_2 = new lib.Cookieconfused();
	this.instance_2.setTransform(86.5,-42.2,1,1,0,0,0,186.1,165.4);

	this.instance_3 = new lib.Cookieball();
	this.instance_3.setTransform(0,-75.6);

	this.instance_4 = new lib.Cookieblock();
	this.instance_4.setTransform(0,-75.6);

	this.instance_5 = new lib.Cookiering();
	this.instance_5.setTransform(0,-75.6);

	this.instance_6 = new lib.Cookiehorse();
	this.instance_6.setTransform(0,-75.6);

	this.instance_7 = new lib.Cookiecar();
	this.instance_7.setTransform(0,-75.6);

	this.instance_8 = new lib.Cookiefiretruck();
	this.instance_8.setTransform(0,-75.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.WaitPos},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Hotzone
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(0,36.1,0.736,0.287,0,0,0,100,99.9);

	this.timeline.addTween(cjs.Tween.get(this.Hotzone).wait(9));

	// Layer 3
	this.Selection = new lib.SelectionCookie_1();
	this.Selection.setTransform(-0.8,-77.6,1.023,1.083,0,0,0,164.3,195.8);

	this.timeline.addTween(cjs.Tween.get(this.Selection).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.3,-331.6,384.7,419.5);


(lib.Chamki = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Idle":0,"Wait":1,"Confused":2,"Ball_play":3,"Block_play":4,"Ring_play":5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.Selection.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.Chamkiidle();
	this.instance.setTransform(0,-126,1,1,0,0,0,0,-71);

	this.instance_1 = new lib.Chamkireceive();
	this.instance_1.setTransform(0,-126,1,1,0,0,0,0,-71);

	this.WaitPos = new lib.Ball();
	this.WaitPos.setTransform(0,26.4);

	this.instance_2 = new lib.Chamkiconfused();
	this.instance_2.setTransform(0,-126,1,1,0,0,0,0,-71);

	this.instance_3 = new lib.Chamkiball();
	this.instance_3.setTransform(0,-126,1,1,0,0,0,0,-71);

	this.instance_4 = new lib.Chamkiblock();
	this.instance_4.setTransform(0,-126,1,1,0,0,0,0,-71);

	this.instance_5 = new lib.Chamkiring();
	this.instance_5.setTransform(0,-126,1,1,0,0,0,0,-71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.WaitPos},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// Hotzone
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(0,36.1,0.736,0.287,0,0,0,100,99.9);

	this.timeline.addTween(cjs.Tween.get(this.Hotzone).wait(6));

	// Layer 2
	this.Selection = new lib.SelectionChamki_1();
	this.Selection.setTransform(4.7,-77,1,1,0,0,0,164.3,195.8);

	this.timeline.addTween(cjs.Tween.get(this.Selection).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.2,-330.9,338,410.3);


(lib.Bel = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Idle":0,"Wait":1,"Confused":2,"Ball_play":3,"Block_play":4,"Ring_play":5,"Horse_play":6,"Car_play":7,"Firetruck_play":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.Selection.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.instance = new lib.Belidle();
	this.instance.setTransform(0,-126.1,1,1,0,0,0,0,-71);

	this.instance_1 = new lib.Belreceive();
	this.instance_1.setTransform(0,-126.1,1,1,0,0,0,0,-71);

	this.WaitPos = new lib.Ball();
	this.WaitPos.setTransform(0,26.3);

	this.instance_2 = new lib.Belconfused_1();
	this.instance_2.setTransform(0,-126.1,1,1,0,0,0,0,-71);

	this.instance_3 = new lib.Belball();
	this.instance_3.setTransform(0,-126.2,1,1,0,0,0,0,-71);

	this.instance_4 = new lib.Belblock();
	this.instance_4.setTransform(0,-126.2,1,1,0,0,0,0,-71);

	this.instance_5 = new lib.Belring();
	this.instance_5.setTransform(0,-126.2,1,1,0,0,0,0,-71);

	this.instance_6 = new lib.Belhorse();
	this.instance_6.setTransform(0,-126.2,1,1,0,0,0,0,-71);

	this.instance_7 = new lib.Belcar();
	this.instance_7.setTransform(0,-126.2,1,1,0,0,0,0,-71);

	this.instance_8 = new lib.Belfiretruck();
	this.instance_8.setTransform(0,-126.2,1,1,0,0,0,0,-71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.WaitPos},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Hotzone
	this.Hotzone = new lib.Hotzone();
	this.Hotzone.setTransform(0,36.1,0.736,0.287,0,0,0,100,99.9);

	this.timeline.addTween(cjs.Tween.get(this.Hotzone).wait(9));

	// Layer 2
	this.Selection = new lib.SelectionBel_1();
	this.Selection.setTransform(0,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.Selection).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-331,344,399);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;