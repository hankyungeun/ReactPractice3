// import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import '../css/common.css';
export default function List(){
    return(
        <>
            <Table bordered hover>
                <thead>
                    <tr>

                    <th>NO.</th>
                    <th>제목</th>
                    <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}