// JSX - Javascript XML
const book = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value
    
    if (option) {
        book.options.push(option)
        e.target.elements.option.value = ''
        console.log(book)
        render() 
    }
}

const onRemoveAll = () => {
    book.options = []
    render()
    console.log(book)
}

const onMakeDesicision = () => {
    const randomNum = Math.floor(Math.random() * book.options.length)
    const option = book.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>{book.title}</h1>
            {book.subtitle && <p>{book.subtitle}</p>}
            <p>{book.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={book.options.length === 0} onClick={onMakeDesicision}>What shoud I do ?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    book.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>

        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

render()