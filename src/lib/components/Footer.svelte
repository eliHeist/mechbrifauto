<script>
	const currentYear = new Date().getFullYear()

	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "Services", href: "/services" },
		{ label: "About", href: "/about" },
		{ label: "Contact", href: "/contact" },
	]

	const serviceLinks = [
		{ label: "Computerized Diagnosis", href: "/services#diagnostics" },
		{ label: "Engine Services", href: "/services#engine" },
		{ label: "Suspension & Steering", href: "/services#suspension" },
		{ label: "General Maintenance", href: "/services#maintenance" },
		{ label: "Road Rescue", href: "/services#rescue" },
		{ label: "Vehicle Restoration", href: "/services#restoration" },
	]
</script>

<footer class="content-grid bg-[#0D0D0D] border-t border-white/10">
	<!-- Top stripe: tagline + CTA -->
	<div class="border-b border-white/10">
		<div
			class="py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
			<h2
				class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(2.5rem,5vw,4.5rem)]">
				Your Car.<br />Properly Fixed.
			</h2>
			<div class="flex flex-col sm:flex-row gap-4 shrink-0">
				<a
					href="/getintouch"
					class="font-['Inter'] font-600 text-sm tracking-widest uppercase bg-red-600 text-white px-10 py-4 hover:bg-red-700 transition-colors text-center">
					Book a Service
				</a>
				<a
					href="https://wa.me/256759158049"
					target="_blank"
					rel="noopener"
					class="font-['Inter'] font-600 text-sm tracking-widest uppercase border border-white/20 text-white/70 px-10 py-4 hover:border-white hover:text-white transition-colors text-center">
					WhatsApp Us
				</a>
			</div>
		</div>
	</div>

	<!-- Main footer grid -->
	<div
		class="py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
		<!-- Brand column -->
		<div class="lg:col-span-1">
			<a href="/">
                <img src="logo.png" alt="Mechbrif Auto Logo" class="max-w-64" />
			</a>
			<p class="mt-4 font-['Inter'] text-sm text-white/40 leading-relaxed max-w-xs">
				Kampala's tech-forward auto garage. Computerized diagnostics. On-site service. Real
				results.
			</p>
			<div class="mt-8 flex items-center gap-4">
				<!-- Facebook -->
				<a
					href="https://www.facebook.com/mechbrifauto"
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
					class="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-red-600 hover:text-red-600 transition-colors">
					<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
						></path>
					</svg>
				</a>
				<!-- Instagram -->
				<a
					href="https://www.instagram.com/mechbrifauto"
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
					class="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-red-600 hover:text-red-600 transition-colors">
					<svg
						width="15"
						height="15"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round">
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
						<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
					</svg>
				</a>
				<!-- WhatsApp -->
				<a
					href="https://wa.me/256759158049"
					target="_blank"
					rel="noopener"
					aria-label="WhatsApp"
					class="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-red-600 hover:text-red-600 transition-colors">
					<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
						></path>
					</svg>
				</a>
			</div>
		</div>

		<!-- Nav links -->
		<div>
			<p
				class="font-['Inter'] text-xs font-600 tracking-[0.25em] uppercase text-white/30 mb-6">
				Pages
			</p>
			<ul class="space-y-3">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="font-['Inter'] text-sm text-white/60 hover:text-white transition-colors">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Services links -->
		<div>
			<p
				class="font-['Inter'] text-xs font-600 tracking-[0.25em] uppercase text-white/30 mb-6">
				Services
			</p>
			<ul class="space-y-3">
				{#each serviceLinks as link}
					<li>
						<a
							href={link.href}
							class="font-['Inter'] text-sm text-white/60 hover:text-white transition-colors">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Contact details -->
		<div>
			<p
				class="font-['Inter'] text-xs font-600 tracking-[0.25em] uppercase text-white/30 mb-6">
				Contact
			</p>
			<ul class="space-y-4">
				<li>
					<p class="font-['Inter'] text-xs tracking-widest uppercase text-white/30 mb-1">
						Address
					</p>
					<a
						href="https://maps.google.com/?q=Mechbrif+Auto+Namugongo+Kyaliwajjala+Kampala"
						target="_blank"
						rel="noopener"
						class="font-['Inter'] text-sm text-white/60 hover:text-white transition-colors leading-relaxed">
						Plot 7, Namugongo<br />Kyaliwajjala, Kampala
					</a>
				</li>
				<li>
					<p class="font-['Inter'] text-xs tracking-widest uppercase text-white/30 mb-1">
						Phone
					</p>
					<a
						href="tel:+256765219273"
						class="block font-['Inter'] text-sm text-white/60 hover:text-white transition-colors">
						+256 76 521 9273
					</a>
					<a
						href="https://wa.me/256759158049"
						target="_blank"
						rel="noopener"
						class="block font-['Inter'] text-sm text-white/60 hover:text-white transition-colors">
						+256 75 915 8049 <span class="text-red-600 text-xs">(WhatsApp)</span>
					</a>
				</li>
				<li>
					<p class="font-['Inter'] text-xs tracking-widest uppercase text-white/30 mb-1">
						Hours
					</p>
					<span class="font-['Inter'] text-sm text-white/60">Mon–Fri 8AM–6PM</span><br />
					<span class="font-['Inter'] text-sm text-white/60">Sat 8AM–4PM</span>
				</li>
				<li>
					<a
						href="mailto:connect@mechbrifauto.com"
						class="font-['Inter'] text-sm text-white/60 hover:text-white transition-colors">
						connect@mechbrifauto.com
					</a>
				</li>
			</ul>
		</div>
	</div>

	<!-- Bottom bar -->
	<div class="border-t border-white/10">
		<div
			class="max-w-7xl mx-auto px-8 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
			<p class="font-['Inter'] text-xs text-white/25">
				© {currentYear} Mechbrif Auto. All rights reserved.
			</p>
			<p class="font-['Inter'] text-xs text-white/25">
				Built by <a
					href="https://dakdot.com"
					target="_blank"
					rel="noopener"
					class="hover:text-white/60 transition-colors">Dakdot Creations</a>
			</p>
		</div>
	</div>
</footer>
