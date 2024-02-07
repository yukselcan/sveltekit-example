<script>
	import '../global.css';
	let activeTab = 'login';

	/**
	 * @param {string} tab
	 */
	function switchTab(tab) {
		activeTab = tab;
	}
</script>

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
				<p class="mb-4">Access to the most powerful tool in the entire design and web industry.</p>
				<div class="flex justify-start mb-4">
					<span class="{activeTab === 'login' ? 'border-b-2 border-white' : ''} mr-4" on:click={() => switchTab('login')}>Login</span>
					<span class="{activeTab === 'register' ? 'border-b-2 border-white' : ''}" on:click={() => switchTab('register')}>Register</span>
				</div>
				{#if activeTab === 'login'}
					<form class="flex flex-col space-y-4">
						<input type="email" placeholder="E-mail Address" class="p-2 bg-[#445867] rounded" />
						<input type="password" placeholder="Password" class="p-2 bg-[#445867] rounded" />
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
					<form class="flex flex-col space-y-4">
						<input type="email" placeholder="E-mail Address" class="p-2 bg-[#445867] rounded" />
						<input type="password" placeholder="Password" class="p-2 bg-[#445867] rounded" />
						<input type="password" placeholder="Re-Password" class="p-2 bg-[#445867] rounded" />
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
