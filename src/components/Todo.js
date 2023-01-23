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
			{/* conditionally render Modal and Backdrop */}
			{isModalOpen && (
				<>
					{/* I'll optionally pass in a title prop to Modal */}
					<Modal title={'DELETE: "' + title + '". Are you sure you?'} />
					<Backdrop />
				</>
			)}
		</div>
	)
}

export default Todo
