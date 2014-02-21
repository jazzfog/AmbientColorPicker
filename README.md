#Color Picker Component for ExtJs 4

Isn't it cool?

![ExtJS 4 Color Picker](http://fog.od.ua/fx/ext-js-components/color-picker/ExtJs-4-color-picker.png "ExtJS 4 Color Picker")

Requires
- [jQuery](http://jquery.com)
- [Spectrum] (http://bgrins.github.io/spectrum)

*How to install*

1. [Download](http://jquery.com/download/) and save in your web directory the last version of jQuery (for example put file like this /JavaScript/jquery.js)
2. [Download](http://bgrins.github.io/spectrum/), unpack and save in your web directory the last version of Spectrum plugin (for example put archive contents in /JavaScript/Spectrum folder)
3. Add to your main html file these lines of code
  * &lt;script type="text/javascript" src="/JavaScript/jquery.js">&lt;/script>
  * &lt;script type="text/javascript" src="/JavaScript/Spectrum/spectrum.js">&lt;/script>
  * &lt;link rel="stylesheet" type="text/css" href="/JavaScript/Spectrum/spectrum.css">

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