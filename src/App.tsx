import {useState} from "react";

const updateName = (name:string):Promise<{data: string}> => {
return new Promise((resolve) => {
  setTimeout(() => {
  resolve({data: name});
  }, 3000)
})
}

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const data = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    }

    console.log(data)
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
