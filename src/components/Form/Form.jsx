

const SimpleForm = () => {

    const handleInput  = e =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        // console.log('form')
    }
    return (
        <div>
            <form onSubmit={handleInput} >
                <input type="text" name="name" />
                <input type="text" name="email" />
                <br />
                <input type="submit"  value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;