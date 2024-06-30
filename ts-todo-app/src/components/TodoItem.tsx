interface ItemProps {
  id: number;
  content: string;
  isToggle: boolean;
  onDeleted(id: number): void;
}

function TodoItem({ id, content, isToggle, onDeleted }: ItemProps) {
  return (
    <main>
      <div className="flex mb-10">
        {isToggle ? <button>완료됨</button> : <button>완료하기</button>}
        <p className="w-[200px] border ml-10 mr-10">{content}</p>
        <div className="buttonFrame">
          <button className="mr-10">수정</button>
          <button type="button" onClick={() => onDeleted(id)}>
            삭제
          </button>
        </div>
      </div>
    </main>
  );
}

export default TodoItem;
