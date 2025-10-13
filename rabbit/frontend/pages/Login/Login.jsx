import React from 'react';

const Login = () => {
	return (
		<section className="flex">
			<div className="w-full md:w-1/2 flex-col justify-center items-center p-8 md:p-12">
				<form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
					<div className="flex justify-center mb-6">
						<h2 className="text-2xl font-bold text-center mb-6">
							{' '}
							Hey there! 👋
						</h2>
						<p className="text-center mb-6">Enter your username and password</p>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
