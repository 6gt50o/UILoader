
GameLayer = cc.LayerColor.extend({

	ctor: function() {
		this._super(cc.color.GREEN);

        var button = new ccui.ImageView("res/Heiti10.png", ccui.Widget.LOCAL_TEXTURE);
        button.setName("_button");
        this.addChild(button);

		sz.uiloader.widgetFromJsonFile(this, "res/DemoLogin.ExportJson", {eventPerfix:"_on", memberPrefix:"_"} );
        this.rootNode.setPosition(this.width /2 , this.height /2);
        this.rootNode.setAnchorPoint(0.5, 0.5);
		cc.assert(this._loginButton.name === "_loginButton");
		cc.assert(this._closeButton.name === "_closeButton");
        cc.assert(this._button.name === "_button");

        this.testRegisterTouchEvent();
	},

    testRegisterTouchEvent: function() {
        //为当前layer注册触摸
        sz.uiloader.registerTouchEvent(this, this);

        //创建一个sprite
        var spriteButton = new cc.Sprite("#button.png");
        spriteButton.setName("_spriteButton");
        spriteButton.x = this.width - spriteButton.width * 0.5;
        spriteButton.y = spriteButton.height * 0.5;
        this.addChild(spriteButton);
        sz.uiloader.registerTouchEvent(spriteButton, this);
    },

    _onSpriteButtonTouchBegan: function() {
        cc.log('_onSpriteButtonTouchBegan');
        return true;
    },


    _onTouchBegan: function(sender, touch) {
        cc.log("GameLayer onTouchBegan" + JSON.stringify(touch.getLocation()));
        return true;
    },

    _onTouchMoved: function(sender, touch) {
        cc.log("GameLayer onTouchMoved" + JSON.stringify(touch.getLocation()));
    },

    _onTouchEnded: function(sender, touch) {
        cc.log("GameLayer onTouchEnded" + JSON.stringify(touch.getLocation()));
    },

    _onButtonTouchBegan: function() {
        cc.log("_onButtonTouchBegan");
    },

    _onButtonTouchLong: function() {
        cc.log("_onButtonTouchLong");
    },

	_onLoginButtonEvent: function(sender, type) {
		switch (type) {
			case 0:
				cc.log("_onLoginButtonEvent: began");
				break;
			case 1:
				cc.log("_onLoginButtonEvent: move");
				break;
            case 2:
				cc.log("_onLoginButtonEvent: end");
                //加载cocostudio2.1编辑器生成的UI
                cc.loader.load(g_cocos, function() {
                    var scene = InventoryLayer.scene();
                    cc.director.runScene(scene);
                });
				break;
		}
	},

    //_onLoginButtonTouchBegan: function() {
    //    cc.log("_onLoginButtonTouchBegan");
    //},

    _onLoginButtonTouchLong: function(sender, type) {
        cc.log("_onLoginButtonTouchLong");
    },

    //_onLoginButtonTouchEnded: function(sender) {
    //    cc.log("_onLoginButtonTouchEnded");
    //    this._nameTextField.string = "userName";
    //},

	_onCloseButtonTouchBegan: function(sender) {
		cc.log("_onCloseButtonTouchBegan");
	},

	_onCloseButtonTouchEnded: function(sender) {
		cc.log("_onCloseButtonTouchEnded");
	},

	_onNameTextFieldInsertText: function(sender) {
		cc.log(sender.string);
	},

	_onAgreeCheckBoxSelected: function(sender) {
		cc.log("_onAgreeCheckBoxSelected");
	},

	_onAgreeCheckBoxUnselected: function(sender) {
		cc.log("_onAgreeCheckBoxUnselected");
	},

	_onNameLabelTouchBegan: function() {
		cc.log("_onNameLabelTouchBegan");
	},

    _onNameLabelTouchLong: function() {
        cc.log("_onNameLabelTouchLong");
    }
});
