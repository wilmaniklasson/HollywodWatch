const CreateCard = (props) => {
    return (
    <>
            <div className='moveCard'>
            <div className='imge'>
            <img src={props.imageURL} alt={props.title} />
            </div>
            <div className='info'>
                <p className='name'>{props.titel}</p>
                <p>{props.year}</p>
            </div>
            </div>
    </>
    )
}

export default CreateCard