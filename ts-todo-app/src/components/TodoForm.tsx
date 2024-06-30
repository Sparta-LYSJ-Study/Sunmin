interface InputProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  inputValue: string;
}

function TodoForm({ onChange, onSubmit, inputValue }: InputProps) {
  return (
    <main>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          value={inputValue}
          onChange={(e) => onChange(e)}
          className="border w-[300px] h-10 p-5 mr-10 rounded-[5px]"
        />
        <button type="submit">등록하기</button>
      </form>
    </main>
  );
}

export default TodoForm;
