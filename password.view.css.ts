namespace $.$$ {
	
	$mol_style_define( $hyoo_password, {
		
		flex: {
			direction: 'column',
		},
		
		padding: $mol_gap.block,
		
		Page: {
			
			margin: 'auto',
			
			background: {
				color: $mol_theme.card,
			},
			
			border: {
				radius: $mol_gap.round,
			},
			
			box: {
				shadow: [ [ 0, 0, $mol_gap.block, 0, $mol_style_func.hsla( 0, 0, 0, .2 ) ] ],
			},
			
		},
		
		Password_bar: {
			justify: {
				content: 'space-between',
			},
		},
		
		Copy: {
			font: {
				family: 'monospace',
			},
		},
		
	} )
	
}
