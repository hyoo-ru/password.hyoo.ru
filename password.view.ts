namespace $.$$ {
	export class $hyoo_password extends $.$hyoo_password {
		master(next?: string) {
			return this.$.$mol_state_local.value('master', next) ?? ''
		}

		@$mol_mem
		context(next?: string) {
			if (next !== undefined) return next

			try {
				if (typeof chrome !== 'undefined' && chrome.tabs?.query) {
					const tabs = $mol_wire_sync(chrome.tabs).query({
						active: true,
						currentWindow: true,
					}) as chrome.tabs.Tab[]
					if (tabs[0]?.url) return new URL(tabs[0].url).hostname
				}
			} catch {}

			if ($mol_dom.document.referrer) {
				return new URL($mol_dom.document.referrer).hostname
			}

			return ''
		}

		@$mol_mem
		index(next = 0) {
			this.context()
			return Math.max(0, next)
		}

		@$mol_mem
		fields() {
			return [
				this.Master_block(),
				this.Context_block(),
				...(this.master() && this.context() ? [this.Password_block()] : [this.Hint()]),
			]
		}

		@$mol_mem
		password() {
			const salt = $mol_charset_encode(this.context() + '\n' + this.index())
			const sacred = $mol_wire_sync(this.$).$mol_crypto_sacred_pass(this.master(), salt)
			const pass = $mol_base64_encode(sacred.asArray().slice(1, -1))

			navigator.clipboard.writeText(pass).catch(() => {})

			return pass
		}

		context_clear() {
			this.context('')
			this.Context().focused(true)
		}

		close() {
			this.master('')
			this.context('')
			this.$.$mol_dom.close()
		}
	}
}
