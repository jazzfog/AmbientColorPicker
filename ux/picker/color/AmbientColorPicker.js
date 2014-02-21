Ext.define('Ext.ux.picker.color.AmbientColorPicker', {

	extend: 'Ext.panel.Panel',

	bubbleEvents: [
		'colorSelected'
	],

	spectrumWidth: 250,

	spectrumCss: '',

	/**
	 * Config for user's Spectrum color picker customizations
	 * @public
	 */
	conf: {},

	/**
	 * Default configuration
	 * Might be rewrited with parameter `conf` during object initiation
	 * @private
	 */
	_defaultConf: {
		color: 'black',
		flat: true,
		showInput: true,
		showInitial: true,
		allowEmpty: true,
		showAlpha: true,
		disabled: false,
		showPalette: true,
		showPaletteOnly: false,
		showSelectionPalette: false,
		cancelText: '',
		chooseText: '',

		preferredFormat: 'hex',
		showButtons: false,
		clickoutFiresChange: false,
		palette: [
			['#FF8080', '#FFFF74', '#00FF74', '#00FF74', '#00FFFF', '#0080FF', '#FF80C3', '#FF80FF'],
			['#FF0000', '#FFFF00', '#00FF00', '#00FF00', '#00FFFF', '#0080C3', '#8080C3', '#FF00FF'],
			['#8E4040', '#696969', '#00FF00', '#008080', '#004082', '#8080FF', '#920042', '#FF0083'],
			['#920000', '#FF8000', '#008000', '#00803A', '#0000FF', '#0000A4', '#920083', '#9200FF'],
			['#490000', '#8E4000', '#004000', '#004040', '#000083', '#000042', '#490042', '#490083'],
			['#000000', '#808000', '#80803A', '#808080', '#008080', '#C0C0C0', '#490042', '#FFFFFF']
		]
	},

	border: 0,

	colorPickerIdent: null,

	initComponent: function () {

		this.addEvents(
			'colorSelected'
		);

		this.colorPickerIdent = 'colorPicker-' + this.id;

		var css =
			"<style type='text/css'>\n"+
			"	.AmbientColorPicker.sp-container {border: none; background-color: transparent; z-index: auto;} \n" +
			"	.AmbientColorPicker .sp-palette-container {border-right-color: #E5E5FB;} \n" +
			"	.AmbientColorPicker .sp-picker-container {width: " + this.spectrumWidth + "px;} \n" +
			"	.AmbientColorPicker .sp-input-container {width: 100%; margin: 5px 0 5px 0; background-color: white;} \n" +
			"	.AmbientColorPicker .sp-input-container .sp-input {border-radius: 0px;} \n" +
				this.spectrumCss +
			"</style> \n"
		;

		this.html = css + '<input type="text" id="' + this.colorPickerIdent + '" />';

		this.on({
			afterrender: this.onAfteRrender,
			scope: this
		});

		this.callParent(arguments);
	},

	onAfteRrender: function () {
		this.initSpectrum();
	},

	_fireEventOnColorSelected: function (color) {
		var colorString = color ? color.toString() : '';
		this.fireEvent('colorSelected', this, colorString, color);
	},

	getJqueryObject: function () {
		return $("#"+this.colorPickerIdent);
	},

	initSpectrum: function () {

		var resultConf = {};

		var ident = 'AmbientColorPicker AcpRnd-'+this.colorPickerIdent+' AcpId-'+this.id;

		var issentialConf = {
			className: ident,
			move: Ext.bind(this._fireEventOnColorSelected, this)
		};

		Ext.iterate(this._defaultConf, function (key, value) {
			resultConf[key] = value;
		});

		Ext.iterate(this.conf, function (key, value) {
			resultConf[key] = value;
		});

		Ext.iterate(issentialConf, function (key, value) {
			resultConf[key] = value;
		});

		this.getJqueryObject().spectrum(resultConf);
	},

	setValue: function (color) {
		this.getJqueryObject().spectrum('set', color);
		this._fireEventOnColorSelected(this.getValue(true));
	},

	/**
	 * @param {bool} [rawObject] [Optional] [default: False] - Return raw object, instead of AGBA string
	 * @returns {*}
	 */
	getValue: function (rawObject) {

		rawObject = (typeof rawObject == 'undefined') ? false : !!rawObject;

		var color = this.getJqueryObject().spectrum('get');

		if (rawObject) {
			return color;
		} else {
			return color ? color.toString() : '';
		}
	}

});