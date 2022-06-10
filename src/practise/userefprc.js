import { useCallback, useRef } from "react";

export default function FormyRework() {
    // Create a list of refs for the corresponding inputs
    const firstNameInputElement = useRef();
    const lastNameInputElement = useRef();
    const emailInputElement = useRef();
    const commentsInputElement = useRef();
    const isFriendlyInputElement = useRef();
    const umemployedInputElement = useRef();
    const partInputElement = useRef();
    const fullInputElement = useRef();
    const favColourInputElement = useRef();
    // Checks which radiobutton is checked and updates the value accordingly
    function whichChecked(event) {
        if (umemployedInputElement.current?.checked){
            return "Unemplyed"
        } else if (partInputElement.current?.checked) {
            return "part-time"
        } else if (fullInputElement.current?.checked){
            return "full-time"
        }
    }
    // Handler that places the values of the inputs into an abject
    const handleSubmit = useCallback(
        () => (event) => {
            event.preventDefault()

            const data = {
                firstName: firstNameInputElement.current?.value,
                lastName: lastNameInputElement.current?.value,
                email: emailInputElement.current?.value,
                comments: commentsInputElement.current?.value,
                isFriendly: isFriendlyInputElement.current?.checked,
                employment: whichChecked(event),
                favColour: favColourInputElement.current?.value,
            }

            console.log(data)
        }, []);

    return (
        <form onSubmit={handleSubmit()}>
            <input
                type="text"
                placeholder="First Name"
                ref={firstNameInputElement}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                ref={lastNameInputElement}
                name="lastName"
            />
            <input
                type="email"
                placeholder="Email"
                ref={emailInputElement}
                name="email"
            />
            <textarea
                type="text"
                placeholder="Comments"
                ref={commentsInputElement}
                name="comments"
            />
            <input
                type="checkbox"
                defaultChecked={true}
                id="isFriendly"
                ref={isFriendlyInputElement}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    ref={umemployedInputElement}
                />
                <label htmlFor="unemployed">unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    ref={partInputElement}
                />
                <label htmlFor="part-time">Part-Time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    ref={fullInputElement}
                    defaultChecked
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor="favColour">What is your favourite colour?</label>
            <br />
            <select
                id="favColour"
                ref={favColourInputElement}
                name="favColour"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}