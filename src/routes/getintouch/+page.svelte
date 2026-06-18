<script lang="ts">
    import gsap from 'gsap';
	import { onMount } from "svelte"
    import { useGsap } from "$lib/utils/UseGsap"

	// ─── FORM STATE ──────────────────────────────────────────────────────────────
	let name = $state("")
	let phone = $state("")
	let email = $state("")
	let vehicle = $state("")
	let serviceMode = $state("garage") // 'garage' | 'onsite'
	let service = $state("")
	let message = $state("")
	let submitted = $state(false)
	let submitting = $state(false)

	const servicesObjects = $state([
		{
            "id": 1,
            "name": "Computerized Diagnosis"
        },
        {
            "id": 2,
            "name": "Engine Services"
        },
        {
            "id": 3,
            "name": "Suspension & Steering"
        },
        {
            "id": 4,
            "name": "General Maintenance"
        },
        {
            "id": 5,
            "name": "Road Rescue"
        },
        {
            "id": 6,
            "name": "Vehicle Restoration"
        },
        {
            "id": 7,
            "name": "Not Sure - Run a Diagnosis"
        }
	])

	const services = $state([
		"Computerized Diagnosis",
		"Engine Services",
		"Suspension & Steering",
		"General Maintenance",
		"Road Rescue",
		"Vehicle Restoration",
		"Not Sure — Run a Diagnosis",
	])

	const hours = $state([
		{ day: "Monday - Friday", time: "8:00 AM - 6:00 PM", open: true },
		{ day: "Saturday", time: "8:00 AM - 4:00 PM", open: true },
		{ day: "Sunday", time: "Closed", open: false },
	])

    let canSubmit = $derived(name.trim() && phone.trim() && service)

	async function handleSubmit() {
		if (!canSubmit || submitting) return
		submitting = true
		// Replace with real endpoint / SvelteKit form action
		await new Promise((r) => setTimeout(r, 1400))
		submitting = false
		submitted = true
	}

	function resetForm() {
		name = phone = email = vehicle = service = message = ""
		submitted = false
		serviceMode = "garage"
	}

    // useGsap(() => {
	// 	const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
	// 	if (prefersReduced) return

	// 	// ── Hero — image clip wipe LEFT→RIGHT, then headline lines cascade up ──
	// 	const heroTl = gsap.timeline({ defaults: { ease: "power4.inOut" } })

	// 	heroTl.to("#hero-img-wrap", {
	// 		clipPath: "inset(0% 0% 0% 0%)",
	// 		duration: 1.0,
	// 	})

	// 	// Eyebrow
	// 	heroTl.from(
	// 		"#page-eyebrow",
	// 		{ opacity: 0, y: 16, duration: 0.45, ease: "power3.out" },
	// 		"-=0.25",
	// 	)

	// 	// Headline lines
	// 	document.querySelectorAll(".hero-line").forEach((line, i) => {
	// 		heroTl.from(
	// 			line,
	// 			{
	// 				yPercent: 115,
	// 				duration: 0.7,
	// 				ease: "power3.out",
	// 			},
	// 			i === 0 ? "-=0.15" : "-=0.5",
	// 		)
	// 	})

	// 	// Sub-copy
	// 	heroTl.from("#hero-sub", { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" }, "-=0.2")

	// 	// ── Form field lines draw in ────────────────────────────────────────────
	// 	// Each field's bottom border starts at scaleX:0 and draws right, staggered
	// 	gsap.from(".field-line", {
	// 		scaleX: 0,
	// 		transformOrigin: "left center",
	// 		duration: 0.55,
	// 		stagger: 0.08,
	// 		ease: "power3.inOut",
	// 		delay: 0.9,
	// 	})

	// 	// Service mode cards
	// 	gsap.from(".mode-card", {
	// 		opacity: 0,
	// 		y: 20,
	// 		duration: 0.5,
	// 		stagger: 0.08,
	// 		ease: "power3.out",
	// 		delay: 1.1,
	// 	})

	// 	// Form fields fade in
	// 	gsap.from(".form-field", {
	// 		opacity: 0,
	// 		y: 18,
	// 		duration: 0.45,
	// 		stagger: 0.07,
	// 		ease: "power2.out",
	// 		delay: 1.0,
	// 	})

	// 	// ── Sidebar stagger from right ──────────────────────────────────────────
	// 	gsap.from(".sidebar-block", {
	// 		opacity: 0,
	// 		x: 36,
	// 		duration: 0.6,
	// 		stagger: 0.1,
	// 		ease: "power3.out",
	// 		delay: 1.0,
	// 	})

	// 	// ── Submit button fill sweep on hover ───────────────────────────────────
	// 	const submitBtn = document.querySelector("#submit-btn")
	// 	if (submitBtn) {
	// 		const fill = submitBtn.querySelector(".btn-fill")
	// 		submitBtn.addEventListener("mouseenter", () => {
	// 			gsap.to(fill, { scaleX: 1, duration: 0.35, ease: "power3.out" })
	// 		})
	// 		submitBtn.addEventListener("mouseleave", () => {
	// 			gsap.to(fill, { scaleX: 0, duration: 0.25, ease: "power3.in" })
	// 		})
	// 	}

	// 	// ── Scroll-triggered reveals for lower sections ─────────────────────────
	// 	gsap.utils.toArray(".st-reveal").forEach((el) => {
	// 		gsap.from(el, {
	// 			opacity: 0,
	// 			y: 30,
	// 			duration: 0.65,
	// 			ease: "power3.out",
	// 			scrollTrigger: { trigger: el, start: "top 85%", once: true },
	// 		})
	// 	})

	// 	return () => ScrollTrigger.getAll().forEach((t) => t.kill())
	// })
</script>

<svelte:head>
	<title>Book a Service — Mechbrif Auto</title>
</svelte:head>


<section
	class="relative min-h-screen grid md:grid-cols-2 overflow-hidden pt-28">
	<!-- LEFT — Full-height image with clip-path wipe reveal -->
	<div
		id="hero-img-wrap"
		class="relative h-[80vh] overflow-hidden"
		stylex="clip-path: inset(0% 100% 0% 0%)">
		<img
			src="/images/pics/ben.webp"
			alt="Mechbrif Auto mechanic"
			class="w-full h-full object-cover object-center" />
		<div class="absolute inset-0 bg-linear-to-r from-transparent to-[#0D0D0D]/60"></div>
		<!-- Red corner frame accent -->
		<div class="absolute top-0 left-0 w-20 h-20">
			<div class="absolute top-0 left-0 w-full h-0.5 bg-red-600"></div>
			<div class="absolute top-0 left-0 w-0.5 h-full bg-red-600"></div>
		</div>
		<div class="absolute bottom-0 right-0 w-20 h-20">
			<div class="absolute bottom-0 right-0 w-full h-0.5 bg-red-600"></div>
			<div class="absolute bottom-0 right-0 w-0.5 h-full bg-red-600"></div>
		</div>
	</div>

	<!-- RIGHT — Headline -->
	<div class="flex flex-col justify-end px-8 md:px-14 pb-16 md:pb-20 pt-10 md:pt-0">
		<h1 class="font-['Barlow_Condensed'] font-900 uppercase leading-[0.85] text-white">
			<span class="hero-line-wrap block overflow-hidden"
				><span class="hero-line block text-[clamp(4.5rem,10vw,9rem)]">Book a</span></span>
			<span class="hero-line-wrap block overflow-hidden"
				><span class="hero-line block text-[clamp(4.5rem,10vw,9rem)]"
					>Mechanic<span class="text-red-600">.</span></span
				></span>
		</h1>
		<p
			id="hero-sub"
			class="mt-8 font-['Inter'] text-white/50 text-base md:text-lg leading-relaxed max-w-sm">
			Tell us what you need, we'll confirm within the hour, Mon-Sat 8AM-6PM.
		</p>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════════════════════════
  MAIN CONTENT — Form + Sidebar
════════════════════════════════════════════════════════════════════════════ -->
<section class="pb-32 pt-16 md:pt-20">
	<div
		class="grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] gap-16 md:gap-20 items-start">
		<div>
			{#if submitted}
				<!-- ── SUCCESS STATE ─────────────────────────────────────────────── -->
				<div class="success-state pt-4">
					<div
						class="mb-10 inline-flex items-center justify-center w-16 h-16 border border-red-600 relative">
						<!-- Animated checkmark box -->
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
							<path
								d="M4 13L10.5 19.5L22 7"
								stroke="#DC2626"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-dasharray="30"
								stroke-dashoffset="0"></path>
						</svg>
						<div class="absolute -top-px -left-px w-4 h-[2px] bg-[#0D0D0D]"></div>
						<div class="absolute -bottom-px -right-px w-4 h-[2px] bg-[#0D0D0D]"></div>
					</div>

					<p
						class="font-['Inter'] text-sm font-600 tracking-[0.4em] uppercase text-red-600 mb-5">
						Booking Received
					</p>
					<h2
						class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.88]
                     text-[clamp(3rem,7vw,6rem)] mb-6">
						We've Got You,<br />{name.split(" ")[0]}.
					</h2>
					<p class="font-['Inter'] text-white/55 text-lg leading-relaxed max-w-md mb-12">
						Expect a WhatsApp or call confirmation within the hour. We'll agree a time
						that works for you.
					</p>

					<div class="flex flex-col sm:flex-row gap-4">
						<button
							onclick={resetForm}
							class="font-['Inter'] font-600 text-xs tracking-[0.25em] uppercase border border-white/20
                     text-white/60 px-10 py-4 hover:border-white hover:text-white transition-colors">
							Book Another Service
						</button>
						<a
							href="https://wa.me/256759158049"
							target="_blank"
							rel="noopener"
							class="font-['Inter'] font-600 text-xs tracking-[0.25em] uppercase bg-red-600 text-white
                      px-10 py-4 hover:bg-red-700 transition-colors text-center">
							WhatsApp Us Now
						</a>
					</div>
				</div>
			{:else}
				<!-- ── FORM ──────────────────────────────────────────────────────── -->

				<!-- Service Mode — two large selector cards -->
				<div class="mb-12">
					<p
						class="font-['Inter'] text-sm font-600 uppercase text-white/35 mb-5">
						Where should we meet?
					</p>
					<div class="grid grid-cols-2 gap-3">
						<button type="button"
							onclick={() => (serviceMode = "garage")}
							class="mode-card relative text-left p-6 border transition-all duration-300 group flex gap-6 items-center
                     {serviceMode === 'garage'
								? 'border-red-600 bg-red-600/5'
								: 'border-white/10 bg-[#141414] hover:border-white/25'}">
							<!-- Active indicator -->
							<div
								class="absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300
                          {serviceMode === 'garage' ? 'w-full' : 'w-0'}">
							</div>
							<svg
								class="mb-4 {serviceMode === 'garage'
									? 'text-red-600'
									: 'text-white/30'} transition-colors"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
								<polyline points="9 22 9 12 15 12 15 22"></polyline>
							</svg>
                            <div>
                                <div
                                    class="font-['Barlow_Condensed'] font-800 uppercase text-white text-xl leading-tight mb-1">
                                    Visit the Garage
                                </div>
                                <div class="font-['Inter'] text-xs text-white/35 leading-relaxed">
                                    Plot 7, Namugongo, Kyaliwajjala
                                </div>
                            </div>
						</button>

						<button
							type="button"
							onclick={() => (serviceMode = "onsite")}
							class="mode-card relative text-left p-6 border transition-all duration-300 group flex gap-6 items-center
                     {serviceMode === 'onsite'
								? 'border-red-600 bg-red-600/5'
								: 'border-white/10 bg-[#141414] hover:border-white/25'}">
							<div
								class="absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300
                          {serviceMode === 'onsite' ? 'w-full' : 'w-0'}">
							</div>
							<svg
								class="mb-4 {serviceMode === 'onsite'
									? 'text-red-600'
									: 'text-white/30'} transition-colors"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round">
								<circle cx="12" cy="12" r="3"></circle>
								<path
									d="M12 2v3m0 14v3M2 12h3m14 0h3m-4.2-7.8-2.1 2.1M6.3 17.7l-2.1 2.1M17.7 17.7l2.1 2.1M6.3 6.3 4.2 4.2"
								></path>
							</svg>
                            <div>
                                <div
                                    class="font-['Barlow_Condensed'] font-800 uppercase text-white text-xl leading-tight mb-1">
                                    On-Site / Mobile
                                </div>
                                <div class="font-['Inter'] text-xs text-white/35 leading-relaxed">
                                    We come to you
                                </div>
                            </div>
						</button>
					</div>
				</div>

				<!-- Form fields -->
				<div class="space-y-0">
					<!-- Name -->
					<div class="form-field relative pb-0">
						<div
							class="field-line absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-left">
						</div>
						<label class="block font-['Inter'] text-sm font-600 uppercase text-white/35 mb-3 mt-2" for="name">
							Your Name <span class="text-red-600">*</span>
						</label>
						<input
                            id="name"
							bind:value={name}
							type="text"
							placeholder="Full name"
							autocomplete="name"
							class="w-full bg-transparent pb-4 font-['Barlow_Condensed'] font-700 uppercase text-white text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight placeholder-white/15 outline-none focus-field-input" />
					</div>

					<!-- Phone -->
					<div class="form-field relative pb-0 mt-6">
						<div
							class="field-line absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-left">
						</div>
						<label class="block font-['Inter'] text-sm font-600 uppercase text-white/35 mb-3" for="phone">
							Phone / WhatsApp <span class="text-red-600">*</span>
						</label>
						<input
							id="phone"
							bind:value={phone}
							type="tel"
							placeholder="+256 7XX XXX XXX"
							autocomplete="tel"
							class="w-full bg-transparent pb-4 font-['Barlow_Condensed'] font-700 uppercase text-white text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight placeholder-white/15 outline-none focus-field-input" />
					</div>

					<!-- Email -->
					<div class="form-field relative pb-0 mt-6">
						<div class="field-line absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-left">
						</div>
						<label class="block font-['Inter'] text-sm font-600 uppercase
                          text-white/35 mb-3" for="email">
							Email <span class="text-white/20 normal-case tracking-normal text-sm">optional</span>
						</label>
						<input
							id="email"
							bind:value={email}
							type="email"
							placeholder="your@email.com"
							autocomplete="email"
							class="w-full bg-transparent pb-4 font-['Inter'] font-400 text-white text-xl placeholder-white/15 outline-none focus-field-input" />
					</div>

					<!-- Vehicle -->
					<div class="form-field relative pb-0 mt-6">
						<div class="field-line absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-left">
						</div>
						<label class="block font-['Inter'] text-sm font-600 uppercase text-white/35 mb-3" for="vehicle">
							Vehicle Make & Model <span class="text-white/20 normal-case tracking-normal text-sm">optional</span>
						</label>
						<input
							id="vehicle"
							bind:value={vehicle}
							type="text"
							placeholder="e.g. Toyota Land Cruiser 2018"
							class="w-full bg-transparent pb-4 font-['Inter'] font-400 text-white text-xl placeholder-white/15 outline-none focus-field-input" />
					</div>

					<!-- Service select — custom styled -->
					<div class="form-field mt-6">
						<label class="block font-['Inter'] text-sm font-600 uppercase
                          text-white/35 mb-3 mt-6" for="service">
							Service Needed <span class="text-red-600">*</span>
						</label>
						<!-- Custom select wrapper -->
						<div class="relative pb-4">
							<select
                                id="service"
								bind:value={service}
								class="w-full bg-transparent font-['Barlow_Condensed'] font-700 uppercase text-white text-[clamp(1.4rem,3vw,2.2rem)] outline-none cursor-pointer appearance-none focus-field-input pr-10">
								<option
									value=""
									disabled
									class="bg-[#141414] text-sm normal-case font-normal">
									Select a service
								</option>
								{#each servicesObjects as s}
									<option
										value={s.id}
										class="bg-[#141414] text-base normal-case font-normal"
										>{s.name}</option>
								{/each}
							</select>
							<!-- Custom chevron -->
							<div
								class="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none
                          {service ? 'text-red-600' : 'text-white/25'}">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
									<path
										d="M4 6l5 5 5-5"
										stroke="currentColor"
										stroke-width="1.8"
										stroke-linecap="round"
										stroke-linejoin="round"></path>
								</svg>
							</div>
						</div>
						<div class="h-px bg-white/10"></div>
					</div>

					<!-- Message -->
					<div class="form-field relative pb-0 mt-6">
						<div class="field-line absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-left">
						</div>
						<label class="block font-['Inter'] text-sm font-600 uppercase text-white/35 mb-3" for="message">
							Additional Details
						</label>
						<textarea
                            id="message"
							bind:value={message}
							rows="4"
							placeholder="Describe the issue, symptoms, or anything useful…"
							class="w-full bg-transparent pb-4 font-['Inter'] font-300 text-white text-base md:text-lg placeholder-white/15 outline-none resize-none leading-relaxed focus-field-input">
						</textarea>
					</div>

					<!-- Submit -->
					<div class="mt-12 flex flex-col sm:flex-row gap-6 items-start {canSubmit ? 'sticky bottom-16 bg-[#141414]' : ''}">
						<div class="relative">
							<button
								id="submit-btn"
								type="button"
								onclick={handleSubmit}
								disabled={submitting || !canSubmit}
								class="relative overflow-hidden font-['Inter'] font-600 text-xs tracking-[0.25em]
                       uppercase px-14 py-5 transition-colors duration-200
                       {!canSubmit
									? 'bg-white/8 text-white/25 cursor-not-allowed'
									: submitting
										? 'bg-red-700 text-white cursor-wait'
										: 'bg-red-600 text-white'}">
								<!-- Hover sweep fill (GSAP) -->
								{#if canSubmit && !submitting}
									<span
										class="btn-fill absolute inset-0 bg-red-700 origin-left"
										style="transform: scaleX(0)"></span>
								{/if}
								<span class="relative z-10">
									{#if submitting}
										<span class="flex items-center gap-3">
											<span
												class="w-3 h-3 border border-white/50 border-t-white rounded-full animate-spin"
											></span>
											Sending…
										</span>
									{:else}
										Confirm Booking
									{/if}
								</span>
							</button>
						</div>

						<p
							class="font-['Inter'] text-[11px] text-white/25 leading-relaxed self-center max-w-xs">
							We'll confirm via WhatsApp or phone call within the hour during working
							hours.
						</p>
					</div>
				</div>
			{/if}
		</div>

		<!-- ════════════════════════════════════════════════════════════════════════
      SIDEBAR COLUMN — sticky
    ════════════════════════════════════════════════════════════════════════ -->
		<div class="md:sticky md:top-28 space-y-0">
			<!-- Quick links block -->
			<div class="sidebar-block bg-[#141414] border border-white/10 relative overflow-hidden">
				<!-- Red top-left corner accent -->
				<div class="absolute top-0 left-0 w-10 h-0.5 bg-red-600"></div>
				<div class="absolute top-0 left-0 w-0.5 h-10 bg-red-600"></div>

				<div class="p-8 md:p-10">
					<p
						class="font-['Inter'] text-sm font-600 uppercase text-red-600 mb-8">
						Prefer Direct Contact?
					</p>

					<div class="space-y-0 divide-y divide-white/6">
						<a
							href="https://wa.me/256759158049"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-5 py-6 hover:pl-2 transition-all duration-200">
							<div
								class="w-10 h-10 border border-white/10 flex items-center justify-center
                          shrink-0 group-hover:border-red-600 transition-colors duration-200">
								<svg
									width="17"
									height="17"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="text-white/40 group-hover:text-red-600 transition-colors duration-200">
									<path
										d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
									></path>
								</svg>
							</div>
							<div class="flex-1 min-w-0">
								<div
									class="font-['Inter'] text-[9px] uppercase text-white/25 mb-0.5">
									WhatsApp
								</div>
								<div
									class="font-['Barlow_Condensed'] font-700 uppercase text-white text-xl">
									+256 75 915 8049
								</div>
							</div>
							<svg
								class="text-white/20 group-hover:text-red-600 group-hover:translate-x-1
                          transition-all duration-200 shrink-0"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none">
								<path
									d="M3 8h10M9 4l4 4-4 4"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"></path>
							</svg>
						</a>

						<a
							href="tel:+256765219273"
							class="group flex items-center gap-5 py-6 hover:pl-2 transition-all duration-200">
							<div
								class="w-10 h-10 border border-white/10 flex items-center justify-center
                          shrink-0 group-hover:border-red-600 transition-colors duration-200">
								<svg
									width="17"
									height="17"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="text-white/40 group-hover:text-red-600 transition-colors duration-200">
									<path
										d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.5 2.88 2 2 0 012.5 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.36-.36a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
									></path>
								</svg>
							</div>
							<div class="flex-1 min-w-0">
								<div
									class="font-['Inter'] text-[9px] uppercase text-white/25 mb-0.5">
									Call
								</div>
								<div
									class="font-['Barlow_Condensed'] font-700 uppercase text-white text-xl">
									+256 76 521 9273
								</div>
							</div>
							<svg
								class="text-white/20 group-hover:text-red-600 group-hover:translate-x-1
                          transition-all duration-200 shrink-0"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none">
								<path
									d="M3 8h10M9 4l4 4-4 4"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"></path>
							</svg>
						</a>

						<a
							href="mailto:connect@mechbrifauto.com"
							class="group flex items-center gap-5 py-6 hover:pl-2 transition-all duration-200">
							<div
								class="w-10 h-10 border border-white/10 flex items-center justify-center
                          shrink-0 group-hover:border-red-600 transition-colors duration-200">
								<svg
									width="17"
									height="17"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="text-white/40 group-hover:text-red-600 transition-colors duration-200">
									<path
										d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
									></path>
									<polyline points="22,6 12,13 2,6"></polyline>
								</svg>
							</div>
							<div class="flex-1 min-w-0 overflow-hidden">
								<div
									class="font-['Inter'] text-[9px] uppercase text-white/25 mb-0.5">
									Email
								</div>
								<div class="font-['Inter'] font-500 text-white text-sm truncate">
									connect@mechbrifauto.com
								</div>
							</div>
							<svg
								class="text-white/20 group-hover:text-red-600 group-hover:translate-x-1
                          transition-all duration-200 shrink-0 flex-shrink-0"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none">
								<path
									d="M3 8h10M9 4l4 4-4 4"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Hours block -->
			<div class="sidebar-block border border-white/10 border-t-0 p-8 md:p-10 bg-[#141414]">
				<p
					class="font-['Inter'] text-sm font-600 uppercase text-white/30 mb-7">
					Opening Hours
				</p>
				<div class="space-y-0 divide-y divide-white/[0.06]">
					{#each hours as row}
						<div class="flex items-center justify-between py-4">
							<span class="font-['Inter'] text-sm text-white/50">{row.day}</span>
							<span
								class="font-['Barlow_Condensed'] font-700 uppercase text-lg
                           {row.open ? 'text-white' : 'text-white/20'}">
								{row.time}
							</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Location block -->
			<div class="sidebar-block border border-white/10 border-t-0 p-8 md:p-10 bg-[#141414]">
				<p
					class="font-['Inter'] text-sm font-600 uppercase text-white/30 mb-5">
					Garage Location
				</p>
				<p
					class="font-['Barlow_Condensed'] font-800 uppercase text-white text-2xl leading-snug mb-5">
					Plot 7, Namugongo<br />Kyaliwajjala, Kampala
				</p>
				<a
					href="https://maps.google.com/?q=Mechbrif+Auto+Namugongo+Kyaliwajjala+Kampala"
					target="_blank"
					rel="noopener"
					class="inline-flex items-center gap-2 font-['Inter'] font-600 text-sm
                  uppercase text-red-600 hover:text-red-400 transition-colors group">
					Open in Maps
					<span class="group-hover:translate-x-1 transition-transform duration-200"
						>→</span>
				</a>
			</div>

			<!-- Response time badge -->
			<div
				class="sidebar-block border border-white/10 border-t-0 p-8 md:p-10 bg-[#0D0D0D]
                  flex items-center gap-5">
				<div class="w-2 h-2 rounded-full bg-green-500 shrink-0 animate-pulse"></div>
				<p class="font-['Inter'] text-sm text-white/40 leading-relaxed">
					Average response time: <span class="text-white/70">under 1 hour</span> during working
					hours
				</p>
			</div>
		</div>
	</div>
</section>

<div
	class="full-width bg-[#141414] border-t border-white/10 py-5 overflow-hidden select-none"
	aria-hidden="true">
	<div id="contact-ticker" class="flex whitespace-nowrap">
		{#each Array(2) as _}
			<span
				class="font-['Barlow_Condensed'] font-700 uppercase text-white/8 text-3xl md:text-4xl
                   tracking-widest pr-16">
				BOOK A MECHANIC &nbsp;·&nbsp; CONFIRMED WITHIN THE HOUR &nbsp;·&nbsp; KAMPALA'S
				TECH-FORWARD GARAGE &nbsp;·&nbsp; ON-SITE SERVICE AVAILABLE &nbsp;·&nbsp; MON-SAT
				8AM-6PM &nbsp;·&nbsp;
			</span>
		{/each}
	</div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════════
  STYLES
════════════════════════════════════════════════════════════════════════════ -->
<style>
	/* Field active state — red underline on focus */
	.focus-field-input:focus ~ .field-line,
	.focus-field-input:focus + .field-line {
		background-color: #dc2626;
	}

	/* Give the focus-within container a red underline */
	.form-field:focus-within .field-line {
		background-color: #dc2626 !important;
	}

	/* Select option colours */
	select option {
		background-color: #141414;
		color: #fff;
		font-family: "Inter", sans-serif;
		font-size: 1rem;
		text-transform: none;
		font-weight: 400;
	}

	/* Bottom ticker — slow rightward drift */
	#contact-ticker {
		animation: tickerDrift 28s linear infinite;
	}
	@keyframes tickerDrift {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		#contact-ticker {
			animation: none;
		}
	}
</style>
