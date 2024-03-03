import type { ReactElement, ChangeEvent } from "react";
import { useState } from "react";

function Contact(): ReactElement {
	// TODO: Add state variables
	// HINT: Instead of implementing a state variable for each field, try storing it all in one
	// state variable. (Think of objects/dictionaries!)
	

	// TODO: Implement a function that updates the your state variable when a field's value changes
	// that takes a ChangeEvent as an argument.
	// The function should update properly update state with the new value of the approperiate field.
	

	// TODO: Add a function that calls `alert` with each field's value from your state variable.
	// This function should be called when the form is submitted.
	// HINT: On the form element, use the `onSubmit` prop to call this function.
	

	return (
		<>
			<p>Have a concern? Contact us with the form below:</p>
			<form>
				<label>First Name</label>
				<input 
					name="firstName" 
					type="text" 
				/>
				<br />
				<label>Last Name</label>
				<input 
					name="lastName" 
					type="text" 
				/>
				<br />
				<label>Email</label>
				<input 
					name="email" 
					type="text" 
				/>
				<br />
				<label>Message</label>
				<textarea 
					name="message" 
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default Contact;