<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import HomeCarousel from '$lib/sections/homeCarousel.svelte';

    import { contactFormBoolean } from '$lib/stores/booleanStore';

	function toggleContactFormBoolean() {
		contactFormBoolean.update((value) => !value);
	}
</script>

<section class="pt-8 pb-24 grid gap-[0.625rem]">
	<div class="bg-dark-3 px-8 py-16 rounded-tr-[13.75rem]">
		<p class="pre-title grid sm:flex mb-2">
			<span>Expert Care, </span>
			<span>Wherever You Are</span>
		</p>
		<h1 class="h2">Convenient <br />Auto Service <br />Anywhere</h1>
		<p class="my-10">
			Get your vehicle repairs and services done at the most convenient location. Timely, reliable,
			and hassle-free auto care right here.
		</p>
		<Button variant="dark" on:click={toggleContactFormBoolean}>Book a Mechanic</Button>
	</div>
	<div class="bg-dark-3 px-8 py-16 rounded-tl-[13.75rem] sm:rounded-bl-[13.75rem]"></div>
	<div class="bg-dark-3 px-8 py-16 rounded-bl-[13.75rem] sm:rounded-br-[13.75rem]"></div>
</section>

<section class="py-24 full-width content-grid bg-dark-2">
	<div class="grid">
		<div>
			<p class="pre-title mb-2">Expert Care, Wherever You Are</p>
			<h2 class="h1">Restoring Brilliance,<br />Inside and out.</h2>
			<p class="my-12">
				At Mechbrif Auto, we bring your vehicle back to its best, both inside and out. From interior
				deep cleaning to exterior polishing, we ensure every inch of your car shines like new.
				Experience expert detailing that enhances your car’s appearance and longevity.
			</p>

			<div class="grid gap-8">
				<div class="flex items-start gap-6">
					<svg class="w-[8rem]" viewBox="0 0 64 64" fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M57.4188 30.8961L55.3335 29.2267V56.6667H58.6668C59.1973 56.6667 59.706 56.8774 60.081 57.2525C60.4561 57.6276 60.6668 58.1363 60.6668 58.6667C60.6668 59.1972 60.4561 59.7059 60.081 60.0809C59.706 60.456 59.1973 60.6667 58.6668 60.6667H5.3335C4.80306 60.6667 4.29436 60.456 3.91928 60.0809C3.54421 59.7059 3.3335 59.1972 3.3335 58.6667C3.3335 58.1363 3.54421 57.6276 3.91928 57.2525C4.29436 56.8774 4.80306 56.6667 5.3335 56.6667H8.66683V29.2267L6.58416 30.8961C6.37895 31.0601 6.14343 31.1822 5.89106 31.2552C5.63868 31.3283 5.37439 31.3509 5.11327 31.3218C4.85215 31.2927 4.59932 31.2124 4.36921 31.0856C4.13911 30.9588 3.93623 30.7879 3.77216 30.5827C3.6081 30.3775 3.48606 30.142 3.41301 29.8896C3.33997 29.6372 3.31735 29.373 3.34645 29.1118C3.37554 28.8507 3.45578 28.5979 3.58259 28.3678C3.7094 28.1377 3.88028 27.9348 4.0855 27.7707L25.7522 10.4374C27.5255 9.01836 29.729 8.24524 32.0002 8.24524C34.2713 8.24524 36.4749 9.01836 38.2482 10.4374L59.9148 27.7707C60.1236 27.9334 60.298 28.1359 60.4279 28.3665C60.5578 28.597 60.6407 28.8511 60.6717 29.1139C60.7027 29.3767 60.6812 29.6431 60.6086 29.8976C60.5359 30.1521 60.4134 30.3896 60.2482 30.5964C60.0831 30.8032 59.8785 30.9751 59.6464 31.1023C59.4143 31.2294 59.1593 31.3093 58.8961 31.3372C58.6329 31.365 58.3669 31.3404 58.1133 31.2647C57.8597 31.189 57.6236 31.0637 57.4188 30.8961ZM32.0002 18.0001C30.0552 18.0001 28.19 18.7727 26.8147 20.1479C25.4394 21.5232 24.6668 23.3885 24.6668 25.3334C24.6668 27.2783 25.4394 29.1436 26.8147 30.5188C28.19 31.8941 30.0552 32.6667 32.0002 32.6667C33.9451 32.6667 35.8103 31.8941 37.1856 30.5188C38.5609 29.1436 39.3335 27.2783 39.3335 25.3334C39.3335 23.3885 38.5609 21.5232 37.1856 20.1479C35.8103 18.7727 33.9451 18.0001 32.0002 18.0001ZM36.6562 35.4987C35.4322 35.3334 33.9042 35.3334 32.1308 35.3334H31.8695C30.0962 35.3334 28.5682 35.3334 27.3442 35.4987C26.0348 35.6747 24.7762 36.0721 23.7575 37.0907C22.7388 38.1094 22.3415 39.3681 22.1655 40.6774C22.0002 41.9014 22.0002 43.4294 22.0002 45.2027V56.6667H42.0002V44.8721C42.0002 43.2401 41.9895 41.8241 41.8348 40.6774C41.6588 39.3681 41.2615 38.1094 40.2428 37.0907C39.2242 36.0721 37.9682 35.6747 36.6562 35.4987Z"
							fill="#666666"
						/>
						<g opacity="0.5">
							<path
								d="M28.6665 25.3333C28.6665 24.4493 29.0177 23.6014 29.6428 22.9763C30.2679 22.3512 31.1158 22 31.9998 22C32.8839 22 33.7317 22.3512 34.3569 22.9763C34.982 23.6014 35.3332 24.4493 35.3332 25.3333C35.3332 26.2174 34.982 27.0652 34.3569 27.6904C33.7317 28.3155 32.8839 28.6667 31.9998 28.6667C31.1158 28.6667 30.2679 28.3155 29.6428 27.6904C29.0177 27.0652 28.6665 26.2174 28.6665 25.3333Z"
								fill="#666666"
							/>
							<path
								d="M28.6665 25.3333C28.6665 24.4493 29.0177 23.6014 29.6428 22.9763C30.2679 22.3512 31.1158 22 31.9998 22C32.8839 22 33.7317 22.3512 34.3569 22.9763C34.982 23.6014 35.3332 24.4493 35.3332 25.3333C35.3332 26.2174 34.982 27.0652 34.3569 27.6904C33.7317 28.3155 32.8839 28.6667 31.9998 28.6667C31.1158 28.6667 30.2679 28.3155 29.6428 27.6904C29.0177 27.0652 28.6665 26.2174 28.6665 25.3333Z"
								fill="#666666"
							/>
						</g>
						<path
							opacity="0.5"
							d="M32.1333 35.3333C33.904 35.3333 35.432 35.3333 36.656 35.4987C37.968 35.6747 39.224 36.072 40.2427 37.0907C41.2613 38.1093 41.6587 39.3653 41.8347 40.6773C41.9893 41.824 42 43.2373 42 44.872V56.6667H22V45.2C22 43.4293 22 41.9013 22.1653 40.6773C22.3413 39.3653 22.7387 38.1093 23.7573 37.0907C24.776 36.072 26.0347 35.6747 27.344 35.4987C28.568 35.3333 30.096 35.3333 31.8693 35.3333H32.1333ZM42.6667 8H49.3333C49.687 8 50.0261 8.14048 50.2761 8.39052C50.5262 8.64057 50.6667 8.97971 50.6667 9.33333V20.3733L41.3333 12.9067V9.33333C41.3333 8.97971 41.4738 8.64057 41.7239 8.39052C41.9739 8.14048 42.313 8 42.6667 8Z"
							fill="#666666"
						/>
					</svg>
					<div>
						<h3 class="font-bold text-white mb-3">On-Site Services</h3>
						<p>Get your vehicle serviced at your location for maximum convenience.</p>
					</div>
				</div>
				<div class="flex items-start gap-6">
					<svg class="w-[8rem]" viewBox="0 0 64 64" fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M26.6855 10.0587L10.6855 24.28C9.84115 25.0305 9.16532 25.9513 8.70248 26.9818C8.23964 28.0122 8.00028 29.1291 8.00016 30.2587V56.6667H5.3335C4.80306 56.6667 4.29436 56.8774 3.91928 57.2525C3.54421 57.6276 3.3335 58.1363 3.3335 58.6667C3.3335 59.1972 3.54421 59.7059 3.91928 60.0809C4.29436 60.456 4.80306 60.6667 5.3335 60.6667H58.6668C59.1973 60.6667 59.706 60.456 60.081 60.0809C60.4561 59.7059 60.6668 59.1972 60.6668 58.6667C60.6668 58.1363 60.4561 57.6276 60.081 57.2525C59.706 56.8774 59.1973 56.6667 58.6668 56.6667H56.0002V30.2587C56 29.1291 55.7607 28.0122 55.2978 26.9818C54.835 25.9513 54.1592 25.0305 53.3148 24.28L37.3148 10.0587C35.8505 8.75715 33.9594 8.03821 32.0002 8.03821C30.041 8.03821 28.1499 8.75715 26.6855 10.0587ZM26.6668 22C26.1364 22 25.6277 22.2108 25.2526 22.5858C24.8775 22.9609 24.6668 23.4696 24.6668 24C24.6668 24.5305 24.8775 25.0392 25.2526 25.4143C25.6277 25.7893 26.1364 26 26.6668 26H37.3335C37.8639 26 38.3726 25.7893 38.7477 25.4143C39.1228 25.0392 39.3335 24.5305 39.3335 24C39.3335 23.4696 39.1228 22.9609 38.7477 22.5858C38.3726 22.2108 37.8639 22 37.3335 22H26.6668ZM37.4722 30.0001C39.8695 30.0001 41.8668 30.0001 43.4508 30.2134C45.1255 30.4374 46.6375 30.9334 47.8508 32.1494C49.0668 33.3627 49.5628 34.8747 49.7868 36.5494C50.0002 38.1334 50.0002 40.1334 50.0002 42.5281V56.6667H14.0002V42.5281C14.0002 40.1334 14.0002 38.1334 14.2135 36.5494C14.4375 34.8747 14.9335 33.3627 16.1468 32.1494C17.3628 30.9334 18.8748 30.4374 20.5468 30.2134C22.1335 30.0001 24.1335 30.0001 26.5282 30.0001H37.4722Z"
							fill="#666666"
						/>
						<path
							opacity="0.5"
							d="M37.472 30H26.528C24.1333 30 22.1333 30 20.5493 30.2133C18.8747 30.4373 17.3627 30.9333 16.1493 32.1493C14.9333 33.3627 14.4373 34.8747 14.2133 36.5493C14 38.1333 14 40.1333 14 42.528V56.6667H50V42.528C50 40.1333 50 38.1333 49.7867 36.5493C49.5627 34.8747 49.0667 33.3627 47.8507 32.1493C46.6373 30.9333 45.1253 30.4373 43.4507 30.2133C41.8667 30 39.8667 30 37.472 30Z"
							fill="#666666"
						/>
						<path
							d="M24 39.3334C23.4696 39.3334 22.9609 39.5441 22.5858 39.9192C22.2107 40.2942 22 40.8029 22 41.3334C22 41.8638 22.2107 42.3725 22.5858 42.7476C22.9609 43.1227 23.4696 43.3334 24 43.3334H40C40.5304 43.3334 41.0391 43.1227 41.4142 42.7476C41.7893 42.3725 42 41.8638 42 41.3334C42 40.8029 41.7893 40.2942 41.4142 39.9192C41.0391 39.5441 40.5304 39.3334 40 39.3334H24ZM24 47.3334C23.4696 47.3334 22.9609 47.5441 22.5858 47.9192C22.2107 48.2942 22 48.8029 22 49.3334C22 49.8638 22.2107 50.3725 22.5858 50.7476C22.9609 51.1227 23.4696 51.3334 24 51.3334H40C40.5304 51.3334 41.0391 51.1227 41.4142 50.7476C41.7893 50.3725 42 49.8638 42 49.3334C42 48.8029 41.7893 48.2942 41.4142 47.9192C41.0391 47.5441 40.5304 47.3334 40 47.3334H24Z"
							fill="#666666"
						/>
					</svg>

					<div>
						<h3 class="font-bold text-white mb-3">Garage Services</h3>
						<p>Visit our fully equipped garage for a wide range of services.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="hidden md:grid">
			<svg
				width="593"
				height="279"
				viewBox="0 0 593 279"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M593 117.196L563.428 120.891L507.426 128.282L471.05 201.661L448.021 96.3434L361.924 279L361.662 110.333L300.164 107.166L83.2188 96.6074L13.3464 93.176L0 92.6481H381.812L383.121 201.397L462.676 0L477.069 159.429L503.239 115.612L563.428 116.668L593 117.196Z"
					fill="#EC2227"
				/>
			</svg>
		</div>
	</div>
</section>

<section class="full-width content-grid py-24">
	<div class="full-to-content">
		<div class="grid gap-16">
			<div class="grid gap-4">
				<figure class="figure aspect-square"></figure>
				<figure class="figure aspect-square"></figure>
			</div>
			<div class="grid pl-4 sm:pl-0">
				<p class="pre-title mb-2">COMPUTERISED DIAGNOSIS</p>
				<h2 class="h2">Precision Diagnostics for Your Vehicle</h2>
				<p class="my-12">
					Our advanced computerized diagnostic system identifies issues quickly and accurately,
					ensuring your vehicle receives the precise care it needs. From engine performance to
					electrical systems, we utilize cutting-edge technology to troubleshoot and resolve
					problems efficiently.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="py-24 full-width content-grid bg-dark-2">
	<h2 class="h2 mb-16">Driving Excellence in Every Service</h2>
	<div class="grid gap-12">
		<div class="service-card">
			<img src="/images/test.jpg" alt="" />
			<div class="backdrop">
				<h3>Computerized Diagnosis</h3>
			</div>
		</div>
		<div class="service-card">
			<img src="/images/test.jpg" alt="" />
			<div class="backdrop">
				<h3>Engine Services</h3>
			</div>
		</div>
		<div class="service-card">
			<img src="/images/test.jpg" alt="" />
			<div class="backdrop">
				<h3>Suspension and Steering</h3>
			</div>
		</div>
		<div class="service-card">
			<img src="/images/test.jpg" alt="" />
			<div class="backdrop">
				<h3>General Service Maintenance</h3>
			</div>
		</div>
		<div class="service-card">
			<img src="/images/test.jpg" alt="" />
			<div class="backdrop">
				<h3>Road Rescue Services</h3>
			</div>
		</div>
		<div class="service-card">
			<img src="/images/test.jpg" alt="" />
			<div class="backdrop">
				<h3>Vehicle Restorations</h3>
			</div>
		</div>
	</div>
</section>

<section class="full-width content-grid py-24">
	<div class="grid gap-8">
		<div class="grid">
			<h2 class="h2">Stay Informed with Our Comprehensive Vehicle Reports</h2>
			<p class="pt-12">
				At Mechbrif Auto, we believe in keeping you updated on your vehicle's care. Our detailed
				vehicle reports provide a clear overview of all services performed, including inspections,
				repairs, and recommendations for future maintenance. Transparency is key to our relationship
				with you!
			</p>
		</div>
		<figure class="aspect-square figure">
			<img src="/images/test.jpg" alt="" class="w-full h-full object-cover" />
		</figure>
	</div>
</section>

<section class="py-24 full-width content-grid bg-dark-2">
	<h2 class="h2">How do we Work?</h2>
	<div class="grid gap-8 mt-8">
		<div class="grid gap-2">
			<h3 class="h4">Reception & Check-in</h3>
			<p>
				We begin by receiving the vehicle, registering the customer and vehicle details, and
				performing a thorough pre-operation check to assess its current condition.
			</p>
		</div>
		<div class="grid gap-2">
			<h3 class="h4">Diagnosis</h3>
			<p>
				Our team conducts a detailed diagnosis to identify the root cause of the issues based on the
				customer's concerns.
			</p>
		</div>
		<div class="grid gap-2">
			<h3 class="h4">Repair & Service</h3>
			<p>
				We then carry out the necessary repairs or services, addressing any issues found or
				completing the requested maintenance.
			</p>
		</div>
		<div class="grid gap-2">
			<h3 class="h4">Testing & Delivery</h3>
			<p>
				After repairs, we rigorously test the vehicle to ensure everything is in top shape before
				handing it back to the customer.
			</p>
		</div>
	</div>
	<figure class="figure aspect-video mt-16">
		<img src="/images/test.jpg" alt="" class="w-full h-full object-cover" />
	</figure>
</section>

<section class="full-width content-grid py-24">
	<h2 class="h2">Client Feedback</h2>
	<div class="full-width mt-8">
		<HomeCarousel />
	</div>
</section>

<style lang="scss">
	.service-card {
		@apply bg-dark-3 aspect-square relative overflow-hidden;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			scale: 1;
			transition: scale 500ms ease-in-out;
		}

		.backdrop {
			position: absolute;
			inset: 0;
			padding: 1rem;
			display: grid;
			align-content: end;
			transition: all 500ms ease-in-out;

			background-image: linear-gradient(
				to top,
				rgba(0, 0, 0, 0.8) 0%,
				rgba(0, 0, 0, 0.3) 50%,
				rgba(0, 0, 0, 0) 100%
			);

			h3 {
				@apply text-white font-bold;
			}
		}

		&:hover {
			img {
				scale: 1.1;
			}

			.backdrop {
				opacity: 0.8;
			}
		}
	}
</style>
