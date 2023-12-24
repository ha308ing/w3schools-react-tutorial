import React from "react";

export function MyForm() {
    const [values, setValues] = React.useState({});

    function handleSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(values, null, 2));
    }

    function handleChange(event) {
        setValues({ ...values, [event.target.id]: event.target.value });
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="username" className="label">
                Username:{" "}
            </label>
            <div className="control">
                <input id="username" className="input" onChange={handleChange} value={values?.username ?? ""} />
            </div>

            <br />

            <label htmlFor="password" className="label">
                Password:{" "}
            </label>
            <div className="control">
                <input id="password" className="input" onChange={handleChange} value={values?.password ?? ""} />
            </div>
            <br />

            <label htmlFor="bio" className="label">
                Bio:{" "}
            </label>
            <div className="control">
                <textarea id="bio" className="textarea" onChange={handleChange} value={values?.bio ?? ""} />
            </div>
            <br />

            <div className="field has-addons">
                <div className="control">
                    <div className="select">
                        <select id="model" value={values?.model ?? ""} onChange={handleChange}>
                            <option value="Ford">Ford</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                        </select>
                    </div>
                </div>
                <div className="control">
                    <button type="submit" className="button is-primary">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}
