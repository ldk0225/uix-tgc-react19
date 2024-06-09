import { useActionState, useRef } from "react";
import {useFormStatus} from 'react-dom'


/**
 * https://react.dev/reference/react-dom/hooks/useFormStatus
 */

const updateName = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 3000)
    })
}

function DesignButton() {
    const {pending} = useFormStatus();
    return <button type="submit" disabled={pending} >
        버튼에서 맥락을 뺴올수있나?
    </button>
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
            <DesignButton />
            {error && <p>submit 완료 or 에러 표출</p>}
        </form>
    );
}

export default App