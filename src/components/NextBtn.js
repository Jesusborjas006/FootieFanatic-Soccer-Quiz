const NextBtn = ({dispatch}) => {
  return (
    <button
          className="border p-2 px-4 absolute right-0 bottom-[-3.5rem] rounded-md"
          onClick={() => dispatch({ type: "incrementIndex" })}
        >
          Next
        </button>
  )
}

export default NextBtn