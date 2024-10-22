import styles from './todo-add-form.module.css';
import { useRequestAddToDo } from '../../hooks';

export const TodoAddForm = ({ refreshProducts, setRefreshProducts }) => {
	const { toDo, setTodo, isCreating, requestAddToDo } = useRequestAddToDo(
		refreshProducts,
		setRefreshProducts,
	);
	
    const toDoAddOnChangeHandler = (event) => {
		setTodo(event.target.value);
	};

	const toDoAddSubmitHandler = (event) => {
		event.preventDefault();
		requestAddToDo(toDo);
	};

	return (
		<form className={styles.todoAddForm} onSubmit={toDoAddSubmitHandler}>
			<input
				className={styles.todoAddInput}
				type="text"
				name="newToDo"
				value={toDo}
				onChange={toDoAddOnChangeHandler}
			/>
			<button className={styles.todoAddButton} type="submit" disabled={isCreating}>
				Добавить задачу
			</button>
		</form>
	);
};
