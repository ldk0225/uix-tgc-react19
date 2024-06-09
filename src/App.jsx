import { useActionState, useRef } from "react";

/**
 * https://github.com/facebook/react/pull/28491
 */

const updateName = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 3000)
    })
}

function App() {
    const ref = useRef(null);
    const [error, action, isPending] = useActionState( async (previousState, formData) => {
            const error = await updateName(formData.get("name"));
            if (error) {
                return error;
            }
            return null;
        },
        null,);


    return (
        <form action={action}>
            <input type="text" name="name" ref={ref}/>
            <button type="submit" disabled={isPending} >Update</button>
            {error && <p>submit 완료 or 에러 표출</p>}
        </form>
    );
}

export default App