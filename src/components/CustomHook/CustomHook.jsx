import useInputState from "./CHook";



const CustomHook = () => {
    const nameState = useInputState('ssss')
    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input {...nameState} type="text" name="name" />
                <input type="email" name="email" />
                <input type="password" name="password" />
                <br />
                <input type="submit"  value="Submit" />
            </form>
        </div>
    );
};

export default CustomHook;