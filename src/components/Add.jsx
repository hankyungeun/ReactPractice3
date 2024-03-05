import '../css/common.css';
export default function Add(){
    return(
        <form>
            <div>
                <label>제목:</label>
                <input type="text" placeholder="내용을 입력해주세요"/>
            </div>
    
            <div>
                <label>내용:</label>
                <textarea type="text" placeholder="내용을 입력해주세요"
                    rows={10}/>
            </div>
            <div className='btn-area'>
                <button>추가</button>
            </div>
        </form>
    );
}