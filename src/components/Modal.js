function Modal({title}) {
	return (
		<div className='modal'>
			<p>{title}</p>
			<button className='btn btn--alt'>Cancel</button>
			<button className='btn'>Confirm</button>
		</div>
	)
}

export default Modal
