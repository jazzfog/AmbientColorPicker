##Color Picker Component for ExtJs 4

Isn't it cool?

![ExtJS 4 Color Picker](http://fog.od.ua/fx/ext-js-components/color-picker/ExtJs-4-color-picker.png "ExtJS 4 Color Picker")


Ambient color picker is a ExtJs component which uses [jQuery](http://jquery.com) and its plugin [Spectrum] (http://bgrins.github.io/spectrum).

Compatible with ExtJs 4.x


**How to install**

Install and use Ambient Color Picker in few easy steps:

1. [Download](http://jquery.com/download/) and save in your project directory the last version of jQuery (for example put file like this /JavaScript/jquery.js)
2. [Download](http://bgrins.github.io/spectrum/), unpack and save in your web directory the last version of Spectrum plugin (for example put archive contents in /JavaScript/Spectrum folder)
3. Add to your main html file these lines of code
  * &lt;script type="text/javascript" src="/JavaScript/jquery.js">&lt;/script>
  * &lt;script type="text/javascript" src="/JavaScript/Spectrum/spectrum.js">&lt;/script>
  * &lt;link rel="stylesheet" type="text/css" href="/JavaScript/Spectrum/spectrum.css">
4. Download *Ambient Color Picker*, unpack it and put into your ExtJs UX directory.

If you do not know where is your UX directory - probably you do not have it.
Create in web root of your project directory new sub-directory named "ux" and add at beginning of your app.js this snippet:

```JavaScript
Ext.Loader.setConfig({
    enabled : true,
    paths: {
        'Ext.ux': 'ux'
    }
});
```

Now you are ready for first usage

Color picker comes with two components: Panel and Window:

Colorpicker panel, basically, is a extension to ExtJs Panel component, so you can use it as usual Panel, for example:

```JavaScript
this.examplePanel = Ext.create('Ext.panel.Panel', {
	border: 0,
	items: [
		Ext.create('Ext.ux.picker.color.AmbientColorPicker', {
			conf: {
				color: 'blue'
			}
		})
	]
});

```

**More advanced example**

Context for this snippet may be any Panel-like component

Here, we will create two text fields and a button.

Button will open Color Picker window and text fields will display selected colors.
First field - selected in color picker, but not confirmed by clicking "Done" color
Second field - confirmed by clicking "Done" color (so you can "cancel" changing of color any time without consequences)

```JavaScript
this.items = [
	{
		xtype: 'textfield',
		fieldStyle: 'background-image: none;',
		id: 'myColorIndicator-1',
		margin: '0 10 0 0'
	},
	{
		xtype: 'textfield',
		fieldStyle: 'background-image: none;',
		id: 'myColorIndicator-2',
		margin: '0 10 0 0'
	},
	{
		xtype: 'button',
		text: 'Select color',
		handler: function () {

			this.colorPicker = Ext.create('Ext.ux.picker.color.ambientcolorpicker.Window', {
				autoShow: true,
				conf: {
					color: 'orange'
				},
				listeners: {
					colorSelected: function (el, colorString, colorObj) {
						var field = Ext.ComponentQuery.query('#myColorIndicator-1')[0];
						field.setValue(colorString);
						field.setFieldStyle('background-color: '+colorString)
					},
					colorSelectedDone: function (el, colorString, colorObj) {
						var field = Ext.ComponentQuery.query('#myColorIndicator-2')[0];
						field.setValue(colorString);
						field.setFieldStyle('background-color: '+colorString)
					}
				}
			});

		},
		scope: this
	}
];
```

**Customization**

1. These componends are axtensions to standart Ext.panel.Panel and Ext.window.Window so treat them like you usually do.
2. You can customize component using Spectrum config, just use `conf:` parameter, as it was done in example above to change default settings (in this case default color). Learn more about how to customize Spectrum on its [official page](http://bgrins.github.io/spectrum/).
