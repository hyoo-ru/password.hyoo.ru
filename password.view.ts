namespace $.$$ {
	export class $hyoo_password extends $.$hyoo_password {
		
		master( next?: string ) {
			return this.$.$mol_state_session.value( 'master', next ) ?? ''
		}
		
		@ $mol_mem
		password() {
			const context = $mol_charset_encode( this.context() )
			const sacred = $mol_wire_sync( this.$ ).$mol_crypto_sacred_pass( this.master(), context )
			return $mol_base64_encode( sacred.asArray() )
		}
		
	}
}
