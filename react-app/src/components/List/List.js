import styles from './List.module.scss';
import Column from '../Column/Column';
import { useState } from 'react';
import { useEffect } from 'react';
import shortid from 'shortid';

const List = () => {

    const [value, setValue] = useState('abc');
    const [columns, setColumns] = useState([
        { id: 1, title: 'Books', icon: 'book' },
        { id: 2, title: 'Movies', icon: 'film' },
        { id: 3, title: 'Games', icon: 'gamepad' }
    ]);
    const handleSubmit = e => {
		e.preventDefault();
		setColumns([...columns, { id: shortid(), title: value }]);
		setValue('');
};
    // useEffect(() => {

    //     	setTimeout(() => {
    //       		setColumns([...columns, { id: 4, title: 'Test column'}]);
    //     	}, 2000);

    // }, []);
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}> Thinks to do <span>soon</span></h2>
            </header>
            <p className={styles.description}>"Interesting things I want to check out"</p>

            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
            </section>
            <form>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                <button>Add column</button>

            </form>
        </div>
    );
};

export default List;