/**
 * AmbientColorPicker
 * Window component
 * https://github.com/jazzfog/AmbientColorPicker
 */
Ext.define('Ext.ux.picker.color.ambientcolorpicker.Window', {
	extend: 'Ext.window.Window',

	requires: ['Ext.ux.picker.color.AmbientColorPicker'],

	title: 'Pick color',
	closeAction: 'hide',

	buttonTextOk: 'Done',
	buttonTextCancel: 'Cancel',

	/**
	 * Config for user's Spectrum color picker customizations
	 * @public
	 */
	conf: {},

	colorPicker: null,

	initComponent: function () {

		this.addEvents(
			'colorSelectedDone'
		);

		this.colorPicker = Ext.create('Ext.ux.picker.color.AmbientColorPicker', {
			conf: this.conf
		});

		this.items = [
			this.colorPicker
		];

		this.bbar = [
			'->',
			{
				text: this.buttonTextOk,
				handler: this.onOkClick,
				scope: this
			},
			{
				text: this.buttonTextCancel,
				handler: this.onCancelClick,
				scope: this
			}
		];

		this.callParent(arguments);
	},

	getColorPickerCmp: function () {
		return this.colorPicker;
	},

	onOkClick: function () {
		var obj = this.colorPicker.getJqueryObject();
		var color = obj.spectrum('get');

		this.fireEvent('colorSelectedDone', this, this.getValue(), color);
		this.hide();
	},

	onCancelClick: function () {
		this.hide();
	},

	setValue: function (color) {
		this.colorPicker.setValue(color);
	},

	/**
	 * @param {bool} [rawObject] [Optional] - Return raw object, instead of AGBA string, default: False
	 * @returns {*}
	 */
	getValue: function (rawObject) {
		return this.colorPicker.getValue(rawObject);
	}

});