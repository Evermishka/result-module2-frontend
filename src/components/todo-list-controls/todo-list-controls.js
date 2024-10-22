import styles from './todo-list-controls.module.css';
import { SORTING } from '../../const';

export const TodoListControls = ({ search, toDoSearchHandler, toDoSortHandler }) => {
	return (
		<div className={styles.controlsWrapper}>
			<div className={styles.search}>
				<input type="text" value={search} onChange={toDoSearchHandler}></input>
			</div>
			<div className={styles.sorting}>
				<button className={styles.sortingButton} name={SORTING.ASC} onClick={toDoSortHandler} />
				<button className={styles.sortingButton} name={SORTING.DESC} onClick={toDoSortHandler} />
			</div>
		</div>
	);
};
