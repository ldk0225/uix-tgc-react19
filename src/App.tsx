import {useState, useTransition} from "react";

const updateName = (name:string):Promise<boolean> => {
return new Promise((resolve) => {
  setTimeout(() => {
  resolve(true);
  }, 3000)
})
}

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit =  () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
      }
    });
  };

  return (
      <div>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={handleSubmit} disabled={isPending}>
          Update
        </button>
        {error && <p>{error}</p>}
      </div>
  );
}

export default App
