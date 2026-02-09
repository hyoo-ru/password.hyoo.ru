namespace $.$$ {
	$mol_style_define($hyoo_password, {
		width: '400px',
		minHeight: '100vh',
		padding: $mol_gap.block,

		Page: {
			margin: 'auto',

			flex: {
				basis: `25rem`,
			},

			background: {
				color: $mol_theme.card,
			},

			border: {
				radius: $mol_gap.round,
			},

			box: {
				shadow: [[0, 0, $mol_gap.block, 0, $mol_style_func.hsla(0, 0, 0, 0.2)]],
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

		Password: {
			flex: {
				shrink: 1,
			},
			minWidth: '8rem',
		},

		Hint: {
			margin: {
				top: `2rem`,
			},
		},
	})
}
