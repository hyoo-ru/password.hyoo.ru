namespace $.$$ {
	export class $hyoo_password extends $.$hyoo_password {
		
		master( next?: string ) {
			return this.$.$mol_state_session.value( 'master', next ) ?? ''
		}
		
		@ $mol_mem
		context( next?: string ) {
			return next ?? ( $mol_dom.document.referrer && new URL( $mol_dom.document.referrer ).hostname || '' )
		}
		
		@ $mol_mem
		fields() {
			return [
				this.Master_block(),
				this.Context_block(),
				... ( this.master() && this.context() ) ? [ this.Password_block() ] : [],
			]
		}
		
		@ $mol_mem
		password() {
			const context = $mol_charset_encode( this.context() )
			const sacred = $mol_wire_sync( this.$ ).$mol_crypto_sacred_pass( this.master(), context )
			return $mol_base64_encode( sacred.asArray() )
		}
		
		context_clear() {
			this.context( '' )
			this.Context().focused( true )
		}
		
		close() {
			this.master( '' )
			this.context( '' )
			this.$.$mol_dom.close()
		}
		
	}
}
