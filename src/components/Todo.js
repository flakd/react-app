import {useState} from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

const Todo = ({title}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleDelete = () => {
		console.log('I clicked on the DELETE button on the "%s" Todo', title)
		// show the state where the Modal should be open
		setIsModalOpen(true)
	}
	return (
		<div className='card'>
			<h2>{title}</h2>
			<div className='actions'>
				<button
					className='btn'
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
			{isModalOpen && (
				<>
					<Modal title='{title}' />
					<Backdrop />
				</>
			)}
		</div>
	)
}

export default Todo
