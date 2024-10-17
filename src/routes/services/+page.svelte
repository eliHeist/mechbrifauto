<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { List } from '$lib/components/custom/list';
	import Button from '$lib/components/ui/button/button.svelte';
	import { contactFormBoolean } from '$lib/stores/booleanStore';

	function toggleContactFormBoolean() {
		contactFormBoolean.update((value) => !value);
	}

	const servicePackages = [
		{
			title: 'SERVICE A',
			description:
				'Service A is our essential maintenance package designed to keep your engine running smoothly. Regular oil and filter changes help protect your engine from wear and tear, ensuring long-lasting performance.',
			items: ['Oil Filter', 'Engine Oil'],
			recommendation: 'Recommended every 5000 kms'
		},
		{
			title: 'SERVICE B1',
			description:
				'Service B1 offers a more comprehensive service, replacing not only your engine oil and filter but also key components like the fuel filter, air cleaner, and AC filter. This package is ideal for maintaining fuel efficiency and ensuring clean airflow throughout your vehicle.',
			items: ['Fuel Filter', 'Air Cleaner', 'Air Cleaner'],
			recommendation: "After 4 Service A's (approximately 20,000 km)"
		},
		{
			title: 'SERVICE B2',
			description:
				'Service B2 is our most extensive maintenance package, covering a full vehicle service. In addition to oil and filter changes, this service includes a thorough inspection of your braking system, timing belt, and gearbox, ensuring your vehicle is safe, reliable, and ready for any journey.',
			items: ['Full Vehicle Service', 'Timing Belt', 'Brakes', 'Gearbox'],
			recommendation: "After 8 Service A's (approximately 40,000 km)"
		}
	];

	const services = [
		{
			title: 'Oil Change and Fluid Services',
			description:
				'Our advanced computerized diagnostic system identifies issues quickly and accurately, ensuring your vehicle receives the precise care it needs. From engine performance to electrical systems, we utilize cutting-edge technology to troubleshoot and resolve problems efficiently.',
			items: [
				'Oil and filter replacement',
				'Brake, transmission, and coolant fluid checks',
				'Multi-point inspection'
			]
		},
		{
			title: 'Brake Inspection and Repair',
			description:
				"Your safety is our priority. Our comprehensive brake services ensure your vehicle's braking system is working perfectly, from pads and rotors to brake fluid and sensors",
			items: ['Brake pad replacement', 'Rotor resurfacing or replacement', 'Brake fluid flush']
		},
		{
			title: 'Engine Tune-Up',
			description:
				'Enhance your vehicle’s performance with our comprehensive engine tune-up service. We inspect and optimize all critical systems to improve fuel efficiency, reduce emissions, and extend engine life.',
			items: [
				'Spark plug replacement',
				'Air filter inspection and replacement',
				'Engine performance diagnostics'
			]
		},
		{
			title: 'Suspension and Steering Services',
			description:
				'Maintain a smooth and stable ride with our suspension and steering services. We inspect and repair key components to ensure your vehicle handles safely and comfortably.',
			items: [
				'Suspension inspection and repair',
				'Shock absorber replacement',
				'Power steering system check'
			]
		},
		{
			title: 'Computerized Diagnostics',
			description:
				'We use state-of-the-art computerized diagnostic tools to accurately identify issues in your vehicle. Whether it’s an engine fault or an electrical issue, we’ll pinpoint the problem quickly and efficiently.',
			items: [
				'Full system scans',
				'Fault code identification',
				'Detailed report and repair recommendations'
			]
		},
		{
			title: 'On-Site or Garage Service',
			description:
				'Whether you prefer to visit us at our fully-equipped garage or need service at your home or office, we’ve got you covered. Our mobile team brings expert care to you, saving you time and hassle.',
			items: [
				'Flexible scheduling for on-site or garage visits',
				'Full range of services at either location',
				'Professional, friendly technicians'
			]
		}
	];
</script>

<section class="pt-8 pb-24 grid gap-[0.625rem] breakout">
	<div class="bg-dark-3 px-8 py-16 rounded-tl-[13.75rem] rounded-br-[13.75rem] hidden"></div>
	<div class="bg-dark-3 px-8 py-16 rounded-br-[13.75rem] sm:rounded-bl-[13.75rem]">
		<h1 class="h1">Expert Auto Services to Keep You Moving</h1>
		<p class="mt-8">
			At Mechbrif Auto, we pride ourselves on offering top-tier automotive services tailored to your
			needs. From routine maintenance to on-site repairs, our skilled technicians are dedicated to
			ensuring your vehicle performs at its best, whether you're visiting our garage or getting
			service right at your doorstep.
		</p>
	</div>
	<div class="bg-dark-3 px-8 py-16 rounded-tr-[13.75rem] rounded-bl-[13.75rem] hidden"></div>
</section>

<div class="py-24 full-width content-grid bg-dark-2">
	<section class="pb-24">
		<h2 class="h2">Service Packages <br />For your Vehicle</h2>
		<div class="grid gap-8">
			{#each servicePackages as pkg}
				<Card.Root>
					<Card.Header>
						<Card.Title>{pkg.title}</Card.Title>
					</Card.Header>
					<Card.Content>
						<p>{pkg.description}</p>
						<List.Root class="mt-6">
							<List.Items class="list-items">
								{#each pkg.items as item}
									<List.Item class="list-item">{item}</List.Item>
								{/each}
							</List.Items>
						</List.Root>
						<p class="mt-6 italic">{pkg.recommendation}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</section>
	<section class="pt-24">
		<div class="grid gap-8">
			<div class="sm:grid place-content-center hidden sm:order-2">
				<svg class="max-w-[28rem] w-full" viewBox="0 0 364 349" fill="none">
					<path
						d="M168.58 20L175.18 5.9H178.08L184.68 20H181L179.34 16.12L180.74 17.14H172.5L173.92 16.12L172.26 20H168.58ZM176.6 9.74L174.28 15.28L173.72 14.32H179.54L178.98 15.28L176.64 9.74H176.6ZM186.054 20V17.02H189.194V8.96H190.874L186.814 11.28L185.474 8.62L190.274 5.9H192.854V17.02H195.794V20H186.054Z"
						fill="white"
					/>
					<path
						d="M289.58 62L296.18 47.9H299.08L305.68 62H302L300.34 58.12L301.74 59.14H293.5L294.92 58.12L293.26 62H289.58ZM297.6 51.74L295.28 57.28L294.72 56.32H300.54L299.98 57.28L297.64 51.74H297.6ZM306.634 62V59.3L310.874 54.86C311.221 54.4867 311.494 54.1533 311.694 53.86C311.907 53.5533 312.061 53.2733 312.154 53.02C312.261 52.7533 312.314 52.4867 312.314 52.22C312.314 51.7133 312.147 51.3333 311.814 51.08C311.481 50.8267 311.001 50.7 310.374 50.7C309.841 50.7 309.294 50.8 308.734 51C308.187 51.1867 307.641 51.4933 307.094 51.92L305.954 49.24C306.567 48.76 307.314 48.38 308.194 48.1C309.074 47.82 309.974 47.68 310.894 47.68C311.987 47.68 312.901 47.84 313.634 48.16C314.381 48.48 314.947 48.9467 315.334 49.56C315.721 50.16 315.914 50.9067 315.914 51.8C315.914 52.2267 315.867 52.6467 315.774 53.06C315.681 53.46 315.534 53.86 315.334 54.26C315.134 54.6467 314.874 55.0467 314.554 55.46C314.234 55.8733 313.847 56.3 313.394 56.74L310.154 59.94V59.02H316.434V62H306.634Z"
						fill="white"
					/>
					<path
						d="M335.58 177L342.18 162.9H345.08L351.68 177H348L346.34 173.12L347.74 174.14H339.5L340.92 173.12L339.26 177H335.58ZM343.6 166.74L341.28 172.28L340.72 171.32H346.54L345.98 172.28L343.64 166.74H343.6ZM356.834 177.22C356.167 177.22 355.514 177.16 354.874 177.04C354.247 176.92 353.661 176.747 353.114 176.52C352.567 176.293 352.114 176.027 351.754 175.72L352.874 172.98C353.461 173.393 354.074 173.7 354.714 173.9C355.354 174.1 356.014 174.2 356.694 174.2C357.174 174.2 357.574 174.147 357.894 174.04C358.214 173.933 358.454 173.773 358.614 173.56C358.774 173.333 358.854 173.053 358.854 172.72C358.854 172.253 358.687 171.913 358.354 171.7C358.034 171.473 357.561 171.36 356.934 171.36H354.474V168.44H356.574C356.961 168.44 357.287 168.387 357.554 168.28C357.834 168.173 358.047 168.02 358.194 167.82C358.341 167.607 358.414 167.347 358.414 167.04C358.414 166.6 358.254 166.267 357.934 166.04C357.627 165.813 357.167 165.7 356.554 165.7C355.914 165.7 355.307 165.8 354.734 166C354.174 166.2 353.634 166.507 353.114 166.92L351.974 164.24C352.574 163.747 353.307 163.367 354.174 163.1C355.054 162.82 355.967 162.68 356.914 162.68C357.967 162.68 358.867 162.833 359.614 163.14C360.361 163.447 360.927 163.893 361.314 164.48C361.714 165.053 361.914 165.747 361.914 166.56C361.914 167.373 361.687 168.073 361.234 168.66C360.781 169.247 360.161 169.633 359.374 169.82V169.54C359.987 169.633 360.514 169.84 360.954 170.16C361.407 170.48 361.754 170.887 361.994 171.38C362.234 171.873 362.354 172.44 362.354 173.08C362.354 173.933 362.134 174.673 361.694 175.3C361.254 175.927 360.621 176.407 359.794 176.74C358.967 177.06 357.981 177.22 356.834 177.22Z"
						fill="white"
					/>
					<path
						d="M291.28 293V278.9H298.08C299.6 278.9 300.773 279.227 301.6 279.88C302.44 280.533 302.86 281.42 302.86 282.54C302.86 283.367 302.62 284.073 302.14 284.66C301.673 285.247 301.033 285.647 300.22 285.86V285.54C300.873 285.66 301.42 285.873 301.86 286.18C302.3 286.487 302.64 286.88 302.88 287.36C303.12 287.827 303.24 288.373 303.24 289C303.24 289.813 303.04 290.52 302.64 291.12C302.24 291.72 301.667 292.187 300.92 292.52C300.187 292.84 299.307 293 298.28 293H291.28ZM294.8 290.3H297.78C298.06 290.3 298.307 290.28 298.52 290.24C298.733 290.2 298.913 290.14 299.06 290.06C299.207 289.98 299.333 289.88 299.44 289.76C299.547 289.627 299.62 289.48 299.66 289.32C299.713 289.147 299.74 288.953 299.74 288.74C299.74 288.54 299.713 288.36 299.66 288.2C299.62 288.027 299.547 287.88 299.44 287.76C299.333 287.627 299.207 287.52 299.06 287.44C298.913 287.36 298.733 287.3 298.52 287.26C298.307 287.22 298.06 287.2 297.78 287.2H294.8V290.3ZM294.8 284.5H297.42C298.087 284.5 298.573 284.38 298.88 284.14C299.2 283.9 299.36 283.533 299.36 283.04C299.36 282.547 299.2 282.187 298.88 281.96C298.573 281.72 298.087 281.6 297.42 281.6H294.8V284.5ZM305.843 293V290.02H308.983V281.96H310.663L306.603 284.28L305.263 281.62L310.063 278.9H312.643V290.02H315.583V293H305.843Z"
						fill="white"
					/>
					<path
						d="M169.58 342L176.18 327.9H179.08L185.68 342H182L180.34 338.12L181.74 339.14H173.5L174.92 338.12L173.26 342H169.58ZM177.6 331.74L175.28 337.28L174.72 336.32H180.54L179.98 337.28L177.64 331.74H177.6ZM187.054 342V339.02H190.194V330.96H191.874L187.814 333.28L186.474 330.62L191.274 327.9H193.854V339.02H196.794V342H187.054Z"
						fill="white"
					/>
					<path
						d="M48.58 293L55.18 278.9H58.08L64.68 293H61L59.34 289.12L60.74 290.14H52.5L53.92 289.12L52.26 293H48.58ZM56.6 282.74L54.28 288.28L53.72 287.32H59.54L58.98 288.28L56.64 282.74H56.6ZM65.6339 293V290.3L69.8739 285.86C70.2206 285.487 70.4939 285.153 70.6939 284.86C70.9072 284.553 71.0606 284.273 71.1539 284.02C71.2606 283.753 71.3139 283.487 71.3139 283.22C71.3139 282.713 71.1472 282.333 70.8139 282.08C70.4806 281.827 70.0006 281.7 69.3739 281.7C68.8406 281.7 68.2939 281.8 67.7339 282C67.1872 282.187 66.6406 282.493 66.0939 282.92L64.9539 280.24C65.5672 279.76 66.3139 279.38 67.1939 279.1C68.0739 278.82 68.9739 278.68 69.8939 278.68C70.9872 278.68 71.9006 278.84 72.6339 279.16C73.3806 279.48 73.9472 279.947 74.3339 280.56C74.7206 281.16 74.9139 281.907 74.9139 282.8C74.9139 283.227 74.8672 283.647 74.7739 284.06C74.6806 284.46 74.5339 284.86 74.3339 285.26C74.1339 285.647 73.8739 286.047 73.5539 286.46C73.2339 286.873 72.8472 287.3 72.3939 287.74L69.1539 290.94V290.02H75.4339V293H65.6339Z"
						fill="white"
					/>
					<path
						d="M0.58 179L7.18 164.9H10.08L16.68 179H13L11.34 175.12L12.74 176.14H4.5L5.92 175.12L4.26 179H0.58ZM8.6 168.74L6.28 174.28L5.72 173.32H11.54L10.98 174.28L8.64 168.74H8.6ZM21.8339 179.22C21.1672 179.22 20.5139 179.16 19.8739 179.04C19.2472 178.92 18.6606 178.747 18.1139 178.52C17.5672 178.293 17.1139 178.027 16.7539 177.72L17.8739 174.98C18.4606 175.393 19.0739 175.7 19.7139 175.9C20.3539 176.1 21.0139 176.2 21.6939 176.2C22.1739 176.2 22.5739 176.147 22.8939 176.04C23.2139 175.933 23.4539 175.773 23.6139 175.56C23.7739 175.333 23.8539 175.053 23.8539 174.72C23.8539 174.253 23.6872 173.913 23.3539 173.7C23.0339 173.473 22.5606 173.36 21.9339 173.36H19.4739V170.44H21.5739C21.9606 170.44 22.2872 170.387 22.5539 170.28C22.8339 170.173 23.0472 170.02 23.1939 169.82C23.3406 169.607 23.4139 169.347 23.4139 169.04C23.4139 168.6 23.2539 168.267 22.9339 168.04C22.6272 167.813 22.1672 167.7 21.5539 167.7C20.9139 167.7 20.3072 167.8 19.7339 168C19.1739 168.2 18.6339 168.507 18.1139 168.92L16.9739 166.24C17.5739 165.747 18.3072 165.367 19.1739 165.1C20.0539 164.82 20.9672 164.68 21.9139 164.68C22.9672 164.68 23.8672 164.833 24.6139 165.14C25.3606 165.447 25.9272 165.893 26.3139 166.48C26.7139 167.053 26.9139 167.747 26.9139 168.56C26.9139 169.373 26.6872 170.073 26.2339 170.66C25.7806 171.247 25.1606 171.633 24.3739 171.82V171.54C24.9872 171.633 25.5139 171.84 25.9539 172.16C26.4072 172.48 26.7539 172.887 26.9939 173.38C27.2339 173.873 27.3539 174.44 27.3539 175.08C27.3539 175.933 27.1339 176.673 26.6939 177.3C26.2539 177.927 25.6206 178.407 24.7939 178.74C23.9672 179.06 22.9806 179.22 21.8339 179.22Z"
						fill="white"
					/>
					<path
						d="M47.28 59V44.9H54.08C55.6 44.9 56.7733 45.2267 57.6 45.88C58.44 46.5333 58.86 47.42 58.86 48.54C58.86 49.3667 58.62 50.0733 58.14 50.66C57.6733 51.2467 57.0333 51.6467 56.22 51.86V51.54C56.8733 51.66 57.42 51.8733 57.86 52.18C58.3 52.4867 58.64 52.88 58.88 53.36C59.12 53.8267 59.24 54.3733 59.24 55C59.24 55.8133 59.04 56.52 58.64 57.12C58.24 57.72 57.6667 58.1867 56.92 58.52C56.1867 58.84 55.3067 59 54.28 59H47.28ZM50.8 56.3H53.78C54.06 56.3 54.3067 56.28 54.52 56.24C54.7333 56.2 54.9133 56.14 55.06 56.06C55.2067 55.98 55.3333 55.88 55.44 55.76C55.5467 55.6267 55.62 55.48 55.66 55.32C55.7133 55.1467 55.74 54.9533 55.74 54.74C55.74 54.54 55.7133 54.36 55.66 54.2C55.62 54.0267 55.5467 53.88 55.44 53.76C55.3333 53.6267 55.2067 53.52 55.06 53.44C54.9133 53.36 54.7333 53.3 54.52 53.26C54.3067 53.22 54.06 53.2 53.78 53.2H50.8V56.3ZM50.8 50.5H53.42C54.0867 50.5 54.5733 50.38 54.88 50.14C55.2 49.9 55.36 49.5333 55.36 49.04C55.36 48.5467 55.2 48.1867 54.88 47.96C54.5733 47.72 54.0867 47.6 53.42 47.6H50.8V50.5ZM61.423 59V56.3L65.663 51.86C66.0096 51.4867 66.283 51.1533 66.483 50.86C66.6963 50.5533 66.8496 50.2733 66.943 50.02C67.0496 49.7533 67.103 49.4867 67.103 49.22C67.103 48.7133 66.9363 48.3333 66.603 48.08C66.2696 47.8267 65.7896 47.7 65.163 47.7C64.6296 47.7 64.083 47.8 63.523 48C62.9763 48.1867 62.4296 48.4933 61.883 48.92L60.743 46.24C61.3563 45.76 62.103 45.38 62.983 45.1C63.863 44.82 64.763 44.68 65.683 44.68C66.7763 44.68 67.6896 44.84 68.423 45.16C69.1696 45.48 69.7363 45.9467 70.123 46.56C70.5096 47.16 70.703 47.9067 70.703 48.8C70.703 49.2267 70.6563 49.6467 70.563 50.06C70.4696 50.46 70.323 50.86 70.123 51.26C69.923 51.6467 69.663 52.0467 69.343 52.46C69.023 52.8733 68.6363 53.3 68.183 53.74L64.943 56.94V56.02H71.223V59H61.423Z"
						fill="white"
					/>
					<path
						d="M184.707 29.2929C184.317 28.9024 183.683 28.9024 183.293 29.2929L176.929 35.6569C176.538 36.0474 176.538 36.6805 176.929 37.0711C177.319 37.4616 177.953 37.4616 178.343 37.0711L184 31.4142L189.657 37.0711C190.047 37.4616 190.681 37.4616 191.071 37.0711C191.462 36.6805 191.462 36.0474 191.071 35.6569L184.707 29.2929ZM185 171L185 30L183 30L183 171L185 171Z"
						fill="url(#paint0_linear_36_211)"
					/>
					<path
						d="M284.702 71.2979C284.702 70.7457 284.254 70.2979 283.702 70.2979L274.702 70.2979C274.15 70.2979 273.702 70.7457 273.702 71.2979C273.702 71.8502 274.15 72.2979 274.702 72.2979L282.702 72.2979L282.702 80.2979C282.702 80.8502 283.15 81.2979 283.702 81.2979C284.254 81.2979 284.702 80.8502 284.702 80.2979L284.702 71.2979ZM184.707 171.707L284.409 72.0051L282.995 70.5908L183.293 170.293L184.707 171.707Z"
						fill="url(#paint1_linear_36_211)"
					/>
					<path
						d="M283.702 271.702C284.254 271.702 284.702 271.254 284.702 270.702L284.702 261.702C284.702 261.15 284.254 260.702 283.702 260.702C283.15 260.702 282.702 261.15 282.702 261.702L282.702 269.702L274.702 269.702C274.15 269.702 273.702 270.15 273.702 270.702C273.702 271.254 274.15 271.702 274.702 271.702L283.702 271.702ZM183.293 171.707L282.995 271.409L284.409 269.995L184.707 170.293L183.293 171.707Z"
						fill="url(#paint2_linear_36_211)"
					/>
					<path
						d="M83.2979 270.702C83.2979 271.254 83.7457 271.702 84.2979 271.702L93.2979 271.702C93.8502 271.702 94.2979 271.254 94.2979 270.702C94.2979 270.15 93.8502 269.702 93.2979 269.702L85.2979 269.702L85.2979 261.702C85.2979 261.15 84.8502 260.702 84.2979 260.702C83.7457 260.702 83.2979 261.15 83.2979 261.702L83.2979 270.702ZM183.293 170.293L83.5908 269.995L85.0051 271.409L184.707 171.707L183.293 170.293Z"
						fill="url(#paint3_linear_36_211)"
					/>
					<path
						d="M84.2979 70.2979C83.7457 70.2979 83.2979 70.7457 83.2979 71.2979L83.2979 80.2979C83.2979 80.8502 83.7457 81.2979 84.2979 81.2979C84.8502 81.2979 85.2979 80.8502 85.2979 80.2979L85.2979 72.2979L93.2979 72.2979C93.8502 72.2979 94.2979 71.8502 94.2979 71.2979C94.2979 70.7457 93.8502 70.2979 93.2979 70.2979L84.2979 70.2979ZM184.707 170.293L85.0051 70.5908L83.5908 72.0051L183.293 171.707L184.707 170.293Z"
						fill="url(#paint4_linear_36_211)"
					/>
					<path
						d="M42.2929 170.293C41.9024 170.683 41.9024 171.317 42.2929 171.707L48.6569 178.071C49.0474 178.462 49.6805 178.462 50.0711 178.071C50.4616 177.681 50.4616 177.047 50.0711 176.657L44.4142 171L50.0711 165.343C50.4616 164.953 50.4616 164.319 50.0711 163.929C49.6805 163.538 49.0474 163.538 48.6569 163.929L42.2929 170.293ZM184 170H43V172H184V170Z"
						fill="url(#paint5_linear_36_211)"
					/>
					<path
						d="M325.707 171.707C326.098 171.317 326.098 170.683 325.707 170.293L319.343 163.929C318.953 163.538 318.319 163.538 317.929 163.929C317.538 164.319 317.538 164.953 317.929 165.343L323.586 171L317.929 176.657C317.538 177.047 317.538 177.681 317.929 178.071C318.319 178.462 318.953 178.462 319.343 178.071L325.707 171.707ZM184 172H325V170H184V172Z"
						fill="url(#paint6_linear_36_211)"
					/>
					<path
						d="M183.293 312.707C183.683 313.098 184.317 313.098 184.707 312.707L191.071 306.343C191.462 305.953 191.462 305.319 191.071 304.929C190.681 304.538 190.047 304.538 189.657 304.929L184 310.586L178.343 304.929C177.953 304.538 177.319 304.538 176.929 304.929C176.538 305.319 176.538 305.953 176.929 306.343L183.293 312.707ZM183 171V312H185V171H183Z"
						fill="url(#paint7_linear_36_211)"
					/>
					<path
						d="M182.5 140L204.067 148.933L213 170.5L204.067 192.067L182.5 201L160.933 192.067L152 170.5L160.933 148.933L182.5 140Z"
						fill="url(#paint8_radial_36_211)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_36_211"
							x1="184.5"
							y1="30"
							x2="184.5"
							y2="171"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#DDC0C0" />
							<stop offset="1" stop-color="#1C1414" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_36_211"
							x1="284.056"
							y1="71.6515"
							x2="184.354"
							y2="171.354"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#DDC0C0" />
							<stop offset="1" stop-color="#1C1414" />
						</linearGradient>
						<linearGradient
							id="paint2_linear_36_211"
							x1="283.349"
							y1="271.056"
							x2="183.646"
							y2="171.354"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#DDC0C0" />
							<stop offset="1" stop-color="#1C1414" />
						</linearGradient>
						<linearGradient
							id="paint3_linear_36_211"
							x1="83.9444"
							y1="270.349"
							x2="183.646"
							y2="170.646"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#DDC0C0" />
							<stop offset="1" stop-color="#1C1414" />
						</linearGradient>
						<linearGradient
							id="paint4_linear_36_211"
							x1="84.6515"
							y1="70.9444"
							x2="184.354"
							y2="170.646"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#DDC0C0" />
							<stop offset="1" stop-color="#1C1414" />
						</linearGradient>
						<linearGradient
							id="paint5_linear_36_211"
							x1="43"
							y1="170.5"
							x2="184"
							y2="170.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#DDC0C0" />
							<stop offset="1" stop-color="#1C1414" />
						</linearGradient>
						<linearGradient
							id="paint6_linear_36_211"
							x1="325"
							y1="171.5"
							x2="184"
							y2="171.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#DDC0C0" />
							<stop offset="1" stop-color="#1C1414" />
						</linearGradient>
						<linearGradient
							id="paint7_linear_36_211"
							x1="183.5"
							y1="312"
							x2="183.5"
							y2="171"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#DDC0C0" />
							<stop offset="1" stop-color="#1C1414" />
						</linearGradient>
						<radialGradient
							id="paint8_radial_36_211"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(182.5 170.5) rotate(90) scale(30.5)"
						>
							<stop stop-color="#150B0B" />
							<stop offset="0.59" stop-color="#1C1414" />
							<stop offset="1" stop-color="#1C1414" stop-opacity="0" />
						</radialGradient>
					</defs>
				</svg>
			</div>
			<div class="sm:order-1">
				<h2 class="h2">Schedule Your Service Today!</h2>
				<p class="pt-[3.5rem] pb-8">
					Choose the right service package to keep your vehicle in peak condition. Start with our
					essential Service A1, A2, and A3 for regular maintenance, followed by the more
					comprehensive Service B1. After that, return to A1, A2, and A3 to maintain performance,
					and finish with the full-service care of B2. Book your appointment now and let our expert
					technicians handle the rest!
				</p>
				<Button on:click={toggleContactFormBoolean}>Get in touch</Button>
			</div>
		</div>
	</section>
</div>

<section class="py-24">
	<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each services as pkg}
			<Card.Root>
				<Card.Header>
					<Card.Title>{pkg.title}</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>{pkg.description}</p>
					<List.Root class="mt-6">
						<List.Items class="list-items">
							{#each pkg.items as item}
								<List.Item class="list-item">{item}</List.Item>
							{/each}
						</List.Items>
					</List.Root>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>

<section class="py-24 grid text-center justify-center justify-items-center">
    <h2 class="h1 max-w-[44rem]">Ready to Give Your Car the Care It Deserves?</h2>
    <p class="text-2xl mt-7 mb-14 max-w-[36.5rem]">
        Whether it's routine maintenance or a full-service check, our skilled technicians are here to help you stay on the road with confidence.
    </p>
    <Button on:click={toggleContactFormBoolean}>Get in touch</Button>
</section>

<style lang="scss"></style>
