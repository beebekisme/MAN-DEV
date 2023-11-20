<script>
	import { enhance, applyAction } from '$app/forms';
	
	export let data;
	export let form;

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
	<form action="?/create" method="POST"  use:enhance>
			<label class="label">
				<span>Name
					<div class="badge badge-secondary">*</div>	
					<input type="text" 
							name="name" 
							placeholder="Enter your full name here..." 
							class="input input-bordered w-full max-w-xs"
							/>
				</span>
						
			</label>
			
			<label class="label">
				<span>Age <div class="badge badge-secondary">*</div>	
					<input type="number" 
							name="age" 
							placeholder="Enter your age here..." 
							class="input input-bordered w-full max-w-xs" 
							
							/>
				</span>
				</label>
	
			<label class="label">
				<span>Date of Birth<div class="badge badge-secondary">*</div> 
					<input
					type="date"
					class="input input-bordered w-full max-w-xs"
					name="dateofbirth"
				/>
				</span>
			</label>

			<label class="label">
				<span>School's Name <div class="badge badge-secondary">*</div> 
					<input type="text" 
						name="schoolname" 
						placeholder="Enter your school's name here..." 
						class="input input-bordered w-full max-w-xs" 
					/>
				</span>
				
			</label>
			
			<label class="label">
				<span>Address <div class="badge badge-secondary">*</div> 
					<input type="text" 
						name="address" 
						placeholder="Enter your address here..." 
						class="input input-bordered w-full max-w-xs" 
					/>
				</span>
				
			</label>
			
			<label class="label">
				<span>Province Name<div class="badge badge-secondary">*</div> 
					<input type="text" 
						name="province" 
						placeholder="Enter your province's name here..." 
						class="input input-bordered w-full max-w-xs" 
					/>
				</span>
				
			</label>

			<label class="label">
				<span>Email <div class="badge badge-secondary">*</div> 
				<input class="input input-bordered w-full max-w-xs" 
					name="email" 
					type="email" 
					placeholder="Enter email address..." 
					/>
				</span>
				
			</label>

			<label class="label">
				<span>Phone Number <div class="badge badge-secondary">*</div> 
					<input class="input input-bordered w-full max-w-xs" 
					name="phone" 
					type="tel" 
					placeholder="Enter phone number..." 
					/>
				</span>
			
			</label>
			
			<label class="label">
				<span>District <div class="badge badge-secondary">*</div> 
					<input class="input input-bordered w-full max-w-xs" 
					name="district" 
					type="text" 
					placeholder="Enter Your District Name..." 
					/>	
				</span>
			
			</label>

			<div class="flex items-center justify-center ">
			<button type='submit' class="btn btn-outline btn-success">Generate Registration Form</button>
			</div>
		</form>
	</div>
	</div>
</div>