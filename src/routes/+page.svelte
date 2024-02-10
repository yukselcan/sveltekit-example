<script>
	import { queries } from '../lib/queries';
	import '../global.css';
	import { onMount } from 'svelte';
	import client from '../lib/client';

	let data = {
		fetching: true,
		error: {
			message: ''
		},
		data: {
			mails: []
		}
	};

	let email = '';
	let password = '';
	let repassword = '';
	let error = '';

	/**
	 * @param {boolean} insertData
	 */
	async function fetchData(insertData = true) {
		try {
			client(queries.selectMails)
				.then((hasuraResponse) => {
					data.fetching = false;
					if (hasuraResponse.error) {
						data.error.message = hasuraResponse.error.message;
					}
					data.data = hasuraResponse;
					if ((!data.data || data.data.mails.length === 0) && insertData) {
						data.fetching = true;
						fetch('https://jsonplaceholder.typicode.com/comments')
							.then((response) => response.json())
							.then(async (json) => {
								await client(queries.insertMails, {
									mails: json.map((item) => ({ email: item.email }))
								});
								fetchData(false);
							});
					}
				})
				.catch((error) => {});
		} catch (error) {
			console.error('Error fetching data:', error);
			data.error.message = 'Error fetching data';
		}
	}

	onMount(async () => {
		await fetchData();
	});

	let activeTab = 'login';
	/**
	 * @param {string} tab
	 */
	function switchTab(tab) {
		activeTab = tab;
	}

	
	/**
	 * @param {any} event
	 */
	const handleLoginFormSubmit = async (event) => {
		event.preventDefault();

		const formData = {
			email: email,
			password: password
		};

		try {
			
		} catch (error) {
		}
	};
	
	/**
	 * @param {any} event
	 */
	const handleRegisterFormSubmit = async (event) => {
		event.preventDefault();

		const formData = {
			email: email,
			password: password,
			repassword: repassword
		};

		try {
			
		} catch (error) {
		}
	};
	
</script>

{#if data.fetching}
	<p>Veriler yükleniyor...</p>
{:else if data.error.message !== ''}
	<p>Hata oluştu: {data.error.message}</p>
{:else if data.data && data.data.mails.length > 0}
	<div class="flex min-h-screen">
		<div class="fixed w-[550px] h-screen hidden lg:block bg-cover bg-center bg-[url('/img2.jpg')]">
			<div class="flex items-center justify-center w-full h-full">
				<img src="/logo-dark.svg" class="object-cover w-[100px]" />
			</div>
		</div>

		<div class="ml-0 lg:ml-[550px] w-full h-screen bg-[#23394A]">
			<div class="flex items-center justify-center w-full h-full">
				<div class="text-white p-8 max-w-sm mx-auto rounded-lg">
					<h2 class="text-2xl font-bold mb-2">Get more things done with Loggin platform.</h2>
					<p class="mb-4">
						Access to the most powerful tool in the entire design and web industry.
					</p>
					<div class="flex justify-start mb-4">
						<span
							class="{activeTab === 'login' ? 'border-b-2 border-white' : ''} mr-4"
							on:click={() => switchTab('login')}>Login</span
						>
						<span
							class={activeTab === 'register' ? 'border-b-2 border-white' : ''}
							on:click={() => switchTab('register')}>Register</span
						>
					</div>
					{#if activeTab === 'login'}
						<form class="flex flex-col space-y-4" on:submit={handleLoginFormSubmit}>
							<input type="email" placeholder="E-mail Address" class="p-2 bg-[#445867] rounded" bind:value={email} />
							<input type="password" placeholder="Password" class="p-2 bg-[#445867] rounded" bind:value={password} />
							<div class="flex items-center">
								<input
									type="checkbox"
									id="remember"
									class="mr-2 rounded-lg bg-none w-[20px] h-[20px]"
								/>
								<label for="remember">Remember me</label>
							</div>
							<div class="flex justify-start space-x-2 mt-4">
								<button type="submit" class="bg-white py-2 rounded-md text-gray-800 font-bold p-10"
									>Login</button
								>
								<a href="#" class="self-end text-sm leading-[40px]">Forget password?</a>
							</div>
						</form>
					{:else if activeTab === 'register'}
						<form class="flex flex-col space-y-4" on:submit={handleRegisterFormSubmit}>
							<input type="email" placeholder="E-mail Address" class="p-2 bg-[#445867] rounded" bind:value={email} />
							<input type="password" placeholder="Password" class="p-2 bg-[#445867] rounded" bind:value={password} />
							<input type="password" placeholder="Re-Password" class="p-2 bg-[#445867] rounded" bind:value={repassword} />
							<div class="flex justify-start space-x-2 mt-4">
								<button type="submit" class="bg-white py-2 rounded-md text-gray-800 font-bold p-10"
									>Register</button
								>
								<a href="#" class="self-end text-sm leading-[40px]">Forget password?</a>
							</div>
						</form>
					{/if}
					<div class="flex justify-start space-x-2 mt-5 text-[9px]">
						<span class="mr-3">Or login with</span>
						<a href="javascript:;" class="font-bold">Facebook</a>
						<a href="javascript:;" class="font-bold">Google</a>
						<a href="javascript:;" class="font-bold">Linkedin</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<p>Veri bulunamadı.</p>
{/if}
