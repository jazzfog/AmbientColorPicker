/**
 * AmbientColorPicker (Usage example)
 * https://github.com/jazzfog/AmbientColorPicker
 */
Ext.define('Ext.ux.PickerExample', {

	extend: 'Ext.panel.Panel',

	padding: 10,
	border: 0,

	initComponent: function () {

		this.colorPicker1 = Ext.create('Ext.ux.picker.color.ambientcolorpicker.Window', {
			conf: {
				color: 'orange'
			},
			listeners: {
				colorSelected: function (el, colorString, colorObj) {

					var field = Ext.ComponentQuery.query('#colorField2')[0];
					field.setValue(colorString);
					field.setFieldStyle('background-color: '+colorString)

					console.log('-------------------------------------------------');
					console.log('colorSelected');
					console.log(colorString);
					console.log(colorObj);
					console.log('-------------------------------------------------');
				},
				colorSelectedDone: function (el, colorString, colorObj) {
					console.log('-------------------------------------------------');

					var field = Ext.ComponentQuery.query('#colorField1')[0];
					field.setValue(colorString);
					field.setFieldStyle('background-color: '+colorString)

					console.log('-------------------------------------------------');
					console.log('colorSelectedDone');
					console.log(colorString);
					console.log(colorObj);
					console.log('-------------------------------------------------');
				}
			}
		});

		this.items = [
			{
				xtype: 'panel',
				layout: 'column',
				border: 0,

				items: [
					{
						xtype: 'textfield',
						width: 100,
						value: '',
						fieldStyle: 'background-image: none;',
						id: 'colorField1',
						margin: '0 10 0 0'
					},
					{
						xtype: 'textfield',
						width: 100,
						value: '',
						fieldStyle: 'background-image: none;',
						id: 'colorField2',
						margin: '0 10 0 0'
					},
					{
						xtype: 'button',
						text: 'Select color',
						margin: '0 10 0 0',
						handler: function () {
							//noinspection JSPotentiallyInvalidUsageOfThis
							this.colorPicker1.show();
						},
						scope: this
					},
					{
						xtype: 'button',
						text: 'Set green',
						margin: '0 10 0 0',
						handler: function () {
							//noinspection JSPotentiallyInvalidUsageOfThis
							this.colorPicker1.setValue('green');
						},
						scope: this
					},
					{
						xtype: 'button',
						text: 'Get color',
						margin: '0 10 0 0',
						handler: function () {

							//noinspection JSPotentiallyInvalidUsageOfThis
							var color = this.colorPicker1.getValue();

							console.log('Str -------------------------------------------------');
							//noinspection JSPotentiallyInvalidUsageOfThis
							console.log(color);
							//alert('Color = ' + color);
							console.log('Obj -------------------------------------------------');
							//noinspection JSPotentiallyInvalidUsageOfThis
							console.log(this.colorPicker1.getValue(true));
						},
						scope: this
					}
				]
			}
		];

		this.callParent(arguments);
	}
});