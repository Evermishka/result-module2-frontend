import { useState, useEffect } from 'react';
import { REQUEST_URL } from '../const';
import { SORTING } from '../const';

export const useRequestGetToDo = (refreshProducts, sorting, search) => {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const sortingParams =
		sorting === SORTING.NONE
			? {}
			: {
					_sort: 'title',
					_order: sorting,
				};

	const searchParams = search === '' ? {} : { q: search };

	const params = new URLSearchParams({ ...sortingParams, ...searchParams }).toString();

	const url = `${REQUEST_URL}${params ? '?' : ''}${params}`;

	useEffect(() => {
		setIsLoading(true);

		fetch(url)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodoList(loadedTodos);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [refreshProducts, url]);

	return { todoList, isLoading };
};
