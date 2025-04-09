namespace $.$$ {
	export class $hyoo_password extends $.$hyoo_password {
		
		master( next?: string ) {
			return this.$.$mol_state_session.value( 'master', next ) ?? ''
		}
		
		password() {
			const sens = $mol_charset_encode( `${ this.master() }\n ${ this.context() }` )
			const hash = $mol_crypto_hash( sens ).slice( 0, 14 )
			return $mol_base64_encode( hash )
		}
		
	}
}
