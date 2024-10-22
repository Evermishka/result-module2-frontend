import { useState } from 'react';
import { REQUEST_URL } from '../const';

export const useRequestDeleteToDo = (refreshProducts, setRefreshProducts) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteToDo = (id) => {
		setIsDeleting(true);

		fetch(`${REQUEST_URL}/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsDeleting(false));
	};

	return { isDeleting, requestDeleteToDo };
};
