/* eslint-disable react/jsx-key */
export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl font-bold text-active mt-20">
				Recipe Search
			</h1>
			<h2 className="text-primary text-2xl font-light mt-5">
				Search recipes from all over the world.
			</h2>

			<form
				className="sm:mx-auto mt-20 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
					getRecipes(); // Trigger getRecipes function when search button is clicked
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 border-2 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a recipe"
					onChange={e => {
						setKeyword(e.target.value);
						setResponse(null);
					}}
				/>
				<div className="mt-5 flex sm:flex-row flex-col justify-start">
					<div className="sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Diet
						</label>
						<select
							className="mt-1 flex w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							onChange={e => setDiet(e.target.value)}
						>
							{[
								'none',
								'pescetarian',
								'lacto vegetarian',
								'ovo vegetarian',
								'vegan',
								'vegetarian'
							].map(diet => {
								return <option value={diet}>{diet}</option>;
							})}
						</select>
					</div>
					<div className="sm:ml-10 sm:w-1/3 w-full">
						<label className="block text-primary text-sm">
							Exclude Ingredients
						</label>
						<input
							type="text"
							className="mt-1 w-full rounded-lg px-5 py-3 text-base text-background font-bold focus:outline-none"
							placeholder="cocunut"
							onChange={e => setExclude(e.target.value)}
						></input>
					</div>
				</div>
				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
					type="submit"
				>
					Search
				</button>
			</form>
		</div>

	);
}