<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from "./$types"
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	
	export let data: PageData

	const { form, errors, enhance, constraints } = superForm(data.form, {
		taintedMessage: "Are you sure you want to leave this page?"
	});
	
</script>

<div class= "card card-side bg-base-100 shadow-xl ">
	
	<div class = "card-body ">
	<div class="transition duration-250 ease-in-outransform hover:-translate-y-1 hover:scale-60">
		<a class="logo-item " href="https://www.mathassociationnepal.org.np/" target="_blank">
			<span></span>
			<span>Mathematical Association of Nepal</span>
			
		</a>
	</div>
	<div class="logo-cloud grid-cols-2 lg:!grid-cols-2 gap-2 ">
		<a class="logo-item card-hover transition duration-250 ease-in-outransform hover:-translate-y-1 hover:scale-60" href="https://discord.gg/MVA6ABJzMS" target="_blank" >
			<span> <i class="fa-brands fa-discord"></i> </span>
			<span>Discord</span>
		</a>
		<a class="logo-item card-hover transition duration-250 ease-in-outransform hover:-translate-y-1 hover:scale-60" href="https://www.facebook.com/manepal.org.np" target="_blank">
			<span><i class="fa-brands fa-facebook"></i></span>
			<span>Facebook</span>
		</a>
		
	</div>
	
	<div >	
	<form action="?/" method="POST" class="space-y-2" use:enhance>
			<label class="label">
				<span>Name
					<div class="badge badge-secondary">*</div>	
				</span>
				<input type="text" 
						name="name" 
						placeholder="Enter your full name here..." 
						class="input input-bordered w-full max-w-xs"
						bind:value={$form.name} 
						{...$constraints.name}
						/>
						
			</label>
			
			<label class="label">
				<span>Age <div class="badge badge-secondary">*</div>	</span>
				<input type="number" 
						name="age" 
						placeholder="Enter your age here..." 
						class="input input-bordered w-full max-w-xs" 
						bind:value={$form.age} 
						{...$constraints.age}
						/>
			
				</label>
	
			<label class="label">
				<span>Date of Birth<div class="badge badge-secondary">*</div> </span>
				<input
					type="date"
					class="input input-bordered w-full max-w-xs"
					name="dateOfBirth"
					bind:value={$form.dateOfBirth}
					{...$constraints.dateOfBirth}
				/>
				{#if $errors.dateOfBirth}
					<p class="text-error">{$errors.dateOfBirth}</p>
				{/if}
			</label>

			<label class="label">
				<span>School's Name <div class="badge badge-secondary">*</div> </span>
				<input type="text" 
						name="schoolname" 
						placeholder="Enter your school's name here..." 
						class="input input-bordered w-full max-w-xs" 
						bind:value={$form.schoolName} 
						{...$constraints.schoolName}

						/>
				
					</label>

			
			<label class="label">
				<span>Email <div class="badge badge-secondary">*</div> </span>
				<input class="input input-bordered w-full max-w-xs" 
						name="email" 
						type="email" 
						placeholder="Enter email address..." 
						bind:value={$form.email} 
						{...$constraints.email}

						/>
				
			</label>

			<label class="label">
				<span>Phone Number <div class="badge badge-secondary">*</div> </span>
			<input class="input input-bordered w-full max-w-xs" 
					name="phone" 
					type="tel" 
					placeholder="Enter phone number..." 
					bind:value={$form.phoneNo}
					{...$constraints.phoneNo}

					/>
			</label>
			
			<div class="flex items-center justify-center gap-2 ">
			<span>Select Your Province <div class="badge badge-secondary">*</div> </span>
			</div>
			<label for="region" class="label w-full max-w-xs ">
				<RadioGroup>
					<RadioItem bind:group={$form.province} name="justify" value={"Koshi"}>Koshi</RadioItem>
					<RadioItem bind:group={$form.province} name="justify" value={"Madhesh"}>Madhesh</RadioItem>
					<RadioItem bind:group={$form.province} name="justify" value={"Bagmati"}>Bagmati</RadioItem>
					<RadioItem bind:group={$form.province} name="justify" value={"Gandaki"}>Gandaki</RadioItem>
					<RadioItem bind:group={$form.province} name="justify" value={"Lumbini"}>Lumbini</RadioItem>
					<RadioItem bind:group={$form.province} name="justify" value={"Karnali"}>Karnali</RadioItem>
					<RadioItem bind:group={$form.province} name="justify" value={"Sudurpashchim"}>Sudurpaschim</RadioItem>
				</RadioGroup>
			</label>
			
			<label class="label">
				<span>District <div class="badge badge-secondary">*</div> </span>
			<input class="input input-bordered w-full max-w-xs" 
					name="district" 
					type="text" 
					placeholder="Enter Your District Name..." 
					bind:value={$form.district} 
					{...$constraints.district}

					/>
						
			</label>
			<div class="flex items-center justify-center ">
			<button type='submit' class="btn btn-outline btn-success">Generate Registration Form</button>
			</div>
		</form>
	</div>
	</div>
</div>

<SuperDebug data={$form} />
