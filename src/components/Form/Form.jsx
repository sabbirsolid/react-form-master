

const SimpleForm = () => {

    const handleInput  = e =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleInput} >
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="password" name="password" />
                <br />
                <input type="submit"  value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;