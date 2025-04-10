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
		index( next = 0 ) {
			this.context()
			return Math.max( 0, next )
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
			const salt = $mol_charset_encode( this.context() + '\n' + this.index() )
			const sacred = $mol_wire_sync( this.$ ).$mol_crypto_sacred_pass( this.master(), salt )
			return $mol_base64_encode( sacred.asArray().slice( 0, -2 ) )
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
