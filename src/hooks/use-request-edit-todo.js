import { useState } from 'react';
import { REQUEST_URL } from '../const';

export const useRequestEditToDo = (refreshProducts, setRefreshProducts) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestEditToDo = async (id) => {
		const response = await fetch(`${REQUEST_URL}/${id}`);
		const toDo = await response.json();
		const currentStatus = toDo?.completed;

		fetch(`${REQUEST_URL}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: toDo.title,
				completed: !currentStatus,
			}),
		})
			.then(() => {
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsUpdating(false));
	};

	return { isUpdating, requestEditToDo };
};
