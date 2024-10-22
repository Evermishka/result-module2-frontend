import { useState } from 'react';
import { useRequestGetToDo, useRequestEditToDo, useRequestDeleteToDo } from '../hooks';
import { SORTING } from '../const';

export const useTodoList = ({ refreshProducts, setRefreshProducts }) => {
	const [sorting, setSorting] = useState(SORTING.NONE);
	const [search, setSearch] = useState('');

	const { todoList, isLoading } = useRequestGetToDo(refreshProducts, sorting, search);

	const { isUpdating, requestEditToDo } = useRequestEditToDo(
		refreshProducts,
		setRefreshProducts,
	);
	const { isDeleting, requestDeleteToDo } = useRequestDeleteToDo(
		refreshProducts,
		setRefreshProducts,
	);

	const toDoSortHandler = (event) => {
		setSorting(event.target.name);
	};

	const toDoSearchHandler = (event) => {
		setSearch(event.target.value);
	};

	const toDoEditHandler = (event) => {
		requestEditToDo(event.target.value);
	};

	const toDoDeleteHandler = (event) => {
		requestDeleteToDo(event.target.value);
	};

	return {
		search,
		todoList,
		isLoading,
		isUpdating,
		isDeleting,
		toDoSortHandler,
		toDoSearchHandler,
		toDoEditHandler,
		toDoDeleteHandler,
	};
};
