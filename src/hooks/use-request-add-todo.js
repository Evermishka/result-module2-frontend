import { useState } from 'react';
import { REQUEST_URL } from '../const';

export const useRequestAddToDo = (refreshProducts, setRefreshProducts) => {
	const [toDo, setTodo] = useState('');
	const [isCreating, setIsCreating] = useState(false);

	const requestAddToDo = (title) => {
		setIsCreating(true);

		fetch(REQUEST_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title,
				completed: false,
			}),
		})
			.then(() => {
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => {
				setIsCreating(false);
				setTodo('');
			});
	};

	return { toDo, setTodo, isCreating, requestAddToDo };
};
