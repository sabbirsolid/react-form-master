import PropTypes from 'prop-types'

const ReusableForm = ({formTitle, buttonTitle, handleSubmit}) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            <h1>{formTitle}</h1>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" /> <br />
                <input type="email" name="email" /> <br />
                <input type="password" name="password" />
                <br />
                <input type="submit"  value={buttonTitle} />
            </form>
        </div>
    );
};

ReusableForm.propTypes = {
    formTitle: PropTypes.string,
    buttonTitle: PropTypes.string,
    handleSubmit: PropTypes.func
}
export default ReusableForm;